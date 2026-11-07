---
status: proposed
---

# Results storage: options considered, no decision yet

Competition Results are self-reported submissions, so they need server-side storage (Storyblok holds content, not submissions). The current Wix site saves them to a DB that Admins have to query, which is awkward for non-technical people. The prototypes are backend-agnostic; this records the options for when the site is wired up.

## Considered options

- **Postgres** (Supabase, which the developer already knows, or Vercel-hosted Postgres): the Leaderboard needs summing by Category, which a database does naturally. Admins would need an Admin-only Results page showing the Leaderboard, with a CSV export. **Current leaning.**
- **Airtable or Google Sheets**: Admins can read raw Results immediately with no admin UI to build. Less robust and rate-limited, but adequate at this scale. A legitimate fallback.
- **Storyblok (Management API, one story per Result)**: keeps everything in one tool, but it's the wrong tool for user submissions.

## Consequences

Whichever is chosen, access Results through a single data-access module so the store can be swapped, and so a member identity can be added later (see ADR 0001).
