import gasdeli from "../images/gasdeli.png";

function Header() {
  return (
    <header className="flex justify-between bg-black">
      <img className="logo" src={gasdeli} alt="logo" />

      <nav className="flex justify-end items-center space-x-4 pr-10">
        <a
          href="/"
          className="font-medium text-lg  px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Home
        </a>
        <a
          href="/deals"
          className="font-medium text-lg px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Deals
        </a>
        <a
          href="/deliveryzone"
          className="font-medium text-lg px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Delivery Zones
        </a>
        <a
          href="/contact"
          className="font-medium text-lg px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Contact
        </a>
        <a
          href="/about"
          className="font-medium text-lg px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          About
        </a>
      </nav>
    </header>
  );
}

export default Header;
