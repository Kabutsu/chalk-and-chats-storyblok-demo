# Chalk & Chats website: requirements

Gathered in a grilling session before prototyping. Vocabulary is defined in [CONTEXT.md](../CONTEXT.md); decisions and open options are in [docs/adr/](./adr/).

## Goals

- Replace the Wix site with a professional, modern, clean, mobile-friendly site that non-technical Admins can edit through Storyblok.
- Primary audiences: **Newcomers** deciding whether to join, and **Members** who dislike the WhatsApp group.
- Calls to action: **primary** is Join the WhatsApp group; **secondary** is the Wednesday Session at The Climbing Hangar (links out to the Wall's booking page).
- The WhatsApp invite link is public (already in the Instagram bio; "Approve new participants" is on). Store it as one editable Storyblok field so it can be rotated.

## Prototype scope

- **Pages:** Home, Events, Merch, About / Your First Session. Competitions and the Result form are **out of scope**.
- **Variants (4), all four pages each:** two Warm and Social, one Crisp and Sporty, one Calm and Minimal. Warm and Social is the preferred vibe.
- **Build:** plain Astro pages with dummy content shaped like future Storyblok block fields; sections are components that map onto future blocks. Each variant lives under its own route (e.g. `/prototype/warm-1`).
- **Styling:** plain CSS with design tokens per variant (base colour `#437032`). Light front-end interaction only (calendar view toggle, merch size/colour picker, `<details>` accordions, mobile menu) using vanilla JS. No backend and no React for now.
- **Quality bar:** mobile-first, checked at phone width. **Accessibility is non-negotiable** (target WCAG 2.2 AA: contrast, keyboard navigation, visible focus, semantic landmarks, alt text, reduced-motion support, captions/transcript for the video on the real site). Fast mobile load.
- **Admin-editable (Storyblok) candidates:** Home hero photo and FAQ entries, plus copy, images, the WhatsApp link, Events schedule and Merch Drop content.
- **Dummy content:** realistic copy (Southampton, The Climbing Hangar, the real Session patterns), not lorem ipsum.
- **Existing boilerplate** in `src/layouts`, `src/pages` and `src/storyblok` (from a Storyblok tutorial) may be replaced.
- **Assets** (in `src/images/`): logo (SVG/PNG/JPG, spelled-out "Chalk and Chats" lockup), AI-generated climbing images (placeholders until members' real photos), and the Welcome Video.

## Pages

### Home
Hero with the primary and secondary calls to action; "What is Chalk & Chats?" section with the Welcome Video beside short intro copy; the next few Events; a Merch teaser; an Instagram link. Name is written "Chalk & Chats" in copy, titles and nav.

### Events
- List and month views, filterable by type (Session, Social, Competition, Trip).
- Recurring Sessions come from a schedule: every Wednesday (The Climbing Hangar) and every third Monday (a second Wall).
- Event fields: title and type badge, date/time, Wall or location with map link, description, cost as plain text (Wall entry is paid to the Wall), optional external booking link (only the Wednesday Session has one), optional cover photo, "Add to calendar" (.ics).
- Migrating the existing calendar is out of scope.

### Merch
- Clothing only (shirts, hoodies, tank tops), a few colours, sizes S to XL; range may grow.
- Sold in **Drops**, made to order in bulk, collected at a Session (no shipping).
- States to design: **Open** (size/colour picker, price, closing date, collection info, optional countdown), **Closed** (sold out for this round, orders being fulfilled), **No Drop planned** (friendly message pointing to WhatsApp). There is no "Upcoming" state; Drops happen when demand justifies one.
- Checkout is a visual stub.

### About / Your First Session
Photo-led community story, a beginner-friendly "Your first Session" guide (no kit hire; Wednesday booking link), cost info, a small FAQ, contact email (no form), Instagram link.

## Welcome Video
- Source is 205 MB, so it's gitignored. A compressed 720p copy (15 MB, portrait 9:16) and a poster frame are in `src/images/`.
- Prototypes: poster plus a stubbed play button, in a portrait frame next to the intro copy on desktop and full-width on mobile.
- Real site: leaning towards an unlisted YouTube (privacy-enhanced) embed with a click-to-load facade, URL stored as a Storyblok field.

## Later (not in the prototypes)

- **Interest tally** on the "No Drop planned" state: anonymous counts per Merch item and size, possibly shown publicly ("23 people want one") to build momentum. No personal data stored.
- **Competitions:** Result form (name, Category, Problem, Zone), Leaderboard per Category. Zones are the same for every Problem; points per Zone are set per Competition; Problems and points live in Storyblok. See ADR 0004 for visibility/window/correction options.
- **Real site styling:** Tailwind preferred.
- **Back-end decisions (not yet made):** Stripe vs Shopify for payments (ADR 0002, leaning Stripe); Results storage (ADR 0003, leaning Postgres via Supabase or Vercel); optional email magic-link accounts later (ADR 0001).
