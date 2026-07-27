# ATNOS — local static site

Built from two sources:

- `ados-site-preview.html` — the visual system (tokens, components, hero, dashboard preview, integration network, motion).
- `ADOS-site-content.pdf` — every word of the public site, in page order.

No build step, no dependencies. Open `index.html` in a browser.

## Running it

Double-click `index.html`, or serve the folder if you prefer a real origin:

```bash
npx serve "C:/PROJECTS CLAUDE/Website ATNOS"
```

Everything works from `file://` too — the shared chrome is injected by JavaScript rather than fetched as partials, precisely so it does.

## Pages

| File | Route in the content doc | Contents |
| --- | --- | --- |
| `index.html` | `/` | Hero, product preview, platform tabs, four capabilities, integration network, built-for-business, closing CTA |
| `about.html` | `/about` | Mission, vision, why the platform exists, five technology-philosophy positions |
| `security.html` | `/security` | 27 controls across encryption, authentication, access, infrastructure, monitoring; compliance; customer best practices; responsible disclosure |
| `contact.html` | `/contact` | Contact form, six reasons, six direct channels |
| `support.html` | `/support` | Knowledge-base topics, six FAQs |
| `status.html` | `/status` | Eight components, incident history |
| `developers.html` | `/developers` | Entry points, three steps to a first request, how ATNOS holds authority |
| `api.html` | `/docs/api` | Request/response, ten endpoints, seven webhook events, rate limits |
| `pricing.html` | `/pricing` (header link) | Scale and Enterprise, included-on-every-plan |
| `privacy-policy.html` | `/legal/privacy-policy` | Thirteen sections, retention schedule |
| `terms-of-service.html` | `/legal/terms-of-service` | Fifteen sections, key positions |
| `cookie-policy.html` | `/legal/cookie-policy` | Eight sections, four cookie categories |
| `data-deletion.html` | `/legal/data-deletion` | Nine sections, before-you-delete, retention timelines |

## Assets

- `assets/site.css` — tokens and every component, one stylesheet for all pages.
- `assets/site.js` — header, flyouts, mobile menu, footer, cookie banner, scroll reveal. Loaded by every page.
- `assets/home.js` — landing page only: starfield, dashboard preview, platform tabs, capability and trust grids, integration network.

Edit navigation or footer links in one place: the `NAV` and `FOOT` arrays at the top of `assets/site.js`.

## Editorial constraints carried over from the content doc

- No invented metrics, customer logos or testimonials.
- No guaranteed outcomes, percentages or timeframes.
- Every artefact labelled **Automated**, **Needs approval** or **Confirmed by you**.
- Every capability marked **Available** or **Planned**; certifications never claimed before award.
- Illustrative interfaces labelled as such wherever they appear.

## Known placeholders (from the source, not invented here)

- Mailboxes (`hello@`, `sales@`, `support@`, `partners@`, `privacy@`, `security@`) are reserved but not monitored.
- Status indicators are static — not yet wired to live monitoring.
- The four legal documents carry a visible "Pending legal review" banner; section bodies are outlines pending counsel.
- The contact form has no backend: it validates locally and confirms without sending.

## One thing that is not in the source

`pricing.html` is the only page with no copy in the content doc — the header lists a Pricing link but the document has no pricing section. It is built from what the source *does* say (the Scale and Enterprise plan names and limits from the API rate-limit table, support commitments, "fourteen days, no card", sales routing) and states plainly that no prices are published yet. Replace it when real pricing exists.
