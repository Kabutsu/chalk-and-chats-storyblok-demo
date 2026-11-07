---
status: accepted
---

# No member accounts for now

The current Wix site has no accounts, and the other Admins haven't yet agreed to introduce them. Members stay anonymous: Competitors self-report their full name when logging Results (no Admin approval, which has worked fine so far), and merch uses guest checkout. Requiring sign-in for Results would also be a barrier to entry for a casual community. We considered email magic-link sign-in (option 2) and full membership with profiles/fees (option 3) and deferred both.

## Upgrade path to email magic-link sign-in

Designed so adding identity later is a small change rather than a rewrite:

- Treat a Member's display name as a plain string field on results/RSVPs/orders today, but route all reads/writes through one data-access module so a `memberId` can be added beside it later.
- Keep results, RSVPs and orders as server-side records (not Storyblok content), so they can later be linked to a person.
- Add an auth provider that supports passwordless email links (e.g. Auth.js or Clerk) behind Astro middleware; sign-in stays optional, so Newcomers can still browse everything.
- Backfill: match legacy name-only records to a Member by email on first sign-in, or leave them as "unlinked" entries.
- Only the member-specific pages (e.g. "my results", "my orders") and the results form would change; public pages are unaffected.
