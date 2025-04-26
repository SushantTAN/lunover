'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/utils/tailwind";

import threeLines from "@/assets/svgs/three-horizontal-lines.svg";

const Header = () => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white">
      <nav className="relative flex items-center justify-between px-6 md:px-[64px] lg:px-[97px] py-5  overflow-hidden">
        <div className="absolute right-0 top-0 w-[300px] md:w-[400px] lg:w-[500px]">
          <Image
            src="/images/pink-explosion-right.png"
            alt="explosion"
            width={500}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        <h1 className="text-2xl sm:text-3xl font-semibold z-10">FRI ENTRÉ</h1>

        <div
          className={cn(
            "transition-all duration-300 overflow-hidden z-10 hidden lg:block",
            atTop ? "h-16 opacity-100" : "h-0 opacity-0"
          )}
        >
          <Image
            src="/images/festival-image.png"
            alt="festival"
            width={160}
            height={70}
            priority
          />
        </div>

        <button className="h-10 w-10 rounded-full bg-black z-20 grid place-items-center cursor-pointer">
          <Image
            src={threeLines}
            alt="menu icon"
            width={16}
            height={16}
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;
