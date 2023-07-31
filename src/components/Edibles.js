import Header from "./Header";
import Nav from "./Nav";

function Edibles() {
  const options = [["BAKED"], ["GUMMIES"], ["CHOCOLATES"]];

  return (
    <>
      <header>
        <Header />
        <Nav />
      </header>
      <main className="container mx-auto relative ...">
        <div className="text-md text-left mt-10 mb-10 font-medium text-slate-400 w-1/6">
          <a href="/">Home</a>
          <p className="inline pl-1">/ Edibles</p>
        </div>
        <h1 className="text-2xl text-left mt-10 mb-10 font-bold text-slate-700 border-b-8 border-amber-400 w-1/6">
          EDIBLES
        </h1>
        <div className="flex justify-between gap-3 w-1/3 ">
          <div className="border-solid border-2 border-slate-300 bg-slate-200 font-medium text-md text-slate-700 hover:bg-white hover:text-green-600 hover:border-green-300">
            <a className="px-5 py-1" href="/concentrates/crumble&sugar">
              {options[0]}
            </a>
          </div>
          <div className="border-solid border-2 border-slate-300 bg-slate-200 font-medium text-md text-slate-700 hover:bg-white hover:text-green-600 hover:border-green-300">
            <a className="px-5 py-1" href="/concentrates/diamonds">
              {options[1]}
            </a>
          </div>
          <div className="border-solid border-2 border-slate-300 bg-slate-200 font-medium text-md text-slate-700 hover:bg-white hover:text-green-600 hover:border-green-300">
            <a className="px-5 py-1" href="/concentrates/live-resin">
              {options[2]}
            </a>
          </div>
        </div>
        <p className="mt-10 font-medium px-2 py-2 text-slate-900 rounded-lg">
          Showing all results
        </p>
      </main>
    </>
  );
}

export default Edibles;
