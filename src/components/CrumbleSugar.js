// import originsCrumble from "../images/originsCrumble.png";
// import weddingcake from "../images/weddingcake.png";
// import yg from "../images/yg.png";
// import originsSugar from "../images/originsSugar.png";
// import bubbakush from "../images/bubbakush.png";
// import gelato from "../images/gelato.png";
// import maui from "../images/maui.png";
// import mintz from "../images/mintz.png";
// import northern from "../images/northern.png";
// import thinmint from "../images/thinmint.png";
// import weddingcakesugar from "../images/weddingcakesugar.png";
// import yoda from "../images/yoda.png";
// import zkittles from "../images/zkittles.png";

import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

function CrumbleSugar() {
  const products = [];
  return (
    <>
      <header>
        <Header />
        <Nav />
      </header>
      <main className="container mx-auto relative ...">
        <div className="text-md text-left mt-10 mb-10 font-medium text-slate-400 w-1/4">
          <a href="/">Home</a>
          <a className="pl-1" href="/concentrates">
            / Concentrates
          </a>
          <p className="inline pl-1">/ Crumble/Sugar</p>
        </div>
        <h1 className="text-2xl text-left mt-10 mb-10 font-bold text-slate-700 border-b-8 border-amber-400 w-1/6">
          CRUMBLES/SUGARS
        </h1>
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
      </main>
      <Footer />
    </>
  );
}

export default CrumbleSugar;