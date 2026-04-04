import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Footer() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      '.footer-content',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          once: true,
        },
      }
    )
  }, { scope: sectionRef })

  return (
    <footer ref={sectionRef} className="bg-surface w-full py-12 px-8 border-t border-outline-variant/15">
      <div className="footer-content max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-bold text-primary font-headline tracking-widest">
          PENSIÓN EL CARMEN
        </div>
        <p className="font-headline text-xs tracking-wide text-stone-500">
          © {new Date().getFullYear()} Pensión El Carmen. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer