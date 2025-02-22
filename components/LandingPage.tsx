import React from "react";

const LandingPage = () => {
  return (
    <div className="relative  h-[100vh] overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/automotive.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
      {/* Content Over Video */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-1/2 text-center ">
        <span className="text-white font-light pt-2 pb-3  text-lg  xl:text-xl 2xl:text-[1.375rem]  block leading-snug">
          Driven by performance
        </span>

        <h1 className="text-white text-5xl  font-light leading-tight pb-2 ">
          <span className="font-semibold mb-10">
            Soft trims and <span className="text-[#00BFFF]">NVH solutions</span>
          </span>
          <br />
          <span className="hidden md:block">for seamless rides</span>
        </h1>
      </div>
    </div>
  );
};

export default LandingPage;
