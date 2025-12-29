import Image from "next/image";
import Link from "next/link";
import banner from "../../assets/about/banner.webp"
import office from "../../assets/about/office_space.webp"
import { OurServices } from "@/src/components/UI/ourServices";
import { Metadata } from "next";
export const metadata:Metadata = {
    title: "Coworking space in anna nagar| Shared office space in anna nagar| cowrkz.in",
    description: "The coworking space in Anna Nagar offers great amenities such as a fully furnished office, meeting room, etc. Get a 10% offer on premium booking.",
    keywords: [
    "coworking space in chennai",
"coworking office space in chennai",
"shared office space in chennai",
"business centre in chennai",
"commercial office space in chennai",
"commercial office space for rent in chennai",
"best coworking space in chennai",
"office space in chennai",
"office space for rent in chennai",
"shared office space for rent in chennai",

    ],

    alternates: {
        canonical: "https://ecowrkz.com/about-us/",
        languages: {
        "en-US": "https://ecowrkz.com/about-us/en"
        }
    },

    openGraph: {
        title: "Coworking space in anna nagar| Shared office space in anna nagar| cowrkz.in",
        description: "The coworking space in Anna Nagar offers great amenities such as a fully furnished office, meeting room, etc. Get a 10% offer on premium booking.",
        url: "https://ecowrkz.com/about-us/",
        siteName: "Coworking Space in Anna Nagar,Korattur | Shared Office Space for Rent | Cowrkz",
        images: [
        {
            url: "/images/eco_workz-logo.webp",
            width: 928,
            height: 341,
            alt: "eco_workz-logo.webp",
            type: "image/webp"
        },
        ],
        locale: "en_US",
        type: "article",
    },
}
export default function AboutPage() {
  return (
    <>
 <section className="relative w-full h-[24rem] sm:h-[24rem] md:h-[20rem] lg:h-[25rem]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={banner}
          alt="banner image"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-10 h-full flex items-center justify-center">
      <div className="text-white  ">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold overflow-hidden">
        We break down walls so that you can breakthrough in your business.
        </p>
         <p className="text-base sm:text-lg py-5 md:text-xl">
        “Don’t Wait for an opportunity. CREATE IT. “
      </p>
      </div>
    </div>
    
    </section>

   
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="">
          <Image
            src={office}          
            alt="banner image"
            className="object-cover"
            priority
          />
        </div>
        <div className="max-w-xl">
          <h3 className="text-4xl font-semibold text-black">
            About us
          </h3>
          <p className="mt-3 text-md max-w-xl text-base/8">
           We at Ecowrkz provide you with a hassle-free work environment that lets you work peacefully at your pace. Our <Link href="/anna-nagar" className="hover:text-blue-700 text-[var(--color-primary-blue)] font-bold underline-black underline decoration-black decoration-1.5 underline-offset-2">co-working space</Link>  has an alluring ambience such that it instils growth and sparks productivity. In Ecowrkz, we provide services tailored based on your needs with fully functional and tech-enabled amenities. Whether you are a freelancer or seeking coworking space for your startup or enterprise this is the best coworking space you’ll ever come across. 
          </p> <br />
          <p className="mt-3 text-md max-w-xl text-base/8">
            We provide various services like <Link href="/omr" className="hover:text-blue-700 text-[var(--color-primary-blue)] font-bold underline-black underline decoration-black decoration-1.5 underline-offset-2">co-working space</Link>, dedicated desk, and virtual office for an affordable price.
          </p>
        </div>
      </div>
    </section>

<OurServices />
<section>
<h3 className="text-center text-5xl font-bold overflow-hidden my-10">Watch Video</h3>
<div className="w-full flex justify-center">
  <div className="relative w-full max-w-4xl aspect-video">
    <iframe
      src="https://www.youtube.com/embed/PVuFBWXaZuk?si=hob8T16lrtWKd4F1"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="absolute top-0 left-0 w-full h-full"
    ></iframe>
  </div>
</div>


</section>
     </>
  );
}
