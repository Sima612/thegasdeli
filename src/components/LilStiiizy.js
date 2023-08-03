import lilStiiizyPen from "../images/lilStiiizyPen.png";

import Header from "./Header";
import Nav from "./Nav";

function lilStiiizy() {
  const stiiizy = {
    image: lilStiiizyPen,
    name: "LIIIL STIIIZY DISPOSABLES .5G 1 @ $30 / 2 @ $55 / 3 @ $80",
    type: "SATIVA",
    flavor: "Strawberry Cough",
    price: "$30.00",
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
            <img src={stiiizy.image} alt="" />
          </picture>
          <section className="media-second-div px-3 grid w-1/2">
            <div>
              <p className="px-3 text-green-600 text-lg">Lil Stiiizy</p>
              <p className="px-3 text-2xl font-medium tracking-widest">
                {stiiizy.name}
              </p>
              <p className="px-3 mt-3 font-bold text-md">
                Strain - ({stiiizy.type})
              </p>
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
            <section className="px-3 text-xl font-medium text-slate-800">
              Product Description:
              <div className="pt-5">
                Packing a big punch in a LIIIL package. LIIIL STIIIZY is the
                ultimate portable, disposable weed pen that delivers an
                unexpected vaping experience with great taste and bigger clouds.
                Its simplicity and portability make LIIIL STIIIZY the new
                on-the-go must have vape device
              </div>
            </section>
          </section>
        </div>
      </main>
    </>
  );
}
export default lilStiiizy;
