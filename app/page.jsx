import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Timeline from '../components/Timeline'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION, structuredData } from '../lib/seo'

export const metadata = {
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    url: `${SITE_URL}/`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Kshitiz Kumar',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F3F4F6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
