"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import office_1 from "../../assets/home/office-1.webp";
import office_2 from "../../assets/home/office-2.webp";
import office_3 from "../../assets/home/office-3.webp";
import office_4 from "../../assets/home/office-4.webp";
import office_5 from "../../assets/home/office-5.webp";
import office_6 from "../../assets/home/office-6.webp";
import office_7 from "../../assets/home/office-7.webp";
import office_8 from "../../assets/home/office-8.webp";
import office_9 from "../../assets/home/offfice-9.webp";
import office_10 from "../../assets/home/office-20.webp";
import office_11 from "../../assets/home/office-11.webp";
import office_12 from "../../assets/home/office-12.webp";
import office_13 from "../../assets/home/office-13.webp";
import office_14 from "../../assets/home/office-14.webp";
const cards = [
  {
    title: "COWORKING SPACE",
    subtitle: "Enjoy the working space",
    images: [office_1, office_2, office_3, office_4],
  },
  {
    title: "CONFERENCE ROOM",
    subtitle: "Connect with EveryOne",
    images: [office_3, office_4, office_5, office_6],
  },
  {
    title: "DeDICATED DESK",
    subtitle: "Enjoy your own Workspace",
    images: [office_5, office_7, office_8, office_1],
  },
  {
    title: "VIRTUAL SPACE",
    subtitle: "Book your SPACE",
    images: [office_2, office_3, office_9, office_10],
  },
  {
    title: "DAY/HOURS SPACE",
    subtitle: "Own a quick Workspace",
    images: [office_11, office_12, office_13, office_14],
  },
];

export default function ImageShowcase() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-12">
         Our coworking office Spaces
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className={
                cards.length % 2 !== 0 && i === cards.length - 1
                  ? "sm:col-span-2 flex justify-center"
                  : ""
              }
            >
              <AnimatedCard card={card} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ------------------------------------ */
/* CARD COMPONENT */
/* ------------------------------------ */

function AnimatedCard({ card }: any) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % card.images.length);
    }, 4500); // slow image change

    return () => clearInterval(timer);
  }, [card.images.length]);

  return (
    <div className="group relative h-[300px] w-full max-w-[520px] overflow-hidden rounded-xl shadow-lg">

      {/* IMAGE LAYER (AUTO ZOOM + IMAGE CHANGE) */}
      <div
        className="
          absolute inset-0
          scale-110
          transition-transform duration-[6000ms] ease-out
          group-hover:scale-150
        "
      >
        <Image
          src={card.images[index]}
          alt={card.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* BLACK OVERLAY — ONLY ON HOVER */}
      <div
        className="
          absolute inset-0 bg-black/50
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        "
      />

      {/* TEXT — ALWAYS VISIBLE */}
      <div
        className="
          absolute inset-0 flex flex-col items-center justify-center
          text-white text-center px-4
          pointer-events-none
        "
      >
        <h3 className="text-xl font-bold tracking-wide">
          {card.title}
        </h3>
        <p className="text-sm mt-2 opacity-90">
          {card.subtitle}
        </p>
      </div>

    </div>
  );
}
