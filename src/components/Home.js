import adiosMF from "../images/adiosMF.png";
import boloRuntz from "../images/boloRuntz.png";
import crownOG from "../images/crownOG.png";
import doubleScoop from "../images/doubleScoop.png";
import hoodCandy from "../images/hoodCandy.png";
import soulAssasin from "../images/soulAssasin.png";
import stiiizy from "../images/stiiizy.png";
import thinMintCookies from "../images/thinMintCookies.png";
import tropCherry from "../images/tropCherry.png";
import banner from "../images/banner.png";

import Header from "./Header";
import Nav from "./Nav";

function Home() {
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
    },
    {
      image: adiosMF,
      name: "ADIOS MF [SUNGROWN FLOWER]",
      price: [" 5G @ $25", " 10G @ $50", " 14G @ $70", " 28G @ $140"],
      location: "RIVERSIDE ONLY",
    },
    {
      image: stiiizy,
      name: "Liiil Stiiizy",
      price: ".5G Disposables Indica",
    },
    {
      image: stiiizy,
      name: "Liiil Stiiizy",
      price: ".5G Disposables Hybrid",
    },
    {
      image: stiiizy,
      name: "Liiil Stiiizy",
      price: ".5G Disposables Sativa",
    },
    {
      image: soulAssasin,
      name: "SOUL ASSASIN OG",
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
    },
  ];

  return (
    <>
      <header>
        <Header />
        <Nav />
      </header>
      <img className="bg-cover mx-auto" src={banner} alt="banner" />
      <main className="container mx-auto w-max relative ...">
        <h1 className="text-xl text-center mt-6 font-bold px-3 py-2 text-slate-700 rounded-lg border-b-8 border-green-600 w-64 mx-auto">
          NEWEST PRODUCTS
        </h1>
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

export default Home;
