import Header from "./Header";
import zone from "../images/zone.png";
import Nav from "./Nav";
import Footer from "./Footer";

function DeliveryZone() {
  return (
    <>
      <header>
        <Header />
        <Nav />
      </header>
      <main className="media-main container mx-auto relative ...">
        <h1 className="text-2xl text-center mt-10 mb-10 font-bold text-slate-700 border-b-8 border-amber-400 w-1/6 mx-auto">
          DELIVERY ZONES
        </h1>
        <div className="delivery-image">
          <img
            className="mx-auto rounded-lg drop-shadow-2xl mb-10 w-1/2"
            src={zone}
            alt="delivery zone"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default DeliveryZone;
