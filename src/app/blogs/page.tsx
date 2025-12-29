"use client";
import { blogs } from "../../data/blogs";
import { useState } from "react";
import Image from "next/image";
import banner from "../../assets/about/banner.webp"

const BLOGS_PER_PAGE = 10;

export default function BlogSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const currentBlogs = blogs.slice(
    startIndex,
    startIndex + BLOGS_PER_PAGE
  );

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
            BLOGS
           </p>
            
         </div>
       </div>
       
       </section>
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-center font-bold text-3xl md:text-4xl">
         BLOGS
      </h2>

      {/* Blog Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentBlogs.map((blog) => (
          <div
            key={blog.id}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={250}
              className="w-full h-52 object-cover"
            />

            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {blog.description}
              </p>
              <p className="text-blue-600 text-sm font-semibold cursor-pointer">
                Read more →
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12 gap-2 flex-wrap">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-md border text-sm font-semibold
              ${
                currentPage === i + 1
                  ? "bg-[#3DBC9B] text-white border-[#3DBC9B]"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
     </>
  );
}
