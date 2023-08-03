// import originsSuger from "../images/originsSugar.png";
// import originsCrumble from "../images/originsCrumble.png";
// import originsDiamond from "../images/originsDiamond.png";
// import originsShatter from "../images/originsShatter.png";
// import a1LiveRisin from "../images/a1LiveRisin.png";
// import sauce from "../images/sauce.png";

import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

function Concentrates() {
  const options = [
    ["CRUMBLE/SUGAR"],
    ["DIAMONDS"],
    ["LIVE RESIN"],
    ["ROSIN"],
    ["SAUCE"],
    ["SHATTER"],
  ];
  const products = [];

  return (
    <>
      <header>
        <Header />
        <Nav />
      </header>
      <main className="media-main container mx-auto relative ...">
        <div className="media-first-div text-md text-left mt-10 mb-10 font-medium text-slate-400 w-1/6">
          <a href="/">Home</a>
          <p className="inline pl-1">/ Concentrates</p>
        </div>
        <h1 className="text-2xl text-left mt-10 mb-10 font-bold text-slate-700 border-b-8 border-amber-400 w-1/6">
          CONCENTRATES
        </h1>
        <div className="media-flavors flex justify-between gap-2 w-3/4 ">
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
              <div className="media-products flex flex-wrap">
                <div className="w-72 m-0 font-medium text-center px-2 py-2 text-slate-900 rounded-lg">
                  <a href={`/concentrates/live-resin/${product.id}`}>
                    <img
                      className="media-product-img w-64 h-64 mx-auto"
                      src={product.image}
                      alt="pictures"
                    />
                  </a>
                  <p>
                    <i class="fa-solid fa-cannabis fa-lg"></i> {product.name}
                  </p>
                  <p className="mt-3 font-bold text-md">
                    Flavor - {product.flavor}
                  </p>
                  <p className="font-bold text-lg text-green-600">
                    {product.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Concentrates;
