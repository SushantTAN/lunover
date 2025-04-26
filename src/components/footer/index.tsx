import Image from "next/image";
import instagram from '@/assets/svgs/instagram.svg';
import facebook from '@/assets/svgs/facebook.svg';
import twitter from '@/assets/svgs/twitter.svg';

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 py-10 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 border-t border-[#FFFFFF33] pt-8">

        <div className="flex-1">
          <div className="relative h-14 w-[200px]">
            <Image
              src="/images/stockholms.png"
              fill
              alt="Stockholms Stad"
              className="object-contain object-center md:object-left"
              priority
            />
          </div>
        </div>

        <div className="text-center md:text-left flex flex-col items-center md:items-start flex-1">
          <p className="text-white mb-2">Följ oss</p>
          <div className="flex gap-4">
            <Image src={instagram} alt="Instagram icon" width={24} height={24} />
            <Image src={facebook} alt="Facebook icon" width={24} height={24} />
            <Image src={twitter} alt="Twitter icon" width={24} height={24} />
          </div>
        </div>

        <div className="text-white text-center md:text-left flex-shrink-0">
          <h3 className="font-semibold text-base mb-1">KONTAKT</h3>
          <p className="font-normal text-sm">kulturfestivalen@stockholm.se</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
