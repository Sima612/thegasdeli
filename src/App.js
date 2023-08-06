import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { FileUploader } from "./components/FileUploader";
import { Preview } from "./components/Preview";
import { useState } from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Deals from "./components/Deals";
import DeliveryZone from "./components/DeliveryZone";
import Flower from "./components/Flower";
import Indica from "./components/Indica";
import Hybrid from "./components/Hybrid";
import Sativa from "./components/Sativa";
import VapePens from "./components/VapePens";
import LilStiiizy from "./components/LilStiiizy";
import PreRolls from "./components/PreRolls";
import Concentrates from "./components/Concentrates";
import CrumbleSugar from "./components/CrumbleSugar";
import Diamonds from "./components/Diamonds";
import LiveResin from "./components/LiveResin";
import Sauce from "./components/Sauce";
import Shatter from "./components/Shatter";
import Rosin from "./components/Rosin";
import Edibles from "./components/Edibles";
import PurplePunch from "./components/PurplePunch";
import OGK from "./components/OGK";
import SkywalkerOG from "./components/SkywalkerOG";
import PineappleRuntz from "./components/PineappleRuntz";
import OrangeSunset from "./components/OrangeSunset";
import Whiteraspberry from "./components/WhiteRaspberry";
import Watermelonz from "./components/Watermelonz";
import SkyWalkerOGPod from "./components/SkyWalkerOGPod";
import Strawnana from "./components/Strawnana";
import PineappleRuntzPod from "./components/PineappleRuntzPod";
import PinkAcai from "./components/PinkAcai";
import OrangeSunset1G from "./components/OrangeSunset1G";
import WhiteRaspberry1G from "./components/WhiteRaspberry1G";
import Watermelonz1G from "./components/Watermelonz1G";
import SkyWalkerOG1G from "./components/SkyWalkerOg1G";
import Strawnana1G from "./components/Strawnana1G";
import PineappleRuntz1G from "./components/PineappleRuntz1G";
import PinkAcai1G from "./components/PinkAcai1G";
import FireOG from "./components/FireOG";
import KingLouie from "./components/KingLouie";
import GirlScoutCookies from "./components/GirlScoutCookies";
import AppleSlushie from "./components/AppleSlushie";
import BlueDream from "./components/BlueDream";
import PlugResinLivest from "./components/PlugResinLivest";
import BrrBerry from "./components/BrrBerry";
import MoonWalker from "./components/MoonWalker";
import GeorgiaPeach from "./components/GeorgiaPeach";
import MagicMelons from "./components/MagicMelons";
import PineAppleKush from "./components/PineAppleKush";
import SunsetTsunami from "./components/SunsetTsunami";
import Baked from "./components/Baked";
import Gummies from "./components/Gummies";
import Chocolates from "./components/Chocolates";
import Regular from "./components/Regular";
import Infused from "./components/Infused";

function App() {
  const [files, setFiles] = useState([]);
  const onSuccess = (savedFiles) => {
    setFiles(savedFiles);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/deliveryzone" element={<DeliveryZone />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/upload"
          element={<FileUploader onSuccess={onSuccess} imageFiles={files} />}
        />
        <Route path="/flower" element={<Flower />} />
        <Route path="/flower/indica" element={<Indica />} />
        <Route path="/flower/hybrid" element={<Hybrid />} />
        <Route path="/flower/sativa" element={<Sativa />} />
        <Route path="/vape-pens" element={<VapePens />} />
        <Route path="/vape-pens/lilstiiizy/1" element={<LilStiiizy />} />
        <Route path="/vape-pens/lilstiiizy/2" element={<PurplePunch />} />
        <Route path="/vape-pens/lilstiiizy/3" element={<OGK />} />
        <Route path="/vape-pens/lilstiiizy/4" element={<SkywalkerOG />} />
        <Route path="/vape-pens/lilstiiizy/5" element={<PineappleRuntz />} />
        <Route path="/vape-pens/lilstiiizy/6" element={<OrangeSunset />} />
        <Route path="/vape-pens/lilstiiizy/7" element={<Whiteraspberry />} />
        <Route path="/vape-pens/lilstiiizy/8" element={<Watermelonz />} />
        <Route path="/vape-pens/lilstiiizy/9" element={<SkyWalkerOGPod />} />
        <Route path="/vape-pens/lilstiiizy/10" element={<Strawnana />} />
        <Route
          path="/vape-pens/lilstiiizy/11"
          element={<PineappleRuntzPod />}
        />
        <Route path="/vape-pens/lilstiiizy/12" element={<PinkAcai />} />
        <Route path="/vape-pens/lilstiiizy/13" element={<OrangeSunset1G />} />
        <Route path="/vape-pens/lilstiiizy/14" element={<WhiteRaspberry1G />} />
        <Route path="/vape-pens/lilstiiizy/15" element={<Watermelonz1G />} />
        <Route path="/vape-pens/lilstiiizy/16" element={<SkyWalkerOG1G />} />
        <Route path="/vape-pens/lilstiiizy/17" element={<Strawnana1G />} />
        <Route path="/vape-pens/lilstiiizy/18" element={<PineappleRuntz1G />} />
        <Route path="/vape-pens/lilstiiizy/19" element={<PinkAcai1G />} />
        <Route path="/vape-pens/lilstiiizy/20" element={<FireOG />} />
        <Route path="/vape-pens/lilstiiizy/21" element={<KingLouie />} />
        <Route path="/vape-pens/lilstiiizy/22" element={<GirlScoutCookies />} />
        <Route path="/vape-pens/lilstiiizy/23" element={<AppleSlushie />} />
        <Route path="/vape-pens/lilstiiizy/24" element={<BlueDream />} />
        <Route path="/vape-pens/lilstiiizy/25" element={<MoonWalker />} />
        <Route path="/vape-pens/lilstiiizy/26" element={<GeorgiaPeach />} />
        <Route path="/vape-pens/lilstiiizy/27" element={<MagicMelons />} />
        <Route path="/vape-pens/lilstiiizy/28" element={<PineAppleKush />} />
        <Route path="/vape-pens/lilstiiizy/29" element={<SunsetTsunami />} />
        <Route path="/vape-pens/lilstiiizy/30" element={<PlugResinLivest />} />
        <Route path="/vape-pens/lilstiiizy/31" element={<BrrBerry />} />
        <Route path="/pre-rolls" element={<PreRolls />} />
        <Route path="/pre-rolls/regular" element={<Regular />} />
        <Route path="/pre-rolls/infused" element={<Infused />} />
        <Route path="/concentrates" element={<Concentrates />} />
        <Route path="/concentrates/1" element={<PlugResinLivest />} />
        <Route path="/concentrates/crumble&sugar" element={<CrumbleSugar />} />
        <Route path="/concentrates/diamonds" element={<Diamonds />} />
        <Route path="/concentrates/live-resin" element={<LiveResin />} />
        <Route path="/concentrates/sauce" element={<Sauce />} />
        <Route path="/concentrates/shatter" element={<Shatter />} />
        <Route path="/concentrates/rosin" element={<Rosin />} />
        <Route path="/edibles" element={<Edibles />} />
        <Route path="/edibles/baked" element={<Baked />} />
        <Route path="/edibles/gummies" element={<Gummies />} />
        <Route path="/edibles/chocolates" element={<Chocolates />} />
      </Routes>
    </>
  );
}

export default App;
