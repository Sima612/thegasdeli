import { useState } from "react";

function Nav() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = (e) => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <header className="Nav-header">
        <nav className="bg-black flex flex-wrap justify-evenly w-full pb-5">
          <a
            className="font-bold text-xl text-white px-3 py-2 text-slate-700 rounded-lg hover:bg-white hover:text-black"
            href="/flower"
          >
            FLOWERS
          </a>

          <a
            href="/vape-pens"
            className="font-bold text-xl text-white px-3 py-2 text-slate-700 rounded-lg hover:bg-white hover:text-black"
          >
            VAPE PENS
          </a>

          <a
            className="h-1/2 font-bold text-xl text-white px-3 py-2 text-slate-700 rounded-lg hover:bg-white hover:text-black"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            href="/pre-rolls"
          >
            PRE-ROLLS
            {isHovering && (
              <ul className="font-bold text-xl px-3 py-2 rounded-lg text-black text-center">
                <li className="hover:border-b-4 hover:border-amber-400">
                  <a href="/pre-rolls/regular">Regular</a>
                </li>
                <li className="hover:border-b-4 hover:border-amber-400">
                  <a href="/pre-rolls/infused">Infused</a>
                </li>
              </ul>
            )}
          </a>

          <a
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="font-bold text-xl text-center text-white px-3 py-2 text-slate-700 rounded-lg hover:bg-white hover:text-black"
            href="/concentrates"
          >
            CONCENTRATES
            {isHovering && (
              <ul className="font-bold text-xl text-black px-3 py-2 rounded-lg">
                <li className="hover:border-b-4 hover:border-amber-400">
                  <a href="/concentrates/crumble&sugar">Crumbles/Sugars</a>
                </li>
                <li className="hover:border-b-4 hover:border-amber-400">
                  <a href="/concentrates/diamonds">Diamonds</a>
                </li>
                <li className="hover:border-b-4 hover:border-amber-400">
                  <a href="/concentrates/live-resin">Live Resin</a>
                </li>
                <li className="hover:border-b-4 hover:border-amber-400">
                  <a href="/concentrates/rosin">Rosin</a>
                </li>
                <li className="hover:border-b-4 hover:border-amber-400">
                  <a href="/concentrates/sauce">Sauce</a>
                </li>
                <li className="hover:border-b-4 hover:border-amber-400">
                  <a href="/concentrates/shatter">Shatter</a>
                </li>
              </ul>
            )}
          </a>

          <a
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="h-1/2 text-center font-bold text-xl text-white px-3 py-2 text-slate-700 rounded-lg hover:bg-white hover:text-black"
            href="/edibles"
          >
            EDIBLES
            {isHovering && (
              <ul className="font-bold text-xl px-3 py-2 rounded-lg text-black">
                <li className="hover:border-b-4 hover:border-amber-400">
                  <a href="/edibles/baked">Baked</a>
                </li>
                <li className="hover:border-b-4 hover:border-amber-400">
                  <a href="/edibles/gummies">Gummies</a>
                </li>
                <li className="hover:border-b-4 hover:border-amber-400">
                  <a href="/edibles/chocolates">Chocolates</a>
                </li>
              </ul>
            )}
          </a>
        </nav>
      </header>
    </>
  );
}

export default Nav;
