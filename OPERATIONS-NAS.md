# Faultline Observatory — NAS Operations Runbook (Private/Tailnet Layer)

> **Scope note:** This document governs the **private, Synology-hosted**
> deployment of Faultline Observatory, reachable only over Tailscale.
> It is a separate operational layer from `OPERATIONS.md`, which governs
> the **public production site** at `faultlinewatch.com` (Cloudflare
> Pages, Vite + React SPA, repo `StuKeg1/faultline-observatory-site`).
>
> **Do not conflate the two.** This NAS deployment is currently a
> private, tailnet-only environment — a static HTML snapshot served
> from a Synology NAS, with no connection to the Cloudflare deployment
> pipeline, no MCP endpoint, and no public DNS. Whether the production
> domain should ever point here is a separate, not-yet-made
> architectural decision.

**Platform:** Synology DS218+ (`syn2`), DSM 7.2.1, LAN `192.168.1.37`
**Status:** Self-hosted on NAS, tailnet-private, persists across reboots
**Last verified:** 2026-06-20 (full reboot test passed)
**Visibility:** Tailnet-only — not reachable from the public internet (Funnel deliberately not enabled)

---

## Architecture

```
GitHub (StuKeg1/faultline-observatory, private repo — NOT the -site repo)
        |  (read-only deploy key, git pull)
        v
/volume1/Projects/Faultline-Observatory   <- static HTML, no build step
        |  (read-only bind mount)
        v
faultline-web container (nginx:alpine, port 8088)
        |  (proxied)
        v
tailscale container (non-ephemeral node: syn2-container-1)
        |  tailscale serve --bg --https=443
        v
https://syn2-container-1.tail14eee2.ts.net/   <- tailnet-private, no Funnel
```

| Component | Where | Notes |
|---|---|---|
| Site code | `/volume1/Projects/Faultline-Observatory` | Static HTML, no `package.json`/build step. Different repo from the public `-site` deployment. |
| Web server | Container Manager project `faultline-web` | `nginx:alpine`, compose at `/volume1/docker/faultline-web` |
| Tailscale | Container Manager project `tailscale` | `/volume1/docker/tailscale`, non-ephemeral via `TS_STATE_DIR` |
| Tailnet node | `syn2-container-1` | `100.91.41.11`, key expiry ~5 months from setup |
| Deploy key | `~/.ssh/faultline_deploy_key` on NAS | Read-only, GitHub deploy key |
| Boot task | DSM Task Scheduler job "TUN" | Runs `modprobe tun` + creates `/dev/net/tun` on every boot |

SSH access: `ssh sjoerd@192.168.1.37 -p 28` (note: username is `sjoerd`, not `sjoerdkeg`)

---

## How this came to be (migration log)

1. **Confirmed NAS access** — SSH on port 28, correct username `sjoerd`.
2. **Stood up Tailscale as a Docker container**, non-ephemeral — required `network_mode: host`, `NET_ADMIN`/`NET_RAW`, `/dev/net/tun` mount, and `TS_STATE_DIR=/var/lib/tailscale` (the env var, not just the volume mount, was the key to avoiding ephemeral nodes). Resulting node: `syn2-container-1`.
3. **Cloned the private repo** to `/volume1/Projects/Faultline-Observatory` using a read-only deploy key. Installed Git via DSM Package Center's "Git Server" package.
4. **Diagnosed the app type** by inspecting the file listing — confirmed static HTML (no `package.json`/`src`/`vite.config`), ruling out the need for a Node build container.
5. **Fixed permissions** — repo cloned with `600`/`700` owner-only perms, which would've blocked the web server. Fixed with `chmod -R o+rX`.
6. **Deployed nginx:alpine** as the web server, bind-mounting the repo read-only, serving on port 8088. Verified on LAN first.
7. **Exposed via Tailscale Serve** (`tailscale serve --bg --https=443 http://192.168.1.37:8088`), declining Tailscale Funnel to keep it tailnet-private rather than public-internet-facing.
8. **Solved the `tun` module reboot gap** — DSM doesn't persist the kernel module across restarts, so created a Task Scheduler boot-up job to run `modprobe tun` and ensure the `/dev/net/tun` device node exists.
9. **Full reboot test passed** — `tun` module auto-loaded, both containers (`faultline-web`, `tailscale`) came back healthy, and the site was reachable on `.ts.net` from a phone with zero manual intervention.

