import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import ValueProposition from './components/ValueProposition.jsx'
import RoomsGallery from './components/RoomsGallery.jsx'
import LocationSection from './components/LocationSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <RoomsGallery />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App