// Safaricom will POST transaction results to this endpoint. Verify and store appropriately.
import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  try {
    const payload = req.body
    console.log('M-Pesa callback received:', JSON.stringify(payload))

    // Basic validation: expected structure for STK Push callback
    const stkCallback = payload?.Body?.stkCallback
    if (!stkCallback) {
      console.warn('Callback missing stkCallback body')
      return res.status(400).json({ error: 'Invalid callback structure' })
    }

    const { MerchantRequestID, CheckoutRequestID, ResultCode, ResultDesc, CallbackMetadata } = stkCallback

    // Find matching transaction by CheckoutRequestID or MerchantRequestID
    let tx = null
    if (CheckoutRequestID) tx = await prisma.transaction.findFirst({ where: { CheckoutRequestID: CheckoutRequestID } })
    if (!tx && MerchantRequestID) tx = await prisma.transaction.findFirst({ where: { MerchantRequestID: MerchantRequestID } })

    const update = { ResultCode: ResultCode ? Number(ResultCode) : null, ResultDesc }
    if (CallbackMetadata && CallbackMetadata.Item) {
      // convert CallbackMetadata into key: value map if possible
      const meta = {}
      for (const item of CallbackMetadata.Item) {
        if (item.Name && item.Value !== undefined) meta[item.Name] = item.Value
      }
      update.CallbackMetadata = meta
    }

    if (tx) {
      // verify amount matches if available
      if (update.CallbackMetadata && update.CallbackMetadata.Amount) {
        const reportedAmount = Number(update.CallbackMetadata.Amount)
        if (reportedAmount !== Number(tx.amount)) {
          console.warn('Amount mismatch for transaction', tx.id, tx.amount, reportedAmount)
          update.note = 'amount_mismatch'
        }
      }

      if (Number(ResultCode) === 0) update.status = 'completed'
      else update.status = 'failed'

      await prisma.transaction.update({ where: { id: tx.id }, data: update })
    } else {
      // no matching local tx found; create a record for manual reconciliation
      await prisma.transaction.create({ data: { provider: 'mpesa', amount: 0, CheckoutRequestID: CheckoutRequestID || null, MerchantRequestID: MerchantRequestID || null, status: 'callback_received', ResultCode: update.ResultCode, ResultDesc: update.ResultDesc, CallbackMetadata: update.CallbackMetadata || null } })
    }

    // Acknowledge receipt
    res.status(200).json({ ResultCode: 0, ResultDesc: 'Accepted' })
  } catch (err) {
    console.error('Callback handler error', err)
    res.status(500).end()
  }
}
