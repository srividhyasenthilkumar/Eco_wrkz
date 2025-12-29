import Image from "next/image";
import banner from "../../assets/coworking_places/banner.webp"
import ContactForm from "@/src/components/UI/ContactForm";
import Rankraze from "../../assets/coworking_places/rankraze_outside_2.webp"
import Link from "next/link";
import { OurServices } from "@/src/components/UI/ourServices";
import FaqSection from "@/src/components/UI/FaqSection";
import WorkingLocation from "@/src/components/UI/WorkingLocation"
import { Metadata } from "next";
export const metadata:Metadata = {
    title: "Coworking Space in anna nagar | Business Centers in anna nagar| Shared Office Space Rent in anna nagar, Chennai - Ecowrkz",
    description: "The Coworking Space, Business Centers, and Shared Office Space Rent in Anna Nagar offer great amenities such as a fully furnished office, meeting room, etc. Get a 10% offer on premium booking.",
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
        canonical: "https://ecowrkz.com/anna-nagar/",
        languages: {
        "en-US": "https://ecowrkz.com/anna-nagar/en"
        }
    },

    openGraph: {
        title: "Coworking Space in anna nagar | Business Centers in anna nagar| Shared Office Space Rent in anna nagar, Chennai - Ecowrkz",
        description: "The Coworking Space, Business Centers, and Shared Office Space Rent in Anna Nagar offer great amenities such as a fully furnished office, meeting room, etc. Get a 10% offer on premium booking.",
        url: "https://ecowrkz.com/anna-nagar/",
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
export default function annaNagarOffice(){
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
                 Coworking Space in Anna Nagar
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
           Our coworking space in Anna Nagar
          </h3>
          <p className="mt-3 text-md max-w-xl text-base/8">
          <Link href="/anna-nagar" className="hover:text-blue-700 text-[var(--color-primary-blue)] font-bold underline-black underline decoration-black decoration-1.5 underline-offset-2"> Anna Nagar</Link> is one of the sought-after areas in Chennai you don’t want to miss working in a culturally inclined environment. Have easy access to metro, buses and other public transports. Anna Nagar is a hub for restaurants, shopping places, hospitals, malls and the options are endless. Needless to say, when you book a <Link href="/" className="hover:text-blue-700 text-[var(--color-primary-blue)] font-bold underline-black underline decoration-black decoration-1.5 underline-offset-2"> coworking space </Link> at Ecowrkz you are certain to have everything a person looks for in a coworking space and reap the benefits of it. Our shared office space in Anna Nagar is perfect for freelancers, startups and even enterprises. Working here you’ll find a plethora of perks and an increased level of job satisfaction. 
          </p>
          <div className="w-full h-[300px] sm:h-[400px] md:h-[400px] lg:h-[430px] overflow-hidden rounded-lg">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1645926361075!2d80.21522797507845!3d13.088753087237494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52657960aae289%3A0x32814daa7d6f4849!2sECowrkz%20%7C%20Coworking%20Space%20in%20Anna%20nagar!5e0!3m2!1sen!2sin!4v1766396456727!5m2!1sen!2sin" width="600" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"  className="w-full h-full border-0"></iframe>
</div>

        </div>
      </div>
    </section>
    <OurServices/>
    <p className="md:text-5xl text-3xl font-bold text-center  py-5 mt-10 ">Walkthrough of Anna Nagar office</p>
   
  <div className="w-full px-5 sm:px-8 lg:px-12">
  <div className="relative w-full aspect-video rounded-lg overflow-hidden">
    <iframe
      src="https://www.youtube.com/embed/hNn-I2HURII?si=1z1c111YsUBU_LUP"
      title="YouTube video player"
      className="absolute inset-0 w-full h-full"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  </div>
</div>
 
        
      <FaqSection/>
        <WorkingLocation/>
        </>
    )
}