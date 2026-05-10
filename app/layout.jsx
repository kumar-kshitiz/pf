import './globals.css'
import { Toaster } from 'sonner'

export const metadata = {
  title: 'Kshitiz Kumar | Portfolio',
  description: 'Kshitiz Kumar — Software Development Engineer building AI-driven scalable full-stack systems.',
  icons: {
    icon: 'data:,',
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
