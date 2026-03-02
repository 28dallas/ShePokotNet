# CONTRIBUTING.md — Development Guidelines

## Getting Started

1. **Fork and Clone**: Clone the repository and create a feature branch
   ```bash
   git checkout -b feature/your-feature
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   npx prisma generate
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```

## Code Standards

### Pages & Components

- Use functional components with React hooks
- Add PropTypes or TypeScript types for props (optional but recommended)
- Add descriptive comments for complex logic
- Prefer small, reusable components

### Database

- Use Prisma for all database queries
- Never execute raw SQL
- Document schema changes in migration files
- Run migrations: `npx prisma migrate dev --name description`

### API Routes

- All payment APIs must be server-side (never expose secrets in client code)
- Validate all inputs and sanitize outputs
- Log errors for debugging
- Return consistent JSON responses: `{ ok: boolean, data?: any, error?: string }`

### Styling

- Use CSS in `styles/globals.css` for global styles
- Use CSS classes for component styling
- Follow the color palette: green (#3B6B37), ochre (#C27D31), cream (#F7F5EC)
- Ensure all styles are responsive (mobile-first approach)

### Internationalization

- Add translations to `lib/i18n.js` (English & Swahili)
- Use `t(locale, key)` helper in pages
- Test both locales before committing

## Testing

- Test locally: `npm run dev`
- Test build: `npm run build`
- Test all payment flows with sandbox/test credentials
- Test responsiveness on mobile devices

## Commit Guidelines

- Write clear, descriptive commit messages
- Group related changes together
- Reference GitHub issues if applicable
- Example: `feat: add impact stories page`

## Pull Requests

1. Push your branch to GitHub
2. Create a PR with a descriptive title and summary
3. Link any related issues
4. Request review from team members
5. Address feedback and update
6. After approval, merge to main branch (triggers auto-deploy to Vercel)

## Deployment

- Main branch auto-deploys to Vercel
- Check deployment status at https://vercel.com/dashboard
- Production environment variables are separate from dev

## Reporting Issues

- Use GitHub Issues to report bugs
- Include steps to reproduce
- Attach screenshots if UI-related
- Include error logs if available

---

Questions? Contact: info@shepokot.org
