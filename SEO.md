# Search visibility for kshitizkumar.in

The site uses a canonical HTTPS URL, a crawlable sitemap and robots file, server-rendered profile content, Person/ProfilePage/WebSite structured data, social previews and a favicon. Identity information comes from `lib/data.js`; domain and search copy live in `lib/seo.js`.

## After deploying

1. Verify a Domain property for `kshitizkumar.in` in [Google Search Console](https://search.google.com/search-console) using the DNS TXT record Google provides. This covers HTTP/HTTPS and subdomains. Alternatively, verify a URL-prefix property using the HTML token in `GOOGLE_SITE_VERIFICATION` and rebuild.
2. Submit `https://kshitizkumar.in/sitemap.xml` in Search Console. Inspect `https://kshitizkumar.in/`, run the live URL test, and request indexing. Check Google's selected canonical and whether the rendered page includes the name, biography and projects.
3. Add the site to [Bing Webmaster Tools](https://www.bing.com/webmasters/), import your verified Search Console property or set `BING_SITE_VERIFICATION`, and submit the same sitemap.
4. Confirm the host serves HTTPS successfully, redirects HTTP to HTTPS, and has a valid certificate for both the apex domain and `www`. The application permanently redirects `www.kshitizkumar.in` to `kshitizkumar.in`; DNS and certificates still need to be configured at the host. Keep any deployment preview domains out of the index using the host's preview protection settings.
5. Add `https://kshitizkumar.in/` to your GitHub profile, LinkedIn website field and other profiles you control. Use your real name consistently. Link relevant project repositories back to this portfolio where useful.
6. Validate the live homepage with [Google's Rich Results Test](https://search.google.com/test/rich-results) and [PageSpeed Insights](https://pagespeed.web.dev/). Monitor Search Console's indexing, Core Web Vitals and search performance for “Kshitiz”, “Kshitiz Kumar” and relevant project searches.

## Ongoing improvements

Publish useful, original project case studies with verified repository/demo URLs, implementation decisions, screenshots and measurable results. Add separate pages to the sitemap when they exist, with unique titles and canonicals. Do not add duplicate keyword pages or invented credentials. Keep profile and project facts accurate.

Ranking is determined by the search engine, regardless of browser. The single name “Kshitiz” competes with other people and meanings; no code change guarantees a first position or indexing. Google says changes can take hours to months to appear. Follow the [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) and evaluate real impressions and clicks over time.

## Local verification

Run `npm run build`, then `npm start`. Check `/`, `/robots.txt`, `/sitemap.xml`, `/icon.svg` and `/opengraph-image`. The homepage HTML should contain the full profile before JavaScript executes, exactly one canonical link and the JSON-LD graph. API responses should have `X-Robots-Tag: noindex`; unknown paths should return 404.
