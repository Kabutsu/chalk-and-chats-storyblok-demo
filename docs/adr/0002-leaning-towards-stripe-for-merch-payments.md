---
status: proposed
---

# Leaning towards Stripe for Merch payments

Merch is sold in Drops and today's flow (order, email Admins, send bank details, wait for transfer) is manual. We're leaning towards Stripe Checkout to take payment online, with the Drop window and a bulk-order export as the only custom parts. Shopify (Buy Button/Storefront API) is the main alternative: it gives Admins variants, inventory and order management out of the box, but costs a monthly fee that is hard to justify for ~150 Members with occasional Drops. No hard decision yet; the prototypes stay backend-agnostic and the checkout is a visual stub.
