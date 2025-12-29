"use client"
import bizet from "../assets/logos/Bizet.webp"
 import brightwave from "../assets/logos/brightwave.webp"
 import call_health from "../assets/logos/Call-health.webp"
 import etera from "../assets/logos//Etera-Solution.webp"
 import extra from "../assets/logos/Etera-Solution.webp"
 import gomechanic from "../assets/logos/gomechanic.webp"
 import infinite from "../assets/logos/infiniti.webp"
 import iny from "../assets/logos/inypay.webp"
 import kreasence from "../assets/logos/kreasence.webp"
 import logo5 from "../assets/logos/logo5.webp"
 import mokshall from "../assets/logos/Mokshallc.webp"
 import nowfloats from "../assets/logos/Nowfloats.webp"
 import reliance from "../assets/logos/reliance.webp"
 import sa3 from "../assets/logos/sa3.webp"
 import vedantu from "../assets/logos/vedantu.webp"
 import zenith from "../assets/logos/zenith.webp"
 import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const images1 = [
 
    bizet,
 brightwave,
 call_health,
  etera,
  extra,
  gomechanic,
  infinite,
  iny,
  kreasence,
  logo5,
  mokshall,
  nowfloats,
  reliance,
  sa3,
  vedantu,
  zenith,  
];
export default function HomeClientPage(){
    return (
        <>
        
         <section className="py-12 sm:py-16 md:py-20 bg-white">
              <div className="max-w-8xl mx-auto px-4 relative">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  slidesPerView={1}          // ✅ 1 logo on mobile
                  centeredSlides={false}
                  loop
                  speed={600}
                  spaceBetween={16}
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    nextEl: ".swiper-next",
                    prevEl: ".swiper-prev",
                  }}
                  breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                  }}
                >
                  {images1.map((src, i) => (
                    <SwiperSlide key={i}>
                      <div
                        className="flex items-center justify-center 
                                   h-36 sm:h-36 md:h-40 lg:h-44
                                   bg-white rounded-lg shadow-md overflow-hidden"
                      >
                        <Image
                          src={src}
                          alt={`logo-${i}`}
                          width={300}
                          height={200}
                          className="object-contain w-full h-full p-4"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
        
                  {/* Navigation Buttons (hidden on mobile) */}
                  <button
                    aria-label="Previous slide"
                    className="swiper-prev hidden md:flex absolute left-0 top-1/2 
                               -translate-y-1/2 z-10 h-10 w-10 items-center justify-center
                               rounded-full bg-white shadow-md text-green-500"
                  >
                    ❮
                  </button>
        
                  <button
                    aria-label="Next slide"
                    className="swiper-next hidden md:flex absolute right-0 top-1/2 
                               -translate-y-1/2 z-10 h-10 w-10 items-center justify-center
                               rounded-full bg-white shadow-md text-green-500"
                  >
                    ❯
                  </button>
                </Swiper>
              </div>
            </section>
        </>
    )
}