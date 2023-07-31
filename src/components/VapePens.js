import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

import bluedream from "../images/bluedream.png";
import appleslushie from "../images/appleslushie.png";
import girlscoutcookies from "../images/girlscoutcookies.png";
import kinglouie from "../images/kinglouie.png";
import pnpfireog from "../images/pnpfireog.png";
import orangesunset from "../images/orangesunset.png";
import orangesunset1g from "../images/orangesunset1g.png";
import whiteraspberry from "../images/whiteraspberry.png";
import whiteraspberry1g from "../images/whiteraspberry1g.png";
import lilStiiizyPen from "../images/lilStiiizyPen.png";
import watermelonz from "../images/watermelonz.png";
import watermelonz1g from "../images/watermelonz1g.png";
import skywalkerog from "../images/skywalkerog.png";
import skywalkerog1g from "../images/skywalkerog1g.png";
import strawnana from "../images/strawnana.png";
import pineappleruntz from "../images/pineappleruntz.png";
import pinkacai from "../images/pinkacai.png";
import strawnana1g from "../images/strawnana1g.png";
import pineappleruntz1g from "../images/pineappleruntz1g.png";
import pinkacai1g from "../images/pinkacai1g.png";
import dabwoodsmoonwalker from "../images/dabwoodsmoonwalker.png";
import dabwoodsgeorgiapeach from "../images/dabwoodsgeorgiapeach.png";
import dabwoodsmagicmelons from "../images/dabwoodsmagicmelons.png";
import dabwoodspineapplekush from "../images/dabwoodspineapplekush.png";
import dabwoodssunsettsunami from "../images/dabwoodssunsettsunami.png";

