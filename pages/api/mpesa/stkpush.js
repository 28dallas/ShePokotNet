import { stkPush } from '../../../lib/mpesa'
import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { amount, phone } = req.body || {}
  if (!amount || !phone) return res.status(400).json({ error: 'Missing amount or phone' })

  try {
    // create a local transaction record first using Prisma
    const tx = await prisma.transaction.create({
      data: { provider: 'mpesa', amount: Number(amount), phone }
    })

    const result = await stkPush({ amount, phone, accountReference: `donation_${tx.id}` })

    // save returned ids to transaction
    await prisma.transaction.update({ where: { id: tx.id }, data: { MerchantRequestID: result.MerchantRequestID || null, CheckoutRequestID: result.CheckoutRequestID || null } })

    return res.status(200).json({ ok: true, transaction: tx, data: result })
  } catch (err) {
    console.error('STK Push error', err)
    return res.status(500).json({ ok: false, error: err.message })
  }
}
