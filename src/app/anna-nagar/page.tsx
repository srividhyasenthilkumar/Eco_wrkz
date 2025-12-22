import Image from "next/image";
import banner from "../../assets/coworking_places/banner.webp"
import ContactForm from "@/src/components/UI/ContactForm";
import Rankraze from "../../assets/coworking_places/rankraze_outside_2.webp"
import Link from "next/link";
import { OurServices } from "@/src/components/UI/ourServices";
import FaqSection from "@/src/components/UI/FaqSection";
import {MapPin} from "lucide-react"
export default function annaNagarOffice(){
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
       Coworking Space in Anna Nagar
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
          <Link href="#" className="hover:text-blue-700 text-[var(--color-primary-blue)] font-bold underline-black underline decoration-black decoration-1.5 underline-offset-2"> Anna Nagar</Link> is one of the sought-after areas in Chennai you don’t want to miss working in a culturally inclined environment. Have easy access to metro, buses and other public transports. Anna Nagar is a hub for restaurants, shopping places, hospitals, malls and the options are endless. Needless to say, when you book a <Link href="#" className="hover:text-blue-700 text-[var(--color-primary-blue)] font-bold underline-black underline decoration-black decoration-1.5 underline-offset-2"> coworking space </Link> at Ecowrkz you are certain to have everything a person looks for in a coworking space and reap the benefits of it. Our shared office space in Anna Nagar is perfect for freelancers, startups and even enterprises. Working here you’ll find a plethora of perks and an increased level of job satisfaction. 
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
         <section>
        <div className="bg-gray-100 py-8">
            <p className="md:text-4xl text-3xl font-bold text-center  py-5 mt-10 ">Our Coworking Office Space Locations</p>
             <div className="w-full grid grid-cols-1 md:grid-cols-7 py-10 px-30 items-center">
             <div className="flex items-center gap-2 font-bold  ">
                <MapPin
                    className="w-6 h-6 flex-shrink-0  text-black"
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