# Stoutwall Foundation & Concrete — client website

Built from the intake questionnaire submitted 13 Sept 2026 (Ammar — foundation
repair, concrete, mold; Ottawa area; goal: collect quote requests).

Next.js 15 (App Router) · Tailwind CSS 3 · Netlify Forms. No database, no CMS,
no monthly software cost.

---

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where to change things

| You want to change… | Edit |
| --- | --- |
| Phone, email, address, hours, service areas, business name | `lib/site.js` |
| Service names, descriptions, FAQs | `lib/services.js` |
| Project gallery entries + before/after photos | `lib/projects.js` |
| Form fields | `components/QuoteForm.jsx` **and** `public/__forms.html` (keep in sync) |
| Colours and type scale | `tailwind.config.js` (charcoal `#1E293B`, amber `#F59E0B`) |

Nothing about the business is hard-coded into a component. One file, one edit.

## Pages

`/` · `/services` · `/services/[slug]` (4) · `/projects` · `/about` ·
`/booking` · `/contact` · `/privacy` · `/terms` · `/accessibility` ·
`/thank-you` · 404

Requested features: online booking request, click-to-call, WhatsApp, Google
Reviews slot, quote-request form, privacy / terms / AODA pages. All present.

## Forms (Netlify)

Two forms, `quote` and `booking`. Netlify's build scanner only reads static
HTML, so the field list is declared in `public/__forms.html`; the React form in
`components/QuoteForm.jsx` POSTs url-encoded data to that path. After the first
deploy: **Netlify → Site → Forms → Form notifications → add an email
notification** to the client's address, or submissions sit in the dashboard
unread.

The quote form is a 3-step flow (job → property → contact) with up to three
photo uploads (`photo1`–`photo3`, one file per field, 8 MB per submission —
Netlify's limits). It POSTs `multipart/form-data`.

## Before this goes live

Blank answers on the questionnaire, all marked `TODO` in `lib/site.js`:

1. **Domain** — none owned. Buy one and set `site.url` (also fixes canonical
   URLs, sitemap and structured data).
2. **Business name** — the brief gave "Foundation & Repair Concrete & Mold".
   The site now trades as **Stoutwall Foundation & Concrete** (web + DNS check,
   Sept 2026: no business using "Stoutwall"; stoutwall.ca / .com unresolved).
   Before launch: confirm with the client, search the Ontario Business
   Registry, register the name and buy stoutwall.ca. Name lives in
   `lib/site.js` (`name`, `fullName`, `legalName`).
3. **Logo** — client asked for one to be designed. `components/Logo.jsx` is a
   placeholder wordmark; swap it for the real mark when it exists.
4. **Photos** — the site currently uses **AI-generated illustrative images**
   (Higgsfield, Sept 2026), listed in `lib/photos.mjs`. `npm run dev` /
   `npm run build` download any that are missing into `public/photos`
   (`npm run photos` does it on its own) — commit that folder after the first
   run so the site no longer depends on the Higgsfield CDN. These are not
   photos of the client's work: the project pairs stay tagged "Sample job" and
   the About photo is labelled "Illustrative photo". Replace them with real
   job photos (same file names) before or soon after launch. If a file is
   missing, the page shows a labelled placeholder instead of a broken image.
5. **Google Business Profile** — not set up. Until `site.google.profileUrl` is
   filled in, the reviews section shows an owner prompt rather than fake
   reviews, and the contact page has no map. For a local trade this is the
   single highest-value thing outstanding.
6. **Hours, postal code, WSIB / licence numbers, warranty length** — currently
   assumptions or blank. Nothing is displayed that has not been confirmed.
7. **Copy** — the client said he would write the text. What is here is a
   drafted first pass in his voice; the About page in particular should be
   rewritten by him.
8. **Legal pages** — templates that match how the site actually handles data.
   Have him read them; get a lawyer's eye on the terms if he wants the
   construction terms covered there too.

## Deploy (Netlify)

```bash
git init && git add -A && git commit -m "Initial site"
```

Push to GitHub, then in Netlify: **Add new site → Import from Git**. Build
command `npm run build`, publish `.next`; `netlify.toml` already sets this and
requests the Next.js plugin. Point the domain at it once bought.

## Accessibility

The `/accessibility` page commits to WCAG 2.1 AA, which the current build aims
at: keyboard-operable, visible focus rings, labelled fields, semantic headings,
contrast-checked palette, 44px+ tap targets. If you add sections later, keep
that true — the statement is a promise, not decoration.
