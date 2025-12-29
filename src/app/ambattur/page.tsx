import Image from "next/image";
import banner from "../../assets/coworking_places/banner.webp"
import ContactForm from "@/src/components/UI/ContactForm";
import Link from "next/link";
import { OurServices } from "@/src/components/UI/ourServices";
import FaqSection from "@/src/components/UI/FaqSection";
import WorkingLocation from "@/src/components/UI/WorkingLocation"
import t_nagar_office from "../../assets/coworking_places/t-nagar-office.webp"
import t_nagar_office_2 from "../../assets/coworking_places/t-nagar-office-2.webp"
import { Metadata } from "next";
export const metadata:Metadata = {
    title: "Coworking Space in T Nagar | Business Centers in T Nagar | Shared Office Space Rentin T Nagar, Chennai - Cowrkz",
    description: "The Coworking Space, Business Centers, and Shared Office Space Rent in T Nagar offer great amenities such as a fully furnished office, meeting room, etc. Get a 10% offer on premium booking.",
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
        canonical: "https://ecowrkz.com/ambattur/",
        languages: {
        "en-US": "https://ecowrkz.com/ambattur/en"
        }
    },
    openGraph: {
        title: "Coworking Space in ambattur | Business Centers in ambattur | Shared Office Space Rent in ambattur, Chennai - Ecowrkz",
        description: "Coworking Space in ambattur, Business Centers in ambattur, and Shared Office Space Rent in ambattur offer great amenities such as a fully furnished office, meeting room, etc. Get a 10% offer on premium booking.",
        url: "https://ecowrkz.com/ambattur/",
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
export default function ambatturOffice(){
    return(
        <>
 <section className="relative w-full 
                    min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[75vh]">
  
  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src={banner}
      alt="banner image"
      fill
      priority
      className="object-cover"
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-gray-900/60" />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 h-full flex items-center">
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
      {/* LEFT CONTENT */}
      <div className="text-white space-y-4 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl mt-30 md:mt-10 md:text-4xl lg:text-5xl font-bold leading-tight">
          Coworking Space in Ambattur
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-xl mx-auto md:mx-0">
          “Don’t wait for an opportunity. 
          CREATE IT.”
        </p>
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex justify-center md:justify-end">
         
          <ContactForm />
       
      </div>

    </div>
  </div>
</section>


  <section className="max-w-7xl mx-auto px-6 py-16 my-5">
      <p className="lg:text-4xl text-3xl font-bold text-center">Our Co-working and Business Centers in Ambattur</p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="">
          <div className="max-w-6xl mx-auto px-4">
  <div className="relative overflow-hidden rounded-[40px] border-[3px] border-black group">
    <Image
      src={t_nagar_office} 
      alt="Coworking Space"
      className="
        w-full h-full object-cover
        scale-110
        transition-transform duration-500 ease-out
        group-hover:scale-125
      "
    />
  </div>
</div>

        </div>

      
        <div className="max-w-xl ">
          
          <p className="mt-3 text-md max-w-xl text-base/8">
         
ECowrkz is one of the leading  <Link href="/" className="hover:text-blue-700 text-[var(--color-primary-blue)] font-bold underline-black underline decoration-black decoration-1.5 underline-offset-2">coworking spaces</Link>  in Chennai, located in the heart of the city’s shopping and business district – T. Nagar. Our T. Nagar coworking space is designed with a great layout, ample parking, 24/7 access to the space, high-speed wifi, air conditioning, biometric entry, and CCTV surveillance. Offers a perfect blend of comfort and convenience. We also offer business center services live virtual offices and so more. Everything freelancers, start-ups, and even enterprises in need to be productive and successful are right here.
          </p>
        </div>
      </div>
      {/* second row */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="">
          <div className="max-w-6xl mx-auto px-4">
  <p className="mt-3 text-md max-w-xl text-base/8">
Our  <Link href="/t-nagar" className="hover:text-blue-700 text-[var(--color-primary-blue)] font-bold underline-black underline decoration-black decoration-1.5 underline-offset-2">shared-working spaces are </Link> in prime spots in Chennai, making it easy for members to get to and from the space. These spaces are usually shared by a number of different companies and employees. With a number of benefits, such as increased productivity, creativity, and collaboration ECowrkz comes with a variety of membership options available sure to suit businesses of all sizes and budgets. If you’re looking for a shared working space in Chennai, Cowrkz is the perfect place for you!
          </p>
</div>
</div>

<div className="max-w-xl ">
           <div className="relative overflow-hidden rounded-[40px] border-[3px] border-black group">
    <Image
      src={t_nagar_office_2} 
      alt="Coworking Space"
      className="
        w-full h-full object-cover
        scale-110
        transition-transform duration-500 ease-out
        group-hover:scale-125
      "
    />
  </div>
        </div>
      </div>
    </section>
    <OurServices/>

 
        
      <FaqSection/>
        <WorkingLocation/>
        </>
    )
}