---

## Operations v1

Run these from an SSH session on the NAS (`ssh sjoerd@192.168.1.37 -p 28`).

### `update` — pull latest content into the NAS static site
```bash
cd /volume1/Projects/Faultline-Observatory
git pull
```
No restart needed — nginx serves the bind-mounted directory directly, so changes are live immediately on next page load.

### `status` — check containers + Tailscale serve config
```bash
sudo docker ps --filter "name=faultline-web" --filter "name=tailscale"
sudo docker exec tailscale tailscale status
sudo docker exec tailscale tailscale serve status
```
Look for: both containers `Up`, the tailnet node listed as active, and the serve config still proxying `http://192.168.1.37:8088`.

### `logs` — inspect nginx / Tailscale logs
```bash
sudo docker logs faultline-web --tail 100
sudo docker logs tailscale --tail 100
```
Add `-f` to either command to follow live.

### `reboot test` — confirm the NAS layer survives a restart
```bash
sudo reboot
```
Wait ~2-3 minutes, then SSH back in and run:
```bash
lsmod | grep tun                 # module should be loaded, no manual modprobe needed
sudo docker ps                   # both containers should show "Up"
```
Then from a tailnet-connected device, load:
```
https://syn2-container-1.tail14eee2.ts.net/
```

---

## Implementation Decisions

### 2026-06-21 — `attention`/`doctor` health check: HTTP reachability, not Docker socket

**Context:** Initial design for `faultline attention` checked container health via
`docker inspect`. In practice, `sjoerd` has no access to `/var/run/docker.sock`
(owned `root:root`, mode `660`), and Synology DSM exposes no `docker` group to
join.

**Options considered:**
1. Add `sjoerd` to a group sharing root's GID — rejected, grants root-equivalent
   Docker access for a command contracted to "observe only."
2. Add a narrowly-scoped sudoers rule permitting only `docker inspect` on this
   container — rejected, because no `visudo` exists on this system to validate
   sudoers syntax before it takes effect, and a malformed drop-in file risks
   breaking `sudo` entirely, including the existing `administrators`-group rule
   that currently grants `sjoerd` sudo at all.

**Decision:** `attention` and `doctor` check local HTTP reachability of
`faultline-web` on `127.0.0.1:8088` instead of querying Docker directly. This
requires no new privileges, avoids the sudoers risk entirely, and is arguably
the more correct check regardless — it tests what's actually being observed
(is the site being served) rather than a layer removed from it (is the
container process running), and stays substrate-agnostic if the deployment
mechanism ever changes.

---

## Relationship to the public production site

| | Public production (`OPERATIONS.md`) | Private NAS layer (this doc) |
|---|---|---|
| Domain | `faultlinewatch.com` | `syn2-container-1.tail14eee2.ts.net` (tailnet only) |
| Stack | Vite + React SPA | Static HTML, no build step |
| Repo | `StuKeg1/faultline-observatory-site` | `StuKeg1/faultline-observatory` |
| Deploy | Cloudflare Pages, auto on push to `main` | Manual `git pull` on the NAS |
| Reachable from | Public internet | Tailnet devices only |
| MCP endpoint | Yes (`mcp.faultlinewatch.com/mcp`) | No |

**Open architectural question (not yet decided):** whether the public domain should ever point at the NAS instead of Cloudflare Pages, or whether the NAS layer remains a permanent private/staging environment alongside production. Treat this as a separate decision, not something either runbook should pre-empt.

---

## Known open items
- Tailscale node key expiry is ~5 months out from setup — will need re-auth before then or it'll drop off the tailnet.
- `open-webui` container on the same NAS shows as "unhealthy" in `docker ps` — unrelated to Faultline, worth a look separately.
- No backup/staging relationship has yet been formally defined between this NAS layer and the production Cloudflare site — see table above.
