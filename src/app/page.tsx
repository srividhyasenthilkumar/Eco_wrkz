
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
import Map from "@/src/components/Map";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FAQ from "../components/UI/FAQ"
import blog_1 from "../assets/home/blog-1.webp"
import blog_2 from "../assets/home/blog-2.webp"
import blog_3 from "../assets/home/blog-3-1.webp"
import blog_4 from "../assets/home/blog-4.webp"
import ImageShowcase from "../components/UI/ImageShowcase";
import OfficeBrances from "../../src/components/UI/OfficeBrances"
import HomeClient from "../app/HomeClient"
const images_smooth = [
    t_nagar,
 anna_nagar,
 korattur,
 shenoy_nagar,
    guindy,
    omr, 
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
import { Metadata } from "next";
export const metadata:Metadata = {
    title: "Coworking Space | Business Center | Virtual, Shared Office Space Rent in Anna Nagar, Korattur, Padi, Ambattur, Kilpauk, Arumbakam, Shenoy Nagar and T nagar, Chennai - Ecowrkz",
    description: "Find the best coworking space, Business Center, Virtual and Shared Office spaces Rent in Chennai. Book a Coworking space and Business Centers at Anna Nagar, Korattur, Padi, Ambattur, Kilpauk, Arumbakam, Shenoynagar& T Nagar. Office Space for rent with all amenities at an affordable price in Chennai",
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
        canonical: "https://ecowrkz.com/",
        languages: {
        "en-US": "https://ecowrkz.com/en"
        }
    },
    openGraph: {
        title: "Coworking Space | Business Center | Virtual, Shared Office Space Rent in Anna Nagar, Korattur, Padi, Ambattur, Kilpauk, Arumbakam, Shenoy Nagar and T nagar, Chennai - Ecowrkz",
        description: "Find the best coworking space, Business Center, Virtual and Shared Office spaces Rent in Chennai. Book a Coworking space and Business Centers at Anna Nagar, Korattur, Padi, Ambattur, Kilpauk, Arumbakam, Shenoynagar& T Nagar. Office Space for rent with all amenities at an affordable price in Chennai",
        url: "https://ecowrkz.com/",
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
export default function Home() {

  return (
    <>
    
  <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">

  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/videos/Three_1.mp4" type="video/mp4" />
  </video>

  {/* Overlay (optional dark layer for readability) */}
  <div className="absolute inset-0 "></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center md:text-left">
    
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl md:mt-20 font-bold text-white leading-tight">
      We break down walls so that you can
      <br className="hidden md:block" />
      breakthrough in your business.
    </h1>

    <h2 className="mt-4 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto md:mx-0">
      “Don’t wait for an opportunity. CREATE IT.”
    </h2>

    <div className="mt-6">
      <button className="px-6 py-3 md:px-8 md:py-10 rounded-lg btn-primary uppercase text-sm md:text-base transition">
        <Link href="/contact-us">
         Book Your Co-working Space</Link>
       
      </button>
    </div>

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
          <div className=" p-10 md:pr-20 ">
            <p className="pb-5  font-bold text-3xl">Best Coworking Office Space and Business Centers in Chennai
           </p>
           <p>ECowrkz is the perfect solution for someone looking for an affordable <Link href="/korattur" className="hover:text-blue-700 text-[var(--color-primary-blue)] font-bold underline-black underline decoration-black decoration-1.5 underline-offset-2">coworking space</Link> or business centers in the Porsche locality in Chennai. We provide ergonomically designed infrastructure and extraordinary amenities that cater to your needs. Our shared office space offers Dedicated Desks, Private Cabins and Meeting Rooms with high-end amenities such as High-Speed Wifi, 24*7 Access, Parking Space, Lounge Area, Printer access to all community events. </p> <br />
           <p>Our <Link href="/korattur" className="hover:text-blue-700 text-[var(--color-primary-blue)] font-bold underline underline-black  decoration-black decoration-1.5 underline-offset-2">shared office space</Link>  is the best one for freelancers, startups and enterprises of all sizes.   </p>
           <br />
           <p>“A community that is engaged and working together can be a powerful force.” </p> <br />
           <p>Because you’ll not get a <Link href="/omr" className="hover:text-blue-700 text-[var(--color-primary-blue)] font-bold underline underline-black  decoration-black decoration-1.5 underline-offset-2"> coworking space or business center</Link> in the heart of the city of Chennai for a cheap price. Enjoy all the benefits of a traditional business center. We do not compromise on the quality of our service at the same time we are by far the best in providing coworking space for a budget-friendly price. We provide shared office space to all of the amenities both freelancers and business executives look for.</p> <br />
           <p className="pb-10">The notoriety of <Link href="anna-nagar" className="hover:text-blue-700 text-[var(--color-primary-blue)] font-bold underline underline-black  decoration-black decoration-1.5 underline-offset-2"> coworking space in Anna nagar</Link> can be credited to a few variables. First and foremost, the local’s focal area and all around associated transportation choices make it helpful for experts to get to. Furthermore, cooperating spaces offer a practical answer for organizations, disposing of the requirement for long haul leases and strong forthright expenses. The energetic climate of Anna Nagar with its stylish bistros, retail outlets, and sporting exercises additionally adds to the allure of coworking space in Anna nagar.</p>
           <Link href="/anna-nagar" className="hover:text-gray-200 btn-primary rounded-md">View Brances</Link>
          </div>
          
        </div>
    </section>
<OfficeBrances/>
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-14">
        What do we offer?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Service Card */}
        <div className="text-center">
          <div className="flex justify-center">
            <Cctv size={100} className="btn-primary rounded-full p-6 text-white" />
          </div>
          <h3 className="text-xl font-bold pt-6">24/7 CCTV CAMERA</h3>
          <p className="py-3 text-gray-600">
            Ecowrkz provides high-end security and uninterrupted connectivity for
            protecting your business needs.
          </p>
        </div>

        <div className="text-center">
          <div className="flex justify-center">
            <FingerprintPattern
              size={100}
              className="btn-primary rounded-full p-6 text-white"
            />
          </div>
          <h3 className="text-xl font-bold pt-6">BIOMETRIC</h3>
          <p className="py-3 text-gray-600">
            Ecowrkz provides biometric entry for you to have a seamless entry into
            our space.
          </p>
        </div>

        <div className="text-center">
          <div className="flex justify-center">
            <ParkingMeter
              size={100}
              className="btn-primary rounded-full p-6 text-white"
            />
          </div>
          <h3 className="text-xl font-bold pt-6">FREE PARKING</h3>
          <p className="py-3 text-gray-600">
            Parking a vehicle in a safe place is such a hassle, well we offer a
            free parking space for your vehicle.
          </p>
        </div>

        <div className="text-center">
          <div className="flex justify-center">
            <Wifi size={100} className="btn-primary rounded-full p-6 text-white" />
          </div>
          <h3 className="text-xl font-bold pt-6">HIGH-SPEED INTERNET</h3>
          <p className="py-3 text-gray-600">
            Ecowrkz offers ultra-fast connectivity for all of your business needs.
          </p>
        </div>

        <div className="text-center">
          <div className="flex justify-center">
            <Printer
              size={100}
              className="btn-primary rounded-full p-6 text-white"
            />
          </div>
          <h3 className="text-xl font-bold pt-6">PRINTER</h3>
          <p className="py-3 text-gray-600">
            Ecowrkz offers the best amenities. Increase your productivity with us.
          </p>
        </div>

        <div className="text-center">
          <div className="flex justify-center">
            <ParkingMeter
              size={100}
              className="btn-primary rounded-full p-6 text-white"
            />
          </div>
          <h3 className="text-xl font-bold pt-6">MEETING ROOM</h3>
          <p className="py-3 text-gray-600">
            Book your meeting/conference room with us and experience the great
            ambience in Ecowrkz.
          </p>
        </div>
      </div>
    </section>
<section className="px-4 bg-gray-100 py-10 mt-10">
  <h3 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold">
    Our Coworking Office Space Specification
  </h3>

  {/* TABLE WRAPPER */}
  <div className="mt-10 overflow-x-auto">
    <table className="w-full min-w-[700px] max-w-5xl mx-auto border-collapse border border-[var(--color-primary-blue)]">
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={`
              h-12 sm:h-14 md:h-16
              ${
                rowIndex === 0
                  ? "bg-[var(--color-primary-green)] font-bold text-white"
                  : "bg-white"
              }
            `}
          >
            {row.map((cell, colIndex) => (
              <td
                key={colIndex}
                className={`
                  border border-blue-600 
                  px-2 sm:px-4 py-2 sm:py-3 
                  text-xs sm:text-sm md:text-base 
                  text-center
                  ${cell === "✔" ? "text-green-600 text-lg sm:text-xl" : ""}
                  ${cell === "✘" ? "text-red-600 text-lg sm:text-xl" : ""}
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
<HomeClient/>
<ImageShowcase/>
<Map />
<FAQ/>

<section>
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-center font-bold text-3xl md:text-4xl">COWORKING OFFICE SPACE RECENT BLOGS</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4  gap-3 ">
          <div className="">
            <div className="border-1 border-gray-200">
             <Image
              src={blog_1}
              alt=""
              width={300}
              height={200}
              className="object-contain w-full h-full"
            />
            <h3 className="text-xl font-bold px-3 py-1">
              Why Guindy Is the Best Location for Coworking Space in Chennai 
            </h3>
            <p className="px-3 py-1 text-md">
              In the business world, where things are always changing, location...
            </p>
            <p className="text-blue-600 text-xs font-bold px-3 pb-5 cursor-pointer">Read more</p>
                
            </div>
          </div>
            <div className="">
            <div className="border-1 border-gray-200">
             <Image
              src={blog_2}
              alt=""
              width={300}
              height={200}
              className="object-contain w-full h-full"
            />
            <h3 className="text-xl font-bold px-3 py-1">
             Top 10 Reasons Startups Choose Shared Office Space in Guindy 
            </h3>
            <p className="px-3 py-1 text-md">
              Startups are rethinking traditional workspaces in today’s fast-changing business world....
            </p>
            <p className="text-blue-600 text-xs font-bold px-3 pb-5 cursor-pointer">Read more</p>
                
            </div>
          </div>
         {/* thired imag  */}
           <div className=" ">
            <div className="border-1 border-gray-200">
             <Image
              src={blog_3}
              alt=""
              width={300}
              height={200}
              className="object-contain w-full h-full"
            />
            <h3 className="text-xl font-bold px-3 py-1">
              Hidden Benefits of Shared Office Space in Chennai: Why Ecowrkz is the Key to Success  
            </h3>
            <p className="px-3 py-1 text-md">In today’s rapidly changing business landscape, the traditional office setup... In the business world, where things are always changing, location...
            </p>
            <p className="text-blue-600 text-xs font-bold px-3 pb-5 cursor-pointer">Read more</p>
                
            </div>
          </div>
          {/* fourth image */}
            <div className=" ">
            <div className="border-1 border-gray-200">
             <Image
              src={blog_4}
              alt=""
              width={300}
              height={200}
              className="object-contain w-full h-full"
            />
            <p className="text-xl font-bold px-3 py-1">
              Why Ecowrkz Is Chennai’s Top Shared Office Space for Professionals and Entrepreneurs  
            </p>
            <p className="px-3 py-1 text-md">
             In the dynamic world of modern business, flexibility, cost-effectiveness, and...
            </p>
            <p className="text-blue-600 text-xs font-bold px-3 pb-5 cursor-pointer">Read more</p>
                
            </div>
          </div>
        </div>
      </section>
  
</section>
    </>
  );
}
