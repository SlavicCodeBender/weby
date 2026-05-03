import Navbar from '../pages/components/Navbar'
import Hero from '../pages/components/Hero'
import Stats from '../pages/components/Stats'
import Services from '../pages/components/Services'
import Gallery from '../pages/components/Gallery'
import Contact from '../pages/components/Contact'
import Footer from '../pages/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
