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
