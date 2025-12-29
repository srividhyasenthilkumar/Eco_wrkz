import Image from "next/image";
import banner from "../../assets/privacy-policy.webp"
import { Metadata } from "next";
export const metadata:Metadata = {
    title: "Privacy Policy - Coworking Space in Anna Nagar,Korattur | Shared Office Space for Rent | Cowrkz",
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
        canonical: "https://ecowrkz.com/privacy-policy/",
        languages: {
        "en-US": "https://ecowrkz.com/privacy-policy/en"
        }
    },

    openGraph: {
        title: "Privacy Policy - Coworking Space in Anna Nagar,Korattur | Shared Office Space for Rent | Cowrkz",
        description: "Home About Us Co-working Space Korattur Anna Nagar Shanthi Colony Nungambakkam T Nagar OMR Guindy Shenoy Nagar Bangalore Gallery Blog Contact Us X Book a Tour Privacy Policy Overview of the Privacy Policy At Ecowrkz, we understand your concerns about the use and sharing of your information. We are committed to handling the data you […]",
        url: "https://ecowrkz.com/privacy-policy/",
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
export default function PrivacyPolicyPage(){
    return (
        <>
          <section className="relative w-full 
                               min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[65vh]">
             
             {/* Background Image */}
             <div className="absolute inset-0">
               <Image
                 src={banner}
                 alt="banner image"
                 fill
                 priority
                 className="object-cover"
               />
               {/* Overlay */}
               <div className="absolute inset-0 bg-gray-900/30" />
             </div>
           </section>
           <section className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold my-5 px-5 mt-20">Privacy Policy </h1>
                <h2 className="text-md font-bold text-gray-600 py-3 px-5"> Overview of the Privacy Policy</h2>
                <p className="text-md text-gray-500 px-5">At Ecowrkz, we understand your concerns about the use and sharing of your information. We are committed to handling the data you provide with the utmost care. By using this website, you agree to comply with Ecowrkz’s privacy policy and terms and conditions. This privacy policy outlines how we manage personally identifiable information. By accessing this website, you consent to the collection and use of your personal information as described in this policy.</p>
                <h2 className="text-md font-bold text-gray-600 py-3 px-5"> Our Commitment to Privacy</h2>
                <p className="text-md text-gray-500 px-5">Ecowrkz respects your right to privacy and is dedicated to protecting it. We will never share or sell your personal information to any third parties. Unless specified otherwise in this privacy policy, we do not collect personal information online or disclose it to unaffiliated organizations. Rest assured, your personal data is handled securely, in accordance with contractual obligations.</p>
                 <h2 className="text-md font-bold text-gray-600 py-3 px-5"> Privacy Policy Updates</h2>
                <p className="text-md text-gray-500 px-5">Please review our privacy policy regularly, as it may be updated from time to time. Ecowrkz reserves the right to modify this policy at any time by posting the updated terms on this website. All changes will take effect immediately upon being posted, unless otherwise specified.</p>
                <h2 className="text-md font-bold text-gray-600 py-3 px-5"> Purpose of Information Collection</h2>
                <p className="text-md text-gray-500 px-5">Any information submitted through our website, application, phone, email, or online forms is collected and stored by us. For example, we may gather information when you contact us for customer support or inquire about our services. The types of information we collect include personal details such as your name, phone number, and email address. This information is used to follow up with visitors and address their needs.</p>
                <h2 className="text-md font-bold text-gray-600 py-3 px-5"> Data Usage</h2>
                <p className="text-md text-gray-500 px-5">We collect and store technical data about your visit to the Ecowrkz website, such as your IP address, originating platform, landing pages, and operating system. This data helps us analyze website traffic and troubleshoot server issues. Please note that this data is non-personal and is not linked to your identity.</p>
                <h2 className="text-md font-bold text-gray-600 py-3 px-5"> Communication Preferences</h2>
                <p className="text-md text-gray-500 px-5">We respect your communication preferences, whether through phone or email. Additionally, you may receive updates from us regarding new services, promotions, discounts, and general information. Occasionally, we may send non-promotional announcements about our services.</p>
                <h2 className="text-md font-bold text-gray-600 py-3 px-5"> Other Information</h2>
                <p className="text-md text-gray-500 px-5">Each time a visitor interacts with our website, we collect and store information to better understand the services our clients require. This data is gathered solely to improve our website’s functionality and will not be used for other purposes without prior notice.</p>
                <h2 className="text-md font-bold text-gray-600 py-3 px-5"> Cookies Policy</h2>
                <p className="text-md text-gray-500 px-5">Cookies are used to store preferences and other information about your visit to our website. These do not collect personal data. While you can disable cookies in your browser settings, doing so may affect the functionality of certain services. For example, we use cookies to track your order during the checkout process when booking office space. We may also use third-party services, including cookies and other digital identifiers, to manage personal data on our behalf.</p>
                 <h2 className="text-md font-bold text-gray-600 py-3 px-5"> Information Security</h2>
                <p className="text-md text-gray-500 px-5">We take all necessary steps to protect the personal information you provide us, adhering to industry-standard security protocols.</p>
                <h2 className="text-md font-bold text-gray-600 py-3 px-5"> Social Media Icons</h2>
                <p className="text-md text-gray-500 px-5">Our website includes icons for social media platforms like Facebook, Twitter, LinkedIn, and Pinterest. To ensure these features work properly, they may collect data such as your IP address. For example, when you visit our landing page, social media icons may gather information to function correctly.</p>
                <h2 className="text-md font-bold text-gray-600 py-3 px-5"> Reporting Suspicious Emails</h2>
                <p className="text-md text-gray-500 px-5">Ecowrkz employs rigorous measures to prevent scam emails. We conduct spam checks on all emails we receive, and any suspicious emails may be rejected or forwarded to the appropriate authorities.</p>
                <h2 className="text-md font-bold text-gray-600 py-3 px-5"> Terms and Conditions of Use</h2>
                <p className="text-md text-gray-500 px-5">By visiting Ecowrkz’s website, you agree to be bound by our terms of service, which include limitations on damages and the application of Indian law. Please note that this policy takes precedence over any other agreements you may have with Ecowrkz. If you have any privacy concerns, please contact our customer service team, and we will address them to the best of our ability. The information we collect will be governed by the privacy policy in effect at the time of use.</p>
                 <h2 className="text-md font-bold text-gray-600 py-3 px-5"> Information Security Policy</h2>
                <p className="text-md text-gray-500 px-5">Ecowrkz places high importance on information security, recognizing it as a key element of success. As security requirements grow, we have heightened our efforts to protect information assets due to the increasing demands from investors, customers, and global markets. Our Information Security Policy (ISP) aims to prevent security incidents and minimize their impact. We are committed to preserving the confidentiality, integrity, and availability of Ecowrkz’s information assets, offering our clients, employees, and other stakeholders a secure work environment. Ecowrkz implements strict security protocols across all our information assets, from people and processes to technology. We are fully committed to fulfilling our security obligations in line with our contracts. The trust that Ecowrkz has earned in the field of information security is highly valued.</p>
            </section>
        </>
    )
}