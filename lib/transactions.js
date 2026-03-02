import { promises as fs } from 'fs'
import path from 'path'

const DB_PATH = path.join(process.cwd(), 'she-pokot-site-data', 'transactions.json')

async function ensureDb() {
  const dir = path.dirname(DB_PATH)
  try {
    await fs.mkdir(dir, { recursive: true })
  } catch (e) {}
  try {
    await fs.access(DB_PATH)
  } catch (e) {
    await fs.writeFile(DB_PATH, JSON.stringify({ transactions: [] }, null, 2))
  }
}

export async function readAll() {
  await ensureDb()
  const txt = await fs.readFile(DB_PATH, 'utf8')
  return JSON.parse(txt)
}

export async function writeAll(data) {
  await ensureDb()
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2))
}

export async function createTransaction(tx) {
  const db = await readAll()
  const id = 'tx_' + Date.now() + '_' + Math.floor(Math.random()*1000)
  const record = { id, status: 'initiated', createdAt: new Date().toISOString(), ...tx }
  db.transactions.push(record)
  await writeAll(db)
  return record
}

export async function updateTransactionByField(field, value, patch) {
  const db = await readAll()
  const idx = db.transactions.findIndex(t => t[field] === value)
  if (idx === -1) return null
  db.transactions[idx] = { ...db.transactions[idx], ...patch, updatedAt: new Date().toISOString() }
  await writeAll(db)
  return db.transactions[idx]
}

export async function findTransactionByField(field, value) {
  const db = await readAll()
  return db.transactions.find(t => t[field] === value) || null
}
