const ENV = process.env.MPESA_ENV === 'production' ? 'production' : 'sandbox'

function baseUrl() {
  if (ENV === 'production') return 'https://api.safaricom.co.ke'
  return 'https://sandbox.safaricom.co.ke'
}
async function getOAuthToken() {
  const consumerKey = process.env.MPESA_CONSUMER_KEY
  const consumerSecret = process.env.MPESA_CONSUMER_SECRET
  if (!consumerKey || !consumerSecret) throw new Error('Missing MPESA consumer credentials')

  const url = `${baseUrl()}/oauth/v1/generate?grant_type=client_credentials`
  const basic = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64')

  const res = await fetch(url, {
    method: 'GET',
    headers: { Authorization: `Basic ${basic}` }
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error('MPESA OAuth error: ' + text)
  }
  const data = await res.json()
  return data.access_token
}

function formatPhone(msisdn) {
  // Normalize to 2547XXXXXXXX (Kenya format)
  let p = msisdn.trim()
  if (p.startsWith('+')) p = p.slice(1)
  if (p.startsWith('0')) p = '254' + p.slice(1)
  if (p.startsWith('7')) p = '254' + p
  return p
}

function timestampNow() {
  const d = new Date()
  const yyyy = d.getFullYear()
  const MM = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  const hh = String(d.getHours()).padStart(2, '0')
  const mm = String(d.getMinutes()).padStart(2, '0')
  const ss = String(d.getSeconds()).padStart(2, '0')
  return `${yyyy}${MM}${dd}${hh}${mm}${ss}`
}

export async function stkPush({ amount, phone, accountReference = 'Donation', transactionDesc = 'She Pokot Network Donation' }) {
  const token = await getOAuthToken()
  const url = `${baseUrl()}/mpesa/stkpush/v1/processrequest`

  const shortcode = process.env.MPESA_SHORTCODE
  const passkey = process.env.MPESA_PASSKEY
  const callbackUrl = process.env.MPESA_CALLBACK_URL
  if (!shortcode || !passkey || !callbackUrl) throw new Error('Missing MPESA_SHORTCODE, MPESA_PASSKEY or MPESA_CALLBACK_URL')

  const timestamp = timestampNow()
  const password = Buffer.from(shortcode + passkey + timestamp).toString('base64')

  const msisdn = formatPhone(phone)

  const body = {
    BusinessShortCode: shortcode,
    Password: password,
    Timestamp: timestamp,
    TransactionType: 'CustomerPayBillOnline',
    Amount: Number(amount),
    PartyA: msisdn,
    PartyB: shortcode,
    PhoneNumber: msisdn,
    CallBackURL: callbackUrl,
    AccountReference: accountReference,
    TransactionDesc: transactionDesc
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })

  const data = await res.json()
  if (!res.ok) {
    throw new Error('STK Push error: ' + JSON.stringify(data))
  }
  return data
}
