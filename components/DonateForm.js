import { useState } from 'react'
import Link from 'next/link'

export default function DonateForm({ presetAmounts = [500, 1000, 2500, 5000, 10000] }) {
  const [phone, setPhone] = useState('')
  const [amount, setAmount] = useState(5000)
  const [customAmount, setCustomAmount] = useState('')
  const [isCustom, setIsCustom] = useState(false)
  const [status, setStatus] = useState(null)
  const [errors, setErrors] = useState({})

  // Preset amounts with impact descriptions
  const amounts = [
    { value: 1500, label: 'KSH 1,500', impact: 'Dignity Kit for a Girl', usd: '~$12' },
    { value: 5000, label: 'KSH 5,000', impact: '10 Indigenous Trees', usd: '~$40' },
    { value: 10000, label: 'KSH 10,000', impact: 'VSLA Seed Capital', usd: '~$80' },
    { value: 15000, label: 'KSH 15,000', impact: 'Launch a Women\'s Group', usd: '~$120' },
  ]

  const handleAmountSelect = (value) => {
    setAmount(value)
    setCustomAmount('')
    setIsCustom(false)
    setErrors({})
  }

  const handleCustomChange = (e) => {
    const value = e.target.value
    setCustomAmount(value)
    setAmount(parseInt(value) || 0)
    setIsCustom(true)
    setErrors({})
  }

  const formatPhoneNumber = (phone) => {
    // Remove any non-digit characters
    let cleaned = phone.replace(/\D/g, '')
    
    // If starts with 0, replace with 254
    if (cleaned.startsWith('0')) {
      cleaned = '254' + cleaned.substring(1)
    }
    
    // If doesn't start with 254, add it
    if (!cleaned.startsWith('254')) {
      cleaned = '254' + cleaned
    }
    
    return cleaned
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!amount || amount < 50) {
      newErrors.amount = 'Minimum donation is KES 50'
    }
    
    if (!phone) {
      newErrors.phone = 'Phone number is required'
    } else {
      const formattedPhone = formatPhoneNumber(phone)
      if (formattedPhone.length !== 12) {
        newErrors.phone = 'Please enter a valid Kenya phone number'
      }
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e) {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setStatus('processing')
    
    try {
      const formattedPhone = formatPhoneNumber(phone)
      
      const res = await fetch('/api/mpesa/stkpush', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: formattedPhone, amount })
      })
      const data = await res.json()
      
      if (!res.ok) throw new Error(data.error || 'Payment initiation failed')
      
      setStatus({ ok: true, detail: data })
    } catch (err) {
      setStatus({ ok: false, message: err.message })
    }
  }

  const currentImpact = amounts.find(a => a.value === amount)?.impact || 'Your Impact'

  return (
    <div className="donate-form-container">
      <form onSubmit={handleSubmit} className="donate-form" aria-label="M-Pesa Donation Form">
        {/* Amount Selection */}
        <div className="form-group">
          <label id="amount-label" className="form-label">Select Amount</label>
          <div className="amount-grid" role="radiogroup" aria-labelledby="amount-label">
            {amounts.map((preset) => (
              <button
                key={preset.value}
                type="button"
                className={`amount-btn ${amount === preset.value && !isCustom ? 'selected' : ''}`}
                onClick={() => handleAmountSelect(preset.value)}
                role="radio"
                aria-checked={amount === preset.value && !isCustom}
              >
                <span className="amount-label">{preset.label}</span>
                <span className="amount-usd">{preset.usd}</span>
              </button>
            ))}
          </div>
          
          {/* Custom Amount */}
          <div className="custom-amount-wrapper">
            <label htmlFor="custom-amount" className="custom-label">Or enter custom amount:</label>
            <div className="custom-input-group">
              <span className="currency-prefix">KES</span>
              <input
                id="custom-amount"
                type="number"
                min="50"
                value={customAmount}
                onChange={handleCustomChange}
                placeholder="Enter amount"
                className={isCustom ? 'active' : ''}
                aria-describedby="custom-amount-desc"
              />
            </div>
            <span id="custom-amount-desc" className="visually-hidden">
              Enter any amount from KES 50 upwards
            </span>
          </div>
          
          {errors.amount && (
            <p className="error-message" role="alert">{errors.amount}</p>
          )}
        </div>

        {/* Impact Display */}
        <div className="impact-display" role="status" aria-live="polite">
          <span className="impact-icon">🌱</span>
          <span className="impact-text">
            Your <strong>KES {amount.toLocaleString()}</strong> donation will help: <strong>{currentImpact}</strong>
          </span>
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone Number (M-Pesa)</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value)
              setErrors({ ...errors, phone: null })
            }}
            placeholder="07XXXXXXXX or 2547XXXXXXXX"
            className={errors.phone ? 'error' : ''}
            aria-describedby="phone-help"
          />
          <span id="phone-help" className="input-help">
            Enter your M-Pesa registered phone number
          </span>
          {errors.phone && (
            <p className="error-message" role="alert">{errors.phone}</p>
          )}
        </div>

        {/* Submit Button */}
        <button 
          className="btn primary donate-submit-btn" 
          type="submit"
          disabled={status === 'processing'}
        >
          {status === 'processing' ? (
            <>
              <span className="spinner" aria-hidden="true"></span>
              Processing...
            </>
          ) : (
            <>Pay KES {amount.toLocaleString()} with M-Pesa</>
          )}
        </button>

        {/* Status Messages */}
        {status && status.ok === true && (
          <div className="notice success" role="status">
            <strong>✅ Payment Initiated!</strong>
            <p>Please check your phone and enter your M-Pesa PIN to complete the donation.</p>
          </div>
        )}
        
        {status && status.ok === false && (
          <div className="notice error" role="alert">
            <strong>❌ Payment Failed</strong>
            <p>{status.message}</p>
          </div>
        )}

        {/* Security Note */}
        <p className="security-note">
          🔒 Your payment is secure. By donating, you agree to our <Link href="/terms">terms</Link>.
        </p>
      </form>

      <style jsx>{`
        .donate-form-container {
          background: #f9f9f9;
          padding: 1.5rem;
          border-radius: 8px;
        }

        .form-group {
          margin-bottom: 1.25rem;
        }

        .form-label {
          display: block;
          font-weight: 600;
          color: var(--charcoal);
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
        }

        .amount-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .amount-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.75rem;
          background: white;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .amount-btn:hover {
          border-color: var(--earthy-green);
        }

        .amount-btn.selected {
          border-color: var(--earthy-green);
          background: rgba(59, 107, 55, 0.08);
        }

        .amount-label {
          font-weight: 700;
          color: var(--charcoal);
          font-size: 1rem;
        }

        .amount-usd {
          font-size: 0.8rem;
          color: #888;
        }

        .custom-amount-wrapper {
          margin-top: 0.5rem;
        }

        .custom-label {
          display: block;
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 0.5rem;
        }

        .custom-input-group {
          display: flex;
          align-items: center;
          background: white;
          border: 2px solid #e0e0e0;
          border-radius: 6px;
          overflow: hidden;
        }

        .currency-prefix {
          padding: 0.6rem 0.75rem;
          background: #f0f0f0;
          color: #666;
          font-weight: 600;
          border-right: 1px solid #e0e0e0;
        }

        .custom-input-group input {
          flex: 1;
          border: none;
          padding: 0.6rem 0.75rem;
          font-size: 1rem;
        }

        .custom-input-group input:focus {
          outline: none;
        }

        .custom-input-group input.active {
          background: rgba(59, 107, 55, 0.05);
        }

        .impact-display {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, rgba(59, 107, 55, 0.1), rgba(194, 125, 49, 0.1));
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1.25rem;
          border: 1px solid rgba(59, 107, 55, 0.2);
        }

        .impact-icon {
          font-size: 1.5rem;
        }

        .impact-text {
          font-size: 0.95rem;
          color: var(--charcoal);
          line-height: 1.5;
        }

        .impact-text strong {
          color: var(--earthy-green);
        }

        input {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #e0e0e0;
          border-radius: 6px;
          font-size: 1rem;
          transition: border-color 0.2s;
        }

        input:focus {
          outline: none;
          border-color: var(--earthy-green);
        }

        input.error {
          border-color: #dc3545;
        }

        .input-help {
          display: block;
          font-size: 0.85rem;
          color: #888;
          margin-top: 0.35rem;
        }

        .error-message {
          color: #dc3545;
          font-size: 0.85rem;
          margin-top: 0.35rem;
          font-weight: 500;
        }

        .donate-submit-btn {
          width: 100%;
          padding: 1rem;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .donate-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .notice {
          padding: 1rem;
          border-radius: 6px;
          margin-top: 1rem;
        }

        .notice.success {
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }

        .notice.error {
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }

        .notice p {
          margin: 0.5rem 0 0;
          font-size: 0.9rem;
        }

        .security-note {
          text-align: center;
          font-size: 0.8rem;
          color: #888;
          margin-top: 1rem;
        }

        @media (max-width: 480px) {
          .amount-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </div>
  )
}
