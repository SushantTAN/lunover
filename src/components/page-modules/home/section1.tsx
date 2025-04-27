import BoxLoader from "@/components/loader/box-loader";
import dynamic from "next/dynamic";
import Link from "next/link";

const HomeVideoBanner = dynamic(() => import("./home-video"), {
  loading: () => <div className="flex justify-center py-12">
    <BoxLoader />
  </div>,
});

const Section1: React.FC = () => {
  return (
    <section className="mb-24">
      <HomeVideoBanner />

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
