import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../context/LanguageContext.jsx'

gsap.registerPlugin(ScrollTrigger)

const contactMethods = [
  {
    id: 'call',
    icon: 'call',
    hrefKey: 'call',
    href: 'tel:+34000000000',
  },
  {
    id: 'whatsapp',
    icon: 'chat',
    hrefKey: 'whatsapp',
    href: 'https://wa.me/34000000000',
  },
  {
    id: 'email',
    icon: 'mail',
    hrefKey: 'email',
    href: 'mailto:hola@ejemplo.com',
  },
]

function ContactSection() {
  const sectionRef = useRef(null)
  const { language, translations } = useLanguage()
  const t = translations[language]

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        once: true,
      },
    })

    tl.fromTo(
      '.contact-title',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
    )
      .fromTo(
        '.contact-button',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' },
        '-=0.2'
      )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 px-8 bg-surface">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="contact-title font-headline text-3xl md:text-5xl text-on-surface tracking-tight mb-16">
          {t.contact.title}
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {contactMethods.map((method) => (
            <a
              key={method.id}
              href={method.href}
              target={method.id === 'whatsapp' ? '_blank' : undefined}
              rel={method.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
              className="contact-button flex-1 flex items-center justify-center gap-3 px-8 py-6 bg-surface-container-lowest rounded-sm hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-2xl text-primary">
                {method.icon}
              </span>
              <span className="text-sm font-medium tracking-wide text-on-surface">
                {t.contact[method.hrefKey]}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactSection