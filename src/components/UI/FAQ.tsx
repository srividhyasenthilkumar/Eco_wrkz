"use client";

import { useState } from "react";
import { Plus, Minus, ChevronRight } from "lucide-react";

const faqs = [
  {
    id: 1,
    q: "What is coworking?",
    a: "A coworking space is a shared work environment where different companies, start-ups, freelancers, etc., work together. This shared office space offers the most creative environment for your professional growth.A coworking space like ours is well equipped with all amenities like dedicated desk, Meeting rooms, High-speed Wi-fi, Power Backup, etc.",
  },
  {
    id: 2,
    q: "Is coworking a better alternative than traditional office space?",
    a: "Coworking space is way better because most coworking spaces work around the clock which makes the timing too flexible. You can work at your own pace at our business center. Other benefits of a coworking space are affordability and a great opportunity to network with other professionals.",
  },
  {
    id: 3,
    q: "Do I have to pay extra for utilizing conference rooms? Is GST included in the pricing?",
    a:"Whatever is included in your plan, will be yours without a question. We maintain a relationship of trust with all coworkers and we will never charge you extra for any amenities. The internet facility, power backup, electricity, GST and other taxes are all included in the reasonable price you’ll pay according to your plan."
  },
  {
    id: 4,
    q: "Is there an initial deposit that I should pay?",
    a:"To maintain a liable work relationship, we require you to pay two-months rent as a deposit which will be returned to you when you’re moving out. This deposit is a safe and secure one-time payment which will be refunded at our business center."
  },
   {
    id: 5,
    q: "What is the minimum period for each plan?",
    a:"As part of the Cowrkz community, you are expected to stay for a minimum of three months, irrespective of the plan you choose. A notice period of 2 months is a must, in case you want to leave."
  },
  {
    id: 6,
    q: "Is the coworking space accessible all the time?",
    a:"Like most coworking spaces, we always have creative people working throughout the day and the night. You can access the space anytime you want and work at your own pace. That’s the benefit of coworking! If you are a night-owl who gets the spark of creativity and enthusiasm to work at nights, we completely welcome it. We have a cheaper plan called the “All Nighter” designed just for you. Choose your perfect plan to work at a comfortable time."
  },
  {
    id: 7,
    q: "Do you have high-speed wifi or LAN?",
    a:"We know how stressing it is to lose your hours’ worth of work because of weak or disrupted internet connection. That’s why we provide you with an uninterrupted Wifi facility at our shared office space. You can use it limitlessly for all your work needs."
  },
  {
    id: 8,
    q: "Do you have CCTVs? Who will have access to it?",
    a:"Your safety and security of documents are all that matters. We do have CCTVs installed and a biometric system to access the door at our business center. The access to CCTV will be given to coworkers with Collaborative Plans and higher."
  },
  {
    id: 9,
    q: "Can I access the conference room for my business meetings?",
    a:"Of course, you can. Our coworking space encourages professional meetups and communication. The access to the conference room is included in all our plans and you can access it anytime. Let us know prior to the meeting to avoid overlapping with another meeting at the same time."
  },
  {
    id: 10,
    q: "Can I move out within a month after I joined?",
    a:"No. You can’t move out within a month after you join. A notice period of 2 months is required before moving out. Your initial deposit payment will be refunded only by the end of that two-months notice period at our Business center."
  },
  {
    id: 11,
    q: "Can I switch from one plan to another?",
    a:"You most definitely can. We, at Cowrkz, the best shared office space, always try to make your work experience more convenient and economically beneficial. You can always upgrade your plans according to your needs."
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <section className="bg-gradient-to-r from-green-500 to-lime-400 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-16">
          Coworking Office Space FAQ&apos;s
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {faqs.slice(0, 5).map((item) => (
            <AccordionItem
                key={item.id}
                item={item}
                openId={openId}
                setOpenId={setOpenId}
            />
            ))}

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
           {faqs.slice(5).map((item) => (
            <AccordionItem
                key={item.id}
                item={item}
                openId={openId}
                setOpenId={setOpenId}
            />
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}

/* ACCORDION ITEM */
function AccordionItem({
  item,
  openId,
  setOpenId,
}: any) {
  const isOpen = openId === item.id;

  return (
    <div>
      {/* QUESTION */}
      <button
        onClick={() => setOpenId(isOpen ? null : item.id)}
        className={`w-full flex items-center justify-between gap-4 px-6 py-4 rounded-full transition
          ${isOpen ? "bg-lime-200 text-red-600" : "bg-lime-100 text-black hover:bg-lime-200"}
        `}
      >
        <div className="flex items-center gap-3 text-left font-medium">
          {isOpen ? <Minus /> : <Plus />}
          <span>{item.id}. {item.q}</span>
        </div>

        {isOpen ? <ChevronRight className="rotate-90" /> : <ChevronRight />}
      </button>

      {/* ANSWER */}
      <div
  className={`overflow-hidden transition-all duration-500 ease-in-out
    ${isOpen && item.a ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}
  `}
>
  <div className="bg-green-500 text-white px-8 py-6 rounded-lg leading-relaxed">
    {item.a}
  </div>
</div>

    </div>
  );
}
