import plugOGKB from "../images/plugOGKB.png";
import plugbrr from "../images/plugbrr.png";

import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

function LiveResin() {
  const resins = [
    {
      id: 1,
      image: plugOGKB,
      name: "LIVE RESIN LIVEST",
      price: "$60.00",
    },
    {
      id: 2,
      image: plugbrr,
      name: "LIVE RESIN LIVEST",
      price: "$60.00",
    },
  ];

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
          <p className="inline pl-1">/ Live Resin</p>
        </div>
        <h1 className="text-2xl text-left mt-10 mb-10 font-bold text-slate-700 border-b-8 border-amber-400 w-1/6">
          LIVE RESIN
        </h1>
        <p className="mt-10 font-medium px-2 py-2 text-slate-900 rounded-lg">
          Showing all {resins.length} results
        </p>
        <div className="flex flex-wrap gap-9 mt-6 justify-start">
          {resins.map((resin) => {
            return (
              <div className="flex flex-wrap">
                <div className="w-72 m-0 font-medium text-center px-2 py-2 text-slate-900 rounded-lg">
                  <a href={`/concentrates/live-resin/${resin.id}`}>
                    <img
                      className="w-64 h-64 mx-auto"
                      src={resin.image}
                      alt="pictures"
                    />
                  </a>

                  <p>
                    <i class="fa-solid fa-cannabis fa-md"></i> {resin.name}
                  </p>
                  <p className="mt-3 font-bold text-md">
                    Flavor - {resin.flavor}
                  </p>
                  <p className="font-bold text-lg text-green-600">
                    {resin.price}
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

export default LiveResin;
