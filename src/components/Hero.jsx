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
        <div className=" clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100" style={{"backgroundColor":"darkcyan"}}></div>
        <div className="relative opacity-100 grid items-center justify-items-center nike-container">
          <div className="grid items-center justify-items-center mt-28 md:mt-24">
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">
            Welcome to Crypto Dukaan
            </h1>
            {/* <h1 className='text-2xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200'>A loyalty points system for increasing customer retention and engagement</h1> */}

            <div className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto">
              {/* {videos?.map((val, i) => (
                <Clips
                  key={i}
                  imgsrc={val.imgsrc}
                  clip={val.clip}
                />
              ))} */}
            </div>
            {/* <div className='grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3'>
              {sociallinks?.map((val, i) => (
                <SocialLink
                  key={i}
                  icon={val.icon}
                />
              ))}
            </div> */}
          </div>

          <div className="flex items-center w-auto h-[45vh]">
            <h1 className="text-2xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-serif filter drop-shadow-sm text-slate-200">
              {" "}
              <div style={{textAlign:"center","display":"flex","justify-content":"center"}}>
              Introducing "Crypto Dukaan" - Your Gateway to Stylish Crypto Fashion!
              </div>
            <br/>
            Experience the cutting-edge fusion of style and technology at Crypto Dukaan. Discover trendy apparel and accessories curated to your unique taste. Shop effortlessly using your crypto wallet, enjoying blockchain's security and convenience. But that's not all – we value our customers. With every purchase, earn exclusive loyalty tokens, unlocking rewards, discounts, and offers. Redefine shopping with us today!
          </h1>
            {/* <img
              src={img}
              alt='hero-img/img'
              className='w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill'
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
