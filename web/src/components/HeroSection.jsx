function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center">
      <div className="absolute inset-0 z-0">
        <img
          alt="Boutique Hostel Interior"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBomudeIRANOz6k6_pQQTCjigKxkdiw2xbVr6wVmiBKhvyBwWqWx20p5_J_ib2gDYxvdm1oOW_lwZedeI6GVs1MKHmXhMOLLCbFb_o1_1bw3uH-Hxhy4khQiF99xqA8m4ZY4HbzZUF9qDhRyBjU-4orbuvFpkOjAegYeyKvyQ1FQO4VDxJJFqMADsKfeJdDXF55rV6Ipv58Clp7NscAa53-bX-I9ZZjMeDJZHEnbhBaUCu33WecoNnp4I4BQXTyLEtjofY-4MDXga0"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="relative z-10 px-6 max-w-4xl">
        <h1 className="font-headline text-4xl md:text-7xl text-white mb-6 leading-tight tracking-tight">
          Tu Refugio Boutique <br /> en la Ciudad
        </h1>
        <p className="font-body text-lg md:text-xl text-white/90 mb-10 tracking-wide font-light">
          Tranquilidad y diseño a tu alcance
        </p>
        <a
          className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-primary-container text-white text-sm font-medium tracking-widest uppercase rounded-sm hover:opacity-90 transition-all duration-300 transform active:scale-95 shadow-lg shadow-black/10"
          href="#"
        >
          Hacer una consulta
        </a>
      </div>
    </section>
  )
}

export default HeroSection