function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-md transition-all ease-in-out duration-300">
      <div className="flex justify-between items-center px-8 py-6 w-full max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-[0.2em] text-primary font-headline uppercase">
          PENSIÓN EL CARMEN
        </div>
        <button className="text-primary hover:opacity-80 transition-opacity duration-300">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </header>
  )
}

export default Header