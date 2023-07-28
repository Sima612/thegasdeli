import Header from "./Header";
import Nav from "./Nav";
import cookies from "../images/cookies.png";
import crooks from "../images/crooks.png";
import nug from "../images/nug.png";
import lilpuffies from "../images/lilpuffies.png";
import stiiizy from "../images/stiiizy.png";
import stiiizyAcai from "../images/stiiizyAcai.png";

function PreRolls() {
  const preRolls = [
    {
      image: cookies,
      name: "COOKIES 2G PACKWOOD W/ GLASS TIP",
      price: "$20.00",
      description: (
        <>
          <a href="/pre-rolls/cookies">(Description)</a>
        </>
      ),
    },
    {
      image: crooks,
      name: "CROOKS N EXTRACTS LIVE RESIN PRE-ROLL",
      price: "$10.00",
    },
    {
      image: nug,
      name: "EXCLUSIVE TOP SHELF KING NUG PRE-ROLL",
      price: "$10.00",
    },
    {
      image: lilpuffies,
      name: "LIL PUFFIES - BABY PRE-ROLLS (INDICA)",
      price: "$20.00",
    },
    {
      image: lilpuffies,
      name: "LIL PUFFIES - BABY PRE-ROLLS (HYBRID)",
      price: "$20.00",
    },
    {
      image: lilpuffies,
      name: "LIL PUFFIES - BABY PRE-ROLLS (SATIVA)",
      price: "$20.00",
    },
    {
      image: stiiizy,
      name: "STIIIZY - 40S MINI BLUNT MULTIPACK THC 40% (HYBRID)",
      price: "$35.00",
    },
    {
      image: stiiizy,
      name: "STIIIZY - 40S MINI BLUNT MULTIPACK THC 40% (SATIVA)",
      price: "$35.00",
    },
    {
      image: stiiizy,
      name: "STIIIZY - 40S MINI BLUNT MULTIPACK THC 40% (INDICA)",
      price: "$35.00",
    },
    {
      image: stiiizyAcai,
      name: "STIIIZY - .5G 40S PRE-ROLL MULTIPACK THC 40% (HYBRID)",
      price: "$25.00",
    },
    {
      image: stiiizyAcai,
      name: "STIIIZY - .5G 40S PRE-ROLL MULTIPACK THC 40% (INDICA)",
      price: "$25.00",
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
          <p className="inline pl-1">/ Pre-Rolls</p>
        </div>
        <h1 className="text-2xl text-left mt-10 mb-10 font-bold text-slate-700 border-b-8 border-green-600 w-1/6">
          PRE-ROLLS
        </h1>
        <p className="mt-10 font-medium px-2 py-2 text-slate-900 rounded-lg">
          Showing all {preRolls.length} results
        </p>
        <div className="flex flex-wrap gap-9 mt-6 justify-start">
          {preRolls.map((preRoll) => {
            return (
              <div className="flex flex-wrap">
                <div className="w-72 m-0 font-medium text-center px-2 py-2 text-slate-900 rounded-lg">
                  <img
                    className="w-64 h-64 mx-auto"
                    src={preRoll.image}
                    alt="pictures"
                  />
                  <p className="mt-3">{preRoll.name}</p>
                  <p className="font-bold text-lg text-green-600">
                    {preRoll.price}
                  </p>
                  <p className="bg-slate-200 text-slate-900 font-md text-lg rounded-lg">
                    {preRoll.description}
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

export default PreRolls;
