const features = [
  {
    icon: 'home',
    title: 'Ambiente boutique para el descanso',
    description:
      'Espacios diseñados para tu paz mental, alejados del bullicio urbano sin salir de la metrópolis.',
  },
  {
    icon: 'subway',
    title: 'A minutos de la estación Retiro',
    description:
      'Conexión directa con los puntos más importantes de la ciudad a solo pasos de nuestra puerta.',
  },
  {
    icon: 'shopping_bag',
    title: 'Cerca del Centro Comercial Galería',
    description:
      'Acceso privilegiado a las mejores tiendas, restaurantes y vida cultural de la zona.',
  },
]

function ValueProposition() {
  return (
    <section className="py-24 px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div
              key={feature.icon}
              className="group flex flex-col items-center text-center p-8 bg-surface-container-low transition-all duration-300 hover:bg-surface-container-lowest"
            >
              <div className="mb-6 text-primary">
                <span className="material-symbols-outlined text-4xl">
                  {feature.icon}
                </span>
              </div>
              <h3 className="font-headline text-xl mb-4 text-on-surface">
                {feature.title}
              </h3>
              <p className="text-on-surface-variant font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValueProposition