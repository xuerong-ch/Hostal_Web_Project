import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useLanguage } from '../context/LanguageContext.jsx'

function HeroSection() {
  const containerRef = useRef(null)
  const imageRef = useRef(null)
  const overlayRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonRef = useRef(null)
  const { language, translations } = useLanguage()
  const t = translations[language]

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from(imageRef.current, {
      scale: 1.1,
      duration: 1.5,
      ease: 'power2.out',
    })
    .from(overlayRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
    }, '<')
    .from(titleRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
    }, '-=0.4')
    .from(subtitleRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
    }, '-=0.3')
    .from(buttonRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.out',
    }, '-=0.3')

  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center">
      <div className="absolute inset-0 z-0">
        <img
          ref={imageRef}
          alt="Hostel Interior"
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop"
        />
        <div ref={overlayRef} className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="relative z-10 px-6 max-w-4xl">
        <h1
          ref={titleRef}
          className="font-headline text-4xl md:text-7xl text-white mb-6 leading-tight tracking-tight"
        >
          {t.hero.title} <br /> {t.hero.titleLine2}
        </h1>
        <p
          ref={subtitleRef}
          className="font-body text-lg md:text-xl text-white/90 mb-10 tracking-wide font-light"
        >
          {t.hero.subtitle}
        </p>
        <a
          ref={buttonRef}
          className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-primary-container text-white text-sm font-medium tracking-widest uppercase rounded-sm hover:opacity-90 transition-all duration-300 shadow-lg shadow-black/10"
          href="#"
        >
          {t.hero.cta}
        </a>
      </div>
    </section>
  )
}

export default HeroSection