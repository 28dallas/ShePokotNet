import Stripe from 'stripe'
import prisma from '../../../lib/prisma'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2022-11-15' })

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { amount } = req.body || {}
  if (!amount) return res.status(400).json({ error: 'Missing amount' })

  try {
    // create a DB transaction record
    const tx = await prisma.transaction.create({ data: { provider: 'stripe', amount: Number(amount), status: 'pending' } })

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [{ price_data: { currency: 'usd', product_data: { name: 'Donation to She Pokot Network' }, unit_amount: Math.round(Number(amount) * 100) }, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donate/cancel`,
      metadata: { transactionId: tx.id }
    })

    // save session id
    await prisma.transaction.update({ where: { id: tx.id }, data: { stripeSessionId: session.id } })

    res.status(200).json({ ok: true, sessionId: session.id })
  } catch (err) {
    console.error('Stripe create session error', err)
    res.status(500).json({ error: err.message })
  }
}
