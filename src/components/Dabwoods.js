import Header from "./Header";
import Nav from "./Nav";
import dabwood from "../images/dabwoods.png";

function Dabwoods() {
  const descriptions = {
    image: dabwood,
    name: "DABWOODS 1G DISPOSABLE (SATIVA)",
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
          <p className="inline pl-1"> / {descriptions.name}</p>
        </div>
        <div className="flex flex-wrap mt-6 justify-evenly mb-10">
          <img className="w-1/3" src={descriptions.image} alt="" />
          <div className="px-3 grid content-center gap-y-3">
            <p className="px-3 text-green-600 text-lg">Dabwoods</p>
            <p className="px-3 text-2xl font-medium tracking-widest">
              {descriptions.name}
            </p>
            <p className="px-3 text-green-600 text-2xl font-bold pt-3">
              {descriptions.price}
            </p>
            <p className="px-3 pt-10 text-lg">
              Category:
              <a className="px-2 text-green-600" href="/vape-pens">
                Vape Pens
              </a>
            </p>
            <p className="px-3 text-xl font-medium text-slate-800 pt-5">
              Description:
            </p>
            <p className="font-lg text-lg px-3 text-slate-700 pt-5">
              Dabwoods Disposable, rechargeable, full gram vape collection.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
export default Dabwoods;
