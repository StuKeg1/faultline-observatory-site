# Traffic measurement boundary

## Purpose

Cloudflare-derived traffic data is contextual operational information. It is not an Institutional Health signal and must not be used as a proxy for public trust, institutional quality, or audience growth.

## Public presentation

The Institutional Health page labels Cloudflare's raw figures as **unique clients (unfiltered)** and **page views (unfiltered)**. They include automated traffic such as crawlers, deployment checks, and hostile scanning.

## Weekly reader-facing snapshot

The scheduled analytics workflow records a best-effort, rolling 13-week snapshot of reader-facing routes, country, device, and browser signals. It excludes known operational, asset, and hostile-probe paths.

This is not a people counter:

- Cloudflare adaptive analytics may sample data.
- Browser and device labels can include automation.
- A retained route is a reading signal, not evidence of human attention or approval.

## Referrer boundary

Referrer-host data is not available to this zone under its current Cloudflare access level. Do not expand token privileges or change Cloudflare plans solely to obtain it.

Reconsider this boundary only when there is a defined attribution decision, such as evaluating a named campaign or a controlled social-publication programme. Any such reconsideration requires a separate scope covering data need, privacy, retention, public disclosure, and cost.

## Retention

Cloudflare's detailed adaptive data window is limited. The weekly snapshot exists to preserve aggregate, non-personal historical signals before that window expires.
