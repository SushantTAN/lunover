import Image from "next/image";

const Section2 = () => {
  return (
    <section className="relative p-4 pb-20 mb-20">
      <div className="absolute bottom-[2px] left-0 w-[50vw] min-w-[400px] max-w-[100vw] mx-auto">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src="/images/explosion-left.png"
            alt="explosion-left"
            fill
            className="object-contain object-left-bottom"
            priority
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[130px]">
        <div className="relative w-full h-full">
          <Image
            src="/images/skyline-black.png"
            alt="skyline"
            fill
            className="object-contain object-left-bottom"
            priority
          />
        </div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto z-10 aspect-[16/9]">
        <Image
          src="/images/section2-img-1.png"
          alt="sponsors"
          fill
          className="object-contain"
          priority
        />
      </div>

    </section>
  );
};

export default Section2;