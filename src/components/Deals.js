import dailydeals from "../images/dailydeals.png";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

function Deals() {
  return (
    <>
      <header>
        <Header />
        <Nav />
      </header>

      <main className="media-main container mx-auto relative ...">
        <h1 className="text-2xl text-left mt-10 mb-10 font-bold text-slate-700 border-b-8 border-amber-400 w-1/6">
          DEALS
        </h1>
        <div className="deals-image">
          <img className="mx-auto" src={dailydeals} alt="daily deals" />
        </div>
        <section>
          <h2 className="font-bold text-lg px-3 py-2 text-slate-700">
            Private Reserve Flower
          </h2>
          <p className="font-medium text-md px-3 text-slate-700">8g @ $60</p>
          <p className="font-medium text-md px-3 text-slate-700">10g @ $70</p>
          <p className="font-medium text-md px-3 text-slate-700">14g @ $110</p>
          <p className="font-medium text-md px-3 text-slate-700">28g @ $200</p>
          <br />
          <h2 className="font-medium text-lg px-3 text-slate-700">
            Kill Co 3.5g Prepackaged Flower
          </h2>
          <br />
          <p className="font-medium text-md px-3 text-slate-700">2 for $75</p>
          <br />
          <hr />
        </section>
        <br />
        <section>
          <h2 className="font-bold text-lg  px-3 py-2 text-slate-700">
            Vape Specials
          </h2>
          <p className="font-medium text-md px-3 text-slate-700">
            Dabwood 1g Disposables 2 @ $85 / 3 @ $120
          </p>
          <p className="font-medium text-md px-3 text-slate-700">
            Jeeters 1g Cartridge 2 @ $110
          </p>
          <p className="font-medium text-md px-3 text-slate-700">
            Jeeters .5g Disposable 2 @ $75
          </p>
          <p className="font-medium text-md px-3 text-slate-700">
            PLUGplay 1g Regular 2 @ $105 / Live Resin 2 @ $115
          </p>
          <p className="font-medium text-md px-3 text-slate-700">
            Pinnacle 1g Cartridge Buy 2 Get 1 Free!
          </p>
          <p className="font-medium text-md px-3 text-slate-700">
            Stiiizy 1g Buy 2 Get 1 Free!
          </p>
          <br />
          <hr />
        </section>
        <br />
        <section>
          <h2 className="font-bold text-lg  px-3 py-2 text-slate-700">
            Edible Specials
          </h2>
          <p className="font-medium text-md px-3 text-slate-700">
            Quarantine 500mg 2 @ $35 / 1000mg 2 @ $55
          </p>
          <p className="font-medium text-md px-3 text-slate-700">
            Smashed 500mg 2 @ $35 / 1000mg 2 @ $55
          </p>
          <p className="font-medium text-md px-3 text-slate-700">
            Liquid Karma 300mg Gummies 2 @ $55 / 1000mg Drink 2 @ $110
          </p>
          <p className="font-medium text-md px-3 text-slate-700">
            StickyAF 800mg Gummies 2 @ $55
          </p>
          <p className="font-medium text-md px-3 text-slate-700">
            STNDRD 200mg Gummies 3 for $35 / 400mg Gummies 3 for $65 / 1000mg
            Gummies 2 @ $100
          </p>
          <p className="font-medium text-md px-3 text-slate-700">
            Resin Gummies 3 for $50
          </p>
          <br />
          <hr />
        </section>
        <br />
        <section>
          <h2 className="font-bold text-lg  px-3 py-2 text-slate-700">
            Concentrate Specials
          </h2>
          <p className="font-medium text-md px-3 text-slate-700">
            Stiiizy 1g Diamonds 2 @ $75
          </p>
          <p className="font-medium text-md px-3 text-slate-700">
            West Coast Cure 1g Diamonds 2 @ $75
          </p>
          <p className="font-medium text-md px-3 text-slate-700">
            Stiiizy 1g Live Rosin Badder 2 @ $110
          </p>
          <p className="font-medium text-md px-3 text-slate-700">
            A1 Diamonds 3g @ $80
          </p>
          <p className="font-medium text-md px-3 text-slate-700">
            A1 Sugars 3g @ $70
          </p>
          <p className="font-medium text-md px-3 text-slate-700">
            House Shatter 3g @ $60 / 6g @ $110
          </p>
          <br />
        </section>

        <section className="mb-10">
          <h2 className="font-bold text-lg px-3 py-2 text-slate-700">
            ** NO RETURNS. EXCHANGES ONLY ON DEFECTIVE PRODUCTS.
          </h2>
          <h2 className="font-bold text-lg px-3 py-2 text-slate-700">
            MUST NOTIFY US WITHIN 24 HOURS OF PURCHASE. **
          </h2>
          <h2 className="font-bold text-2xl px-3 py-2 text-slate-700">
            First-Time Patients
          </h2>
          <p className="font-medium text-lg px-3 text-slate-700">
            ✔ ALL FTP'S GET A HOUSE PRE ROLL
          </p>
          <p className="font-medium text-lg px-3 text-slate-700">
            📝 EASY SIGN UP
          </p>
          <p className="font-medium text-md px-3 text-slate-700">
            +21 Send Us The Following Three Information Via Text
          </p>
          <p className="font-medium text-md px-3 text-slate-700">
            * A Valid Indentification Card .
          </p>
          <p className="font-medium text-md px-3 text-slate-700">
            * A Selfie Holding The ID & or 2nd form of ID .
          </p>
          <p className="font-medium text-md px-3 text-slate-700">
            * A Current Address .
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Deals;
