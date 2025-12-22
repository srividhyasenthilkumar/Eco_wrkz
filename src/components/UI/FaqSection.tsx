"use client";

import { useState } from "react";
import { Plus, Minus, ChevronRight } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What are the benefits of coworking spaces?",
    answer:
      "The popularity of coworking spaces among freelancers, entrepreneurs, and small businesses is on the rise these days. They find it most productive to work in shared office spaces in Korattur, Anna Nagar, Shenoy Nagar, Kilpauk, Padi, Guindy, OMR, Chennai, where they can interact socially, share knowledge, and learn from one another. ",
  },
  { id: 2, question: "How to choose a coworking space?" , 
    answer:
      "The best way to find a co-working space is to ask around for recommendations from people you know who have used a space before. Ask your friends, colleagues, and networking groups for recommendations for small businesses. Important factors to consider before choosing a coworking space include the location from where you live or work. The best opted one you can find in our business sharing center.",},
  { id: 3, question: "How many people can accommodate in the coworkz shared office space?",answer:"We have more seats from 150 to 200. You can work from any seat of our business center. But ensure that pre- booking is done with our shared office space." },
   { id: 4, question: " Do you provide operations, security, and maintenance for our Chennai office?",answer:"Yes we offer maintenance , security and 24/7 CCTV at our shared office space." },
    { id: 5, question: "Is the office fully furnished?",answer:"You can find our coworking business center fully furnished with all modern setup and our shared office space is a professional setting that can help your company achieve a higher level of productivity and image." },
     { id: 6, question: "Is there an extra charge for using meeting rooms? Is GST factored into the price?",answer:"We maintain a trusting relationship with all of our coworkers and shared office space , and we will never overcharge you for any amenities. Internet access, power backup, electricity, GST, and other taxes are all included in the low amount you’ll pay for your plan." },
  { id: 7, question: "Is there a deposit that I need to pay up front?",answer:"We require you to pay two months’ rent as a deposit, which will be refunded to you when you move out, in order to preserve a trustworthy working relationship. This is a one-time, safe and secure payment that will be returned at our business center." },
  { id: 8, question: "Is it true that coworking is a better option than regular office space?",answer:"Because most coworking spaces operate around the clock, the scheduling is far more flexible. Our business center allows you to work at your own speed. A coworking space’s other advantages include its low cost and the opportunity to network with other professionals." },
  { id: 9, question: "Is the coworking space open 24 hours a day?" ,answer:"We at our shared office space always have creative people working throughout the day and night, just like other coworking places. You can come and go as you choose and work at your own leisure. That’s one of the advantages of coworking! If you’re a night owl who gets a burst of inspiration and motivation to work late at night, we’d love to hear from you. We have a lower-cost option called the “All Nighter” that was created specifically for you. Choose your ideal schedule to work at a convenient moment in our business center."},
  { id: 10, question: "Why should I select Ecowrkz?",answer:"Ecowrkz unifies a vibrant and diverse community under one roof while examining business synergies, all while being motivated by the same goals of advancement and success. Our shared office space is to improve the brand image of our clients and cater our packages to their various requirements. We promise to provide our members with top-notch services, access to a wide range of deals, and member benefits." },
  { id: 11, question: "Why is coworking so popular?" ,answer:"Because they offer a professional workplace where people may work or meet clients rather than a public coffee shop or a private in-home office, coworking spaces have emerged as the ideal answer for many small enterprises and freelancers. Members that participate in coworking have the opportunity to naturally network with others in their coworking group or business center.."},
  { id: 12, question: "How can I get started?" ,answer:"Find a location where you can feel the energy of productivity and interact with others who share your objectives.If you are in chennai find our perfect business center or shared office space where you can get all amenities."},
];

export default function FaqSection() {
  const [activeId, setActiveId] = useState<number>(0);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        Coworking Office Space FAQ&apos;s
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2  gap-10">
        {/* LEFT */}
        <div className="space-y-4">
          {faqs.slice(0, 6).map((faq) => (
            <div key={faq.id}>
              <button
                onClick={() => setActiveId(activeId === faq.id ? 0 : faq.id)}
                className="w-full flex justify-between items-center bg-lime-200   rounded-full px-6 py-4"
              >
                <span className="flex items-center gap-3">
                  {activeId === faq.id ? <Minus /> : <Plus />}
                  {faq.id}. {faq.question}
                </span>
                <ChevronRight />
              </button>

              {activeId === faq.id && faq.answer && (
                <div className="border p-6 mt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      
        {/* RIGHT */}
<div className="space-y-4">
  {faqs.slice(6).map((faq) => (
    <div key={faq.id}>
      <button
        onClick={() => setActiveId(activeId === faq.id ? 0 : faq.id)}
        className="w-full flex justify-between items-center bg-lime-200 rounded-full px-6 py-4"
      >
        <span className="flex items-center gap-3">
          {activeId === faq.id ? <Minus /> : <Plus />}
          {faq.id}. {faq.question}
        </span>
        <ChevronRight />
      </button>

      {activeId === faq.id && faq.answer && (
        <div className="border p-6 mt-4">
          {faq.answer}
        </div>
      )}
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
