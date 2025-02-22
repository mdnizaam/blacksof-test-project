"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "@/utils/variants";
import tabs from "../ConstantData/tabsData";

export default function TabSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Toggle play/pause
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Update progress bar
  useEffect(() => {
    const updateProgress = () => {
      if (!videoRef.current) return;
      const percent =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setVideoProgress(percent);
    };

    const video = videoRef.current;
    video?.addEventListener("timeupdate", updateProgress);
    return () => video?.removeEventListener("timeupdate", updateProgress);
  }, [activeTab, selectedVideo]);

  useEffect(() => {
    setVideoProgress(0);
    setIsPlaying(true);
    // if (videoRef.current) {
    //   videoRef.current.pause();
    //   videoRef.current.currentTime = 0;
    // }
  }, [activeTab, selectedVideo]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.clientHeight;
      const scrollY = window.scrollY;

      const progressValue = Math.min(
        1,
        Math.max(
          0,
          (scrollY - sectionTop) / (sectionHeight - window.innerHeight)
        )
      );
      setProgress(progressValue);

      const newTab = Math.floor(progressValue * tabs.length);
      setActiveTab(newTab);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBodyPartVideo = (video: number) => {
    setSelectedVideo(video);
  };
  return (
    <div className="w-full bg-[#000000] ">
      <div className="">
        {/*Scrolling Section with Left Scrollbar & Tabs */}

        <motion.h2
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className={` ${
            progress > 0
              ? "items-start justify-center"
              : "items-center justify-center"
          } h-[100vh] flex transition-all text-center  sticky top-0 w-full  text-white font-light text-3xl p-10 md:p-0  md:text-5xl xl:pt-6`}
        >
          <span className="">
            Evolving the drive with{" "}
            <span className="font-bold ">360-degree</span>{" "}
            <br className="hidden md:block" />
            <span className="pt-6 block">comprehensive solutions</span>
          </span>
        </motion.h2>

        <div
          ref={sectionRef}
          className="relative flex flex-col md:flex-row items-center justify-center w-full h-[200vh]"
        >
          {/* Left Sidebar with Scrollbar */}
          <div className="hidden sticky top-0 h-screen w-[100px] md:flex flex-col items-center justify-center">
            {/* Scrollbar Track */}
            <div className=" relative w-[2px] bg-gray-600 h-[270px] rounded-full">
              {/* Scrollbar Progress */}
              <motion.div
                className="absolute top-0 w-full bg-white rounded-full"
                style={{ height: `${progress * 100}%` }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </div>
          </div>

          {/* Left Tab Indicator */}
          <div className=" hidden sticky top-0 h-screen w-full md:w-1/4 md:flex flex-col items-center justify-center">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`transition-all my-6 ${
                  activeTab === index ? "text-white" : "text-gray-500"
                }`}
                //   onClick={() => handleTabSwitch(tab.id)}
              >
                <div className="text-sm md:text-4xl md:my-2">{tab.title}</div>
                <div className="hidden md:block text-[14px] max-w-52 leading-normal ">
                  {tab.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Animated Video Section */}
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
              className="flex justify-center gap-x-5 md:gap-x-10 text-white md:text-xl mt-10"
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
                    className="object-cover w-10 h-10 md:w-[70px] md:h-[70px]"
                    width={30}
                    height={30}
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
              className="absolute bottom-64 md:bottom-48 right-0"
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
          </div>
        </div>
      </div>
    </div>
  );
}
