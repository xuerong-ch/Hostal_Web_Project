import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../context/LanguageContext.jsx'

gsap.registerPlugin(ScrollTrigger)

function LocationSection() {
  const sectionRef = useRef(null)
  const { language, translations } = useLanguage()
  const t = translations[language]

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })

    tl.from('.location-content', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
    })
      .from(
        '.location-map-container',
        {
          scale: 0.95,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.3'
      )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="location-content w-full md:w-1/3">
            <h2 className="font-headline text-3xl md:text-5xl text-on-surface tracking-tight mb-6">
              {t.location.title}
            </h2>
            <p className="text-on-surface-variant font-light leading-relaxed mb-8">
              {t.location.description}
            </p>
            <div className="flex items-center gap-4 text-primary font-medium mb-6">
              <span className="material-symbols-outlined">location_on</span>
              <span>{t.location.address}</span>
            </div>
            <a
              href="https://maps.app.goo.gl/rGMshoGX38KP1Aj97"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-container text-white text-sm font-medium tracking-widest uppercase rounded-sm hover:opacity-90 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-lg">map</span>
              {t.location.cta}
            </a>
          </div>
          <div className="location-map-container w-full md:w-2/3 h-96 bg-surface-container-highest overflow-hidden rounded-sm shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189.49295957675207!2d-3.6381555!3d40.5440778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422cf3c857ef61%3A0xb37c68e57eec5945!2spension%20el%20carmen!5e0!3m2!1ses!2ses!4v1775149890858!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Pensión El Carmen"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection