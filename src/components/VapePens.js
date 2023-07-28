import Header from "./Header";
import Nav from "./Nav";
import dabwood from "../images/dabwoods.png";
import jeeterjuice from "../images/jeeterjuice.png";
import lilStiiizyPen from "../images/lilStiiizyPen.png";
import pinnacle from "../images/pinnacle.png";
import plugdna from "../images/plugdna.png";
import plugexotics from "../images/plugexotics.png";
import thcpod from "../images/thcpod.png";
import liveresin from "../images/liveresin.png";

function VapePens() {
  const pens = [
    {
      image: dabwood,
      name: "DABWOODS 1G DISPOSABLE (SATIVA)",
      price: "$45.00",
      description: (
        <>
          <a href="/vape-pens/dabwoods">(Description)</a>
        </>
      ),
    },
    {
      image: dabwood,
      name: "DABWOODS 1G DISPOSABLE (HYBRID)",
      price: "$45.00",
    },
    {
      image: dabwood,
      name: "DABWOODS 1G DISPOSABLE (INDICA)",
      price: "$45.00",
    },
    {
      image: jeeterjuice,
      name: "JEETER JUICE LIQUID DIAMONDS 1G CARTRIDGE (SATIVA)",
      type: "SATIVA",
      price: "$50.00",
    },
    {
      image: jeeterjuice,
      name: "JEETER JUICE LIQUID DIAMONDS 1G CARTRIDGE (HYBRID)",
      type: "INDICA",
      price: "$50.00",
    },
    {
      image: jeeterjuice,
      name: "JEETER JUICE LIQUID DIAMONDS 1G CARTRIDGE (INDICA)",
      price: "$50.00",
      type: "HYBRID",
    },
    {
      image: lilStiiizyPen,
      name: "LIIIL STIIIZY .5G 1 @ $30 / 2 @ $55 / 3 @ $80",
      type: "SATIVA",
      price: "$30.00",
    },
    {
      image: lilStiiizyPen,
      name: "LIIIL STIIIZY .5G 1 @ $30 / 2 @ $55 / 3 @ $80",
      type: "INDICA",
      price: "$30.00",
    },
    {
      image: lilStiiizyPen,
      name: "LIIIL STIIIZY .5G 1 @ $30 / 2 @ $55 / 3 @ $80",
      price: "$30.00",
      type: "HYBRID",
    },
    {
      image: pinnacle,
      name: "PINNACLE FARM 1G CART",
      type: "SATIVA",
      price: "$40.00",
    },
    {
      image: pinnacle,
      name: "PINNACLE FARM 1G CART",
      type: "INDICA",
      price: "$40.00",
    },
    {
      image: pinnacle,
      name: "PINNACLE FARM 1G CART",
      price: "$40.00",
      type: "HYBRID",
    },
    {
      image: plugdna,
      name: "PLUG DNA",
      type: "SATIVA",
      price: "$55.00",
    },
    {
      image: plugdna,
      name: "PLUG DNA",
      type: "INDICA",
      price: "$55.00",
    },
    {
      image: plugdna,
      name: "PLUG DNA",
      price: "$55.00",
      type: "HYBRID",
    },
    {
      image: plugexotics,
      name: "PLUG EXOTICS",
      type: "SATIVA",
      price: "$60.00",
    },
    {
      image: plugexotics,
      name: "PLUG EXOTICS",
      type: "INDICA",
      price: "$60.00",
    },
    {
      image: plugexotics,
      name: "PLUG EXOTICS",
      price: "$60.00",
      type: "HYBRID",
    },
    {
      image: thcpod,
      name: "1G PREMIUM THC POD",
      type: "SATIVA",
      price: "$55.00",
    },
    {
      image: thcpod,
      name: "1G PREMIUM THC POD",
      type: "INDICA",
      price: "$55.00",
    },
    {
      image: thcpod,
      name: "1G PREMIUM THC POD",
      price: "$55.00",
      type: "HYBRID",
    },
    {
      image: liveresin,
      name: "LIVE RESIN POD 1G @ $60 / 3G @ 130",
      type: "SATIVA",
      price: "$60.00",
    },
    {
      image: liveresin,
      name: "LIVE RESIN POD 1G @ $60 / 3G @ 130",
      type: "INDICA",
      price: "$60.00",
    },
    {
      image: liveresin,
      name: "LIVE RESIN POD 1G @ $60 / 3G @ 130",
      price: "$60.00",
      type: "HYBRID",
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
          <p className="inline pl-1">/ Vape Pens</p>
        </div>
        <h1 className="text-2xl text-left mt-10 mb-10 font-bold text-slate-700 border-b-8 border-green-600 w-1/6">
          VAPE PENS
        </h1>
        <p className="mt-10 font-medium px-2 py-2 text-slate-900 rounded-lg">
          Showing all {pens.length} results
        </p>
        <div className="flex flex-wrap gap-9 mt-6 justify-start">
          {pens.map((pen) => {
            return (
              <div className="flex flex-wrap">
                <div className="w-72 m-0 font-medium text-center px-2 py-2 text-slate-900 rounded-lg">
                  <img
                    className="w-64 h-64 mx-auto"
                    src={pen.image}
                    alt="pictures"
                  />
                  <p className="mt-3">{pen.name}</p>
                  <p className="font-bold text-lg text-green-600">
                    {pen.price}
                  </p>
                  <p className="bg-slate-200 text-slate-900 font-md text-lg rounded-lg">
                    {pen.description}
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

export default VapePens;
