import Link from "next/link";
import { MapPin } from "lucide-react";

export default function Locations() {
  const locations = [
    { name: "Korattur", href: "/korattur" },
    { name: "Anna Nagar", href: "/anna-nagar" },
    { name: "Shenoy Nagar", href: "/shenoy-nagar" },
    { name: "T Nagar", href: "/t-nagar" },
    { name: "OMR", href: "/omr" },
    { name: "Guindy", href: "/guindy" },
    { name: "Bangalore", href: "/bangalore" },
  ];

  return (
    <section className="w-full bg-[#f3f3f3] py-10">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">
        Our Coworking Office Space Locations
      </h2>

      {/* Locations */}
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
        {locations.map((location, index) => (
          <div key={location.name} className="flex items-center gap-6">
            {/* Link */}
            <Link
              href={location.href}
              className="flex items-center gap-2 text-black font-semibold text-lg hover:text-[#37b94c] transition"
            >
              <MapPin className="w-6 h-6" />
              {location.name}
            </Link>

            {/* Divider */}
            {index !== locations.length - 1 && (
              <div className="hidden md:block h-6 w-px bg-gray-300" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
