import Image from "next/image";
import Link from "next/link";
import banner from "../../assets/about/banner.webp"
import office from "../../assets/about/office_space.webp"
import { OurServices } from "@/src/components/UI/ourServices";
export default function AboutPage() {
  return (
    <>
<section className="relative w-full h-95">
 {/* Background Image */}
<div className="absolute inset-0">
  <Image
    src={banner}          // your imported image
    alt="banner image"
                    // 🔥 makes image fill the parent
    className="object-cover"
    priority
  />
  {/* Optional overlay for readability */}
  <div className="absolute inset-0 bg-black/40"></div>
</div>


  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-full flex items-center">
    <div className="text-left text-white max-w-6xl space-y-6">
      <p className="text-3xl sm:text-4xl md:text-5xl overflow-hidden font-bold">
       We break down walls so that you can breakthrough in your business.
      </p>
      <p className="text-base sm:text-lg md:text-xl">
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
           We at Ecowrkz provide you with a hassle-free work environment that lets you work peacefully at your pace. Our <Link href="#" className="hover:text-blue-700 text-[var(--color-primary-blue)] font-bold underline-black underline decoration-black decoration-1.5 underline-offset-2">co-working space</Link>  has an alluring ambience such that it instils growth and sparks productivity. In Ecowrkz, we provide services tailored based on your needs with fully functional and tech-enabled amenities. Whether you are a freelancer or seeking coworking space for your startup or enterprise this is the best coworking space you’ll ever come across. 
          </p> <br />
          <p className="mt-3 text-md max-w-xl text-base/8">
            We provide various services like <Link href="#" className="hover:text-blue-700 text-[var(--color-primary-blue)] font-bold underline-black underline decoration-black decoration-1.5 underline-offset-2">co-working space</Link>, dedicated desk, and virtual office for an affordable price.
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
