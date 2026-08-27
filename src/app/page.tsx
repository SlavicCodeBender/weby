import SiteProvider from '../components/SiteProvider'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import QuoteModal from '../components/QuoteModal'

export default function Home() {
  return (
    <SiteProvider>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <QuoteModal />
    </SiteProvider>
  )
}
