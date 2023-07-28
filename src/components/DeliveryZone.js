import Header from "./Header";
import zone from "../images/zone.png";
import Nav from "./Nav";

function DeliveryZone() {
  return (
    <>
      <header>
        <Header />
        <Nav />
      </header>
      <main className="container mx-auto relative ...">
        <h1 className="text-2xl text-left mt-10 mb-10 font-bold text-slate-700 border-b-8 border-green-600 w-1/6">
          DELIVERY ZONES
        </h1>
        <img
          className="mx-auto rounded-lg drop-shadow-2xl mb-10 w-1/2"
          src={zone}
          alt="delivery zone"
        />
        <div className="flex justify-end absolute bottom-5 -right-20">
          <a href="#top">
            <i class="fa-regular fa-circle-up fa-bounce fa-2xl text-green-600"></i>
          </a>
        </div>
      </main>
    </>
  );
}

export default DeliveryZone;
