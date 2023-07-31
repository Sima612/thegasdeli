import bluedream from "../images/bluedream.png";

import Header from "./Header";
import Nav from "./Nav";

function BlueDream() {
  const stiiizy = {
    id: 24,
    image: bluedream,
    name: "PLUG N PLAY",
    flavor: "BLUE DREAM",
    price: "$55.00",
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
            <img src={stiiizy.image} alt="" />
          </picture>
          <section className="px-3 grid w-1/2 align-center content-center">
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
            <section className="px-3 text-xl text-slate-800 pt-10">
              Product Description:
              <div className="pt-5 text-md font-medium text-slate-600">
                <p className="pt-4 text-md font-medium text-slate-600">
                  You don't want to sleep on this one! Blue Dream's properties
                  will give off cerebral stimulation with the best full-body
                  high that many first timers and veteran consumers will love!
                  With its sweet and earthy flavor, there's no wonder this
                  strain has built up it's legendary status amongst West Coast
                  strains.
                </p>
                <div className="pt-5 font-bold">
                  Flavors:
                  <ul className="font-medium">
                    <li className="pl-10 text-md text-red-600">- Blueberry</li>
                    <li className="pl-10 text-md text-red-600">- Berry</li>
                    <li className="pl-10 text-md text-red-600">- Earthy</li>
                  </ul>
                </div>
                <div className="pt-5">
                  Disclaimer:
                  <p>
                    A spent cannabis cartridge shall be properly disposed of as
                    hazardous waste at a household hazardous waste collection
                    facility or other approved facility.
                  </p>
                </div>
              </div>
            </section>
          </section>
        </div>
      </main>
    </>
  );
}
export default BlueDream;
