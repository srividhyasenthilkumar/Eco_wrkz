import Image from "next/image";
import banner from "../../assets/coworking_places/banner.webp"
import ContactForm from "@/src/components/UI/ContactForm";
import Link from "next/link";
import shenoy_nagar from "../../assets/shenoy-nagar.webp"
import { OurServices } from "@/src/components/UI/ourServices";
import FaqSection from "@/src/components/UI/FaqSection";
import WorkingLocation from "@/src/components/UI/WorkingLocation"
import WorkspaceGrid from "@/src/components/UI/WorkspaceGrid";
import { Metadata } from "next";
export const metadata:Metadata = {
    title: "Coworking Space in Shenoy Nagar | Business Centers in Shenoy Nagar | Shared Office Space Rent in Shenoy Nagar, Chennai - Cowrkz",
    description: "Coworking Space, Business Centers, and Shared Office Space Rent in Shenoy Nagar offer great amenities such as a fully furnished office, meeting room, etc. Get a 10% offer on premium booking.",
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
        canonical: "https://ecowrkz.com/shenoy-nagar/",
        languages: {
        "en-US": "https://ecowrkz.com/shenoy-nagar/en"
        }
    },

    openGraph: {
        title: "Coworking Space in Shenoy Nagar | Business Centers in Shenoy Nagar | Shared Office Space Rent in Shenoy Nagar, Chennai - Cowrkz",
        description: "Coworking Space, Business Centers, and Shared Office Space Rent in Shenoy Nagar offer great amenities such as a fully furnished office, meeting room, etc. Get a 10% offer on premium booking.na Nagar offer great amenities such as a fully furnished office, meeting room, etc. Get a 10% offer on premium booking.",
        url: "https://ecowrkz.com/shenoy-nagar/",
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
export default function ShenoyNagarWorkingPlace(){
    return (
    <>
    <section className="relative w-full h-[43rem] sm:h-[42rem] md:h-[30rem] lg:h-[35rem]">
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
               <div className="absolute inset-0 bg-gray-800/60"></div>
             </div>
             
             {/* Content */}
           <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 h-full flex items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* LEFT SIDE */}
        <div className="text-white space-y-4 text-center md:text-left">
          <p className="text-2xl sm:text-3xl md:text-4xl mt-35 lg:mt-0 lg:text-5xl font-bold">
         Coworking Space in Shenoy Nagar
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-200">
           “Don’t Wait for an opportunity. CREATE IT. “
          </p>
        </div>
    
        {/* RIGHT SIDE */}
        <div className="flex justify-center md:justify-end ">
              <ContactForm/>
        </div>
      </div>
    </div>
</section>
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="">
          <Image
            src={shenoy_nagar}          
            alt="banner image"
            className="object-cover"
            priority
          />
        </div>
        <div className="max-w-xl">
          <h3 className="text-4xl font-semibold text-black">
           Our coworking space and Business Centers in Shenoy Nagar
          </h3>
          <p className="mt-3 text-md max-w-xl text-base/8">
          Shenoy Nagar is one of the hotspot business areas in Chennai that you don’t want to miss if you are looking for a corporate working environment. There is easy access to public transportation, including the metro and buses. And very near to Aminjikarai, Anna Nagar, villivakkam, aiyanavaram,  Arumbakkam, Nungambakkam, Kilpauk, and Chetpet, The options in Shenoy Nagar are endless; it is a hub for restaurants, shopping, hospitals, and malls. With Cowrkz, you can be sure that you’ll get everything that a person needs out of a <Link href="/omr" className="hover:text-blue-700 text-[var(--color-primary-blue)] font-bold underline-black underline decoration-black decoration-1.5 underline-offset-2">coworking space</Link> and that you’ll be able to reap its benefits.
<br />
Whether you are a freelancer, a startup, or an enterprise, our office space in Shenoy Nagar is the perfect solution. As an employee, you’ll receive a plethora of benefits and a higher level of job satisfaction.
          </p>
          <div className="w-full h-[300px] sm:h-[400px] md:h-[350px] lg:h-[300px] py-3 overflow-hidden rounded-lg">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31089.30236592207!2d80.19085669628986!3d13.088867033172141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52670d9b94cc5b%3A0xdc6f34cf84e38abb!2sECowrkz%20-%20Coworking%20Office%20Space%20in%20Anna%20Nagar%2C%20Kilpauk%2C%20Arumbakkam%2C%20Shenoy%20Nagar%2C%20Chennai!5e0!3m2!1sen!2sin!4v1766735634007!5m2!1sen!2sin"
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
    <h2 className="font-bold text-2xl md:text-5xl text-center">Our coworking office Spaces</h2>
  <WorkspaceGrid/>
  <WorkingLocation/>
<FaqSection/>
 
    </>
    )
}