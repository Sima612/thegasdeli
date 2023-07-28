import originsSuger from "../images/originsSugar.png";
import originsCrumble from "../images/originsCrumble.png";
import originsDiamond from "../images/originsDiamond.png";
import originsShatter from "../images/originsShatter.png";
import a1LiveRisin from "../images/a1LiveRisin.png";
import sauce from "../images/sauce.png";

import Header from "./Header";
import Nav from "./Nav";

function Concentrates() {
  const options = [
    ["CRUMBLE/SUGAR (13)"],
    ["DIAMONDS (26)"],
    ["LIVE RESIN (21)"],
    ["ROSIN (2)"],
    ["SAUCE (15)"],
    ["SHATTER (13)"],
  ];
  const products = [
    {
      image: originsSuger,
      name: "ORIGINS EXTRACTS - SUGAR 1G",
      price: "$35.00",
    },
    {
      image: originsCrumble,
      name: "ORIGINS EXTRACTS - CRUMBLE 1G",
      price: "$30.00",
    },
    {
      image: originsDiamond,
      name: "ORIGINS EXTRACTS - DIAMONDs 1G",
      price: "$40.00",
    },
    {
      image: originsShatter,
      name: "ORIGINS EXTRACTS - SHATTER 1G",
      price: "$35.00",
    },
    {
      image: a1LiveRisin,
      name: "A1 LIVE RESIN 1G @ $35 / 3G @ $70",
      price: "$35.00",
    },
    {
      image: sauce,
      name: "BLAZNTHEAMAZN 1G SYRINGE",
      price: "$40.00",
    },
  ];

  return (
    <>
      <header>
        <Header />
        <Nav />
      </header>
      <main className="container mx-auto relative ...">
        <div className="text-md text-left mt-10 mb-10 font-medium text-slate-400 w-1/6">
          <a href="/">Home</a>
          <p className="inline pl-1">/ Concentrates</p>
        </div>
        <h1 className="text-2xl text-left mt-10 mb-10 font-bold text-slate-700 border-b-8 border-green-600 w-1/6">
          CONCENTRATES
        </h1>
        <div className="flex justify-between gap-3 w-4/5 ">
          <div className="border-solid border-2 border-slate-300 bg-slate-200 font-medium text-md text-slate-700 hover:bg-white hover:text-green-600 hover:border-green-300">
            <a className="px-5 py-1" href="/concentrates/crumble&sugar">
              {options[0]}
            </a>
          </div>
          <div className="border-solid border-2 border-slate-300 bg-slate-200 font-medium text-md text-slate-700 hover:bg-white hover:text-green-600 hover:border-green-300">
            <a className="px-5 py-1" href="/concentrates/diamonds">
              {options[1]}
            </a>
          </div>
          <div className="border-solid border-2 border-slate-300 bg-slate-200 font-medium text-md text-slate-700 hover:bg-white hover:text-green-600 hover:border-green-300">
            <a className="px-5 py-1" href="/concentrates/live-resin">
              {options[2]}
            </a>
          </div>
          <div className="border-solid border-2 border-slate-300 bg-slate-200 font-medium text-md text-slate-700 hover:bg-white hover:text-green-600 hover:border-green-300">
            <a className="px-5 py-1" href="/concentrates/rosin">
              {options[3]}
            </a>
          </div>
          <div className="border-solid border-2 border-slate-300 bg-slate-200 font-medium text-md text-slate-700 hover:bg-white hover:text-green-600 hover:border-green-300">
            <a className="px-5 py-1" href="/concentrates/sauce">
              {options[4]}
            </a>
          </div>
          <div className="border-solid border-2 border-slate-300 bg-slate-200 font-medium text-md text-slate-700 hover:bg-white hover:text-green-600 hover:border-green-300">
            <a className="px-5 py-1" href="/concentrates/shatter">
              {options[5]}
            </a>
          </div>
        </div>
        <p className="mt-10 font-medium px-2 py-2 text-slate-900 rounded-lg">
          Showing all {products.length} results
        </p>
        <div className="flex flex-wrap gap-9 mt-6 justify-start">
          {products.map((product) => {
            return (
              <div className="flex flex-wrap">
                <div className="w-72 m-0 font-medium text-center px-2 py-2 text-slate-900 rounded-lg">
                  <img
                    className="w-64 h-64 mx-auto"
                    src={product.image}
                    alt="pictures"
                  />

                  <p>
                    <i class="fa-solid fa-cannabis fa-lg"></i> {product.name}
                  </p>
                  <p className="font-bold text-lg text-green-600">
                    {product.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-end absolute bottom-5 -right-20">
          <a href="#top">
            <i class="fa-regular fa-circle-up fa-bounce fa-2xl text-green-600"></i>
          </a>
        </div>
      </main>
    </>
  );
}

export default Concentrates;
