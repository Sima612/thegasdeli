import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

function About() {
  return (
    <>
      <header>
        <Header />
        <Nav />
      </header>

      <main className="media-main container mx-auto">
        <h2 className="text-2xl text-left mt-10 mb-10 font-bold text-slate-700 border-b-8 border-amber-400 w-1/6">
          ABOUT
        </h2>
        <p className="font-medium text-md px-3 text-slate-700">
          The Tree House Delivery strives to be the most reliable and highest
          quality Prop 215 Medical and Prop 64 Recreational Cannabis delivery,
          Matching personal customer service with excellent product knowledge,
          The Tree House Delivery offers Pharmaceutical Grade Cannabis, 21 years
          of age and up, attain an improved quality of life. We are passionate
          about our products and the legal distribution of medicinal marijuana.
          Here at The Tree House Delivery guarantees a safe and timely cannabis
          delivery to your doorstep. Wide selection, affordable prices and some
          of the best strains available in LA and across California.
        </p>
        <p className="font-medium text-lg px-3 text-slate-700 mt-10">
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
      </main>
      <Footer />
    </>
  );
}

export default About;
