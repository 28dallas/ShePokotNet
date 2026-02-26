# She Pokot Network — Next.js Website

A modern, responsive website for She Pokot Network, a grassroots women-led organization advancing climate justice and dignity in West Pokot, Kenya.

## Features

- **Responsive Design**: Mobile-first, fully optimized for all devices.
- **Integrated Payments**: M-Pesa (STK Push), Stripe, and PayPal donation flows.
- **Database Persistence**: Prisma with PostgreSQL (or SQLite for dev).
- **Internationalization**: English and Swahili support.
- **SEO Ready**: Sitemap, meta tags, alt text, and Google Analytics integration.
- **Accessibility**: WCAG compliance with keyboard navigation and semantic HTML.
- **Content Management**: Easy to update content and add new pages.

## Quick Start (Local Development)

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
cd "she-pokot-site"
npm install
npx prisma generate
```

### Setup Database

For SQLite (quick testing):
```bash
export DATABASE_PROVIDER=sqlite
export DATABASE_URL="file:./dev.db"
npx prisma migrate dev --name init
```

For PostgreSQL (production-like):
```bash
export DATABASE_PROVIDER=postgresql
export DATABASE_URL="postgresql://user:password@host:5432/dbname"
npx prisma migrate deploy
```

### Set Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your credentials:

```bash
cp .env.local.example .env.local
```

Required for development:
```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
DATABASE_PROVIDER=sqlite
DATABASE_URL=file:./dev.db
```

Optional (for payment testing):
```
STRIPE_SECRET_KEY=sk_test_...
PAYPAL_CLIENT_ID=...
PAYPAL_ENV=sandbox
MPESA_ENV=sandbox
MPESA_CONSUMER_KEY=...
...
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

1. **Connect Repository**: Link your GitHub repo to Vercel.
2. **Set Environment Variables**: In Vercel dashboard, add all production secrets (Stripe, PayPal, M-Pesa, Database URL).
3. **Deploy**: Vercel auto-builds and deploys on push to main.

### Environment Variables for Production

Set these in Vercel dashboard (Settings > Environment Variables):
- `DATABASE_URL` — PostgreSQL connection string
- `DATABASE_PROVIDER=postgresql`
- `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PUBLISHABLE_KEY`
- `PAYPAL_CLIENT_ID`, `PAYPAL_CLIENT_SECRET`, `PAYPAL_ENV=production`
- `MPESA_ENV=production`, `MPESA_CONSUMER_KEY`, `MPESA_CONSUMER_SECRET`, `MPESA_SHORTCODE`, `MPESA_PASSKEY`, `MPESA_CALLBACK_URL=https://your-domain.com/api/mpesa/callback`
- `NEXT_PUBLIC_GA_ID` — Google Analytics ID
- `NEXT_PUBLIC_BASE_URL` — Your production domain

## Pages & Routes

- `/` — Homepage with hero, impact stats, featured story
- `/about` — Organization story, values, team
- `/programs` — Three core programs (Climate, Girls/Women, Livelihoods)
- `/programs/[id]` — Detailed program pages
- `/impact` — Success stories and beneficiary testimonies
- `/news` — Blog/news posts and resources
- `/transparency` — Financial reports, audits, fund allocation
- `/donate` — Donation portal with M-Pesa, Stripe, PayPal
- `/contact` — Contact form and information
- `/sitemap.xml` — Auto-generated XML sitemap

## Payment Integrations

### M-Pesa (STK Push)

**API:** `POST /api/mpesa/stkpush`

Request body:
```json
{ "amount": 500, "phone": "07xxxxxxxx" }
```

Response includes transaction ID and CheckoutRequestID. Callback handled at `/api/mpesa/callback`.

**Setup:**
1. Register at [Safaricom Developer Portal](https://developer.safaricom.co.ke)
2. Test in sandbox with provided credentials
3. Complete KYC for production
4. Set `MPESA_CALLBACK_URL` to your production HTTPS endpoint

### Stripe

**API:** `POST /api/stripe/create-session`

Request body:
```json
{ "amount": 50 }
```

Returns `sessionId` for `stripe.redirectToCheckout()`.

Webhook at `/api/stripe/webhook` updates transaction status on successful payment.

**Setup:**
1. Create account at [stripe.com](https://stripe.com)
2. Get keys from dashboard
3. Configure webhook endpoint in Stripe dashboard

### PayPal

**API:** `POST /api/paypal/create-order`

Request body:
```json
{ "amount": 50 }
```

Returns `orderId` and `approvalUrl` for redirect.

Webhook at `/api/paypal/webhook` updates transaction status.

**Setup:**
1. Create account at [PayPal Developer](https://developer.paypal.com)
2. Get Client ID and Secret
3. Configure webhook in PayPal dashboard

## Internationalization (i18n)

Currently supports English and Swahili. To add more languages:

1. Edit `lib/i18n.js` and add translations
2. Use `t(locale, key)` helper in pages

Example:
```javascript
import { t } from '../lib/i18n'
const text = t('en', 'donate_now')
```

## Images

Place all images in `public/img/`:
- `logo.png` — Branding logo
- Hero/program/story images — Reference in components

## SEO & Analytics

- Sitemap auto-generated at `/sitemap.xml`
- Google Analytics: Set `NEXT_PUBLIC_GA_ID` environment variable
- Meta tags added per page for sharing and search
- All images have alt text for accessibility

## Sanity CMS (Optional)

Impact Stories supports a Sanity-backed CMS adapter with fallback to mock data.

1. Install packages:
```bash
npm install @sanity/client @sanity/image-url
```
For Studio and schema management, install:
```bash
npm install sanity @sanity/vision
```
2. Add environment variables:
```bash
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01
SANITY_USE_CDN=true
SANITY_TOKEN=
```
3. Create `impactStory` documents in Sanity with fields:
`title`, `person`, `role`, `location`, `category`, `publishedAt`, `summary`, `outcome`, `image`, `imageAlt`.
4. Run Studio locally:
```bash
npm run studio:dev
```
5. Deploy Studio for editors:
```bash
npm run studio:deploy
```

If Sanity is unavailable or returns no stories, the site automatically uses local mock stories.

For the non-technical editor process, see:
- `CMS_WORKFLOW.md`

## Accessibility

- WCAG AA compliant
- Keyboard navigation fully supported
- Semantic HTML
- Color contrast verified
- Focus indicators visible

## Database Schema

Prisma schema includes:

**Transaction** model:
- `id` — Unique transaction ID
- `provider` — Payment provider (mpesa, stripe, paypal)
- `amount` — Donation amount
- `status` — initiated, completed, failed, pending
- `MerchantRequestID`, `CheckoutRequestID` — M-Pesa fields
- `stripeSessionId` — Stripe session
- `paypalOrderId` — PayPal order
- Timestamps for auditing

## File Structure

```
she-pokot-site/
├── pages/              # Next.js pages (routes)
├── components/         # Reusable React components
├── styles/             # Global and component styles
├── lib/                # Utilities (i18n, prisma, payments)
├── prisma/             # Database schema and migrations
├── public/             # Static assets (images, favicon)
└── README.md           # This file
```

## Common Commands

```bash
npm run dev              # Start dev server
npm run build            # Build for production
npm start                # Run production build
npx prisma studio       # Open Prisma GUI to view/edit database
npx prisma migrate dev  # Create and run new migration
npx prisma generate     # Generate Prisma client
```

## Support & Contributions

For issues, feature requests, or contributions, please contact the development team at info@shepokot.org.

## License

© 2026 She Pokot Network. All rights reserved.

