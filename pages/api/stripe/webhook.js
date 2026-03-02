import Stripe from 'stripe'
import prisma from '../../../lib/prisma'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2022-11-15' })

export const config = {
  api: {
    bodyParser: {
      raw: true,
    },
  },
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const sig = req.headers['stripe-signature']
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  let event
  try {
    const buf = typeof req.body === 'string' ? req.body : JSON.stringify(req.body)
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret)
  } catch (err) {
    console.error('Stripe webhook signature verification failed.', err.message)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  try {
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object
      const txId = session.metadata?.transactionId
      if (txId) {
        await prisma.transaction.update({ where: { id: txId }, data: { status: 'completed' } })
      }
    }
    res.status(200).json({ received: true })
  } catch (err) {
    console.error('Stripe webhook handling error', err)
    res.status(500).end()
  }
}
