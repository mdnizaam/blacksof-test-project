import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
      <Navbar />
      <h1 className="text-[100px] text-[#3aa3c6] font-bold">404</h1>
      <p className="text-xl text-center mt-4">
        The page you have requested doesn&apos;t exist.
      </p>
      <Link href="/">
        <button className="mt-6 font-bold rounded-[100px] px-6 py-3 bg-[#5CD6FF] text-black hover:bg-[#46cdfa]">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}
