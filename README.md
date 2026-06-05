# Gitansh Manaktala — Professional Portfolio

A premium, executive-level personal portfolio website for an Event Coordinator and Strategic Partnerships professional in Higher Education.

Built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, **Shadcn-style UI components**, **PostgreSQL**, and **Prisma ORM**.

---

## Features

- Fully responsive (mobile-first) with sticky navbar and hamburger menu
- Premium corporate design inspired by McKinsey, Deloitte, THE, HBS, and WEF aesthetics
- Framer Motion animations: hero reveals, scroll triggers, counters, carousel, timeline
- Dark mode toggle with system preference support
- Loading screen and scroll progress bar
- Contact form with validation, PostgreSQL storage, and optional email notifications
- SEO: meta tags, Open Graph, Twitter cards, structured data, sitemap, robots.txt
- Gallery with masonry layout and lightbox
- International engagement map with animated connections

---

## Quick Start

### Prerequisites

- Node.js 20+ (LTS recommended)
- PostgreSQL database (local or cloud)

### 1. Install dependencies

```bash
cd portfolio
npm install
```

### 2. Configure environment

Copy the example env file and update values:

```bash
cp .env.example .env
```

Required variables:

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `NEXT_PUBLIC_SITE_URL` | Public site URL (e.g. `https://yourdomain.com`) |

Optional (email notifications):

| Variable | Description |
|----------|-------------|
| `SMTP_HOST` | SMTP server host |
| `SMTP_PORT` | SMTP port (default: 587) |
| `SMTP_USER` | SMTP username |
| `SMTP_PASS` | SMTP password / app password |
| `CONTACT_EMAIL` | Recipient for contact form notifications |

### 3. Set up the database

**Option A — Local PostgreSQL:**

```bash
# Create database
createdb gitansh_portfolio

# Push schema
npm run db:push

# Or run migrations
npm run db:migrate
```

**Option B — Prisma Postgres (local dev):**

```bash
npx prisma dev
# Use the DATABASE_URL provided by the CLI
npm run db:push
```

**Option C — Cloud (recommended for production):**

Use [Neon](https://neon.tech), [Supabase](https://supabase.com), [Railway](https://railway.app), or [Vercel Postgres](https://vercel.com/storage/postgres). Copy the connection string to `DATABASE_URL`.

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 5. Production build

```bash
npm run build
npm start
```

---

## Project Structure

```
portfolio/
├── prisma/
│   └── schema.prisma          # ContactMessage model
├── public/
│   ├── images/                # Headshot & gallery placeholders
│   └── resume.pdf             # Replace with actual resume
├── src/
│   ├── app/
│   │   ├── api/contact/       # Contact form API route
│   │   ├── layout.tsx         # Root layout, fonts, SEO
│   │   ├── page.tsx           # Main single-page site
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── animations/        # FadeUp, counters, section headers
│   │   ├── icons/             # Custom icons (LinkedIn)
│   │   ├── layout/            # Navbar, footer, theme, loading
│   │   ├── sections/          # All page sections
│   │   ├── seo/               # JSON-LD structured data
│   │   └── ui/                # Shadcn-style UI primitives
│   ├── generated/prisma/      # Prisma client (auto-generated)
│   └── lib/
│       ├── constants.ts       # Site content & data
│       ├── email.ts           # Nodemailer notifications
│       ├── prisma.ts            # Database client
│       └── validations/         # Zod schemas
└── .env.example
```

---

## Deployment

### Vercel (Recommended)

1. Push the project to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Add environment variables from `.env.example`
4. Deploy

Vercel will run `prisma generate` via the `postinstall` script automatically.

**After first deploy**, run migrations against your production database:

```bash
npx prisma migrate deploy
# or
npx prisma db push
```

### Docker / VPS

```bash
npm run build
npm start
# Runs on port 3000
```

Use a reverse proxy (Nginx/Caddy) with SSL in front of the Node process.

### Database migrations in CI/CD

Add to your deploy pipeline:

```bash
npx prisma migrate deploy
```

---

## Customization

| What to change | Where |
|----------------|-------|
| Personal info & content | `src/lib/constants.ts` |
| Colors & typography | `src/app/globals.css` |
| Headshot | Replace `public/images/headshot-placeholder.svg` |
| Gallery photos | Replace `public/images/gallery-*.svg` with real images |
| Resume | Replace `public/resume.pdf` |
| SEO & metadata | `src/app/layout.tsx` |

---

## API Reference

### `POST /api/contact`

Submit a contact form message.

**Body:**

```json
{
  "name": "Jane Doe",
  "email": "jane@university.edu",
  "organization": "Example University",
  "message": "I'd like to discuss a partnership."
}
```

**Responses:**

- `200` — Message saved successfully
- `400` — Validation error
- `429` — Rate limited (5 requests/hour per IP)
- `500` — Server error

Messages are stored in the `ContactMessage` table. Email notifications are sent if SMTP is configured.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| UI | Shadcn-style components (Radix UI) |
| Database | PostgreSQL |
| ORM | Prisma 7 |
| Validation | Zod |
| Email | Nodemailer |
| Theming | next-themes |

---

## License

Private — All rights reserved © Gitansh Manaktala
