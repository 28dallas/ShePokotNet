# ⚡ Quick Start Guide

**Your She Pokot Network website is production-ready!**

## 🚀 Get Up & Running in 5 Minutes

### Step 1: Install & Setup (Local)

```bash
cd "she-pokot-site"
npm install
npx prisma generate
cp .env.local.example .env.local
```

### Step 2: Configure Local Database

For quick testing with SQLite:
```bash
export DATABASE_URL="file:./dev.db"
npx prisma migrate dev --name init
```

### Step 3: Start Development Server

```bash
npm run dev
```

Visit **http://localhost:3000** ✨

---

## 📦 Deployment to Vercel (5 minutes)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "She Pokot Network website"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to https://vercel.com/new
   - Select your GitHub repo
   - Select `she-pokot-site` as root directory
   - Add Environment Variables (see below)
   - Click "Deploy"

3. **Set Environment Variables in Vercel**:
   ```
   DATABASE_URL=postgresql://...
   STRIPE_SECRET_KEY=sk_live_...
   PAYPAL_CLIENT_ID=...
   MPESA_CONSUMER_KEY=...
   NEXT_PUBLIC_GA_ID=G-...
   NEXT_PUBLIC_BASE_URL=https://yourdomain.com
   ```

4. **Deploy**: Click "Deploy" → Done! 🎉

---

## 📋 What You Need Before Going Live

- [ ] PostgreSQL database connection string
- [ ] Stripe Secret Key (from stripe.com/dashboard)
- [ ] PayPal Client ID & Secret
- [ ] M-Pesa credentials (Safaricom Developer Portal)
- [ ] Google Analytics ID
- [ ] Custom domain name
- [ ] Images in `public/img/` folder

---

## 📸 Add Your Images

1. Copy all images from `IMG` folder to `she-pokot-site/public/img/`
2. Rename to match component references:
   - `logo.png` → Header logo
   - `hero-01.jpg` → Homepage hero image
   - `asha.jpg`, `grace.jpg`, `community.jpg` → Impact stories

---

## 🔗 Key Links

- 📖 **Full Setup Guide**: `DEPLOYMENT.md`
- 📝 **Documentation**: `README.md`
- 🛠️ **Dev Guidelines**: `CONTRIBUTING.md`
- 🖼️ **Images Needed**: `IMAGES_REQUIRED.md`
- 📊 **Build Summary**: `../COMPLETE_BUILD_SUMMARY.md`

---

## ✅ Quality Checklist Before Launch

- [ ] All pages load without errors
- [ ] Payment flows tested (use sandbox credentials first)
- [ ] Images display correctly
- [ ] Mobile view looks good
- [ ] Links work correctly
- [ ] Forms submit properly
- [ ] Analytics script configured
- [ ] SEO tags present (check sitemap.xml)

---

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails locally | Run `npm install` and `npx prisma generate` |
| Database errors | Check `DATABASE_URL` in `.env.local` |
| Images not showing | Ensure files in `public/img/` match component paths |
| Payment not working | Verify environment variables in `.env.local` |

---

## 📞 Next Steps

1. **Finalize Content** — Replace placeholder text with your data
2. **Add Images** — Copy photos to `public/img/`
3. **Test Locally** — Run `npm run dev` and verify everything
4. **Deploy** — Push to GitHub → Vercel auto-deploys
5. **Monitor** — Watch Google Analytics and transaction logs

---

**You're all set! Your website is ready to go live.** 🌍✨

Need help? See `DEPLOYMENT.md` or contact: info@shepokot.org

---

**Happy Launching!** 🚀
