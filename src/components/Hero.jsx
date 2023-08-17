import React from "react";
import Clips from "./utils/Clips";
import SocialLink from "./utils/SocialLink";

const Hero = ({
  heroapi: { title, subtitle, btntext, img, sociallinks, videos },
}) => {
  // console.log(heroapi)
  return (
    <>
     <div className="relative h-auto w-auto flex flex-col">
  <div className="clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100" style={{ backgroundColor: "darkcyan" }}></div>
  <div className="relative opacity-100 grid items-center justify-items-center nike-container">
    <div className="grid items-center justify-items-center mt-10 md:mt-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold filter drop-shadow-sm text-slate-200 text-center">
        Welcome to Crypto Dukaan
      </h1>
    </div>

    <div className="flex flex-col items-center mt-6">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-serif filter drop-shadow-sm text-slate-200 text-center">
        Introducing "Crypto Dukaan" - Your Gateway to Stylish Crypto Fashion!
      </h2>
      <p className="text-base md:text-lg lg:text-xl font-serif filter drop-shadow-sm text-slate-200 text-center mt-4">
        Experience a groundbreaking fusion of style and technology at Crypto Dukaan. Discover trendy apparel and accessories curated to your unique taste. Shop effortlessly using your crypto wallet, enjoying blockchain's security and convenience. But that's not all – we value our customers. With every purchase, earn exclusive loyalty tokens, unlocking rewards, discounts, and offers. Redefine shopping with us today!
      </p>
    </div>
  </div>
</div>
    </>
  );
};

export default Hero;
