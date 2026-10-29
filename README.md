# Gaurav Balade — Personal Portfolio

A responsive personal portfolio website built with React to present my profile, technical skills, academic projects, education, achievements, certifications and contact details.

**Live portfolio:** https://gaurav-balade-portfolio.vercel.app  
**GitHub repository:** https://github.com/gauravbalade/gaurav-balade-portfolio  
**Resume:** [Download PDF](public/resume.pdf)

## Features
- Responsive portfolio layout with About, Projects, Skills, Resume and Contact sections.
- Project cards with technology stacks and verified PropertySetu repository/demo links.
- Downloadable one-page resume PDF with clickable contact and profile links.
- Accessible navigation and reduced-motion support.
- SEO metadata and social-sharing metadata.
- Lazy-loaded below-the-fold sections using `React.lazy` and `Suspense`.

## Technology stack
- React 19, TypeScript and TanStack Start
- Vite
- Tailwind CSS v4
- Vercel hosting with HTTPS

## Run locally
Requirements: Node.js and npm.

```bash
git clone https://github.com/gauravbalade/gaurav-balade-portfolio.git
cd gaurav-balade-portfolio
npm install
npm run dev
```

## Production build and local verification
```bash
npm run build
npm run preview
```

The build command generates the production build. Use the preview server to inspect the production output locally before deploying.

## Deployment
The project is connected to Vercel. Commits pushed to the connected GitHub branch trigger a new deployment automatically.

1. Push changes to the `main` branch.
2. Open the project in Vercel and confirm the latest deployment succeeds.
3. Open the deployed URL and verify navigation, resume download and external links.

Vercel provides HTTPS for the default `.vercel.app` domain. A custom domain is optional.

## Performance and production considerations
- Below-the-fold sections are split into a lazy-loaded chunk to reduce the initial JavaScript work.
- The portfolio uses CSS decoration rather than large hero images.
- Production assets are bundled and minified by the build tool.
- Font preconnect and `display=swap` help avoid delaying text rendering.
- The site includes SEO metadata and respects reduced-motion preferences.

## Testing checklist
- [x] Deployed site opens over HTTPS.
- [x] About, Projects, Skills, Resume and Contact sections render on the deployed site.
- [x] Resume PDF is linked from the Resume section.
- [ ] Test mobile layouts at narrow, medium and desktop widths.
- [ ] Test in additional browsers and run Lighthouse audits.

## Challenges and solutions
- **Fast first load:** split below-the-fold sections using `React.lazy` and `Suspense`.
- **Resume availability:** included a downloadable PDF in `public/resume.pdf` rather than leaving a placeholder button.
- **Honest project details:** marked Razorpay as test mode and only added repository/demo URLs that are known.
- **Responsive and accessible UI:** used responsive layout utilities, semantic sections, keyboard-friendly links and reduced-motion support.

## Project structure
```
src/
  components/portfolio/
    data.ts          # Portfolio content and links
    Header.tsx       # Navigation
    Hero.tsx         # Intro section
    BelowFold.tsx    # About, Projects, Skills, Resume, Contact
  routes/
    index.tsx        # Page entry, SEO metadata and lazy loading
public/
  resume.pdf         # Downloadable resume
```

## Contact
- Email: gauravbalade@gmail.com
- GitHub: https://github.com/gauravbalade
- LinkedIn: https://linkedin.com/in/gaurav-balade-86bbb3321
- LeetCode: https://leetcode.com/u/gauravbalade/
