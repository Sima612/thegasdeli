import adiosMF from "../images/adiosMF.png";
import boloRuntz from "../images/boloRuntz.png";
import crownOG from "../images/crownOG.png";
import doubleScoop from "../images/doubleScoop.png";
import hoodCandy from "../images/hoodCandy.png";
import thinMintCookies from "../images/thinMintCookies.png";
import tropCherry from "../images/tropCherry.png";
import obiWanOG from "../images/obiWanOG.png";
import chemdawg from "../images/chemdawg.png";
import reserveShake from "../images/reserveShake.png";

import Header from "./Header";
import Nav from "./Nav";

function Flower() {
  const indica = "INDICA (3)";
  const hybrid = "HYBRID (7)";
  const sativa = "SATIVA (1)";
  const products = [
    {
      image: crownOG,
      name: "CROWN OG",
      price: [
        " 1G @ $15",
        " 2G @ $25",
        " 3G @ $35",
        " 4G @ $45",
        " 5G @ $55",
        " 8G @ $60",
        " 10G @ $70",
        " 14G @ $110",
        " 28G @ $200",
      ],
      location: "RIVERSIDE ONLY",
      type: "INDICA",
    },
    {
      image: boloRuntz,
      name: "BOLO RUNTZ",
      price: [
        " 1G @ $15",
        " 2G @ $25",
        " 3G @ $35",
        " 4G @ $45",
        " 5G @ $55",
        " 8G @ $60",
        " 10G @ $70",
        " 14G @ $110",
        " 28G @ $200",
      ],
      location: "BOTH LOCATIONS",
      type: "HYBRID",
    },
    {
      image: tropCherry,
      name: "TROP CHERRY",
      price: [
        " 1G @ $15",
        " 2G @ $25",
        " 3G @ $35",
        " 4G @ $45",
        " 5G @ $55",
        " 8G @ $60",
        " 10G @ $70",
        " 14G @ $110",
        " 28G @ $200",
      ],
      location: "BOTH LOCATIONS",
      type: "HYBRID",
    },
    {
      image: hoodCandy,
      name: "HOOD CANDY",
      price: [
        " 1G @ $15",
        " 2G @ $25",
        " 3G @ $35",
        " 4G @ $45",
        " 5G @ $55",
        " 8G @ $60",
        " 10G @ $70",
        " 14G @ $110",
        " 28G @ $200",
      ],
      location: "BOTH LOCATIONS",
      type: "HYBRID",
    },
    {
      image: thinMintCookies,
      name: "THIN MINT COOKIES",
      price: [
        " 1G @ $15",
        " 2G @ $25",
        " 3G @ $35",
        " 4G @ $45",
        " 5G @ $55",
        " 8G @ $60",
        " 10G @ $70",
        " 14G @ $110",
        " 28G @ $200",
      ],
      location: "RIVERSIDE ONLY",
      type: "HYBRID",
    },
    {
      image: adiosMF,
      name: "ADIOS MF [SUNGROWN FLOWER]",
      price: [" 5G @ $25", " 10G @ $50", " 14G @ $70", " 28G @ $140"],
      location: "RIVERSIDE ONLY",
      type: "HYBRID",
    },
    {
      image: doubleScoop,
      name: "DOUBLE SCOOP",
      price: [
        " 1G @ $15",
        " 2G @ $25",
        " 3G @ $35",
        " 4G @ $45",
        " 5G @ $55",
        " 8G @ $60",
        " 10G @ $70",
        " 14G @ $110",
        " 28G @ $200",
      ],
      location: "RIVERSIDE ONLY",
      type: "HYBRID",
    },
    {
      image: obiWanOG,
      name: "OBI WAN OG",
      price: [
        " 1G @ $15",
        " 2G @ $25",
        " 3G @ $35",
        " 4G @ $45",
        " 5G @ $55",
        " 8G @ $60",
        " 10G @ $70",
        " 14G @ $110",
        " 28G @ $200",
      ],
      location: "ONTARIO ONLY",
      type: "INDICA",
    },
    {
      image: chemdawg,
      name: "CHEMDAWG [SUNGROWN FLOWER]",
      price: [" 5G @ $25", " 10G @ $50", " 14G @ $70", " 28G @ $140"],
      location: "RANCHO/ONTARIO ONLY",
      type: "HYBRID",
    },
    {
      image: reserveShake,
      name: "PRIVATE RESERVE SHAKE",
      price: [" 5G @ $25", " 10G @ $50"],
      location: "RANCHO/ONTARIO ONLY",
      type: "INDICA",
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
          <p className="inline pl-1">/ Flower</p>
        </div>
        <h1 className="text-2xl text-left mt-10 mb-10 font-bold text-slate-700 border-b-8 border-green-600 w-1/6">
          FLOWERS
        </h1>
        <div className="flex justify-between w-1/3 ">
          <div className="border-solid border-2 border-slate-300 bg-slate-200 font-medium text-md text-slate-700 hover:bg-white hover:text-green-600 hover:border-green-300">
            <a className="px-5 py-1" href="/flower/indica">
              {indica}
            </a>
          </div>
          <div className="border-solid border-2 border-slate-300 bg-slate-200 font-medium text-md text-slate-700 hover:bg-white hover:text-green-600 hover:border-green-300">
            <a className="px-5 py-1" href="/flower/hybrid">
              {hybrid}
            </a>
          </div>
          <div className="border-solid border-2 border-slate-300 bg-slate-200 font-medium text-md text-slate-700 hover:bg-white hover:text-green-600 hover:border-green-300">
            <a className="px-5 py-1" href="/flower/sativa">
              {sativa}
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
                  <p>{product.price}</p>
                  <p>
                    <strong>[{product.location}]</strong>
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

export default Flower;
