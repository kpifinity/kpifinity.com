# kpifinity.com

The Kpifinity Inc. website. A custom static site (HTML and CSS, no build step), designed to deploy on GitHub Pages under the `kpifinity` GitHub organisation, alongside `ski-framework`.

## Structure

```
kpifinity-www/
  index.html          Home
  capabilities.html   The four practices
  work.html           Case studies + client list
  studio.html         SKI + FinLII
  insights.html       Point of view + newsletter
  firm.html           Story, timeline, founders, the name
  contact.html        Contact + enquiry form
  assets/css/site.css Design system (one stylesheet)
  assets/img/         Logo + favicon
  CNAME               Custom domain (kpifinity.com)
  .nojekyll           Serve files as-is on GitHub Pages
  build.py            Generates the HTML pages from shared templates
```

Edit content in `build.py` and run `python3 build.py` to regenerate the pages, or edit the HTML directly for one-off tweaks.

## Preview locally

From this folder:

```
python3 -m http.server 8000
```

Then open http://localhost:8000

## Deploy to GitHub Pages

1. Create a repository under the `kpifinity` org, e.g. `kpifinity/kpifinity.com`.
2. Push the contents of this folder to the `main` branch.
3. In the repo: Settings, Pages, Source = Deploy from a branch, Branch = `main`, folder = `/ (root)`.
4. The included `CNAME` sets the custom domain to `kpifinity.com`. In your DNS, point the apex `kpifinity.com` to GitHub Pages (A records to 185.199.108–111.153) and `www` as a CNAME to `kpifinity.github.io`.
5. Enable "Enforce HTTPS" once the certificate provisions.

## Still to add (Phase 2)

- Real Insights articles (currently in-house point-of-view summaries) and the newsletter signup wired to a provider.
- Founder headshots on the Firm page.
- A working contact form: the current form uses a mailto fallback; connect Formspree or similar for reliable delivery.
- Optional individual case-study pages linked from Work.
