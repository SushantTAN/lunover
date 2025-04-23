import LocationCard from "@/components/card/location-card";
import { Fragment } from "react";

const data = [
  {
    id: 1,
    title: "Kreativa Uttryck",
    image: "https://images.unsplash.com/photo-1504197885-609741792ce7",
    href: "/art",
  },
  {
    id: 2,
    title: "Musik & Beats",
    image: "https://images.unsplash.com/photo-1504197885-609741792ce7",
    href: "/music",
  },
  {
    id: 3,
    title: "Smakupplevelser",
    image: "https://images.unsplash.com/photo-1504197885-609741792ce7",
    href: "/food",
  },
  {
    id: 4,
    title: "Teater & Drama",
    image: "https://images.unsplash.com/photo-1504197885-609741792ce7",
    href: "/theatre",
  },
  {
    id: 5,
    title: "Film & Dokumentär",
    image: "https://images.unsplash.com/photo-1504197885-609741792ce7",
    href: "/film",
  },
  {
    id: 6,
    title: "Barn & Familj",
    image: "https://images.unsplash.com/photo-1504197885-609741792ce7",
    href: "/family",
  },
];

const Section3 = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 py-10">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-10 text-center text-black">
        Det här är KULTURFESTIVALEN
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Fragment key={item.id}>
            <LocationCard title={item.title} href={item.href} image={item.image} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Section3;
