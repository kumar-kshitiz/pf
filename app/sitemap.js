import { SITE_URL } from '../lib/seo'

export default function sitemap() {
  // Only canonical pages belong here; section anchors are not separate pages.
  return [{ url: `${SITE_URL}/` }]
}
