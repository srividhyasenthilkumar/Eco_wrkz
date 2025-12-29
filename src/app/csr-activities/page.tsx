import Image from "next/image";
import activity_1 from "../../assets/csr-activities/activity-1.webp"
import banner from "../../assets/about/banner.webp"
import { Metadata } from "next";
export const metadata:Metadata = {
    title: "CSR Activities - Coworking Space in Anna Nagar,Korattur | Shared Office Space for Rent | Cowrkz",
    description: "",
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
        canonical: "https://ecowrkz.com/csr-activities/",
        languages: {
        "en-US": "https://ecowrkz.com/csr-activities/en"
        }
    },

    openGraph: {
        title: "CSR Activities - Coworking Space in Anna Nagar,Korattur | Shared Office Space for Rent | Cowrkz",
        description: "Home About Us Co-working Space Korattur Anna Nagar Shanthi Colony T Nagar Guindy Nungambakkam Ambattur CSR Activities Gallery Blog Contact Us X +91- 97100 79798 CSR ACTIVITIES Ecowrkz CSR Health Checkup Event with Dr. Metha’s Hospital, Clove Dental, and Ameen Vision Care – Free Health Services on 12th February 2025 On 12th February 2025, Ecowrkz […]",
        url: "https://ecowrkz.com/csr-activities/",
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
export default function CSRActivities() {
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
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 h-full flex items-center justify-center">
  <div className="text-white max-w-3xl sm:max-w-4xl md:max-w-8xl space-y-4 sm:space-y-6 text-center">
    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold overflow-hidden">
      CSR ACTIVITIES
    </p>
  </div>
</div>

</section>

    
   
<section className="p-10 place-items-center px-10 sm:px-20 md:px-30 lg:px-50 pt-20 ">
<Image
        src={activity_1}          
        alt="Activity image"
        className="object-cover"
        height={1365}
        width={2048}
      />
</section>
<section className="max-w-7xl mx-auto px-6 py-16">
  <div className="mt-10 grid grid-cols-1 md:grid-cols-[30%_70%]  items-start gap-6 lg:px-20">
    
    {/* Video - 30% */}
    <div className="w-full">
      <video
        src="/videos/csr-activity-1.mp4"
        controls
        className="shadow-2xl w-full h-auto rounded-lg "
      />
    </div>

    {/* Content - 70% */}
    <div className="w-full lg:pt-10">
      <h3 className="md:text-2xl text-xl font-semibold text-black">
        Ecowrkz CSR Health Checkup Event with Dr. Metha's Hospital, Clove Dental, and Ameen Vision Care – Free Health Services on 12th February 2025
      </h3>

      <p className="mt-3 text-gray-500 text-sm leading-7  ">
       On 12th February 2025, Ecowrkz hosted a successful <span className="font-bold"> CSR health checkup event</span>, in collaboration with <span className="font-bold">Dr. Metha’s Hospital, Clove Dental, </span>and <span className="font-bold">Ameen Vision Care</span>. This community-focused initiative provided free health services, including <span className="font-bold">Ameen Vision Care, dental screenings, </span> and <span className="font-bold">eye care services.</span> 
      </p>

      <p className="mt-3 text-gray-500 text-sm leading-7 ">
       Held at a local venue, the event offered participants access to professional <span className="font-bold">health consultations, dental exams,</span> and <span className="font-bold">vision screenings,</span> ensuring that individuals could identify potential health issues early. <span className="font-bold">Dr. Metha’s Hospital</span>  conducted thorough general health assessments, while <span className="font-bold">Clove Dental</span> provided free <span className="font-bold">dental checkups</span> and oral hygiene advice. Meanwhile, <span className="font-bold">Ameen Vision Care</span> performed <span className="font-bold"> eye exams</span> to detect early signs of vision problems.
      </p>
      <p className="mt-3 text-gray-500 text-sm leading-7 ">
      This CSR activity is part of Ecowrkz’s ongoing efforts to enhance the <span className="font-bold">health and well-being</span> of the community, contributing to improved overall healthcare. With the support of trusted healthcare partners, the event emphasized the importance of <span className="font-bold">preventive care</span> and encouraged individuals to prioritize their health.
      </p>
      <p className="mt-3 text-gray-500 text-sm leading-7 ">
      Ecowrkz is dedicated to continuing such initiatives, fostering a healthier society, and making healthcare services more accessible to all.
      </p>
    </div>

  </div>
</section>

 </>
);
}