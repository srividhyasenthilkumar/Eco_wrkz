import Image from "next/image";
import banner from "../../assets/coworking_places/banner.webp"
import ContactForm from "@/src/components/UI/ContactForm";
import Link from "next/link";
import { OurServices } from "@/src/components/UI/ourServices";
import FaqSection from "@/src/components/UI/FaqSection";
import {MapPin} from "lucide-react"
import t_nagar_office from "../../assets/coworking_places/t-nagar-office.webp"
import t_nagar_office_2 from "../../assets/coworking_places/t-nagar-office-2.webp"
export default function ambatturOffice(){
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
      Coworking Space in Ambattur
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
         
ECowrkz is one of the leading  <Link href="#" className="hover:text-blue-700 text-[var(--color-primary-blue)] font-bold underline-black underline decoration-black decoration-1.5 underline-offset-2">coworking spaces</Link>  in Chennai, located in the heart of the city’s shopping and business district – T. Nagar. Our T. Nagar coworking space is designed with a great layout, ample parking, 24/7 access to the space, high-speed wifi, air conditioning, biometric entry, and CCTV surveillance. Offers a perfect blend of comfort and convenience. We also offer business center services live virtual offices and so more. Everything freelancers, start-ups, and even enterprises in need to be productive and successful are right here.
          </p>
        </div>
      </div>
      {/* second row */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="">
          <div className="max-w-6xl mx-auto px-4">
  <p className="mt-3 text-md max-w-xl text-base/8">
Our  <Link href="#" className="hover:text-blue-700 text-[var(--color-primary-blue)] font-bold underline-black underline decoration-black decoration-1.5 underline-offset-2">shared-working spaces are </Link> in prime spots in Chennai, making it easy for members to get to and from the space. These spaces are usually shared by a number of different companies and employees. With a number of benefits, such as increased productivity, creativity, and collaboration ECowrkz comes with a variety of membership options available sure to suit businesses of all sizes and budgets. If you’re looking for a shared working space in Chennai, Cowrkz is the perfect place for you!
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
         <section>
        <div className="bg-gray-100 py-8">
            <p className="md:text-4xl text-3xl font-bold text-center  py-5 mt-10 ">Our Coworking Office Space Locations</p>
             <div className="w-full grid grid-cols-1 md:grid-cols-7 py-10 px-30 items-center">
             <div className="flex items-center font-bold gap-2   ">
                <MapPin
                    className="w-6 h-6  flex-shrink-0  text-black"
                    strokeWidth={2}
                />
                <span>Korattur</span>
            </div>
            <div className="flex items-center gap-2 font-bold ">
                <MapPin
                    className="w-6 h-6 flex-shrink-0 text-black"
                    strokeWidth={2}
                />
                <span>Anna Nagar</span>
            </div>
            <div className="flex items-center gap-2 font-bold ">
                <MapPin
                    className="w-6 h-6 flex-shrink-0 text-black"
                    strokeWidth={2}
                />
                <span>Shenoy Nagar</span>
            </div>
            <div className="flex items-center gap-2 font-bold ">
                <MapPin
                    className="w-6 h-6 flex-shrink-0 text-black"
                    strokeWidth={2}
                />
                <span>T Nagar</span>
            </div>
            <div className="flex items-center gap-2 font-bold">
                <MapPin
                    className="w-6 h-6 flex-shrink-0 text-black"
                    strokeWidth={2}
                />
                <span>OMR</span>
            </div>
            <div className="flex items-center gap-2 font-bold ">
                <MapPin
                    className="w-6 h-6 flex-shrink-0 text-black"
                    strokeWidth={2}
                />
                <span>Guindy</span>
            </div>
            <div className="flex items-center gap-2 font-bold">
                <MapPin
                    className="w-6 h-6 flex-shrink-0 text-black"
                    strokeWidth={2}
                />
                <span>Bangalore</span>
            </div>
             
            </div>
        </div>
    </section>
        </>
    )
}