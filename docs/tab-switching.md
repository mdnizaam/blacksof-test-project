# Smooth Tab Switching on Scroll

## Overview

This feature allows **smooth scrolling tabs** with:

- **A sticky heading at the top**
- **A scrollbar indicator on the left**
- **A video section appearing smoothly on scroll**

## Features

Tab switches on scroll  
 The heading sticks at the top  
 Scrollbar indicator shows progress

##  Implementation Steps

###  Create Tab Component

```tsx
<motion.h2
  variants={fadeIn("up", 0.3)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: false, amount: 0.7 }}
  className={` ${
    progress > 0 ? "items-start justify-center" : "items-center justify-center"
  } h-[100vh] flex transition-all text-center  sticky top-0 w-full  text-white font-light  text-5xl xl:pt-6`}
>
  <span className="">
    Evolving the drive with <span className="font-bold ">360-degree</span>{" "}
    <br className="hidden md:block" />
    <span className="pt-6 block">comprehensive solutions</span>
  </span>
</motion.h2>;
{
  /* Right Side - Animated Video Section */
}
<div className="sticky top-0 h-screen w-1/2 flex flex-col items-center justify-center gap-y-10 overflow-hidden">
  <div className="w-full h-[350px]">
    <AnimatePresence mode="wait">
      <motion.video
        ref={videoRef}
        key={tabs[activeTab]?.id}
        src={tabs[activeTab]?.video[selectedVideo]}
        autoPlay
        muted
        //   loop
        className="w-full h-full object-contain"
        // initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      />
    </AnimatePresence>
  </div>

  <motion.ul
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.7 }}
    className="flex justify-center gap-x-10 text-white text-xl mt-10"
  >
    {tabs[activeTab]?.bodyParts?.map((thumb, index) => (
      <li
        key={thumb}
        className={`${
          selectedVideo === index ? "opacity-100" : "opacity-60"
        } cursor-pointer text-center font-thin flex flex-col justify-center items-center hover:opacity-100
                `}
        onClick={() => handleBodyPartVideo(index)}
      >
        <Image
          src={tabs[activeTab]?.tabsVideoThumbnail[index]}
          alt="Example Image"
          className="object-cover"
          width={70}
          height={70}
        />
        {thumb}
      </li>
    ))}
  </motion.ul>

  {/* play pause button */}
  <motion.div
    variants={fadeIn("up", 0.3)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.7 }}
    className="absolute bottom-48 right-0"
  >
    <button
      onClick={togglePlay}
      className="relative w-16 h-16 flex items-center justify-center"
    >
      {/* SVG Circular Progress Bar */}
      <svg width="64" height="64" viewBox="0 0 100 100">
        {/* Circle Background */}
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="gray"
          strokeWidth="6"
          fill="none"
        />
        {/* Progress Bar */}
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="white"
          strokeWidth="6"
          fill="none"
          strokeDasharray="251.2"
          strokeDashoffset={251.2 - (251.2 * videoProgress) / 100}
          strokeLinecap="round"
        />
      </svg>

      {/* Play/Pause Icon */}
      <span className="absolute text-white text-2xl">
        {isPlaying ? "❚❚" : "▶"}
      </span>
    </button>
  </motion.div>
</div>;
```
