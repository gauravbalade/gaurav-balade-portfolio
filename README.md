# Gaurav Balade — Portfolio

Personal portfolio for Gaurav Balade, final-year B.E. Computer Engineering student at Datta Meghe College of Engineering (2023–2027). Sections: About, Projects, Skills, Resume (education, achievements, certifications), Contact.

## Tech stack
- React 19 + TanStack Start (SSR) + Vite 7
- Tailwind CSS v4 with semantic design tokens (`src/styles.css`)
- No backend or database — content lives in `src/components/portfolio/data.ts`

## Development
```bash
npm install        # install dependencies
npm run dev        # start dev server (http://localhost:8080)
npm run build      # production build
npm run preview    # preview the production build locally
npm test           # run tests
```

## Project structure
```
src/routes/__root.tsx            HTML shell, fonts, global meta
src/routes/index.tsx             Page + SEO head, lazy-loads below-fold sections
src/components/portfolio/
  data.ts                        All editable content (links, projects, skills…)
  Header.tsx                     Accessible nav + responsive mobile menu
  Hero.tsx                       Above-the-fold intro
  Section.tsx                    Reusable Section and Chip components
  BelowFold.tsx                  About, Projects, Skills, Resume, Contact (lazy chunk)
```

## Production optimisation
- Below-fold sections are code-split with `React.lazy` + `Suspense`, so the first paint only ships the header and hero.
- No raster images — decoration uses CSS gradients, keeping the payload tiny.
- Fonts loaded with `preconnect` and `display=swap`.
- Server-side rendering gives crawlers full HTML; per-page title/description/Open Graph tags are set in `head()`.
- `prefers-reduced-motion` disables animations and smooth scrolling.

## Adding the resume PDF
Place `resume.pdf` in `public/`, then change `resume: "#resume"` in `data.ts` to `resume: "/resume.pdf"`.

## Deployment
**Vercel:** push to GitHub → "New Project" on vercel.com → import the repo → framework auto-detected → Deploy.
**Netlify:** "Add new site" → import repo → build command `npm run build` → Deploy.
**Lovable:** click Publish in the editor.

### Custom domain & SSL
Add the domain in the host's Domains settings, then create the DNS records it shows (an `A` record for the apex and/or `CNAME` for `www`) at your registrar. Vercel, Netlify and Lovable issue free Let's Encrypt SSL certificates automatically once DNS propagates (minutes to 48h).

## Testing checklist
- [ ] Nav links scroll to each section; skip-link works with keyboard
- [ ] Mobile menu opens/closes, `aria-expanded` updates
- [ ] Layout checked at 375px, 768px, 1280px+
- [ ] Email link opens mail client; GitHub/LeetCode/LinkedIn open in new tab
- [ ] Resume button scrolls to Resume section (until a PDF is added)
- [ ] Lighthouse: Performance, Accessibility, SEO ≥ 90
- [ ] `npm run build` completes without errors

## Challenges & solutions
- **Fast first load without images:** used CSS gradient "glows" instead of hero photos and lazy-loaded everything below the hero.
- **Honest content:** project cards link to the GitHub profile rather than guessed repo URLs, and payments are labelled test-mode; the resume button is a placeholder until a real PDF exists.
- **Accessible mobile menu:** a real `<button>` with `aria-controls`/`aria-expanded`, closing on link tap.
- **Smooth scroll under a fixed header:** `scroll-padding-top` keeps headings from hiding behind the nav.

## Screenshots / live link
Add screenshots to `docs/` or paste the published URL here after deploying.
