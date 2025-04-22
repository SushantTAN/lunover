'use client';

import { useEffect, useState } from "react";
import { cn } from "@/utils/tailwind";

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
    <header className="sticky top-0">
      <nav className="relative flex items-start justify-between py-[32px] px-[97px] bg-black text-white w-full overflow-y-hidden">
        <picture className="absolute right-0 top-0 w-[500px]">
          <img src={"images/pink-explosion-right.png"} alt="explosion" />
        </picture>

        <h1 className="text-3xl">FRI ENTRÉ</h1>


        <picture className={cn("transition-all", atTop ? "h-18" : "h-0")}>
          <img src={"images/festival-image.png"} className="h-full" alt="festival" />
        </picture>


        <button className="h-12 w-12 rounded-full bg-black z-20 grid place-items-center cursor-pointer">
          <picture>
            <img src={"svgs/three-horizontal-lines.svg"} alt="menu icon" />
          </picture>
        </button>
      </nav>
    </header>
  );
};

export default Header;