function VapePens() {
  const pens = [
    {
      id: 1,
      image: lilStiiizyPen,
      name: "LIIIL STIIIZY DISPOSABLES .5G 1 @ $30 / 2 @ $55 / 3 @ $80",
      type: "STRAIN - SATIVA",
      flavor: "Strawberry Cough",
      price: "$30.00",
    },
    {
      id: 2,
      image: lilStiiizyPen,
      name: "LIIIL STIIIZY DISPOSABLES .5G 1 @ $30 / 2 @ $55 / 3 @ $80",
      type: "STRAIN - INDICA",
      price: "$30.00",
      flavor: "Purple Punch",
    },
    {
      id: 3,
      image: lilStiiizyPen,
      name: "LIIIL STIIIZY DISPOSABLES .5G 1 @ $30 / 2 @ $55 / 3 @ $80",
      type: "STRAIN - INDICA",
      price: "$30.00",
      flavor: "OG KUSH",
    },
    {
      id: 4,
      image: lilStiiizyPen,
      name: "LIIIL STIIIZY DISPOSABLES .5G 1 @ $30 / 2 @ $55 / 3 @ $80",
      type: "STRAIN - INDICA",
      price: "$30.00",
      flavor: "Skywalker OG",
    },
    {
      id: 5,
      image: lilStiiizyPen,
      name: "LIIIL STIIIZY DISPOSABLES .5G 1 @ $30 / 2 @ $55 / 3 @ $80",
      price: "$30.00",
      flavor: "Pineapple Runtz",
      type: "STRAIN - HYBRID",
    },
    {
      id: 6,
      image: orangesunset,
      name: ".5G PREMIUM THC POD",
      type: "STRAIN - SATIVA",
      flavor: "Orange Sunset",
      price: "$55.00",
    },
    {
      id: 7,
      image: whiteraspberry,
      name: ".5G PREMIUM THC POD",
      type: "STRAIN - INDICA",
      flavor: "White Raspberry",
      price: "$55.00",
    },
    {
      id: 8,
      image: watermelonz,
      name: ".5G PREMIUM THC POD",
      type: "STRAIN - INDICA",
      flavor: "Watermelon Z",
      price: "$55.00",
    },
    {
      id: 9,
      image: skywalkerog,
      name: ".5G PREMIUM THC POD",
      type: "STRAIN - INDICA",
      flavor: "Skywalker OG",
      price: "$55.00",
    },
    {
      id: 10,
      image: strawnana,
      name: ".5G PREMIUM THC POD",
      type: "STRAIN - HYBRID",
      flavor: "Strawnana",
      price: "$55.00",
    },
    {
      id: 11,
      image: pineappleruntz,
      name: ".5G PREMIUM THC POD",
      type: "STRAIN - HYBRID",
      flavor: "Pineapple Runtz",
      price: "$55.00",
    },
    {
      id: 12,
      image: pinkacai,
      name: ".5G PREMIUM THC POD",
      type: "STRAIN - HYBRID",
      flavor: "Pink Acai",
      price: "$55.00",
    },
    {
      id: 13,
      image: orangesunset1g,
      name: "1G PREMIUM THC POD",
      type: "STRAIN - SATIVA",
      flavor: "Orange Sunset",
      price: "$55.00",
    },
    {
      id: 14,
      image: whiteraspberry1g,
      name: "1G PREMIUM THC POD",
      type: "STRAIN - INDICA",
      flavor: "White Raspberry",
      price: "$55.00",
    },
    {
      id: 15,
      image: watermelonz1g,
      name: "1G PREMIUM THC POD",
      type: "STRAIN - INDICA",
      flavor: "Watermelon Z",
      price: "$55.00",
    },
    {
      id: 16,
      image: skywalkerog1g,
      name: "1G PREMIUM THC POD",
      type: "STRAIN - INDICA",
      flavor: "Skywalker OG",
      price: "$55.00",
    },
    {
      id: 17,
      image: strawnana1g,
      name: "1G PREMIUM THC POD",
      type: "STRAIN - HYBRID",
      flavor: "Strawnana",
      price: "$55.00",
    },
    {
      id: 18,
      image: pineappleruntz1g,
      name: "1G PREMIUM THC POD",
      type: "STRAIN - HYBRID",
      flavor: "Pineapple Runtz",
      price: "$55.00",
    },
    {
      id: 19,
      image: pinkacai1g,
      name: "1G PREMIUM THC POD",
      type: "STRAIN - HYBRID",
      flavor: "Pink Acai",
      price: "$55.00",
    },
    {
      id: 20,
      image: pnpfireog,
      name: "PLUG N PLAY",
      flavor: "FIRE OG",
      price: "$55.00",
    },
    {
      id: 21,
      image: kinglouie,
      name: "PLUG N PLAY",
      flavor: "KING LOUIE XLLL",
      price: "$55.00",
    },
    {
      id: 22,
      image: girlscoutcookies,
      name: "PLUG N PLAY",
      flavor: "GIRL SCOUT COOKIES",
      price: "$55.00",
    },
    {
      id: 23,
      image: appleslushie,
      name: "PLUG N PLAY",
      flavor: "APPLE SLUSHIE",
      price: "$55.00",
    },
    {
      id: 24,
      image: bluedream,
      name: "PLUG N PLAY",
      flavor: "BLUE DREAM",
      price: "$55.00",
    },
    {
      id: 25,
      image: dabwoodsmoonwalker,
      name: "DABWOODS DISPOSABLE - 1 BOX",
      type: "STRAIN - INDICA",
      flavor: "MOONWALKER PURPS",
      price: "$45.00",
    },
    {
      id: 26,
      image: dabwoodsgeorgiapeach,
      name: "DABWOODS DISPOSABLE - 1 BOX",
      type: "STRAIN - INDICA",
      flavor: "GEORGIA PEACH",
      price: "$45.00",
    },
    {
      id: 27,
      image: dabwoodsmagicmelons,
      name: "DABWOODS DISPOSABLE - 1 BOX",
      type: "STRAIN - HYBRID",
      flavor: "MAGIC MELONS",
      price: "$45.00",
    },
    {
      id: 28,
      image: dabwoodspineapplekush,
      name: "DABWOODS DISPOSABLE - 1 BOX",
      type: "STRAIN - HYBRID",
      flavor: "PINEAPPLE KUSH",
      price: "$45.00",
    },
    {
      id: 29,
      image: dabwoodssunsettsunami,
      name: "DABWOODS DISPOSABLE - 1 BOX",
      type: "STRAIN - SATIVA",
      flavor: "SUNSET TSUNAMI",
      price: "$45.00",
    },
  ];

  return (
    <>
      <header>
        <Header />
        <Nav />
      </header>
      <main className="container mx-auto relative ...">
        <div className="text-md text-left mt-10 mb-10 font-medium text-slate-400 w-1/6">
          <a href="/">Home</a>
          <p className="inline pl-1">/ Vape Pens</p>
        </div>
        <h1 className="text-2xl text-left mt-10 mb-10 font-bold text-slate-700 border-b-8 border-amber-400 w-1/6">
          VAPE PENS
        </h1>
        <p className="mt-10 font-medium px-2 py-2 text-slate-900 rounded-lg">
          Showing all {pens.length} results
        </p>
        <div className="flex flex-wrap gap-9 mt-6 justify-start">
          {pens.map((pen) => {
            return (
              <div className="flex flex-wrap">
                <div className="w-72 m-0 font-medium text-center px-2 py-2 text-slate-900 rounded-lg">
                  <a href={`/vape-pens/lilstiiizy/${pen.id}`}>
                    <img
                      className="w-64 h-64 mx-auto"
                      src={pen.image}
                      alt="pictures"
                    />
                  </a>
                  <p className="mt-3 font-bold text-md">
                    <i class="fa-solid fa-cannabis fa-md"></i>
                    {pen.name}
                  </p>
                  <p className="mt-3 font-bold text-md">{pen.type}</p>
                  <p className="mt-3 font-bold text-md">
                    Flavor - {pen.flavor}
                  </p>
                  <p className="font-bold text-lg text-green-600 mt-3">
                    {pen.price}
                  </p>
                  <p className="bg-slate-200 text-slate-900 font-md text-lg rounded-lg">
                    {pen.description}
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

export default VapePens;
