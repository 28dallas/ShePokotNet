import { promises as fs } from 'fs'
import path from 'path'

const DB_PATH = path.join(process.cwd(), 'she-pokot-site-data', 'contact-messages.json')

async function ensureDb() {
  const dir = path.dirname(DB_PATH)
  await fs.mkdir(dir, { recursive: true })
  try {
    await fs.access(DB_PATH)
  } catch {
    await fs.writeFile(DB_PATH, JSON.stringify({ messages: [] }, null, 2))
  }
}

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, email, subject, message, website = '' } = req.body || {}
  if (website) return res.status(400).json({ error: 'Spam detected' })
  if (!name || !email || !subject || !message) return res.status(400).json({ error: 'All fields are required' })
  if (!validEmail(email)) return res.status(400).json({ error: 'Valid email is required' })

  try {
    await ensureDb()
    const raw = await fs.readFile(DB_PATH, 'utf8')
    const db = JSON.parse(raw)
    db.messages.push({
      id: `msg_${Date.now()}`,
      name,
      email,
      subject,
      message,
      createdAt: new Date().toISOString()
    })
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2))
    return res.status(200).json({ ok: true })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}
