import stiiizyrosin from "../images/stiiizyrosin.png";
import Footer from "./Footer";

import Header from "./Header";
import Nav from "./Nav";

function Rosin() {
  const rosins = [
    {
      id: 1,
      image: stiiizyrosin,
      name: "LR ROSIN JAM",
      price: "$40.00",
      flavor: "Diamond Berry",
    },
    {
      id: 2,
      image: stiiizyrosin,
      name: "LR ROSIN JAM",
      price: "$40.00",
      flavor: "Galactic Gas",
    },
    {
      id: 3,
      image: stiiizyrosin,
      name: "LR ROSIN JAM",
      price: "$40.00",
      flavor: "Banana Split",
    },
  ];

  return (
    <>
      <header>
        <Header />
        <Nav />
      </header>
      <main className="media-main container mx-auto relative ...">
        <div className="media-first-div text-md text-left mt-10 mb-10 font-medium text-slate-400 w-1/4">
          <a href="/">Home</a>
          <a className="pl-1" href="/concentrates">
            / Concentrates
          </a>
          <p className="inline pl-1">/ Rosin</p>
        </div>
        <h1 className="text-2xl text-left mt-10 mb-10 font-bold text-slate-700 border-b-8 border-amber-400 w-1/6">
          ROSIN
        </h1>
        <p className="mt-10 font-medium px-2 py-2 text-slate-900 rounded-lg">
          Showing all {rosins.length} results
        </p>
        <div className="flex flex-wrap gap-9 mt-6 mb-6 justify-start">
          {rosins.map((rosin) => {
            return (
              <div className="media-products flex flex-wrap">
                <div className="media-first-div w-72 m-0 font-medium text-center px-2 py-2 text-slate-900 rounded-lg">
                  <a href={`/concentrates/rosin/${rosin.id}`}>
                    <img
                      className="media-product-img w-64 h-64 mx-auto"
                      src={rosin.image}
                      alt="pictures"
                    />
                  </a>
                  <p>
                    <i class="fa-solid fa-cannabis fa-lg"></i> {rosin.name}
                  </p>
                  <p className="mt-3 font-bold text-md">
                    Flavor - {rosin.flavor}
                  </p>
                  <p className="font-bold text-lg text-green-600">
                    {rosin.price}
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

export default Rosin;
