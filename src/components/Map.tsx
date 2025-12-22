"use client";

import Image from "next/image";
import { useState } from "react";
import map from "../assets/google-map.webp";
export default function  MapAndLocationMatch () {
    type MapAndLocationMatchProps = {
        country:string,
        address:string,
        phone:string,
        email:string,
        imgUrl:string,
    }

    const locationDetails:MapAndLocationMatchProps[] = [
        {
            country: "Korattur Office",
            address: "1B, 249, 2nd St, Periyar Nagar, TNHB Colony, West, Korattur,Chennai, Tamil Nadu 600080",
            phone: "+91- 97100 79798",
            email: "info@ecowrkz.com",
            imgUrl: "/upload/usa-skt.webp",
        },
        {
            country: "Anna Nagar Office",
            address: "Door No, Karuna Conclave, AD 42 & 45, 4th Ave, Shanthi Colony, Anna Nagar, Chennai, Tamil Nadu 600040",
            phone: "+91- 97100 79798",
            email: "info@ecowrkz.com",
            imgUrl: "/upload/canada-skt.webp",
        },
        {
            country: "Anna Nagar Office",
            address: "plot no : 264 , Door no : F/22, 3rd Floor, F Block, 2nd Main Rd, Block F, Anna Nagar, Chennai, Tamil Nadu 600102",
            phone: "+91- 97100 79798",
            email: "info@ecowrkz.com",
            imgUrl: "/upload/france-skt.webp",
        },
        {
            country: "Anna Nagar Office",
            address: "Sabari Towers, W-110, 3rd Ave, Anna Nagar, Chennai, Tamil Nadu 600040",
            phone: "+91- 97100 79798",
            email: "info@ecowrkz.com",
            imgUrl: "/upload/dubai-skt.webp",
        },
        {
            country: "Anna Nagar Office",
            address: "Celebrity' Building No. 49,(old no. 95), 2nd Floor, 1st street, 3rd Ave, near T - Block, Anna Nagar,Chennai, Tamil Nadu 600040",
            phone: "+91- 97100 79798",
            email: "info@ecowrkz.com",
            imgUrl: "/upload/uk-skt.webp",
        },
        {
            country: "India",
            address: "2nd Floor, Karuna Conclave, AD 42 & 45, 4th Ave, Shanthi Colony, Anna Nagar, Chennai, Tamil Nadu 600040",
            phone: "+91 99622 62210 - 04448067255",
            email: "info@rankraze.com",
            imgUrl: "/upload/india-skt.webp",
        },
        {
            country: "Australia",
            address: "4 Greenhouse St, Austral NSW 2179, Australia.",
            phone: "+61 406 567 394",
            email: "info@rankraze.com.au",
            imgUrl: "/upload/aus-skt.webp",
        },
    ]

    const [currentLocationIndex, setLocationIndex] = useState(0);
    return (
        <>
        <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-4 max-w-7xl mb-2.5 relative">
            <div className={`w-full md:w-[30%] relative inset-shadow-xl shadow-white`}>
                <div className="absolute w-full h-full bg-[auto_100%] md:bg-cover bg-right md:bg-center bg-no-repeat -z-10 opacity-20 dark:opacity-35 grayscale-100 dark:invert dark:brightness-100" style={{
                    backgroundImage: `url(${locationDetails[currentLocationIndex]?.imgUrl})`,
                }}></div>
                <div className="w-full h-full flex-col flex justify-evenly items-center p-5 border border-gray-100 rounded-sm shadow shadow-gray-300 dark:border-[#b8fff2] z-10">
                    <div className="w-full flex flex-col gap-2.5">
                        <div className="w-full flex items-stretch justify-center gap-3">
                            <div className="w-5 p-2">
                                <i className="ri-map-pin-line text-2xl text-[var(--primary-green)]"></i>
                            </div>
                            <div className="w-full p-2 felx flex-col">
                                <h4 className="inline-block font-bold dark:text-[#6bffe4]">{locationDetails[currentLocationIndex]?.country} Office</h4>
                                <span className="inline-block font-light text-gray-900 dark:text-[#b8fff2] text-sm md:text-base">{locationDetails[currentLocationIndex]?.address}</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2.5">
                        <div className="w-full flex items-stretch justify-center gap-3">
                            <div className="w-5 p-2">
                                <i className="ri-phone-line text-2xl text-[var(--primary-green)]"></i>
                            </div>
                            <div className="w-full p-2 flex flex-col">
                                <h4 className="inline-block font-bold dark:text-[#6bffe4]">Phone</h4>
                                <span className="inline-block font-light text-gray-900 dark:text-[#b8fff2] text-sm md:text-base">{locationDetails[currentLocationIndex]?.phone}</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2.5">
                        <div className="w-full flex items-stretch justify-center gap-3">
                            <div className="w-5 p-2">
                                <i className="ri-mail-line text-2xl text-[var(--primary-green)]"></i>
                            </div>
                            <div className="w-full p-2 flex flex-col">
                                <h4 className="inline-block font-bold dark:text-[#6bffe4]">Email</h4>
                                <span className="inline-block font-light text-gray-900 dark:text-[#b8fff2] text-sm md:text-base">{locationDetails[currentLocationIndex]?.email}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-[70%] relative p-3.5 border border-gray-100 rounded-sm shadow shadow-[#BDF7EC] dark:bg-white dark:border-[#b8fff2]">
                <Image 
                src={map}
                alt="Map and Location Match"
                width={1000}
                height={500}
                objectFit="cover"
                className="h-full w-auto md:w-full md:h-auto"
                />
                <div className="w-3.5 h-3.5 absolute flex items-center justify-center rounded-full top-[32.7%] left-[37.3%]  bg-[var(--primary-green)] z-10 cursor-pointer before:content-[''] before:w-full before:h-full before:rounded-full before:bg-[var(--primary-green)] before:animate-ping before:absolute before:top-0 before:left-0 before:-z-10 before:scale-150"
                onClick={() => setLocationIndex(0)}>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-950 z-10"></div>
                </div>
                <div className="w-3.5 h-3.5 absolute flex items-center justify-center rounded-full top-[64%] left-[50.5%]  bg-[var(--primary-green)] z-10 cursor-pointer before:content-[''] before:w-full before:h-full before:rounded-full before:bg-[var(--primary-green)] before:animate-ping before:absolute before:top-0 before:left-0 before:-z-10 before:scale-150"
                onClick={() => setLocationIndex(1)}>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-950 z-10"></div>
                </div>
                <div className="w-3.5 h-3.5 absolute flex items-center justify-center rounded-full top-[59%] left-[63.2%]  bg-[var(--primary-green)] z-10 cursor-pointer before:content-[''] before:w-full before:h-full before:rounded-full before:bg-[var(--primary-green)] before:animate-ping before:absolute before:top-0 before:left-0 before:-z-10 before:scale-150"
                onClick={() => setLocationIndex(2)}>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-950 z-10"></div>
                </div>
                <div className="w-3.5 h-3.5 absolute flex items-center justify-center rounded-full top-[53.7%] left-[63.4%]  bg-[var(--primary-green)] z-10 cursor-pointer before:content-[''] before:w-full before:h-full before:rounded-full before:bg-[var(--primary-green)] before:animate-ping before:absolute before:top-0 before:left-0 before:-z-10 before:scale-150"
                onClick={() => setLocationIndex(3)}>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-950 z-10"></div>
                </div>
                <div className="w-3.5 h-3.5 absolute flex items-center justify-center rounded-full top-[67%] left-[69.6%]  bg-[var(--primary-green)] z-10 cursor-pointer before:content-[''] before:w-full before:h-full before:rounded-full before:bg-[var(--primary-green)] before:animate-ping before:absolute before:top-0 before:left-0 before:-z-10 before:scale-150"
                onClick={() => setLocationIndex(4)}>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-950 z-10"></div>
                </div>
                <div className="w-3.5 h-3.5 absolute flex items-center justify-center rounded-full top-[50%] left-[65%]  bg-[var(--primary-green)] z-10 cursor-pointer before:content-[''] before:w-full before:h-full before:rounded-full before:bg-[var(--primary-green)] before:animate-ping before:absolute before:top-0 before:left-0 before:-z-10 before:scale-150"
                onClick={() => setLocationIndex(5)}>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-950 z-10"></div>
                </div>
                <div className="w-3.5 h-3.5 absolute flex items-center justify-center rounded-full top-[74%] left-[85.4%]  bg-[var(--primary-green)] z-10 cursor-pointer before:content-[''] before:w-full before:h-full before:rounded-full before:bg-[var(--primary-green)] before:animate-ping before:absolute before:top-0 before:left-0 before:-z-10 before:scale-150"
                onClick={() => setLocationIndex(6)}>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-950 z-10"></div>
                </div>
            </div>
        </div>
        </>
    )
}