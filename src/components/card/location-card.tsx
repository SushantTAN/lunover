import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface LocationCardProps {
  image: string;
  title: string;
  href: string;
}

const LocationCard: FC<LocationCardProps> = ({ image, title, href }) => {
  return (
    <div className="group/card">
      <Link
        href={href}
        className="block overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
      >
        <div className="relative w-full h-64 sm:h-72 lg:h-60 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover/card:scale-105"
          />
          <div className="absolute left-1 bottom-1 bg-black px-2 py-1 transition-all duration-300 group-hover/card:px-4">
            <p className="text-white text-sm font-medium ">{title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LocationCard;
