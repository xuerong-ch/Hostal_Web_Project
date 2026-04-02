function ContactSection() {
  return (
    <section className="py-24 px-8 bg-surface-container-low">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-headline text-4xl md:text-6xl text-on-surface mb-8">
          Hablemos
        </h2>
        <div className="space-y-4 mb-16">
          <p className="text-lg font-body text-on-surface-variant">
            +34 912 345 678
          </p>
          <p className="text-lg font-body text-on-surface-variant">
            hola@elretirohostel.com
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button className="flex-1 px-10 py-5 bg-gradient-to-r from-primary to-primary-container text-white text-sm font-semibold tracking-widest uppercase rounded-sm hover:opacity-90 transition-all duration-300 shadow-sm">
            Llamar Ahora
          </button>
          <button className="flex-1 px-10 py-5 text-on-surface text-sm font-semibold tracking-widest uppercase rounded-sm hover:bg-surface-container-highest transition-all duration-300 flex items-center justify-center gap-2 shadow-sm bg-surface-container-lowest">
            <span className="material-symbols-outlined">chat</span>
            WhatsApp Us
          </button>
        </div>
      </div>
    </section>
  )
}

export default ContactSection