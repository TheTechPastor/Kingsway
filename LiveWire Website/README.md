# LiveWire Camps website

## Hosting proof — November 8, 2026

- Preview: https://livewire-preview.michael-2cf.workers.dev/
- Cloudflare Worker: `livewire-preview`
- Cloudflare account: `2cfa2b349ca32539da53cad70ea80ef7`
- Account currently belongs to Michael's Tech Pastor Solutions email; church ownership / succession arrangements remain to be decided.
- Source: `public/index.html`; deployment configuration: `wrangler.jsonc`.
- This is a hosting access test only. The existing GoDaddy site and livewirecamps.com domain were not changed.
- Registration currently links from the existing site to CampNetwork; future registration requirements remain undecided.

## Deployment

Wrangler 4.158.0 was used for the initial test. OAuth credentials are stored outside this project in an encrypted file protected by the macOS Keychain. Do not commit credentials.

```sh
npx --yes wrangler@4.158.0 whoami
npx --yes wrangler@4.158.0 deployments list
npx --yes wrangler@4.158.0 deploy
```

Original Hello World version: `70abc158-e92d-4a94-bfb6-17db86660206`.
Hosting test version: `af255d8e-b8bd-48c3-b7f3-d215f17f9aeb`.

Verified account access and deployment history reads, and publication of static HTML from this Mac. DNS, custom-domain, billing, database, and registration-system access have not been tested or granted by this setup. GitHub synchronization and rollback testing remain outstanding.

## First redesign draft — November 9, 2026

`public/` now contains the first responsive design draft, replacing the hosting-test page. It uses midnight navy, electric lime, coral, turquoise, and lavender, with a refreshed heartbeat/arrow logo concept based on Michael's supplied logo. The original reference is preserved in `public/assets/livewire-original.webp`.

The mountain/camping illustration is conceptual, not a photograph or representation of the actual camp facilities. All new marketing copy is draft copy for review. Camp dates, eligibility, prices, current photography, contact information, and registration remain placeholders. No registration or contact data is collected. The preview has `noindex,nofollow` metadata, which discourages indexing but does not restrict access.

Verified in the browser at desktop (1440px) and phone (390px) widths: assets load and there is no horizontal overflow. Mobile navigation, section navigation, and FAQ expansion were checked. Internal anchor destinations and asset files were also checked. Screenshot: `first-draft-desktop.png`.

## What We Believe — November 9, 2026

Added `/what-we-believe/` as a second page and linked it from the main navigation on both pages. The seven doctrinal statements and the Foursquare NW District camp identification were copied from `https://livewirecamps.com/what-we-believe-1`; wording is preserved, with whitespace normalized. Retained the original destination `https://www.foursquare.org/about/beliefs/`. New introduction and visual treatment are draft presentation copy. Verified source-text parity, phone/desktop overflow, mobile navigation, and return navigation. Screenshot: `beliefs-page-desktop.png`.

## Registration menu link — November 9, 2026

Both pages now include “Register Now!” linking to Michael’s supplied CampNetwork URL, `https://portal.campnetwork.com/Register/Register.php?camp_id=398109`, with `target="_blank"`, `rel="noopener noreferrer"`, and an accessible new-tab label. Updated the homepage FAQ and preview note to reflect the active external link. The portal’s available sessions and transaction flow have not been verified.

## Rotating photo gallery — November 9, 2026

Replaced the three photo placeholders with a looping 12-picture slideshow using the first 12 photographs from the existing livewirecamps.com gallery. Photographs are stored locally in `public/assets/slideshow/`; `sources.json` records their original URLs. Replace `camp-01.jpg` through `camp-12.jpg` to update photography without changing the slideshow. Full photographs are contained within a navy frame so portrait photos are not cropped.

The gallery advances every five seconds, with previous/next and pause/play controls. Rotation pauses during hover, keyboard focus, and when the browser tab is hidden. Reduced-motion preferences start it paused. Verified JavaScript syntax, 12 downloaded JPEGs, and browser navigation and pause controls.
