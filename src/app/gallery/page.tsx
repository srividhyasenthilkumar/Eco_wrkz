import Image from "next/image";
import banner from "../../assets/about/banner.webp"
import img_1 from "../../assets/gallery/gallery_img_1.webp"
import img_2 from "../../assets/gallery/gallery_img_2.webp"
import img_3 from "../../assets/gallery/gallery_img_3.webp"
import img_4 from "../../assets/gallery/gallery_img_4.webp"
import img_5 from "../../assets/gallery/gallery_img_5.webp"
import img_6 from "../../assets/gallery/gallery_img_6.webp"
import img_7 from "../../assets/gallery/gallery_img_7.webp"
import img_8 from "../../assets/gallery/gallery_img_8.webp"
import img_9 from "../../assets/gallery/gallery_img_9.webp"
import img_10 from "../../assets/gallery/gallery_img_10.webp"
import img_11 from "../../assets/gallery/gallery_img_11.webp"
import img_12 from "../../assets/gallery/gallery_img_12.webp"
import img_13 from "../../assets/gallery/gallery_img_13.webp"
import img_14 from "../../assets/gallery/gallery_img_14.webp"
import img_15 from "../../assets/gallery/gallery_img_15.webp"
import eco_space from "../../assets/gallery/eco_space.webp"
import eco_space_2 from "../../assets/gallery/eco_space_2.webp"
import {Cctv,FingerprintPattern,ParkingMeter,Printer,Wifi} from "lucide-react"
import { Metadata } from "next";
export const metadata:Metadata = {
    title: "Coworking space in anna nagar| Shared office space in anna nagar| cowrkz.in",
    description: "The coworking space in Anna Nagar offers great amenities such as a fully furnished office, meeting room, etc. Get a 10% offer on premium booking.",
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
        canonical: "https://ecowrkz.com/gallery/",
        languages: {
        "en-US": "https://ecowrkz.com/gallery/en"
        }
    },

    openGraph: {
        title: "Coworking space in anna nagar| Shared office space in anna nagar| cowrkz.in",
        description: "The coworking space in Anna Nagar offers great amenities such as a fully furnished office, meeting room, etc. Get a 10% offer on premium booking.",
        url: "https://ecowrkz.com/gallery/",
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
export default function GalleryPage() {
  const images = [img_1, img_2, img_3,img_4,img_5,img_6,img_7,img_8,img_9,img_10,img_11,img_12,img_13,img_14,img_15];
  return (
    <>
    <section className="relative w-full h-[24rem] sm:h-[24rem] md:h-[20rem] lg:h-[25rem]">
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
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-10 h-full flex items-center justify-center">
      <div className="text-white  ">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold overflow-hidden">
         We break down walls so that you can breakthrough in your business.
        </p>
         <p className="text-base sm:text-lg py-5 md:text-xl">
        “Don’t Wait for an opportunity. CREATE IT. "
      </p>
      </div>
    </div>
    
    </section>
    
  
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-black">
        Gallery
      </h1>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {images.map((img, index) => (
    <div
      key={index}
      className="relative h-56 rounded-xl overflow-hidden"
    >
      <Image
        src={img}
        alt={`Gallery image ${index + 1}`}
        fill
        className="object-cover"
      />
    </div>
  ))}
</div>
 <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="">
              <Image
                src={eco_space}          
                alt="banner image"
                className="object-cover"
                priority
                width={768}
                height={904}
              />
            </div>
            <div className="max-w-xl">
              <Image
                src={eco_space_2}          
                alt="banner image"
                className="object-cover"
                priority
                 width={768}
                height={904}
              />
            </div>
          </div>
    </section>
   <section>
         
          <h3 className="text-center text-5xl font-bold overflow-hidden mt-10">Why Ecowrkz</h3>
          <div className="grid grid-cols-3 gap-0 mt-10 lg:px-50 md:px-20 px-10 md:mt-20">
               <div className="text-center">
                   <Cctv  size={120} color="white" className="btn-primary rounded-full" strokeWidth={2} />
                   <p className="text-xl font-bold pt-7">24/7 CCTV CAMERA</p>
                   <p className="py-3">Ecowrkz provides high-end security and uninterrupted connectivity for protecting your business needs.</p>
               </div>
              <div className="text-center">
                   <FingerprintPattern  size={120} color="white" className="btn-primary rounded-full" strokeWidth={2} />
                   <p className="text-xl font-bold pt-7">BIOMETRIC</p>
                   <p className="py-3">Ecowrkz provides biometric entry for you to have a seamless entry into our space.</p>
               </div>
               <div className="text-center">
                   <ParkingMeter  size={120} color="white" className="btn-primary rounded-full" strokeWidth={2} />
                   <p className="text-xl font-bold pt-7">FREE PARKING</p>
                   <p className="py-3">Parking a vehicle in a safe place is such a hassle, well we offer a free parking space for your vehicle.</p>
               </div>
          </div>
            <div className="grid grid-cols-3 gap-0 mt-10 lg:px-50 md:px-20 px-10 md:mt-20">
               <div className="text-center">
                   <Wifi  size={120} color="white" className="btn-primary rounded-full" strokeWidth={2} />
                   <p className="text-xl font-bold pt-7">HIGH-SPEED INTERNET</p>
                   <p className="py-3">Ecowrkz offers ultra-fast connectivity for all of your business needs.</p>
               </div>
              <div className="text-center">
                   <Printer  size={120} color="white" className="btn-primary rounded-full" strokeWidth={2} />
                   <p className="text-xl font-bold pt-7">PRINTER</p>
                   <p className="py-3">Ecowrkz offers the best amenities. Increase your productivity with us.</p>
               </div>
               <div className="text-center">
                   <ParkingMeter  size={120} color="white" className="btn-primary rounded-full" strokeWidth={2} />
                   <p className="text-xl font-bold pt-7">MEETING ROOM</p>
                   <p className="py-3">Book your meeting/conference room with us and experience the great ambience in Ecowrkz.</p>
               </div>
          </div>
      </section>
    </>
  );
}
