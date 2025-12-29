// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white text-center py-4 mt-10">
//       © 2025 Eco Work. All rights reserved.
//     </footer>
//   );
// }



import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logo from "../assets/eco_workz-logo.webp"
import { p } from "framer-motion/client";

export default function Footer() {
  return (
    <footer className="bg-white mt-20 border-t border-gray-200">
      <div className="max-w-8xl mx-auto px-5 py-14">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">

          {/* LOGO + SOCIAL */}
          <div className="space-y-6">
            <Image src={logo} alt="Cowrkz" width={160} />

            <div className="flex gap-3">
  <Link
    href="#"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
  >
    <Facebook size={18} />
  </Link>

  <Link
    href="#"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
  >
    <Instagram size={18} />
  </Link>

  <Link
    href="#"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
  >
    <Twitter size={18} />
  </Link>
  <Link
    href="#"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
  >
    <Linkedin size={18} />
  </Link>
</div>
</div>
          {/* HEAD OFFICE */}
          <FooterBlock
            title="Coworking Office Space Head Office"
            address="Plot No : 264, Door no : F/22, F-Block, 2nd main road, Anna Nagar, Chennai - 600102"
          />

          {/* CORPORATE OFFICE */}
          <FooterBlock
            title="Coworking Office Space Corporate Office"
            address="'Celebrity' Building No. 49 (old no. 95), 2nd Floor, T-Block, 3rd Avenue, Anna Nagar, Chennai 600040"
          />

          {/* ANNA NAGAR */}
          <FooterBlock
            title="Coworking Office Space Anna Nagar Branch Office"
            address="Sabari Towers W-110 3rd Avenue, Anna Nagar, Chennai, Tamil Nadu 600040"
            showEmail
          />

          {/* T NAGAR */}
          <FooterBlock
            title="Coworking Office Space T Nagar Branch Office"
            address="D.V.K Towers 3rd Floor 84/90, G.N Chetty Road, T Nagar, Chennai 600017"
            showEmail
          />

          {/* GUINDY */}
          <FooterBlock
            title="Coworking Office Space Guindy Branch Office"
            address="Ground Floor, No: 28, Sai Supreme, near Puthiya thalaimurai office, Thiru Vi Ka Industrial Estate, SIDCO Industrial Estate, Ekkatuthangal, Chennai, Tamil Nadu 600032"
            showEmail
          />
        </div>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 border-t pt-12">

          <FooterBlock
            title="Coworking Office Space Branch Office"
            address="#249, 1st floor, 2nd St, TNHB Colony, Periyar Nagar West, Korattur, Chennai - 600080"
          />

          <FooterBlock
            title="Coworking Office Space COIMBATORE Branch Office"
            address="43/6 Sathy Road, Ramakrishnapuram Tulasi Damu Arcade, Coimbatore, Tamil Nadu 641006"
            showEmail
          />

          <FooterBlock
            title="Coworking Office Space Bangalore Branch Office"
            address="421, 4th floor, Manipal Centre South block, Dickenson Road, MG Road, Bangalore - 560042"
            showEmail
          />

          <FooterBlock
            title="Coworking Office Space OMR Branch Office"
            address="No.29, 22, Phase-2, Thirumalai Nagar Annexe, Perungudi, Chennai, Tamil Nadu 600096"
            showEmail
          />
        </div>
      </div>
      {/* FINAL FOOTER BAR */}
<div className="bg-[linear-gradient(90deg,#37b94c,#6ad24a,#abf547)] text-black text-sm py-3 px-4 flex flex-col sm:flex-row justify-between items-center mt-6">
  {/* Left Side */}
  <div className="mb-2 sm:mb-0 text-center md:px-20 sm:text-left">
    © Ecowrkz 2023 | Developed by Rankraze
  </div>

  {/* Right Side Links */}
  <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-1 sm:space-y-0 text-center">
    <a href="/privacy-policy" className="hover:underline">
      Privacy Policy
    </a>
    <a href="/contact-us" className="hover:underline md:px-20">
      Contact Us
    </a>
  </div>
</div>


    </footer>
  );
}

/* REUSABLE FOOTER BLOCK */
function FooterBlock({
  title,
  address,
  showEmail = true,
}: {
  title: string;
  address: string;
  showEmail?: boolean;
}) {
  return (
    <>
   
    <div className="space-y-4">
      <h4 className="font-semibold text-lg leading-snug">{title}</h4>

      <p className="flex gap-2 text-gray-600 text-sm leading-relaxed">
        <MapPin className="w-4 h-4 mt-1 shrink-0" />
        {address}
      </p>

      <p className="flex gap-2 text-gray-600 text-sm">
        <Phone className="w-4 h-4" />
        +91 - 97100 79798
      </p>

      {showEmail && (
        <p className="flex gap-2 text-gray-600 text-sm">
          <Mail className="w-4 h-4" />
          info@ecowrkz.com
        </p>
      )}
    </div>
     </>
  );
}

