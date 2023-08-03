import kinglouie from "../images/kinglouie.png";

import Header from "./Header";
import Nav from "./Nav";

function KingLouie() {
  const stiiizy = {
    id: 21,
    image: kinglouie,
    name: "PLUG N PLAY",
    flavor: "KING LOUIE XLLL",
    price: "$55.00",
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
          <a href="/vape-pens"> / Vape Pens</a>
          <p className="inline pl-1"> / {stiiizy.name}</p>
        </div>
        <div className="flex flex-wrap mt-6 justify-between mb-10 w-full">
          <picture className="media-second-div w-1/2">
            <img className="w-1/2 mx-auto" src={stiiizy.image} alt="" />
          </picture>
          <section className="media-second-div px-3 grid w-1/2 align-center content-center">
            <div>
              <p className="px-3 text-green-600 text-lg">Lil Stiiizy</p>
              <p className="px-3 text-2xl font-medium tracking-widest">
                {stiiizy.name}
              </p>
              <p className="px-3 mt-3 font-bold text-md">{stiiizy.type}</p>
              <p className="px-3 mt-3 font-bold text-md text-red-600">
                Flavor - {stiiizy.flavor}
              </p>
              <p className="px-3 text-green-600 text-2xl font-bold pt-3">
                {stiiizy.price}
              </p>
              <p className="px-3 pt-10 text-xl">
                Category:
                <a className="px-2 text-green-600" href="/vape-pens">
                  Vape Pens
                </a>
              </p>
            </div>
            <section className="px-3 text-xl font-medium text-slate-800 pt-10">
              Product Description:
              <div className="pt-5">
                <p className="pt-4">
                  To experience cannabis-derived terpenes and cannabinoids at
                  their finest, connect with a DNA Plug. PLUGplay debuts its
                  King Louie Xlll in the DNA line. Experience the spicy terpene
                  profile of the original cultivar as pine, and sour aromatics
                  fill the air with every exhale. King Louis XIII cannabinoids
                  deliver muscle relaxation and ease tension as your
                  consciousness lulls and wanders to sleep.
                </p>
              </div>
            </section>
          </section>
        </div>
      </main>
    </>
  );
}
export default KingLouie;
