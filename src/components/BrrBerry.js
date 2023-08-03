import plugbrr from "../images/plugbrr.png";

import Header from "./Header";
import Nav from "./Nav";

function BrrBerry() {
  const resin = {
    id: 2,
    image: plugbrr,
    name: "LIVE RESIN LIVEST",
    flavor: "BRR BERRY",
    price: "$60.00",
  };

  return (
    <>
      <header>
        <Header />
        <Nav />
      </header>
      <main className="media-main container mx-auto relative ...">
        <div className="media-first-div text-md text-left mt-10 mb-10 font-medium text-slate-400 w-1/2">
          <a href="/">Home</a>
          <a href="/concentrates"> / Concentrates</a>
          <p className="inline pl-1"> / {resin.name}</p>
        </div>
        <div className="flex flex-wrap mt-6 justify-between mb-10 w-full">
          <picture className="media-second-div">
            <img className="mx-auto" src={resin.image} alt="live resin" />
          </picture>
          <section className="media-second-div px-3 grid w-1/2 align-center content-start">
            <div>
              <p className="px-3 text-green-600 text-lg">PLUGplay</p>
              <p className="px-3 text-2xl font-medium tracking-widest">
                {resin.name}
              </p>
              <p className="px-3 mt-3 font-bold text-md">{resin.type}</p>
              <p className="px-3 mt-3 font-bold text-md text-red-600">
                Flavor - {resin.flavor}
              </p>
              <p className="px-3 text-green-600 text-2xl font-bold pt-3">
                {resin.price}
              </p>
              <p className="px-3 pt-10 text-xl">
                Category:
                <a className="px-2 text-green-600" href="/vape-pens">
                  Concentrates
                </a>
              </p>
            </div>
            <section className="px-3 text-xl font-medium text-slate-800 pt-10">
              Product Description:
              <div className="pt-5">
                <p className="pt-4">
                  It's always golden hour with 24k! This PLUG is dripping with
                  golden goodness that'll relax your body and soothe your mind.
                  24k is an indica dominant hybrid so it is the perfect PLUG to
                  unwind with. It's finally time to treat yourself because
                  you're solid gold, baby!
                </p>
              </div>
            </section>
          </section>
        </div>
      </main>
    </>
  );
}
export default BrrBerry;
