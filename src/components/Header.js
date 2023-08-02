import gasdeli from "../images/gasdeli.png";

function Header() {
  return (
    <header className="Header flex justify-between bg-black w-full overflow-hidden p-2">
      <picture>
        <a href="/">
          <img className="w-48 pl-4" src={gasdeli} alt="gas deli logo" />
        </a>
      </picture>

      <nav className="Header-nav flex justify-end items-center w-1/2 gap-4 text-lg">
        <a
          href="/"
          className="font-medium px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Home
        </a>
        <a
          href="/deals"
          className="font-medium px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Deals
        </a>
        <a
          href="/deliveryzone"
          className="font-medium px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Delivery Zones
        </a>
        <a
          href="/contact"
          className="font-medium px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Contact
        </a>
        <a
          href="/about"
          className="font-medium px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          About
        </a>
      </nav>
    </header>
  );
}

export default Header;
