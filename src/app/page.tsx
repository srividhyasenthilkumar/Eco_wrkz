// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
"use client";
import {UserRound,Rocket,BriefcaseBusiness,Square,Monitor,Cctv,FingerprintPattern,ParkingMeter,Printer,Wifi} from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import workspace from "../assets/eco_work_space.webp"
import anna_nagar from "../assets/home/anna_nagar.webp"
import guindy from "../assets/home/guindy.webp"
import omr from "../assets/home/omr.webp"
import korattur from "../assets/home/korattur.webp"
import shenoy_nagar from "../assets/home/shenoy_nagar.webp"
import t_nagar from "../assets/home/t-nagar.webp"
import client_1 from "../assets/clients/client-1.webp"
import client_2 from "../assets/clients/client-2.webp"
import client_3 from "../assets/clients/client-3.webp"
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
import Map from "@/src/components/Map";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
    t_nagar,
 anna_nagar,
 korattur,
 shenoy_nagar,
    guindy,
    omr, 
];
const images_smooth = [
    t_nagar,
 anna_nagar,
 korattur,
 shenoy_nagar,
    guindy,
    omr, 
];
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
const tableData = [
  ["FEATURES", "All Nighter", "Collaborative", "Dedicated"],
  ["", "Collaborative desks for the all-nighters.", "Collaborative desks for individuals and teams.", "Private desks with meeting hall access."],
  ["Free Parking", "✔", "✔", "✔"],
  ["High-Speed Internet with support", "✔", "✔", "✔"],
  ["Dedicated Workspace", "✔", "✔", "✔"],
  ["Relaxing Lounge Access", "✔", "✔", "✔"],
  ["CCTV security access", "✔", "✔", "✔"],
  ["Mail Handling", "✘", "✔", "✔"],
  ["Meeting Room", "✘", "✔", "✔"],
  ["Private Room", "✘", "✘", "✔"],
];

