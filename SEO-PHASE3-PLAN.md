# SEO Phase 3 — New Pages & Content

> **Status:** Not started. Requires real business content before implementation.
> **Priority:** High for E-E-A-T signals and long-tail keyword targeting.

---

## Pages to Create

### 1. `/contact` — Contact Page
**SEO purpose:** Local SEO anchor; NAP (Name/Address/Phone) consolidation; Google Business Profile link.
**Schema:** `ContactPage` + `LocalBusiness` with `contactPoint`.
**Content needed from client:**
- Physical address (full, if public)
- Business hours (Mon–Fri 09:00–18:00 already in LocalBusiness schema)
- Email, WhatsApp number (already known: `hello@cherrypick.id`, `+6282326546380`)
- Embedded Google Maps iframe
- Contact form (or just WA button — current approach)

---

### 2. `/about` — About / Tim Kami
**SEO purpose:** E-E-A-T (Expertise, Experience, Authoritativeness, Trustworthiness) — critical for service businesses.
**Schema:** `AboutPage` + `Person` for each team member.
**Content needed from client:**
- Founder name, photo, brief bio, LinkedIn URL
- Team members (if any) — names, roles, photos
- Year founded, number of projects completed, specializations
- Any certifications, awards, or notable clients

---

### 3. `/privacy` — Privacy Policy
**SEO purpose:** Required for Google Analytics consent, Meta Pixel, and general credibility. Missing pages hurt domain trust.
**Schema:** `WebPage` with `name: "Privacy Policy"`.
**Content needed from client:**
- Data collected (analytics, pixel, contact forms)
- Data retention period
- Third-party services listed (Google, Meta, Cloudflare)
- Contact for data requests
- Effective date

---

### 4. `/terms` — Syarat & Ketentuan
**SEO purpose:** Credibility; required for e-commerce/service business trust signals.
**Content needed from client:**
- Service terms, payment policy, revision policy
- Intellectual property clause
- Limitation of liability
- Governing law (Indonesia)

---

### 5. Service Landing Pages (keyword cluster)
Each page targets a high-intent local search query. Link from Home, Blog, and each other.

| URL | Target Keyword | Schema |
|-----|---------------|--------|
| `/jasa-website-malang` | "jasa pembuatan website Malang" | `Service` + `LocalBusiness` |
| `/jasa-website-umkm` | "jasa website UMKM murah" | `Service` + `Offer` |
| `/jasa-website-company-profile` | "jasa website company profile" | `Service` + `Offer` |
| `/jasa-toko-online` | "jasa pembuatan toko online Indonesia" | `Service` + `Offer` |
| `/jasa-landing-page` | "jasa landing page murah" | `Service` + `Offer` |

**Content needed per page:**
- Unique 400–600 word description of the service
- Benefits specific to that segment
- Relevant portfolio examples (link to /portfolio)
- Pricing reference (link to /#pricing)
- FAQ specific to segment (3–5 questions)
- CTA to WhatsApp

---

### 6. Custom `/404` Page
**SEO purpose:** Retains users; prevents bounce on dead links; good UX signal.
**Content:** Brand-consistent design, links to Home / Portfolio / Blog / Contact, WA CTA.
**File:** `src/pages/404.astro`

---

## Real Testimonials (blocks schema)
Reviews in `SectionReview.astro` are currently placeholders (same names as hero avatars).
`Review`/`AggregateRating` schema is intentionally withheld until real reviews are collected.

**Action required:**
1. Collect 3–6 real client testimonials (name, role/company, review text, photo if possible)
2. Replace placeholder data in `src/components/Section/SectionReview.astro`
3. After replacement: add `Review` + `AggregateRating` to `LocalBusiness` JSON-LD in `src/layouts/Layout.astro`

---

## Content (Blog)
Current: 3 posts. Target: 15–20 posts for topical authority.

**Suggested topics:**
- "Tips memilih jasa pembuatan website yang tepercaya"
- "Perbedaan website statis dan dinamis untuk UMKM"
- "Cara optimasi SEO on-page untuk website bisnis lokal"
- "Kenapa website restoran perlu fitur reservasi online"
- "Landing page vs company profile: mana yang cocok untuk bisnis saya?"
- "Berapa lama waktu pembuatan website profesional?"
- "Panduan memilih domain .com vs .id untuk bisnis Indonesia"
- "Tips foto produk yang baik untuk website toko online"
- "Cara mengintegrasikan WhatsApp Business ke website"
- "Checklist sebelum website bisnis Anda go live"

---

## Technical prerequisites before Phase 3
- `og-image.jpg` (1200×630) must be created and placed in `/public` — affects all pages
- Real testimonials must replace placeholders before adding Review schema
- `/contact` page needs real address and map embed from client
