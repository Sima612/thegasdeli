import dabwoodsBanner from "../images/dabwoodsBanner.png";
import plugNPlayBanner from "../images/plugNPlayBanner.png";
import banner from "../images/banner.png";

import { Carousel, autoplayDelay } from "@material-tailwind/react";

function BannerSlider() {
  return (
    <>
      <Carousel>
        <img
          className="h-full w-full object-cover"
          src={dabwoodsBanner}
          alt="banner 1"
        />
        <img
          className="h-full w-full object-cover"
          src={banner}
          alt="banner 3"
        />
        <img
          className="h-full w-full object-cover"
          src={plugNPlayBanner}
          alt="banner 2"
        />
      </Carousel>
    </>
  );
}

export default BannerSlider;
