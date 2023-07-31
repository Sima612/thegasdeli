import { useState } from "react";

function Nav() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <header>
        <nav className="bg-black flex flex-wrap justify-around w-full pb-5">
          <ul className="font-bold text-xl text-white px-3 py-2 text-slate-700 rounded-lg hover:bg-white hover:text-black">
            <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <a href="/flower">
                FLOWERS
                {isHovering && (
                  <ul className="font-bold text-xl px-3 py-2 rounded-lg text-black text-center">
                    <li className="hover:border-b-4 hover:border-amber-400">
                      <a href="/flower/indica">Indica</a>
                    </li>
                    <li className="hover:border-b-4 hover:border-amber-400">
                      <a href="/flower/hybrid">Hybrid</a>
                    </li>
                    <li className="hover:border-b-4 hover:border-amber-400">
                      <a href="/flower/sativa">Sativa</a>
                    </li>
                  </ul>
                )}
              </a>
            </li>
          </ul>
          <a
            href="/vape-pens"
            className="font-bold text-xl text-white px-3 py-2 text-slate-700 rounded-lg hover:bg-white hover:text-black"
          >
            VAPE PENS
          </a>
          <a
            href="/pre-rolls"
            className="font-bold text-xl text-white px-3 py-2 text-slate-700 rounded-lg hover:bg-white hover:text-black"
          >
            PRE-ROLLS
          </a>
          <ul className="font-bold text-xl text-center text-white px-3 py-2 text-slate-700 rounded-lg hover:bg-white hover:text-black">
            <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <a href="/concentrates">
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
            </li>
          </ul>
          <ul className="text-center font-bold text-xl text-white px-3 py-2 text-slate-700 rounded-lg hover:bg-white hover:text-black">
            <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <a href="/edibles">
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
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
