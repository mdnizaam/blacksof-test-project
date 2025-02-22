"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav>
      <div
        className={`fixed 
     
         z-10 bg-white top-0 left-0 right-0 transition-transform  shadow-md duration-500 ${
           isNavbarVisible ? "translate-y-0" : "-translate-y-full"
         }`}
      >
        <header className="2xl:py-2 xlg:py-1 py-2 z-50">
          <div className="container h-full xl:py-3 py-1 mt-[2px] flex gap-4 items-center justify-between mx-auto">
            <a className="" href="/">
              <span>
                <Image
                  src="/Supreme_logos.png"
                  alt="Supreme Image"
                  className="object-contain p-2"
                  width={130}
                  height={130}
                />
              </span>
            </a>
            <div className="md:flex    hidden justify-between items-center gap-x-8">
              <Button label={"Contact Us"} bg={true} />
              <button>
                <Image
                  src="/linkedin.png"
                  alt="Example Image"
                  className="object-contain"
                  width={25}
                  height={25}
                />
              </button>
              <button>
                <Image
                  src="/language.png"
                  alt="Example Image"
                  className="object-contain"
                  width={45}
                  height={45}
                />
              </button>
            </div>
          </div>
        </header>
      </div>
    </nav>
  );
};

export default Navbar;
