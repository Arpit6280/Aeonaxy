import React from "react";

function Hero() {
  return (
    <div className="md:w-[96%] md:mx-4  lg:w-[85%] lg:mx-32 px-3 pt-12">
      <h1 className="max-[440px]:text-[37px] min-[441px]:text-[40px]  max-[614px]:text-[40px] min-[615px]:text-[50px] min-[832px]:text-[60px] xl:text-[65px] font-semibold text-center max-[440px]:leading-[1.3] min-[441px]:leading-[3rem] min-[614px]:leading-[3.5rem] min-[832px]:leading-[4.5rem]">
        We're building the <br className="hidden min-[441px]:block" /> best
        place on earth to learn <br className="hidden min-[710px]:block" /> math
        and science
      </h1>
      <div className="relative max-[504px]:my-8 min-[505px]:my-4 md:mt-12 md:mb-8">
        <img
          src="https://brilliant.org/site_media/version-0c3c8369a8/images/company/testimonials/testimonials-header-2x.png"
          alt=""
          className="max-[440px]:pt-8 min-[505px]:pt-4 md:pt-0 h-28 md:h-auto"
        />
        <hr className="h-[2px] bg-black" />
        <h2 className="absolute top-0 min-[320px]:top-[25%] min-[505px]:top-[25%]  min-[832px]:top-[20%] text-center w-1/2 mx-[24%] max-[320px]:text-[0.75rem] min-[690px]:text-[1.3rem] min-[832px]:text-2xl  text-gray-600">
          In the process, we've been happy to recieve a lot of love from user
        </h2>
      </div>
    </div>
  );
}

export default Hero;
