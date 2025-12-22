// "use client";

// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";

// /* 👉 WRITE IMAGE IMPORTS HERE (TOP OF FILE) */
// import brightwave from "../assets/logos/brightwave.webp";
// import call_health from "../assets/logos/call_health.webp";
// import etera from "../assets/logos/etera.webp";
// import extra from "../assets/logos/extra.webp";
// import gomechanic from "../assets/logos/gomechanic.webp";
// import infinite from "../assets/logos/infinite.webp";
// import iny from "../assets/logos/iny.webp";
// import bizet from "../assets/logos/Bizet.webp";
// /* 👉 ARRAY GOES BELOW IMPORTS */
// const images1 = [
//   bizet,
//   brightwave,
//   call_health,
//   etera,
//   extra,
//   gomechanic,
//   infinite,
//   iny,
// ];

// import "swiper/css";
// import "swiper/css/navigation";

// export default function LogoSlider() {
//   return (
//     <section className="w-full py-10">
//       <div className="max-w-7xl mx-auto px-4">
//         <Swiper
//           modules={[Autoplay, Navigation]}
//           slidesPerView={4}
//           spaceBetween={30}
//           loop
//           autoplay={{ delay: 2500 }}
//           breakpoints={{
//             320: { slidesPerView: 1 },
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//           }}
//         >
//           {images1.map((src, i) => (
//             <SwiperSlide key={i}>
//               <div className="h-32 flex items-center justify-center shadow-md">
//                 <Image
//                   src={src}
//                   alt={`logo-${i}`}
//                   width={180}
//                   height={100}
//                   className="object-contain"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }
