import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../context/LanguageContext.jsx'

gsap.registerPlugin(ScrollTrigger)

function ValueProposition() {
  const sectionRef = useRef(null)
  const { language, translations } = useLanguage()
  const t = translations[language]

  useGSAP(() => {
    gsap.from('.value-text', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-12 px-8 bg-surface">
      <div className="max-w-3xl mx-auto text-center">
        <p className="value-text text-lg md:text-2xl leading-relaxed text-on-surface-variant font-light">
          {t.valueProposition}
        </p>
      </div>
    </section>
  )
}

export default ValueProposition