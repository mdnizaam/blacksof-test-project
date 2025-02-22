This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
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
    <footer className="bg-gradient-to-b from-white to-blue-50  m-10 h-[70vh]">
      <div className="w-full md:w-1/2 mx-auto container">
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
        <div className="text-center mt-8 flex justify-between ">
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
