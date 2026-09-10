# Manas Dedge

Final-year computer science engineering student in Pune. I build and run
[uniTAD](https://tadorg.com), a live platform with paying customers, across a
FastAPI backend, a Next.js site and a React Native app.

Most of what I know came from breaking that system and having to fix it in
production.

### What's public here

| | |
| --- | --- |
| **[RAGgoa](https://github.com/ManasDedge08/RAGgoa)** | Voice question-answering over retrieved passages in eleven Indian languages. Two-tier answers with an explicit 200 ms budget on the extractive tier, measured at a 99 ms median. The [latency report](https://github.com/ManasDedge08/RAGgoa/blob/main/reports/latency_report.md) says which number is which, and the [architecture note](https://github.com/ManasDedge08/RAGgoa/blob/main/ARCHITECTURE.md) says why there are two tiers at all. |
| **[manasdedge08.github.io](https://github.com/ManasDedge08/manasdedge08.github.io)** | My site. One HTML file, no build step, no external requests. |

### What isn't

uniTAD is private, because it is a live product with paying customers rather
than a portfolio piece. What working on it actually involves:

- **Deploys** — GitHub Actions ships the FastAPI backend to Render and the
  Next.js frontend to Vercel on every merge to `main`.
- **Migrations** — Alembic owns the schema alone across 39 migrations.
  `alembic upgrade head` runs before Uvicorn starts, and migrations are pushed
  before they are applied, so the deployed image can always resolve them.
- **Gates** — 344 backend pytest tests, Vitest on web and mobile, ESLint. The
  React Compiler found 21 real violations and they were fixed rather than
  suppressed.
- **Money** — Stripe webhooks for live subscription billing: idempotency,
  `past_due`, and incomplete payments.
- **An outage** — I once let local development share the production database.
  Recovering from that, isolating the environments and writing the runbook
  taught me more than the features did.

### Working with

`Python` `TypeScript` `SQL` `Bash` · FastAPI, PostgreSQL, Alembic, pgvector ·
Next.js, React Native (Expo) · Docker, GitHub Actions, Linux

### Also

**Drowsiness Detection System: A Real-Time Driver Monitoring System Using
Multi-Parameter Facial Analysis and CNN** — presented at ICCIMA 2026,
NIT Puducherry. Scopus-indexed. A custom CNN reading eye aspect ratio, head
pose and blink rate at 96.6% accuracy, 32 FPS.

---

[manasdedge08.github.io](https://manasdedge08.github.io) ·
[LinkedIn](https://linkedin.com/in/manas-dedge) · dedgemanas@gmail.com
