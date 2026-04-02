const rooms = [
  {
    id: 1,
    name: 'Suite Ejecutiva',
    price: 'Desde $120 / noche',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDpwB-T8N97cTmwonCNwsIAEc175YeXUwzBO0QTBJzldQ0uPnCcbunzdim1R4w2xIJbw9olC7Dmz7sw7KafnVCiWKoBhNhAhPxtO3PBRwNsyTLa1EMcbMnfsb4ZdUsXvLagsbUBB0f7oC7YkLj0BHTOhzh58ux51D0zT-lt2NdnKjyZREAqXzCTI87p7d3220Lv76Pl5w0Bgw5xP4Q8XRYj3wuXv6T2srO5C-j_RFAwi1M5gnkQyXkyjSW68YIi7CduC17HwSuIz7o',
    alt: 'Elegant queen suite with minimalist decor, high-thread count linens, and large windows overlooking a city garden.',
  },
  {
    id: 2,
    name: 'Habitación Doble Deluxe',
    price: 'Desde $85 / noche',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA84V3NxV04UoSh9L-RDQ6WVXsdMx2mB1DmtPlKu0hBIE1KXuZE8ReH8f8Z61R3xkUtRdRrscFIfzpgmAcXZ3diMYVQkwafBs0IdZlp29iFG0OWXmBFNqc9FmLF2QVDuHXQ-P1iSbgM9YfpVpucogrq3Af5ysATROWtVFzdLgTUQCHLN5rxdeuzIbG5QaG9Iw8MtzVqV7veTR2P7ehn-gEJDiYQSYJ3gtwTBRJrqgjU_GXTFJZ2qXYpSp2KDJtrLNYSRHX4nVH_IjU',
    alt: 'Cozy double room with terracotta accents, designer lighting fixtures, and artisanal wooden furniture.',
  },
  {
    id: 3,
    name: 'Estudio Individual',
    price: 'Desde $65 / noche',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDs2YhJ-yavUrc_HKyamZsAoBTZ0czvo7PHFQEON3V40GDn8UdubTPy3p8WDQt60AZ0gzDgVbHP_rCpflUdSGk1DXbdWVxOvEIcDxe4EU67_fTn4Qqp7XNZSP51094zOkT_GtNlfvYD3pOUrI8UadaAtBx7iMsg4BrkG4P5mn7m-T_7pBrAdaoKQ0USkFhotV2SNaUgZVWtTHYqwepirtDezXgoiXXwAmlxyF2uD2qtgbWEJMbJAlDHOYrSmoKCVKG-zu-YiIveGMg',
    alt: 'Minimalist single room with premium bedding, a small desk, and large circular mirror.',
  },
]

function RoomsGallery() {
  return (
    <section className="py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-12">
        <div>
          <h2 className="font-headline text-3xl md:text-5xl text-on-surface tracking-tight">
            Nuestras Habitaciones
          </h2>
          <div className="w-12 h-1 bg-primary mt-4"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="group relative"
            >
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={room.image}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-surface-container-lowest/90 backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="font-headline text-lg">{room.name}</h4>
                <p className="text-sm text-on-surface-variant font-light">
                  {room.price}
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