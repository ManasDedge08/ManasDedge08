# Manas Dedge

Final-year computer science engineering student in Pune. I build and run
[uniTAD](https://tadorg.com), a live platform where students find housing,
jobs, meal plans, events and discounts, and pay for tickets and Premium. One
FastAPI backend serves a Next.js site and a React Native app.

Most of what I know came from breaking that system and having to fix it in
production.

### What's public here

| | |
| --- | --- |
| **[tg-fraud-agent](https://github.com/ManasDedge08/tg-fraud-agent)** | An agent that investigates card-fraud alerts on a TigerGraph knowledge graph over MCP. A gradient-boosting scorer trained on 5,565 closed cases gives the probabilities and a policy module gives the actions; the LLM only explains, so all 20 benchmark cases reproduce exactly. Graph traversal found an undocumented ring of 19 cards joined by one device. |
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
- **Money** — Stripe webhooks for ticket sales and subscription billing:
  idempotency, `past_due`, and incomplete payments.
- **A second client** — an Expo app on the same API, held to design parity
  with the web. Its analytics wait for consent in three states, not a boolean,
  so the launch event is held rather than lost while the user decides.
- **An outage** — I once let local development share the production database.
  Recovering from that, isolating the environments and writing the runbook
  taught me more than the features did.

### Working with

`Python` `TypeScript` `SQL` `Bash` · FastAPI, PostgreSQL, Alembic, pgvector ·
Next.js, React Native (Expo) · TigerGraph, GSQL, scikit-learn ·
Docker, GitHub Actions, Linux

### Also

**Drowsiness Detection System: A Real-Time Driver Monitoring System Using
Multi-Parameter Facial Analysis and CNN** — presented at ICCIMA 2026,
NIT Puducherry. Scopus-indexed. A custom CNN reading eye aspect ratio, head
pose and blink rate at 96.6% accuracy, 32 FPS.

---

[manasdedge08.github.io](https://manasdedge08.github.io) ·
[LinkedIn](https://linkedin.com/in/manas-dedge) · dedgemanas@gmail.com