export default function Home() {

  return (
    <>
    
    <section className="relative h-150 flex items-center justify-center overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h- lg:h-vh object-cover"
      >
        <source src="videos/Three_1.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mt-50  px-3 ">
        <h1 className="text-4xl md:text-5xl  overflow-y-hidden font-bold text-white">
         We break down walls so that you can/ breakthrough in your business.
        </h1>

        <p className="mt-4 text-lg text-gray-200 max-w-2xl ">
          “Don’t Wait for an opportunity. CREATE IT. “
        </p>

        <button className="mt-6 rounded-lg btn-primary uppercase cursor-pointer transition">
          Book You Co-working Space
        </button> <br /> <br />
         
      </div>
     
    </section>
   <section className="w-full">
  <div className="btn-primary w-full py-10">
    <div className="max-w-8xl mx-auto px-4">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-15">

        <div className="flex flex-col items-center gap-4 p-6">
          <UserRound size={60} color="white" strokeWidth={2} />
          <h3 className="text-xl md:text-2xl font-semibold text-white text-center">
            Freelancer
          </h3>
        </div>

        <div className="flex flex-col items-center gap-4 p-6">
          <Rocket size={60} color="white" strokeWidth={2} />
          <h3 className="text-xl md:text-2xl font-semibold text-white text-center">
            Start-up
          </h3>
        </div>

        <div className="flex flex-col items-center gap-4 p-6">
          <BriefcaseBusiness size={60} color="white" strokeWidth={2} />
          <h3 className="text-xl md:text-2xl font-semibold text-white text-center">
            Corporate
          </h3>
        </div>

        <div className="flex flex-col items-center gap-4 p-6">
          <Square size={60} color="white" strokeWidth={2} />
          <h3 className="text-xl md:text-2xl font-semibold text-white text-center">
            Enterprise
          </h3>
        </div>

        <div className="flex flex-col items-center gap-4 p-6">
          <Monitor size={60} color="white" strokeWidth={2} />
          <h3 className="text-xl md:text-2xl font-semibold text-white text-center">
            Agency
          </h3>
        </div>

      </div>
    </div>
  </div>
</section>

    <section className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-6 mt-10 md:mt-20">
          <div className="text-center font-extrabold text-lg text-gray-700 dark:text-white">
        <p>BE A PART OF OUR FLOURISHING COMMUNITY</p>
         <Image
                      src={workspace}
                      alt="EcoWork Logo"
                      width={768}
                      height={904}
                      priority
                      className="lg:px-20 md:px-10 px-5 py-10"
                    />
          </div>
          <div className=" p-10 pr-20 ">
            <p className="pb-5  font-bold text-3xl">Best Coworking Office Space and Business Centers in Chennai
           </p>
           <p>ECowrkz is the perfect solution for someone looking for an affordable <Link href="#" className="hover:text-blue-700 text-[var(--color-primary-blue)] font-bold underline-black underline decoration-black decoration-1.5 underline-offset-2">coworking space</Link> or business centers in the Porsche locality in Chennai. We provide ergonomically designed infrastructure and extraordinary amenities that cater to your needs. Our shared office space offers Dedicated Desks, Private Cabins and Meeting Rooms with high-end amenities such as High-Speed Wifi, 24*7 Access, Parking Space, Lounge Area, Printer access to all community events. </p> <br />
           <p>Our <Link href="#" className="hover:text-blue-700 text-[var(--color-primary-blue)] font-bold underline underline-black  decoration-black decoration-1.5 underline-offset-2">shared office space</Link>  is the best one for freelancers, startups and enterprises of all sizes.   </p>
           <br />
           <p>“A community that is engaged and working together can be a powerful force.” </p> <br />
           <p>Because you’ll not get a <Link href="#" className="hover:text-blue-700 text-[var(--color-primary-blue)] font-bold underline underline-black  decoration-black decoration-1.5 underline-offset-2"> coworking space or business center</Link> in the heart of the city of Chennai for a cheap price. Enjoy all the benefits of a traditional business center. We do not compromise on the quality of our service at the same time we are by far the best in providing coworking space for a budget-friendly price. We provide shared office space to all of the amenities both freelancers and business executives look for.</p> <br />
           <p className="pb-10">The notoriety of <Link href="#" className="hover:text-blue-700 text-[var(--color-primary-blue)] font-bold underline underline-black  decoration-black decoration-1.5 underline-offset-2"> coworking space in Anna nagar</Link> can be credited to a few variables. First and foremost, the local’s focal area and all around associated transportation choices make it helpful for experts to get to. Furthermore, cooperating spaces offer a practical answer for organizations, disposing of the requirement for long haul leases and strong forthright expenses. The energetic climate of Anna Nagar with its stylish bistros, retail outlets, and sporting exercises additionally adds to the allure of coworking space in Anna nagar.</p>
           <Link href="#" className="hover:text-gray-200 btn-primary rounded-md">View Brances</Link>
          </div>
          
        </div>
    </section>
    <section>
        <h3 className="text-center text-5xl font-bold overflow-hidden mt-10">Our coworking office Branches</h3>
          <div className="grid grid-cols-6 gap-0 mt-10 lg:px-50 md:px-20 px-10 md:mt-20">
      {images.map((img, index) => (
        <div key={index}>
          <Image
            src={img}
            alt={`Workspace ${index + 1}`}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      ))}
    </div>
        <h3 className="text-center text-5xl font-bold overflow-hidden mt-10">What do we offer?</h3>
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
<section className="px-4 bg-gray-100 py-10 mt-15">
       <h3 className="text-center text-5xl font-bold overflow-hidden ">Our Coworking Office Space Specification</h3>
  <div className="overflow-x-auto">
    <table className="w-full mt-20 max-w-5xl mx-auto border-collapse border border-[var(--color-primary-blue)]">
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={`
              h-14 md:h-16
              ${rowIndex === 0 ? "bg-[var(--color-primary-green)] border-[var(--color-primary-green)] font-bold" : ""}
            `}
          >
            {row.map((cell, colIndex) => (
              <td
                key={colIndex}
                className={`border border-blue-600 px-4 py-3 text-center
                  ${cell === "✔" ? "text-green-600 text-xl" : ""}
                  ${cell === "✘" ? "text-red-600 text-xl" : ""}
                `}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>

<section className="overflow-hidden">
       <h3 className="text-center text-5xl font-bold overflow-hidden lg:mt-20 mt-10 ">Watch Video</h3>
          <div className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-3 mt-10 md:mt-20">
          <div className="text-center font-bold text-2xl text-black lg:pl-30 px-3 dark:text-white">
            <iframe width="560" height="310" src="https://www.youtube.com/embed/nhtfDGzmklA?si=wooIxozK3rcMicOl" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <div className="text-center font-bold text-2xl text-black px-3 dark:text-white">
            <iframe width="560" height="310" src="https://www.youtube.com/embed/hNn-I2HURII?si=P43O5OxVjPuwEY__" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>

</section>
   
{/* testimonial */}

<section>
       <div className="bg-[linear-gradient(90deg,#37b94c,#6ad24a,#abf547)] py-5 my-10">

      
             <h3 className="text-center text-5xl font-bold overflow-hidden  mt-10 text-white">Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-[30%_30%_30%] gap-3 mt-10 px-20 py-5">
           
          <div className="text-center font-bold text-2xl text-black lg:pl-30 px-3  dark:text-white">
            <Link href="https://youtube.com/shorts/HtPuLumjjPE?si=1frhj_KyuDCfs3-c"
            target="_blank">
            <Image
            src={client_1}
            alt="client-1"
            className="w-full h-auto object-cover"
            priority
          />
          </Link>
          </div>
          <div className="text-center font-bold text-2xl text-black lg:pl-30 px-3 dark:text-white">
            <Link href="https://youtube.com/shorts/HtPuLumjjPE?si=1frhj_KyuDCfs3-c"
            target="_blank">
            <Image
            src={client_2}
            alt="client-1"
            className="w-full h-auto object-cover"
            priority
          />
          </Link>
          </div>
          <div className="text-center font-bold text-2xl text-black lg:pl-30 px-3 dark:text-white">
            <Link href="https://youtube.com/shorts/gxhIufoE3lk?si=q8ZQ8qhMS6nOuXn7"
            target="_blank">
            <Image
            src={client_3}
            alt="client-1"
            className="w-full h-auto object-cover"
            priority
          />
          </Link>
          </div>
        </div>
 </div>
</section>
<section className="py-20">
  <div className="w-full px-4">
    <Swiper
      modules={[Navigation, Autoplay]}
      slidesPerView={4}          
      spaceBetween={20}
      loop={true}
      speed={600}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      navigation={{
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,  
        },
       
      }}
      className="relative"
    >
      {images1.map((src, i) => (
        <SwiperSlide key={i}>
          <div className="w-full h-40 flex items-center justify-center overflow-hidden shadow-lg">
            <Image
              src={src}
              alt={`slide-${i}`}
              width={300}
              height={200}
              className="object-contain w-full h-full"
            />
          </div>
        </SwiperSlide>
      ))}

      
      <div className="swiper-next absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-green-500 text-2xl">
        ❯
      </div>
      <div className="swiper-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-green-500 text-2xl">
        ❮
      </div>
    </Swiper>
  </div>
</section>


<Map />

 



<section className="bg-[linear-gradient(90deg,#37b94c,#6ad24a,#abf547)]">


    <section className="max-w-7xl mx-auto px-6 py-16 ">
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className=" ">
          <section className="section-padding dark:bg-[var(--popover)] p-10 ">
  <div className="container-custom">
    <div className="max-w-4xl mx-auto">
      <div className="mb-16">
       
        <h2 className="heading-medium text-center text-2xl md:text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-4">

       {/* Accordion Item 1 */}
<div className=" rou overflow-hidden shadow rounded-xl">
  <input type="radio" name="accordion" id="acc1" className="peer hidden" defaultChecked />
  <label
    htmlFor="acc1"
    className="flex justify-between p-5 cursor-pointer   transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#cdffa1] peer-checked:to-[#e7ffd3]"
  >
    <span className="text-sm font-bold text-red-800 peer-checked:text-white">
      What is Generative AI and how can business use it?
    </span>
  </label>
  <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-black text-sm">
    Generative AI can create content, images, code, and conversations. Businesses use it for customer service, marketing, training, and automation.
  </div>
</div>

{/* Accordion Item 2 */}
<div className=" rounded-xl overflow-hidden shadow
">
  <input type="radio" name="accordion" id="acc2" className="peer hidden" />
  <label
    htmlFor="acc2"
    className="flex justify-between p-5 cursor-pointer    peer-checked:bg-gradient-to-br peer-checked:from-[#cdffa1] peer-checked:to-[#e7ffd3]"
  >
    <span className="text-sm font-bold text-red-800 peer-checked:text-white ">
      What is RAG in AI?
    </span>
  </label>
  <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-black text-sm">
    RAG (Retrieval-Augmented Generation) merges real-time search with LLMs to give more accurate and up-to-date responses.
  </div>
</div>


        {/* Accordion Item 3 */}
        <div className=" rounded overflow-hidden shadow
        ">
          <input type="radio" name="accordion" id="acc3" className="peer hidden" />
          <label htmlFor="acc3" className="flex justify-between p-5 cursor-pointer    transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#cdffa1] peer-checked:to-[#e7ffd3]">
            <span className="text-sm font-bold text-red-800"> Are AI agents replacing employees?</span>
            
          </label>
          <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-black text-sm">
           
Not replacing but augmenting! AI agents handle repetitive tasks, allowing employees to focus on strategic work. 
          </div>
        </div>

        {/* Accordion Item 4 */}
        <div className=" rounded overflow-hidden shadow
        ">
          <input type="radio" name="accordion" id="acc4" className="peer hidden" />
          <label htmlFor="acc4" className="flex justify-between p-5 cursor-pointer   transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#cdffa1] peer-checked:to-[#e7ffd3]">
            <span className="text-sm font-bold text-red-800">Can AI be integrated into existing legacy systems?</span>
            
          </label>
          <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-black text-sm">
           Yes. With APIs and middleware, we integrate AI into CRMs, ERPs, and custom applications. 
          </div>
        </div>

        {/* Accordion Item 5 */}
        <div className=" rounded overflow-hidden shadow
        ">
          <input type="radio" name="accordion" id="acc5" className="peer hidden" />
          <label htmlFor="acc5" className="flex justify-between p-5 cursor-pointer    transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#cdffa1] peer-checked:to-[#e7ffd3]">
            <span className="text-sm font-bold text-red-800">How long does it take to build an AI solution?</span>
            
          </label>
          <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-black text-sm">
            It depends. A basic chatbot takes 2–4 weeks; complex AI systems may take 2–6 months. 
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
        </div>
        <div className="max-w-xl">
          
          
          <p className="mt-3 text-md max-w-xl text-base/8">
            We provide various services like <Link href="#" className="hover:text-blue-700 text-[var(--color-primary-blue)] font-bold underline-black underline decoration-black decoration-1.5 underline-offset-2">co-working space</Link>, dedicated desk, and virtual office for an affordable price.
          </p>
        </div>
      </div>
    </section>
    </section>

<section>
    <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 ">
          <div className="border-1 borer-black ">
             <Image
              src=""
              alt=""
              width={300}
              height={200}
              className="object-contain w-full h-full"
            />
            <p className="text-xl font-bold px-3 py-1">
              Why Guindy Is the Best Location for Coworking Space in Chennai 
            </p>
            <p className="px-3 py-1 text-md">
              In the business world, where things are always changing, location...
            </p>
            <p className="text-blue-600 text-xs font-bold px-3 pb-5 cursor-pointer">Read more</p>
          </div>
          <div>

          </div>
          <div>

          </div>
          <div className="max-w-xl">
            
          </div>
        </div>
      </section>
  
</section>


{/* <div className="w-full max-w-7xl mx-auto px-4">
  <Swiper
    modules={[Autoplay, EffectFade]}
    slidesPerView={1}           // 👈 one image at a time (video feel)
    effect="fade"               // 👈 smooth fade
    fadeEffect={{ crossFade: true }}
    loop={true}
    speed={1500}                // 👈 smooth transition speed
    autoplay={{
      delay: 2000,              // 👈 time between images
      disableOnInteraction: false,
    }}
    className="relative"
  >
    {images_smooth.map((src, i) => (
      <SwiperSlide key={i}>
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
          <Image
            src={src}
            alt={`slide-${i}`}
            fill
            className="object-contain"
            priority={i === 0}
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div> */}



    </>
  );
}
