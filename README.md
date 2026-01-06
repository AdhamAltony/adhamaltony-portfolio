# Adham Ahmed Altony Portfolio

Modern, recruiter-focused portfolio built with Next.js App Router, JavaScript, and Tailwind CSS. The site is fully data-driven from `src/data/profile.js` and `src/data/projects.js`.

## Tech Stack
- Next.js (App Router)
- React (JavaScript)
- Tailwind CSS
- Lucide Icons

## Getting Started
```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the site.

## Production Build
```bash
npm run build
npm run start
```

## Customization
- Update personal info in `src/data/profile.js`
- Add or edit projects in `src/data/projects.js`
- Replace assets in `public/` (`AdhamAltony-CV.pdf`, `og.png`, `favicon.ico`)
- Update site URL in `src/data/profile.js` (`siteUrl`) for correct SEO metadata
- Replace placeholder links in `src/data/projects.js` if any demos or repos are not public yet

## Deploy to Vercel
1. Push the repo to GitHub.
2. In Vercel, click **New Project** and import the repository.
3. Keep the default settings (Next.js framework detected).
4. Deploy.

## Connect a Custom .me Domain
1. Buy your domain from a registrar (Namecheap, GoDaddy, etc.).
2. In Vercel, open your project settings and add the custom domain.
3. Update DNS records:
   - If using Vercel DNS: set the domain as instructed in the Vercel dashboard.
   - If using external DNS: add the A record and CNAME provided by Vercel.
4. Update `siteUrl` in `src/data/profile.js` to your new domain.

## Notes
- The contact form opens the visitor's email client (no backend required).
- Replace the placeholder CV and OG image with your real assets before launch.
