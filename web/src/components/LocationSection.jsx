function LocationSection() {
  return (
    <section className="py-24 px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/3">
            <h2 className="font-headline text-3xl md:text-5xl text-on-surface tracking-tight mb-6">
              Encuéntranos
            </h2>
            <p className="text-on-surface-variant font-light leading-relaxed mb-8">
              Ubicados en el corazón cultural, combinamos la accesibilidad de la
              ciudad con la paz de nuestro retiro interior.
            </p>
            <div className="flex items-center gap-4 text-primary font-medium mb-6">
              <span className="material-symbols-outlined">location_on</span>
              <span>Pensión El Carmen, Madrid</span>
            </div>
            <a
              href="https://maps.app.goo.gl/rGMshoGX38KP1Aj97"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-container text-white text-sm font-medium tracking-widest uppercase rounded-sm hover:opacity-90 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-lg">map</span>
              Ver en Google Maps
            </a>
          </div>
          <div className="w-full md:w-2/3 h-96 bg-surface-container-highest overflow-hidden">
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