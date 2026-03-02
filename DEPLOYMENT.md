# Deployment & Setup Guide for She Pokot Network

## Overview

The She Pokot Network website is a production-ready Next.js application deployed on Vercel. This guide covers setup, deployment, and maintenance.

## Pre-Deployment Checklist

- [ ] All images copied to `public/img/` (including `logo.png`)
- [ ] Database connection string obtained (PostgreSQL recommended)
- [ ] Stripe account created and keys obtained
- [ ] PayPal account created and keys obtained
- [ ] M-Pesa sandbox credentials obtained from Safaricom Developer Portal
- [ ] Google Analytics ID obtained
- [ ] Production domain and SSL certificate ready

## Local Development Setup

### 1. Clone/Setup Repository

```bash
cd "she-pokot-site"
git init
git add .
git commit -m "Initial She Pokot Network website"
```

### 2. Install Dependencies

```bash
npm install
npx prisma generate
```

### 3. Create `.env.local`

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your local development settings:

```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
DATABASE_PROVIDER=postgresql
DATABASE_URL=postgresql://localhost/she_pokot_dev
STRIPE_SECRET_KEY=sk_test_...
PAYPAL_ENV=sandbox
PAYPAL_CLIENT_ID=...
PAYPAL_CLIENT_SECRET=...
MPESA_ENV=sandbox
MPESA_CONSUMER_KEY=...
MPESA_CONSUMER_SECRET=...
```

### 4. Setup Database

```bash
npx prisma migrate dev --name init
```

### 5. Start Development Server

```bash
npm run dev
```

Visit http://localhost:3000

### 6. Test Payment Flows

- **M-Pesa**: Use sandbox test numbers (provided by Safaricom)
- **Stripe**: Use test card `4242 4242 4242 4242`
- **PayPal**: Login with sandbox account

## Production Deployment (Vercel)

### 1. Connect GitHub Repository to Vercel

1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Select your GitHub repo (or create one)
4. Select `she-pokot-site` as the root directory
5. Click Deploy

### 2. Set Production Environment Variables

In Vercel Dashboard → Settings → Environment Variables, add:

**Database:**
```
DATABASE_URL = postgresql://user:pass@host/she_pokot_prod
DATABASE_PROVIDER = postgresql
```

**Stripe:**
```
STRIPE_SECRET_KEY = sk_live_...
STRIPE_PUBLISHABLE_KEY = pk_live_...
STRIPE_WEBHOOK_SECRET = whsec_...
```

**PayPal:**
```
PAYPAL_CLIENT_ID = ...
PAYPAL_CLIENT_SECRET = ...
PAYPAL_ENV = production
```

**M-Pesa:**
```
MPESA_ENV = production
MPESA_CONSUMER_KEY = ...
MPESA_CONSUMER_SECRET = ...
MPESA_SHORTCODE = ...
MPESA_PASSKEY = ...
MPESA_CALLBACK_URL = https://yourdomain.com/api/mpesa/callback
```

**Analytics:**
```
NEXT_PUBLIC_GA_ID = G-...
NEXT_PUBLIC_BASE_URL = https://yourdomain.com
```

### 3. Configure Custom Domain

1. In Vercel Dashboard → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. SSL certificate will auto-generate

### 4. Run First Production Migration

After deploying, you need to run Prisma migrations on production:

```bash
# Locally (with production DATABASE_URL)
npx prisma migrate deploy
```

Or use Vercel's deployment hooks to auto-run migrations.

### 5. Test Production Endpoints

- Visit https://yourdomain.com/
- Test sitemap: https://yourdomain.com/sitemap.xml
- Test donation flow with real keys (use sandbox mode first)
- Monitor Google Analytics for traffic

## Payment Provider Configuration

### M-Pesa Production Setup

1. **Complete KYC** with Safaricom:
   - Submit organization details
   - Provide business registration
   - Get approved for production

2. **Configure Callback URL**:
   - Set `MPESA_CALLBACK_URL` to `https://yourdomain.com/api/mpesa/callback`
   - Ensure URL is publicly accessible and HTTPS-only

3. **Test STK Push**:
   - Use production shortcode and passkey
   - Test with real M-Pesa account
   - Verify callback is received and processed

### Stripe Webhook Configuration

1. Go to https://dashboard.stripe.com/webhooks
2. Add endpoint:
   - URL: `https://yourdomain.com/api/stripe/webhook`
   - Events: `checkout.session.completed`, `charge.refunded`
3. Copy Webhook Signing Secret to `STRIPE_WEBHOOK_SECRET`

### PayPal IPN/Webhook Configuration

1. Go to PayPal Account Settings → Notifications
2. Add webhook URL: `https://yourdomain.com/api/paypal/webhook`
3. Subscribe to events:
   - `CHECKOUT.ORDER.APPROVED`
   - `PAYMENT.CAPTURE.COMPLETED`

## Database Backups

### PostgreSQL Backup (Production)

```bash
# Local backup
pg_dump postgresql://user:pass@host/she_pokot_prod > backup.sql

# Restore
psql postgresql://user:pass@host/she_pokot_prod < backup.sql
```

### Automated Backups

If using managed PostgreSQL (Supabase, RDS, etc.), enable automated backups in provider dashboard.

## Monitoring & Maintenance

### Check Transaction Logs

Access database to view transactions:

```bash
npx prisma studio
```

### Monitor Website Performance

1. **Vercel Analytics**: https://vercel.com/dashboard → your-project → Analytics
2. **Google Analytics**: https://analytics.google.com
3. **Stripe Dashboard**: Transactions and disputes
4. **PayPal Dashboard**: Transaction reports

### Update Content

1. Edit pages in `pages/` directory
2. Update images in `public/img/`
3. Edit translations in `lib/i18n.js`
4. Commit and push to GitHub → auto-deploys to Vercel

### Update Styles

Edit `styles/globals.css` for site-wide styling.

## Security Best Practices

- ✅ Never commit secrets or `.env` files
- ✅ Use HTTPS only for all URLs
- ✅ Rotate API keys quarterly
- ✅ Monitor for suspicious transaction patterns
- ✅ Keep dependencies updated: `npm audit fix`
- ✅ Use strong passwords for all accounts
- ✅ Enable 2FA on Vercel, Stripe, PayPal, GitHub

## Troubleshooting

### Build Fails on Vercel

- Check Environment Variables are set
- Ensure `DATABASE_URL` is correct
- Run `npm run build` locally to reproduce

### Payments Not Processing

- **M-Pesa**: Check `MPESA_CALLBACK_URL` is accessible
- **Stripe**: Verify webhook is registered and signing secret correct
- **PayPal**: Confirm endpoint accepts JSON POST requests

### Database Connection Errors

- Verify `DATABASE_URL` in Vercel environment
- Check database server is running
- Confirm IP whitelist includes Vercel IPs

### Images Not Loading

- Ensure all images copied to `public/img/`
- Check image file names in component imports
- Verify alt text is provided for accessibility

## Support

For issues or questions:
- Email: info@shepokot.org
- Documentation: See README.md
- Development: Contact development team

---

**Last Updated:** February 24, 2026
**Version:** 1.0
