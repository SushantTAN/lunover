import Link from "next/link";

const Section1 = () => {
  return (
    <section className="mb-20">
      <picture>
        <img
          src="images/band-performance.png"
          className="w-full h-[calc(100vh-200px)] object-cover mb-7 animate-fade-in"
          alt="band"
        />
      </picture>
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
