# Repost Promotion

Repost Promotion is a production-ready static website for a community repost platform that helps quality content reach a wider audience.

The site is designed for GitHub Pages and works by opening `index.html` directly. It uses only static HTML, CSS, and JavaScript with no build tools, frameworks, CDNs, or server-side dependencies.

## Features

- Responsive mobile-first layout for phones, tablets, and desktops.
- Premium glassmorphism visual system with deep blue, electric blue, cyan, white, and dark gray.
- Complete navigation, footer, mobile hamburger menu, and back-to-top control.
- Home, About, How It Works, Guidelines, FAQ, Contact, Privacy, Terms, Copyright, Accessibility, Changelog, and 404 pages.
- Accordion FAQ using native HTML details elements.
- Scroll reveal animations with reduced-motion support.
- SEO metadata, canonical URLs, Open Graph tags, Twitter Card tags, structured data, robots.txt, and sitemap.xml.
- Progressive Web App metadata through `manifest.webmanifest` and `browserconfig.xml`.
- Accessibility-conscious semantics, skip link, focus states, keyboard-friendly navigation, readable typography, and responsive spacing.

## GitHub Pages Deployment

1. Upload the contents of this folder to a GitHub repository.
2. In the repository settings, open Pages.
3. Select the branch and root folder that contain `index.html`.
4. Save the Pages settings and wait for GitHub to publish the site.

If the repository name or organization is different from the default canonical URL used in this project, update the canonical URLs in each HTML file, `sitemap.xml`, and `robots.txt`.

## Folder Structure

```text
repost-promotion/
├── index.html
├── about.html
├── how-it-works.html
├── guidelines.html
├── faq.html
├── contact.html
├── privacy.html
├── terms.html
├── copyright.html
├── accessibility.html
├── changelog.html
├── 404.html
├── css/
│   ├── style.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── navigation.js
│   └── animations.js
├── images/
│   ├── logo.png
│   ├── repost.png
│   ├── favicon.png
│   ├── hero.webp
│   └── backgrounds/
├── fonts/
├── sitemap.xml
├── robots.txt
├── manifest.webmanifest
├── browserconfig.xml
└── README.md
```

## Customization Guide

- Update social links in the navigation and footer if the official GitHub or X profiles change.
- Replace `images/repost.png`, `images/favicon.png`, and `images/hero.webp` with final brand assets when available.
- Edit CSS variables in `css/style.css` to adjust colors, spacing, shadows, and layout width.
- Update statistics on `index.html` when verified project milestones change.
- Update policy pages when contact methods, analytics, cookies, or submission rules change.

## Browser Compatibility

The site uses modern HTML, CSS Grid, Flexbox, CSS variables, and standard ES6 JavaScript. It is intended for current versions of Chrome, Edge, Firefox, and Safari.

## License

All website text, structure, and styling are provided for the Repost Promotion project. Add the final project license that matches the repository owner's publishing preference.
