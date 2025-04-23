'use client';

import Link from "next/link";
import Image from "next/image";

const Section1 = () => {
  return (
    <section className="mb-20">
      <div className="relative w-full h-[calc(100vh-200px)] mb-7 animate-fade-in">
        <Image
          src="/images/band-performance.png"
          alt="band"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="px-4 text-center">
        <h2 className="text-white text-center font-normal text-[70px] mb-8">
          1 festival • 5 dagar • 6 områden
        </h2>
        <Link href="/" className="btn-primary">
          Se hela programmet här
        </Link>
      </div>
    </section>
  );
};

export default Section1;
