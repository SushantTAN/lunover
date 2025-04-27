import FadeInOnView from "@/components/animations/fadeInOnView";
import LocationCard from "@/components/card/location-card";

const data = [
  { id: 1, title: "Kreativa Uttryck", image: "https://images.unsplash.com/photo-1504197885-609741792ce7", href: "/" },
  { id: 2, title: "Musik & Beats", image: "https://images.unsplash.com/photo-1504197885-609741792ce7", href: "/" },
  { id: 3, title: "Smakupplevelser", image: "https://images.unsplash.com/photo-1504197885-609741792ce7", href: "/" },
  { id: 4, title: "Teater & Drama", image: "https://images.unsplash.com/photo-1504197885-609741792ce7", href: "/" },
  { id: 5, title: "Film & Dokumentär", image: "https://images.unsplash.com/photo-1504197885-609741792ce7", href: "/" },
  { id: 6, title: "Barn & Familj", image: "https://images.unsplash.com/photo-1504197885-609741792ce7", href: "/" },
];

const Section3: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 py-10 mb-14">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-10 text-center text-white">
        Det här är KULTURFESTIVALEN
      </h2>

      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 group">
          {data.map((item, index) => (
            <div
              key={item.id}
              className="transition-all duration-300 ease-in-out group-hover:brightness-25 hover:!brightness-100"
            >
              <FadeInOnView delay={index * 50} rootMargin="0px 0px -50px 0px" threshold={0.2} duration={800}>
                <LocationCard title={item.title} href={item.href} image={item.image} />
              </FadeInOnView>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
