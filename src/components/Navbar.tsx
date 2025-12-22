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
  { name:"Contact", href: "/contact-us" },
  
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-[linear-gradient(90deg,#37b94c,#6ad24a,#abf547)] text-black shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="EcoWork Logo"
              width={140}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex mx-auto gap-8 text-sm font-medium">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link href={item.href} className="hover:opacity-80">
                  {item.name}
                </Link>

                {/* Desktop Dropdown */}
                {item.children && (
                  <div className="absolute left-0 top-full mt-3 w-44 rounded-md bg-white text-black shadow-lg
                                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                  transition-all duration-200">
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

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out
        ${
          open
            ? "max-h-[500px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        }
        bg-[linear-gradient(90deg,#37b94c,#6ad24a,#abf547)] text-white px-6`}
      >
        <div className="py-4 space-y-4">
          {menuItems.map((item) => (
            <div key={item.name}>
              {/* Main Item */}
              <button
                onClick={() =>
                  item.children
                    ? setActiveMenu(
                        activeMenu === item.name ? null : item.name
                      )
                    : setOpen(false)
                }
                className="w-full text-left text-lg font-medium flex justify-between items-center"
              >
                {item.name}
                {item.children && (
                  <span>{activeMenu === item.name ? "⌃" : "⌄"}</span>
                )}
              </button>

              {/* Mobile Sub Menu */}
              {item.children && activeMenu === item.name && (
                <div className="mt-2 ml-4 space-y-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="block text-base opacity-90"
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
