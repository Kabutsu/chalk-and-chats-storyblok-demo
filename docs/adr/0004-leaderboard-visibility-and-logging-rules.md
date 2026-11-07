---
status: proposed
---

# Leaderboard visibility and Result logging rules: options, no decision yet

Not needed for the prototypes. Revisit when building the real site. Today only Admins see Results, by querying the database.

## Open questions and leaning

- **Visibility:** public Leaderboard, Admin-only, or Competitors only. *Leaning:* a public Leaderboard per Competition, split by Category (Men, Women, Open), updating live on the night. Past Competitions stay visible as a "Hall of Fame" archive. Trade-off: public names and scores.
- **Logging window:** Results can be logged any time, or only while a Competition is open. *Leaning:* only while open, with an Admin toggle on the Competition story. This gives a clear cut-off for deciding the winner.
- **Corrections:** Competitor re-logs, or asks an Admin. *Leaning:* the newest Result for the same Competitor and Problem replaces the earlier one, so mistakes need no Admin work.
- **Names:** shown exactly as logged (full names, to avoid collisions), consistent with ADR 0001.
