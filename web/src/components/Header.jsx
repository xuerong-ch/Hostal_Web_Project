import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../context/LanguageContext.jsx'

gsap.registerPlugin(ScrollTrigger)

function Header() {
  const sectionRef = useRef(null)
  const { language, toggleLanguage, translations } = useLanguage()

  useGSAP(() => {
    gsap.from(sectionRef.current, {
      y: -100,
      duration: 0.8,
      ease: 'power3.out',
    })
  }, { scope: sectionRef })

  useGSAP(() => {
    ScrollTrigger.create({
      start: 50,
      onEnter: () => {
        gsap.to(sectionRef.current, {
          paddingTop: '1rem',
          paddingBottom: '1rem',
          backdropFilter: 'blur(16px)',
          duration: 0.3,
          ease: 'power2.out',
        })
      },
      onLeaveBack: () => {
        gsap.to(sectionRef.current, {
          paddingTop: '1.5rem',
          paddingBottom: '1.5rem',
          backdropFilter: 'blur(12px)',
          duration: 0.3,
          ease: 'power2.out',
        })
      },
    })
  }, { scope: sectionRef })

  return (
    <header
      ref={sectionRef}
      className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-md"
      style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-8">
        <div>
          <div className="text-xl font-bold tracking-[0.2em] text-primary font-headline uppercase">
            {translations[language].nav.brand}
          </div>
        </div>
        <div className="flex items-center ml-auto pl-4 md:pl-8">
          <button
            onClick={toggleLanguage}
            className="flex gap-1 text-xs md:text-sm font-headline tracking-widest"
          >
            <span className={language === 'es' ? 'text-primary' : 'text-on-surface-variant opacity-50 hover:opacity-80 transition-opacity'}>
              ES
            </span>
            <span className="text-on-surface-variant opacity-30">|</span>
            <span className={language === 'en' ? 'text-primary' : 'text-on-surface-variant opacity-50 hover:opacity-80 transition-opacity'}>
              EN
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header