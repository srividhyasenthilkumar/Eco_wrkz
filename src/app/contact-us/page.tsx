import Image from "next/image";
import banner from "../../assets/about/banner.webp"
import {MapPin,Phone,Mail} from "lucide-react"

export default function ContactUs() {
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
          We break down walls so that you can breakthrough in your business.
          </p>
           <p className="text-base sm:text-lg md:text-xl mt-3">
          “Don’t Wait for an opportunity. CREATE IT. "
        </p>
        </div>
      </div>
      
      </section>
      
      
          <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="">
                <h3 className="lg:text-4xl md:text-3xl text-2xl py-5 font-bold ">
                    Get In Touch
                </h3>
<div className="space-y-4">
  <div className="flex items-start gap-4 text-sm md:text-md lg:text-lg text-gray-700">
    <MapPin className="w-6 h-6 flex-shrink-0 text-black" strokeWidth={2} />
    <span className="pr-10">
      #249, 1st Floor, 2nd St, TNHB Colony, Periyar Nagar West, Korattur,
      Chennai – 600080 (Landmark: Padi Flyover – Near Anna Nagar)
    </span>
  </div>

  <div className="flex items-center gap-4 text-sm md:text-md lg:text-lg text-gray-700">
    <Phone className="w-6 h-6 flex-shrink-0 text-black" strokeWidth={2} />
    <span>97100 79798</span>
  </div>

  <div className="flex items-center gap-4 text-sm md:text-md lg:text-lg text-gray-700">
    <Mail className="w-6 h-6 flex-shrink-0 text-black" strokeWidth={2} />
    <span>info@ecowrkz.com</span>
  </div>
</div>
  <div className="">
                <h3 className="lg:text-4xl md:text-3xl text-2xl py-5 mt-20 font-bold ">
                   Anna Nagar - Chennai
                </h3>
<div className="space-y-4">
  <div className="flex items-start gap-4 text-sm md:text-md lg:text-lg text-gray-700">
    <MapPin className="w-6 h-6 flex-shrink-0 text-black" strokeWidth={2} />
    <span className="pr-10">
      Sabari Towers, W-110 3rd Avenue,
Anna Nagar Chennai,
Tamil Nadu 600040
    </span>
  </div>

  <div className="flex items-center gap-4 text-sm md:text-md lg:text-lg text-gray-700">
    <Phone className="w-6 h-6 flex-shrink-0 text-black" strokeWidth={2} />
    <span>97100 79798</span>
  </div>

  <div className="flex items-center gap-4 text-sm md:text-md lg:text-lg text-gray-700">
    <Mail className="w-6 h-6 flex-shrink-0 text-black" strokeWidth={2} />
    <span>info@ecowrkz.com</span>
  </div>
</div>

              </div>
              </div>
             
              <div className="max-w-xl">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.9307594984375!2d80.1829074748438!3d13.103572887224049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52639b6027b46d%3A0x3e66685730c27073!2sECowrkz%20Coworking%20Office%20Space%20%2F%20Shared%20Office%20Space%20in%20Anna%20Nagar%2C%20Chennai!5e0!3m2!1sen!2sin!4v1766210540813!5m2!1sen!2sin" width="600" height="250"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.219479635468!2d80.21498437484341!3d13.085272087240613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526426853d6169%3A0x626b3493464e1575!2sSabari%20Towers%2C%203rd%20Ave%2C%20W%20Block%2C%20Anna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600040!5e0!3m2!1sen!2sin!4v1766221993637!5m2!1sen!2sin" width="600" height="250"  loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="mt-20"></iframe>
              </div>
            </div>
            
          </section>
    
   
<section className="max-w-7xl mx-auto px-6 py-16">
<h1 className="text-3xl font-semibold text-green-800">Contact Us</h1>
<form className="mt-6 max-w-lg space-y-4">
<input
type="text"
placeholder="Your Name"
className="w-full rounded-lg border px-4 py-2"
/>
<input
type="email"
placeholder="Your Email"
className="w-full rounded-lg border px-4 py-2"
/>
<textarea
placeholder="Your Message"
className="w-full rounded-lg border px-4 py-2"
rows={4}
/>
<button
type="submit"
className="rounded-lg bg-green-700 px-6 py-2 text-white hover:bg-green-800"
>
Send Message
</button>
</form>
</section>
 </>
);
}