import React from 'react';
import Image from 'next/image';
import FadeInOnView from '@/components/animations/fadeInOnView';


const Section2: React.FC = () => {
  return (
    <section className="relative p-4 pb-6 mb-20">

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

      <FadeInOnView once={false} rootMargin="0px 0px -50px 0px" threshold={0.2} duration={800}>
        <div className="relative w-full max-w-6xl mx-auto z-10 aspect-[16/9]">
          <Image
            src="/images/section2-img-1.png"
            alt="sponsors"
            fill
            className="object-contain"
            priority
          />
        </div>
      </FadeInOnView>
    </section>
  );
};

export default Section2;