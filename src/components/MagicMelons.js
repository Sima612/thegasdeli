import dabwoodsmagicmelons from "../images/dabwoodsmagicmelons.png";

import Header from "./Header";
import Nav from "./Nav";

function MagicMelons() {
  const stiiizy = {
    id: 27,
    image: dabwoodsmagicmelons,
    name: "DABWOODS DISPOSABLE - 1 BOX",
    type: "STRAIN - HYBRID",
    flavor: "MAGIC MELONS",
    price: "$45.00",
  };

  return (
    <>
      <header>
        <Header />
        <Nav />
      </header>
      <main className="container mx-auto relative ...">
        <div className="text-md text-left mt-10 mb-10 font-medium text-slate-400 w-1/2">
          <a href="/">Home</a>
          <a href="/vape-pens"> / Vape Pens</a>
          <p className="inline pl-1"> / {stiiizy.name}</p>
        </div>
        <div className="flex flex-wrap mt-6 justify-between mb-10 w-full">
          <picture className="w-1/2">
            <img className="mx-auto" src={stiiizy.image} alt="picutre" />
          </picture>
          <section className="px-3 grid w-1/2 content-center gap-y-6">
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
            <section className="px-3 text-xl font-medium text-slate-800 pt-5">
              Product Description:
              <div className="pt-5">
                Dabwoods Disposable, rechargeable, full gram vape collection.
              </div>
            </section>
          </section>
        </div>
      </main>
    </>
  );
}
export default MagicMelons;
