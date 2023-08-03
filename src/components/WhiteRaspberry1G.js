import whiteraspberry1g from "../images/whiteraspberry1g.png";

import Header from "./Header";
import Nav from "./Nav";

function WhiteRaspberry1G() {
  const stiiizy = {
    id: 14,
    image: whiteraspberry1g,
    name: "1G PREMIUM THC POD",
    type: "INDICA",
    flavor: "White Raspberry",
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
            <section className="px-3 text-xl font-medium text-slate-800 pt-6">
              Product Description:
              <div className="pt-5">
                <p>WHITE RASPBERRY | STIIIZY</p>
                <p className="pt-4">THC Pod - STIIIZY Battery Required</p>
                <p className="pt-4">Taste: Berry, Fruity, Herbal</p>
                <p>Feeling: Relaxing, Sleepy, Euphoric</p>
                <p className="pt-4">
                  Savor the sweet, fruity goodness in White Raspberry as you
                  cool off and relax for the evening.
                </p>
                <p className="pt-4">
                  Extracted from a variety of natural flora, STIIIZY's
                  botanically derived terpenes offer balanced aroma and taste to
                  deliver a consistent experience every time. STIIIZY's quality
                  concentrates uphold a high level of purity, setting the
                  industry standard to influence and inspire through innovative
                  methods. Packed in discrete pods that are pushing the limits
                  on vapor tech, STIIIZY THC pods are the canna industry's #1
                  vapor device.
                </p>
                <p className="pt-4">
                  *THC Percentages are averages; individual items may vary.*
                </p>
              </div>
            </section>
          </section>
        </div>
      </main>
    </>
  );
}
export default WhiteRaspberry1G;
