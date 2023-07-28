import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Deals from "./components/Deals";
import DeliveryZone from "./components/DeliveryZone";
import Flower from "./components/Flower";
import Indica from "./components/Indica";
import Hybrid from "./components/Hybrid";
import Sativa from "./components/Sativa";
import VapePens from "./components/VapePens";
import Dabwoods from "./components/Dabwoods";
import PreRolls from "./components/PreRolls";
import Concentrates from "./components/Concentrates";
import CrumbleSugar from "./components/CrumbleSugar";
import Diamonds from "./components/Diamonds";
import LiveResin from "./components/LiveResin";
import Sauce from "./components/Sauce";
import Shatter from "./components/Shatter";
import Rosin from "./components/Rosin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/deliveryzone" element={<DeliveryZone />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/flower" element={<Flower />} />
        <Route path="/flower/indica" element={<Indica />} />
        <Route path="/flower/hybrid" element={<Hybrid />} />
        <Route path="/flower/sativa" element={<Sativa />} />
        <Route path="/vape-pens" element={<VapePens />} />
        <Route path="/vape-pens/dabwoods" element={<Dabwoods />} />
        <Route path="/pre-rolls" element={<PreRolls />} />
        <Route path="/concentrates" element={<Concentrates />} />
        <Route path="/concentrates/crumble&sugar" element={<CrumbleSugar />} />
        <Route path="/concentrates/diamonds" element={<Diamonds />} />
        <Route path="/concentrates/live-resin" element={<LiveResin />} />
        <Route path="/concentrates/sauce" element={<Sauce />} />
        <Route path="/concentrates/shatter" element={<Shatter />} />
        <Route path="/concentrates/rosin" element={<Rosin />} />
      </Routes>
    </>
  );
}

export default App;
