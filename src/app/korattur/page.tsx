import Image from "next/image";
import banner from "../../assets/coworking_places/banner.webp"
import FaqSection from "../../components/UI/FaqSection";
import ContactForm from "@/src/components/UI/ContactForm";
import Rankraze from "../../assets/coworking_places/rankraze_outside.webp"
import Link from "next/link";
import { OurServices } from "@/src/components/UI/ourServices";
import WorkspaceGrid from "@/src/components/UI/WorkspaceGrid";
import WorkingLocation from "@/src/components/UI/WorkingLocation"
import { Metadata } from "next";
export const metadata:Metadata = {
    title: "Coworking Space in Korattur | Business Centers in Korattur | Shared Office Space Rent in Korattur, Chennai - Ecowrkz",
    description: "Coworking Space, Business Centers, and Shared Office Space Rent in Korattur offer great amenities such as a fully furnished office, meeting room, etc. Get a 10% offer on premium booking.",
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
        canonical: "https://ecowrkz.com/korattur/",
        languages: {
        "en-US": "https://ecowrkz.com/korattur/en"
        }
    },

    openGraph: {
        title: "Coworking Space in Korattur | Business Centers in Korattur | Shared Office Space Rent in Korattur, Chennai - Ecowrkz",
        description: "Coworking Space, Business Centers, and Shared Office Space Rent in Korattur offer great amenities such as a fully furnished office, meeting room, etc. Get a 10% offer on premium booking.",
        url: "https://ecowrkz.com/korattur/",
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
export default function KoratturOffice(){
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
                 Coworking Space in Korattur
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
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="">
          <Image
            src={Rankraze}          
            alt="banner image"
            className="object-cover"
            priority
          />
        </div>
        <div className="max-w-xl ">
          <h3 className="text-4xl font-semibold text-black">
            Our coworking space and Business Centers in Korattur
          </h3>
          <p className="mt-3 text-md max-w-xl text-base/8">
            Ecowrkz is a business center and one of the  <Link href="/" className="hover:text-blue-700 text-[var(--color-primary-blue)] font-bold underline-black underline decoration-black decoration-1.5 underline-offset-2">best coworking spaces</Link> designed to create a productive work environment for executives and other working professionals. The shared office space is located in a great neighborhood with some excellent <Link href="/korattur" className="hover:text-blue-700 text-[var(--color-primary-blue)] font-bold underline-black underline decoration-black decoration-1.5 underline-offset-2">commercial offices at Korattur.</Link> Becoming a member of this space means that you can work flexible hours, without having to stick to the usual office schedule.The coworking shared office space is inbuilt with furniture and attractive interior design which makes it feel like a corporate space to its coworkers. 
          </p>
          <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-lg">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248699.58839843908!2d79.97982523800397!3d13.103553299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52651a0a6a67d7%3A0xe470d4d0f330b61e!2sRankraze%20-%20Digital%20Marketing%20Company%20in%20Chennai!5e0!3m2!1sen!2sin!4v1766387364703!5m2!1sen!2sin"
    className="w-full h-full border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    allowFullScreen
  />
</div>

        </div>
      </div>
    </section>
    <OurServices/>
    <p className="md:text-5xl text-3xl mx-5 font-bold text-center py-5 mt-10 ">Our coworking office Spaces</p>
    <WorkspaceGrid/>
    <WorkingLocation/>
        <FaqSection />
      
        </>
    )
}