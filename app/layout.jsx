import './globals.css'
import { Toaster } from 'sonner'
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION } from '../lib/seo'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: '%s | Kshitiz Kumar' },
  description: SITE_DESCRIPTION,
  authors: [{ name: 'Kshitiz Kumar', url: SITE_URL }],
  creator: 'Kshitiz Kumar',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Kshitiz Kumar',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.BING_SITE_VERIFICATION
      ? { 'msvalidate.01': process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
}

export const viewport = {
  themeColor: '#050505',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#0a0a0a',
              color: '#F3F4F6',
              border: '1px solid #262626',
              borderRadius: '0',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '12px',
            },
          }}
        />
      </body>
    </html>
  )
}
