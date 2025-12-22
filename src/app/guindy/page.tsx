import Image from "next/image";
import banner from "../../assets/coworking_places/banner.webp"
import ContactForm from "@/src/components/UI/ContactForm";
import guindy_office from "../../assets/coworking_places/guindy-office.webp"
import Link from "next/link";
import { OurServices } from "@/src/components/UI/ourServices";
import FaqSection from "@/src/components/UI/FaqSection";
import {MapPin} from "lucide-react"
import guindy_office_1 from "../../assets/coworking_places/guindy-office-1.webp"
import guindy_office_2 from "../../assets/coworking_places/guindy-office-2.webp"
import guindy_office_3 from "../../assets/coworking_places/guindy-office-3.webp"
import guindy_office_4 from "../../assets/coworking_places/guindy-office-4.webp"
const workspaces = [
  { id: 1, img: guindy_office_1 },
  { id: 2, img: guindy_office_2 },
  { id: 3, img: guindy_office_3 },
  { id: 4, img: guindy_office_4 },
];
export default function guindyOffice(){
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
       Coworking Space in Guindy
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
            src={guindy_office}          
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
         At ECowrkz you’ll have all of your essentials for coworking right away. Hence it boosts your work-life balance. Our  <Link href="#" className="hover:text-blue-700 text-[var(--color-primary-blue)] font-bold underline-black underline decoration-black decoration-1.5 underline-offset-2"> co-working space  </Link> is open to anyone who is interested to work in the Porsche locality of Guindy. You’ll not come across such a cost-effective co-working space in Chennai elsewhere. Do not miss being part of our coworking space in Guindy. Our services will include a plethora of amenities that you’ll be looking for in a <Link href="#" className="hover:text-blue-700 text-[var(--color-primary-blue)] font-bold underline-black underline decoration-black decoration-1.5 underline-offset-2"> virtual coworking space.  </Link>  You’ll have the opportunity to meet and collaborate with other freelancers and business executives.  
          </p>
          

        </div>
      </div>
    </section>
    <OurServices/>     
      <FaqSection/>
       <section className="max-w-7xl mx-auto px-4 py-16">
        <p className="font-bold text-3xl lg:text-5xl text-center py-10 ">Gallery</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {workspaces.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg"
          >
            <Image
              src={item.img}
              alt="Workspace"
              width={800}
              height={500}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        ))}
      </div>
    </section>
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