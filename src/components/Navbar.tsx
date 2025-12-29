"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/eco_workz-logo.webp";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  {
    name: "Co-Working Space",
    href: "/coworking_space",
    children: [
      { name: "Korattur", href: "/korattur" },
      { name: "Anna Nagar", href: "/anna-nagar" },
      { name: "Shanthi Colony", href: "/shanthi-colony" },
      { name: "T nagar", href: "/t-nagar" },
      { name: "Guindy", href: "/guindy" },
      { name: "Nungambakkam", href: "/nungambakkam" },
      { name: "Ambattur", href: "/ambattur" },
    ],
  },
  { name: "CSR Activities", href: "/csr-activities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-[linear-gradient(90deg,#37b94c,#6ad24a,#abf547)] shadow-md text-white"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="EcoWork Logo" width={140} height={40} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex mx-auto gap-8 text-md font-bold text-white">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link href={item.href} className="hover:opacity-80">
                  {item.name}
                </Link>

                {item.children && (
                  <div className="absolute left-0 top-full mt-3 w-44 rounded-md bg-white text-gray-800 shadow-lg
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Phone */}
          <button className="hidden lg:block bg-[linear-gradient(90deg,#25db14,#6ad24a,#a4f934)]
            px-5 py-3 rounded-xl text-black font-semibold">
            +91-97100 79798
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl text-white"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out
        ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        bg-[linear-gradient(90deg,#37b94c,#6ad24a,#abf547)] text-white`}
      >
        <div className="py-6 space-y-4 text-center">

          {menuItems.map((item) => (
            <div key={item.name}>

              {/* Main Item */}
              <button
                onClick={() =>
                  item.children
                    ? setActiveMenu(activeMenu === item.name ? null : item.name)
                    : setOpen(false)
                }
                className="w-full text-lg font-semibold flex justify-center items-center gap-2"
              >
                {item.name}
                {item.children && (
                  <span className="text-xl">
                    {activeMenu === item.name ? "⌃" : "⌄"}
                  </span>
                )}
              </button>

              {/* Mobile Sub Menu */}
              {item.children && activeMenu === item.name && (
                <div className="mt-3 space-y-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="block text-base opacity-90 hover:opacity-100"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
