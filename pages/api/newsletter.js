import { promises as fs } from 'fs'
import path from 'path'

const DB_PATH = path.join(process.cwd(), 'she-pokot-site-data', 'newsletter.json')

async function ensureDb() {
  const dir = path.dirname(DB_PATH)
  await fs.mkdir(dir, { recursive: true })
  try {
    await fs.access(DB_PATH)
  } catch {
    await fs.writeFile(DB_PATH, JSON.stringify({ subscriptions: [] }, null, 2))
  }
}

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { email, source = 'website' } = req.body || {}
  if (!email || !validEmail(email)) return res.status(400).json({ error: 'Valid email is required' })

  try {
    await ensureDb()
    const raw = await fs.readFile(DB_PATH, 'utf8')
    const db = JSON.parse(raw)

    const existing = db.subscriptions.find((item) => item.email.toLowerCase() === email.toLowerCase())
    if (existing) return res.status(200).json({ ok: true, message: 'Already subscribed' })

    db.subscriptions.push({
      id: `sub_${Date.now()}`,
      email,
      source,
      createdAt: new Date().toISOString()
    })
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2))
    return res.status(200).json({ ok: true })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}
