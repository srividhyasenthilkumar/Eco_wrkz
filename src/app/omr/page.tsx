import Image from "next/image";
import banner from "../../assets/coworking_places/banner.webp"
import ContactForm from "@/src/components/UI/ContactForm";
import Link from "next/link";
import omr from "../../assets/omr-office.webp"
import { OurServices } from "@/src/components/UI/ourServices";
import FaqSection from "@/src/components/UI/FaqSection";
import WorkingLocation from "@/src/components/UI/WorkingLocation"
import { Metadata } from "next";
export const metadata:Metadata = {
    title: "Coworking Space in Perungudi, OMR | Business Centers in Perungudi, OMR | Shared Office Space Rent in Perungudi, OMR, Chennai - Cowrkz",
    description: "The Coworking Space, Business Centers, and Shared Office Space Rent in Perungudi, OMR offer great amenities such as a fully furnished office, meeting room, etc. Get a 10% offer on premium booking.",
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
        canonical: "https://ecowrkz.com/omr/",
        languages: {
        "en-US": "https://ecowrkz.com/omr/en"
        }
    },
    openGraph: {
        title: "Coworking Space in Perungudi, OMR | Business Centers in Perungudi, OMR | Shared Office Space Rent in Perungudi, OMR, Chennai - Cowrkz",
        description: "The Coworking Space, Business Centers, and Shared Office Space Rent in Perungudi, OMR offer great amenities such as a fully furnished office, meeting room, etc. Get a 10% offer on premium booking.",
        url: "https://ecowrkz.com/omr/",
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
export default function OmrWorkingPlace(){
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
          Coworking Space in Perungudi, OMR
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
<section className="max-w-7xl mx-auto px-6 py-16 my-5">
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="">
          <Image
            src={omr}          
            alt="banner image"
            className="object-cover"
            priority
            height={768}
            width={1024}
          />
        </div>
        <div className="max-w-xl ">
          <h3 className="text-4xl font-semibold text-black">
           Our coworking space in Perungudi, OMR
          </h3>
          <p className="mt-3 text-md max-w-xl text-lg/8">
            If you are looking for a co-working space in the residential hub of Chennai, Perungudi, OMR then Cowrkz is the right place for you. We offer a lot of perks in the <Link href="/" className="hover:text-blue-700 text-[var(--color-primary-blue)] font-bold underline-black underline decoration-black decoration-1.5 underline-offset-2">co-working space</Link> in Perungudi, OMR. With an increase in the number of IT companies, it’s the best place to find and collaborate with like-minded people. Also, you can relax in the middle of a hectic work schedule to keep up your calm. There are many tourist places in Perungudi, OMR where you can drive in right away if you feel burned out and are in the mod to take a chill pill.   
          </p>
          
        </div>
      </div>
    </section>
    <OurServices/>
   <section className="max-w-7xl mx-auto px-4">
  <h3 className="font-bold text-2xl md:text-4xl  text-center">
    Office Location
  </h3>

  <div className="relative w-full overflow-hidden rounded-xl
                  h-[220px] sm:h-[280px] md:h-[350px] lg:h-[400px] mb-20 mt-5">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248763.6182745743!2d80.10437764091098!3d13.040029884763067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52657960aae289%3A0x32814daa7d6f4849!2sECowrkz%20%7C%20Coworking%20Space%20in%20Anna%20nagar!5e0!3m2!1sen!2sin!4v1766733491887!5m2!1sen!2sin"
      className="absolute inset-0 w-full h-full border-0"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</section>
<FaqSection/>
 <WorkingLocation/>
    </>
    )
}