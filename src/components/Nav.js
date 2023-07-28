function Nav() {
  return (
    <header>
      <nav className="bg-green-600 flex justify-center space-x-20">
        <a
          href="/flower"
          className="font-bold text-xl text-white px-3 py-2 text-slate-700 rounded-lg hover:bg-white hover:text-green-600"
        >
          FLOWERS
        </a>
        <a
          href="/vape-pens"
          className="font-bold text-xl text-white px-3 py-2 text-slate-700 rounded-lg hover:bg-white hover:text-green-600"
        >
          VAPE PENS
        </a>
        <a
          href="/pre-rolls"
          className="font-bold text-xl text-white px-3 py-2 text-slate-700 rounded-lg hover:bg-white hover:text-green-600"
        >
          PRE-ROLLS
        </a>
        <a
          href="/concentrates"
          className="font-bold text-xl text-white px-3 py-2 text-slate-700 rounded-lg hover:bg-white hover:text-green-600"
        >
          CONCENTRATES
        </a>
        <a
          href="/"
          className="font-bold text-xl text-white px-3 py-2 text-slate-700 rounded-lg hover:bg-white hover:text-green-600"
        >
          EDIBLES
        </a>
      </nav>
    </header>
  );
}

export default Nav;
