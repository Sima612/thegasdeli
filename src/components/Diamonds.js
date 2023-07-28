import biscotti from "../images/biscotti.png";
import fireog from "../images/fireog.png";
import garanimals from "../images/garanimals.png";
import gluecookies from "../images/gluecookies.png";
import lava from "../images/lava.png";
import mac from "../images/mac.png";
import sfvog from "../images/sfvog.png";
import sherblato from "../images/sherblato.png";
import trueog from "../images/trueog.png";
import cerealmilk from "../images/cerealmilk.png";
import gelatocake from "../images/gelatocake.png";
import khalifa from "../images/khalifa.png";
import poundcake from "../images/poundcake.png";
import runtz from "../images/runtz.png";
import sunset from "../images/sunset.png";
import chemdog from "../images/chemdog.png";
import origingelato from "../images/origingelato.png";
import originmonkey from "../images/originmonkey.png";
import berrypie from "../images/berrypie.png";
import blueberry from "../images/blueberry.png";
import fruitrings from "../images/fruitrings.png";
import purphaze from "../images/purphaze.png";
import curemango from "../images/curemango.png";
import curepapaya from "../images/curepapaya.png";
import curewatermelon from "../images/curewatermelon.png";
import curewhitefirebomb from "../images/curewhitefirebomb.png";

import Header from "./Header";
import Nav from "./Nav";

function Diamonds() {
  const products = [
    {
      image: biscotti,
      name: "ORIGINS EXTRACTS BISCOTTI - LIVE RESIN DIAMONDS - 1G",
      price: "$40.00",
    },
    {
      image: fireog,
      name: "ORIGINS EXTRACTS FIRE OG - LIVE RESIN DIAMONDS - 1G",
      price: "$40.00",
    },
    {
      image: garanimals,
      name: "ORIGINS EXTRACTS GARANIMALS - LIVE RESIN DIAMONDS - 1G",
      price: "$40.00",
    },
    {
      image: gluecookies,
      name: "ORIGINS EXTRACTS GLUE COOKIESla - LIVE RESIN DIAMONDS - 1G",
      price: "$40.00",
    },
    {
      image: lava,
      name: "ORIGINS EXTRACTS LAVA - LIVE RESIN DIAMONDS - 1G",
      price: "$40.00",
    },
    {
      image: mac,
      name: "ORIGINS EXTRACTS MAC - LIVE RESIN DIAMONDS - 1G",
      price: "$40.00",
    },
    {
      image: sfvog,
      name: "ORIGINS EXTRACTS SFV OG - LIVE RESIN DIAMONDS - 1G",
      price: "$40.00",
    },
    {
      image: sherblato,
      name: "ORIGINS EXTRACTS SHERBLATO - LIVE RESIN DIAMONDS - 1G",
      price: "$40.00",
    },
    {
      image: trueog,
      name: "ORIGINS EXTRACTS TRUE OG - LIVE RESIN DIAMONDS - 1G",
      price: "$40.00",
    },
    {
      image: cerealmilk,
      name: "A1 CEREAL MILK DIAMONDS 1G @ $40 / 3G @ $80",
      price: "$40.00",
    },
    {
      image: gelatocake,
      name: "A1 GELATO CAKE DIAMONDS 1G @ $40 / 3G @ $80",
      price: "$40.00",
    },
    {
      image: khalifa,
      name: "A1 KHALIFA KUSH DIAMONDS 1G @ $40 / 3G @ $80",
      price: "$40.00",
    },
    {
      image: poundcake,
      name: "A1 LONDON POUND CAKE DIAMONDS 1G @ $40 / 3G @ $80",
      price: "$40.00",
    },
    {
      image: runtz,
      name: "A1 RUNTZ DIAMONDS 1G @ $40 / 3G @ $80",
      price: "$40.00",
    },
    {
      image: sunset,
      name: "A1 SUNSET SHERBERT DIAMONDS 1G @ $40 / 3G @ $80",
      price: "$40.00",
    },
    {
      image: chemdog,
      name: "ORIGINS EXTRACTS CHEMDOG - LIVE RESIN DIAMONDS - 1G",
      price: "$40.00",
    },
    {
      image: origingelato,
      name: "ORIGINS EXTRACTS GELATO - LIVE RESIN DIAMONDS - 1G",
      price: "$40.00",
    },
    {
      image: originmonkey,
      name: "ORIGINS EXTRACTS GREASE MONKEY - LIVE RESIN DIAMONDS - 1G",
      price: "$40.00",
    },
    {
      image: berrypie,
      name: "STIIIZY - BERRY PIE - LIVE RESIN DIAMONDS",
      price: "$40.00",
    },
    {
      image: blueberry,
      name: "STIIIZY - BLUEBERRY MUFFIN - LIVE RESIN DIAMONDS",
      price: "$40.00",
    },
    {
      image: fruitrings,
      name: "STIIIZY - FRUIT RINGS - LIVE RESIN DIAMONDS",
      price: "$40.00",
    },
    {
      image: purphaze,
      name: "STIIIZY - PURPLE HAZE - LIVE RESIN DIAMONDS",
      price: "$40.00",
    },
    {
      image: curemango,
      name: "WEST COAST CURE MANGO HAZE LIVE RESIN DIAMONDS",
      price: "$40.00",
    },
    {
      image: curepapaya,
      name: "WEST COAST CURE PAPAYA CAKE LIVE RESIN DIAMONDS",
      price: "$40.00",
    },
    {
      image: curewatermelon,
      name: "WEST COAST CURE WATERMELON Z LIVE RESIN DIAMONDS",
      price: "$40.00",
    },
    {
      image: curewhitefirebomb,
      name: "WEST COAST CURE WHITE FIRE BOMB LIVE RESIN DIAMONDS",
      price: "$40.00",
    },
  ];
  return (
    <>
      <Header />
      <Nav />
      <main className="container mx-auto relative ...">
        <div className="text-md text-left mt-10 mb-10 font-medium text-slate-400 w-1/4">
          <a href="/">Home</a>
          <a className="pl-1" href="/concentrates">
            / Concentrates
          </a>
          <p className="inline pl-1">/ Diamonds</p>
        </div>
        <h1 className="text-2xl text-left mt-10 mb-10 font-bold text-slate-700 border-b-8 border-green-600 w-1/6">
          DIAMONDS
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
        <div className="flex justify-end absolute bottom-5 -right-20">
          <a href="#top">
            <i class="fa-regular fa-circle-up fa-bounce fa-2xl text-green-600"></i>
          </a>
        </div>
      </main>
    </>
  );
}

export default Diamonds;
