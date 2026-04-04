import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../context/LanguageContext.jsx'

gsap.registerPlugin(ScrollTrigger)

const roomImages = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=1000&auto=format&fit=crop',
    alt: 'Single room with private bathroom, air conditioning, and TV.',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000&auto=format&fit=crop',
    alt: 'Double room with double bed or twin beds, private or shared bathroom.',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop',
    alt: 'Triple room with three separate beds, private bathroom, air conditioning, and TV.',
  },
]

function RoomsGallery() {
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

    tl.from('.rooms-title', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
    })
      .from(
        '.decor-line',
        {
          scaleX: 0,
          duration: 0.4,
          ease: 'power2.out',
        },
        '-=0.3'
      )
      .from(
        '.room-image-container',
        {
          clipPath: 'inset(100% 0 0 0)',
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.inOut',
        },
        '-=0.2'
      )
      .from(
        '.room-card-content',
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
        },
        '<0.5'
      )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-12">
        <div>
          <h2 className="rooms-title font-headline text-3xl md:text-5xl text-on-surface tracking-tight">
            {t.roomsTitle}
          </h2>
          <div className="decor-line w-12 h-1 bg-primary mt-4 origin-left"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.rooms.map((room, index) => (
            <div
              key={room.id}
              className="room-card group flex flex-col h-full bg-surface-container-lowest"
            >
              <div className="room-image-container aspect-[5/4] overflow-hidden">
                <img
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={roomImages[index].image}
                />
              </div>
              <div className="room-card-content flex flex-col flex-grow p-6">
                <h4 className="font-headline text-lg">{room.name}</h4>
                <div className="mt-1 mb-3">
                  <span className="text-sm text-on-surface-variant font-light">{room.price}</span>
                </div>
                <p className="text-xs text-on-surface-variant/80 leading-relaxed">
                  {room.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RoomsGallery