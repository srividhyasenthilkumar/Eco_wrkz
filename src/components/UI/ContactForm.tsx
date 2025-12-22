"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    enquiry: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-full max-w-md bg-gradient-to-br from-lime-300 to-green-600 rounded-3xl p-10 shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-lime-100 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number*"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-lime-100 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address*"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-lime-100 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700"
          />

          {/* Select */}
          <select
            name="enquiry"
            value={formData.enquiry}
            onChange={handleChange}
            className="w-40 px-3 py-2 rounded-md bg-lime-100 border border-gray-500 focus:outline-none"
          >
            <option value="">Select</option>
            <option value="private-office">Coworking Space</option>
            <option value="private-office">Virtual Office</option>
            <option value="coworking">Dedicated Desk</option>
            <option value="virtual-office">Conference Room</option>
            <option value="virtual-office">Others</option>
          </select>

          {/* Button */}
          <button
            type="submit"
            className="mt-4 md:mx-3 mx-5 bg-[var(--color-primary-blue)] hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
}
