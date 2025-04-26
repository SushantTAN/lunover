import Link from "next/link";
import Image from "next/image";

const Section1 = () => {
  return (
    <section className="mb-24">
      <div className="relative w-full h-[calc(100vh-200px)] sm:h-[60vh] mb-7 animate-fade-in">
        <Image
          src="/images/band-performance.png"
          alt="band"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="px-4 text-center">
        <h2 className="text-white font-normal mb-12 text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] leading-tight">
          1 festival • 5 dagar • 6 områden
        </h2>
        <Link
          href="/"
          className="btn-primary text-base sm:text-lg md:text-xl px-6 py-3 sm:px-8 sm:py-4"
        >
          Se hela programmet här
        </Link>
      </div>
    </section>
  );
};

export default Section1;
