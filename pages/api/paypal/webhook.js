import prisma from '../../../lib/prisma'

// Note: For full PayPal webhook verification, implement verification using PayPal's SDK and webhook-id.
// This endpoint accepts PayPal webhooks and updates transaction status when an order is captured.

export default async function handler(req, res) {
  try {
    const event = req.body
    // Basic handling for order capture
    if (event.event_type === 'CHECKOUT.ORDER.APPROVED' || event.event_type === 'PAYMENT.CAPTURE.COMPLETED') {
      const resource = event.resource
      const orderId = resource.id || resource.supplementary_data?.related_ids?.order_id
      if (orderId) {
        const tx = await prisma.transaction.findFirst({ where: { paypalOrderId: orderId } })
        if (tx) {
          await prisma.transaction.update({ where: { id: tx.id }, data: { status: 'completed' } })
        }
      }
    }
    res.status(200).json({ received: true })
  } catch (err) {
    console.error('PayPal webhook error', err)
    res.status(500).end()
  }
}
