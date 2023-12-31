import dabwoodsBanner from "../images/dabwoodsBanner.png";
import plugNPlayBanner from "../images/plugNPlayBanner.png";
import banner from "../images/banner.png";

import { Carousel } from "@material-tailwind/react";

function BannerSlider() {
  return (
    <>
      <Carousel autoplay loop>
        <img
          className="h-full w-full object-cover"
          src={dabwoodsBanner}
          alt="banner 1"
        />
        <img
          className="h-full w-full object-cover"
          src={banner}
          alt="banner 2"
        />
        <img
          className="h-full w-full object-cover"
          src={plugNPlayBanner}
          alt="banner 3"
        />
      </Carousel>
    </>
  );
}

export default BannerSlider;
