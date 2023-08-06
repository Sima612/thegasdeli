import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

function PreRolls() {
  const options = [["Regular"], ["Infused"]];
  const preRolls = [];
  return (
    <>
      <header>
        <Header />
        <Nav />
      </header>
      <main className="media-main container mx-auto relative ...">
        <div className="media-first-div text-md text-left mt-10 mb-10 font-medium text-slate-400 w-1/6">
          <a href="/">Home</a>
          <p className="inline pl-1">/ Pre-Rolls</p>
        </div>
        <h1 className="text-2xl text-left mt-10 mb-10 font-bold text-slate-700 border-b-8 border-amber-400 w-1/6">
          PRE-ROLLS
        </h1>
        <div className="media-flavors flex justify-between gap-2 w-1/4 ">
          <div className="border-solid border-2 border-slate-300 bg-slate-200 font-medium text-md text-slate-700 hover:bg-white hover:text-green-600 hover:border-green-300">
            <a className="px-5 py-1" href="/pre-rolls/regular">
              {options[0]}
            </a>
          </div>
          <div className="border-solid border-2 border-slate-300 bg-slate-200 font-medium text-md text-slate-700 hover:bg-white hover:text-green-600 hover:border-green-300">
            <a className="px-5 py-1" href="/pre-rolls/infused">
              {options[1]}
            </a>
          </div>
        </div>
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
      </main>
      <Footer />
    </>
  );
}

export default PreRolls;
