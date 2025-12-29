import Image from "next/image";
import banner from "../../assets/coworking_places/banner.webp"
import ContactForm from "@/src/components/UI/ContactForm";
import bangalore_office from "../../assets/bangalore/bangalore-office.webp"
import { OurServices } from "@/src/components/UI/ourServices";
import FaqSection from "@/src/components/UI/FaqSection";
import { Metadata } from "next";
export const metadata:Metadata = {
    title: "Coworking Space in Dickenson road, Mg road, Bangalore | Business Centers in Dickenson road, Mg road, Bangalore | Shared Office Space Rent in Dickenson road, Mg road, Bangalore - Cowrkz",
    description: "The Coworking Space, Business Centers, and Shared Office Space Rent in Dickenson road, Mg road, Bangalore offer great amenities such as a fully furnished office, meeting room, etc. Get a 10% offer on premium booking.",
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
        canonical: "https://ecowrkz.com/bangalore/",
        languages: {
        "en-US": "https://ecowrkz.com/bangalore/en"
        }
    },

    openGraph: {
        title: "Coworking Space in Dickenson road, Mg road, Bangalore | Business Centers in Dickenson road, Mg road, Bangalore | Shared Office Space Rent in Dickenson road, Mg road, Bangalore - Cowrkz",
        description: "The Coworking Space, Business Centers, and Shared Office Space Rent in Dickenson road, Mg road, Bangalore offer great amenities such as a fully furnished office, meeting room, etc. Get a 10% offer on premium booking.",
        url: "https://ecowrkz.com/bangalore/",
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
      Coworking Space in Bangalore
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
                   src={bangalore_office}          
                   alt="banner image"
                   className="object-cover"
                   priority
                   height={768}
                   width={1024}
                 />
               </div>
               <div className="max-w-xl ">
                 <h3 className="text-4xl font-semibold text-black">
                 Our coworking space in Bangalore
                 </h3>
                 <p className="mt-3 text-md max-w-xl text-lg/8">
                  At Cowrkz you’ll have all of your essentials for coworking right away. Hence it boosts your work-life balance. Our co-working space is open to anyone who is interested to work in the Porsche locality of Guindy. You’ll not come across such a cost-effective co-working space in Bangalore elsewhere. Do not miss being part of our coworking space in Guindy. Our services will include a plethora of amenities that you’ll be looking for in a virtual coworking space. You’ll have the opportunity to meet and collaborate with other freelancers and business executives.  
                 </p>
                 
               </div>
             </div>
           </section>
           <OurServices/>
           <FaqSection/>
       </>
    )
}
