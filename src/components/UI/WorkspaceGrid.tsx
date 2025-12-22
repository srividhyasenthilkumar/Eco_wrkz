import Image from "next/image";
import KoratturOffice1 from "../../assets/coworking_places/korattur_office_1.webp"
import KoratturOffice2 from "../../assets/coworking_places/korattur_office_2.webp"
import KoratturOffice3 from "../../assets/coworking_places/korattur_office.webp"
import KoratturOffice4 from "../../assets/coworking_places/korattur_office_4.webp"
import KoratturOffice5 from "../../assets/coworking_places/korattur_office_5.webp"

const spaces = [
  {
    title: "COWORKING SPACE",
    subtitle: "Enjoy the working space",
    img: KoratturOffice1,
  },
  {
    title: "CONFERENCE ROOM",
    subtitle: "Connect with everyone",
    img: KoratturOffice2,
  },
  {
    title: "DEDICATED DESK",
    subtitle: "Enjoy your own workspace",
    img: KoratturOffice3,
  },
  {
    title: "VIRTUAL SPACE",
    subtitle: "Book your Space",
    img:KoratturOffice4,
  },
  {
    title: "DAY/HOURS SPACE",
    subtitle: "Own a quick workspace",
    img: KoratturOffice5,
  },
];

export default function WorkspaceGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* TOP 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {spaces.slice(0, 3).map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>

      {/* BOTTOM 2 */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {spaces.slice(3).map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

function Card({
  title,
  subtitle,
  img,
}: {
  title: string;
  subtitle: string;
  img: string;
}) {
  return (
    <>
    
    <div className="relative group overflow-hidden">
      <Image
        src={img}
        alt={title}
        width={600}
        height={400}
        className="w-full h-[260px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wide">
          {title}
        </h3>
        <p className="text-white mt-2 text-sm md:text-base">
          {subtitle}
        </p>
      </div>
    </div>
    </>
  );
}
