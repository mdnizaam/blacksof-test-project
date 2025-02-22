import React from "react";
import Image from "next/image";
const footerMenu = [
  {
    heading: "APPLICATIONS",
    subMenu: ["Apparel", "Automotive", "Filtration", "Customised Nonwoven"],
  },
  {
    heading: "Company",
    subMenu: ["Who We Are", "Global Compentency", "Innovation", "ESG Impact"],
  },
  {
    heading: "MORE",
    subMenu: ["Contact Us", "Careers"],
  },
  {
    heading: "Follow Us",
    subMenu: ["LinkedIn"],
  },
];

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-b from-white to-blue-50  m-10 h-[70vh]">
      <div className="relative w-full md:w-1/2 h-full mx-auto container">
        <div>
          <Image
            src="/Supreme_logos.png"
            alt="Example Image"
            className="object-cover mb-6"
            width={180}
            height={180}
          />
        </div>

        <div className=" w-full grid grid-cols-2 md:grid-cols-4 justify-between">
          {footerMenu.map((item) => (
            <div className="mb-6 md:mb-0">
              <h2 className="text-lg  text-black">{item.heading}</h2>
              <ul className="list-none mt-2 text-gray-700 ">
                {item.subMenu.map((sub) => (
                  <a href={sub}>
                    {" "}
                    <li className="my-6 hover:text-[#2e3133aa]">{sub}</li>
                  </a>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mx-auto container absolute bottom-0 flex justify-between ">
          <p className="text-[10px] md:text-sm text-muted-foreground">
            ©2024. All Rights Reserved.
          </p>
          <p className="text-[10px] md:text-sm text-muted-foreground">
            Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
