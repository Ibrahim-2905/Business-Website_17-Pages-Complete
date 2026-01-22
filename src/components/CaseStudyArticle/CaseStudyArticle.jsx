// "use client";
// import { useState } from "react";
// import { DynamicButton } from "../Button/DynamicButton";
// import { Facebook, Twitter, Linkedin } from "lucide-react";

// export default function CaseStudyArticle() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     jobTitle: "",
//     company: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = () => {
//     console.log("Form submitted:", formData);
//     alert("Case study downloaded successfully!");
//   };

//   return (
//     <div className="min-h-screen flex justify-center">
//       <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2">

//         {/* Left Side - Article */}
//         <div className="px-4 py-10 min-h-screen">
//           <article className="space-y-8">
//             {/* Article Header */}
//             <div>
//               {/* <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-gray-600 mb-4">
//                 <span>Jan 15, 2025</span>
//                 <div className="flex gap-3">
//                   <Facebook className="w-4 h-4 cursor-pointer hover:text-blue-600" />
//                   <Linkedin className="w-4 h-4 cursor-pointer hover:text-blue-700" />
//                   <Twitter className="w-4 h-4 cursor-pointer hover:text-blue-400" />
//                 </div>
//               </div> */}

//               <h1 className="text-3xl  font-poopin text-peal mb-4" style={{ fontWeight: 600 }}>
//                A Leading Retail Chain’s Journey Toward Operational Efficiency.
//               </h1>

//               <p className="text-base sm:text-lg text-charcoalGray leading-relaxed mb-6">
//              Discover how we helped a leading retail chain streamline its supply chain operations using artificial intelligence, leading to a 30% reduction in operational costs and 15% faster delivery times."
//               </p>
//             </div>

//             {/* Section */}
//             <section>
//               <h2 className="text-2xl font-poopins text-darkNavyBlue mb-4" style={{ fontWeight: 500 }}>
//               Challenge
//               </h2>
//               <p className="text-gray-700 leading-relaxed mb-4">
//                Briefly explain the challenges faced by the retail chain before the implementation of AI-driven automation.
//               </p>
//               <p className="text-charcoalGray leading-relaxed mb-4">
//             <span className="text-charcoalGray font-semibold"> Example:</span> "The client struggled with supply chain inefficiencies, delayed deliveries, and high operational costs, which affected overall customer satisfaction and profitability."

//               </p>
//             </section>

           
//             <section>
//               <h2 className="text-2xl font-poopins text-darkNavyBlue mb-4" style={{ fontWeight: 500 }}>
//               Solution:
//               </h2>
//               <p className="text-gray-700 leading-relaxed mb-4">
//               Describe how you implemented AI-driven automation to address the challenges.
//               </p>
//               <p className="text-charcoalGray leading-relaxed mb-4">
//             <span className="text-charcoalGray font-semibold"> Example:</span> We introduced an AI-powered system that integrated seamlessly with their existing infrastructure. This system optimized inventory management, demand forecasting, and logistics routes to ensure faster and more accurate deliveries.

//               </p>
//             </section>



//             <section>
//               <h2 className="text-2xl font-poopins text-darkNavyBlue mb-4" style={{ fontWeight: 500 }}>
//               Result
//               </h2>
//               <p className="text-gray-700 leading-relaxed mb-4">
//             Within six months, the client saw a 30% reduction in operational costs and a 15% improvement in delivery times, leading to better customer satisfaction and increased profitability."
//               </p>
            
//             </section>

           
          
         
//           </article>
//         </div>

//         {/* Right Side - Form */}
//         <div
//           className="flex flex-col justify-center p-8 md:p-12"
//           style={{ background: "var(--bg-navy-gradient)" }}
//         >
//           <h2 className="text-3xl font-poppins font-semibold text-white text-center mb-8">
//             Download Case Study
//           </h2>

//           <div className="space-y-4">
//             {/* Row 1: Your Name & Email */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your Name"
//                 className="w-full px-4 py-3 bg-transparent border border-white text-white placeholder-white rounded focus:outline-none focus:ring-1 focus:ring-white"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email"
//                 className="w-full px-4 py-3 bg-transparent border border-white text-white placeholder-white rounded focus:outline-none focus:ring-1 focus:ring-white"
//               />
//             </div>

//             {/* Row 2: Phone Number & Job Title */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="Phone Number"
//                 className="w-full px-4 py-3 bg-transparent border border-white text-white placeholder-white rounded focus:outline-none focus:ring-1 focus:ring-white"
//               />
//               <input
//                 type="text"
//                 name="jobTitle"
//                 value={formData.jobTitle}
//                 onChange={handleChange}
//                 placeholder="Job Title"
//                 className="w-full px-4 py-3 bg-transparent border border-white text-white placeholder-white rounded focus:outline-none focus:ring-1 focus:ring-white"
//               />
//             </div>

//             {/* Row 3: Company Name */}
//             <input
//               type="text"
//               name="company"
//               value={formData.company}
//               onChange={handleChange}
//               placeholder="Company Name"
//               className="w-full px-4 py-3 bg-transparent border border-white text-white placeholder-white rounded focus:outline-none focus:ring-1 focus:ring-white"
//             />

//             {/* Row 4: Download Now Button (half width) */}
//             <div className="flex">
//               <DynamicButton
//                 text="Download Now"
//                 bgColor="var(--color-darkNavyBlue)"
//                 hoverBgColor="var(--color-white)"
//                 textColor="var(--color-white)"
//                 hoverTextColor="var(--color-darkNavyBlue)"
//                 padding="0.75rem 2rem"
//                 height="44px"
//                 onClick={handleSubmit}
//                 className="w-1/2 border-b-2 border-transparent hover:border-darkNavyBlue"
//               />
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }




















"use client";
import { useState } from "react";
import { DynamicButton } from "../Button/DynamicButton";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function CaseStudyArticle() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    company: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Case study downloaded successfully!");
  };

  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Left Side - Article */}
        <div className="px-4 py-10">
          <article className="space-y-8">
            {/* Article Header */}
            <div>
              <h1 className="text-3xl font-poopin text-peal mb-4" style={{ fontWeight: 600 }}>
                A Leading Retail Chain’s Journey Toward Operational Efficiency.
              </h1>

              <p className="text-base sm:text-lg text-charcoalGray leading-relaxed mb-6">
                Discover how we helped a leading retail chain streamline its supply chain operations using artificial intelligence, leading to a 30% reduction in operational costs and 15% faster delivery times.
              </p>
            </div>

            {/* Challenge Section */}
            <section>
              <h2 className="text-2xl font-poopins text-darkNavyBlue mb-4" style={{ fontWeight: 500 }}>
                Challenge
              </h2>
              <p className="text-charcoalGray leading-relaxed mb-4">
                Briefly explain the challenges faced by the retail chain before the implementation of AI-driven automation.
              </p>
              <p className="text-charcoalGray leading-relaxed mb-4">
                <span className="text-charcoalGray font-semibold">Example:</span> The client struggled with supply chain inefficiencies, delayed deliveries, and high operational costs, which affected overall customer satisfaction and profitability.
              </p>
            </section>

            {/* Solution Section */}
            <section>
              <h2 className="text-2xl font-poopins text-darkNavyBlue mb-4" style={{ fontWeight: 500 }}>
                Solution
              </h2>
              <p className="text-charcoalGray leading-relaxed mb-4">
                Describe how you implemented AI-driven automation to address the challenges.
              </p>
              <p className="text-charcoalGray leading-relaxed mb-4">
                <span className="text-charcoalGray font-semibold">Example:</span> We introduced an AI-powered system that integrated seamlessly with their existing infrastructure. This system optimized inventory management, demand forecasting, and logistics routes to ensure faster and more accurate deliveries.
              </p>
            </section>

            {/* Result Section */}
            <section>
              <h2 className="text-2xl font-poopins text-darkNavyBlue mb-4" style={{ fontWeight: 500 }}>
                Result
              </h2>
              <p className="text-charcoalGray leading-relaxed mb-4">
                Within six months, the client saw a 30% reduction in operational costs and a 15% improvement in delivery times, leading to better customer satisfaction and increased profitability.
              </p>
            </section>
          </article>
        </div>

        {/* Right Side - Form */}
        <div
          className="flex flex-col self-start p-8 md:p-12"
          style={{ background: "var(--bg-navy-gradient)" }}
        >
          <h2 className="text-3xl font-poppins font-semibold text-white text-center mb-8">
            Download Case Study
          </h2>

          <div className="space-y-4">
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-transparent border border-white text-white placeholder-white rounded focus:outline-none focus:ring-1 focus:ring-white"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 bg-transparent border border-white text-white placeholder-white rounded focus:outline-none focus:ring-1 focus:ring-white"
              />
            </div>

            {/* Row 2: Phone & Job Title */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-transparent border border-white text-white placeholder-white rounded focus:outline-none focus:ring-1 focus:ring-white"
              />
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Job Title"
                className="w-full px-4 py-3 bg-transparent border border-white text-white placeholder-white rounded focus:outline-none focus:ring-1 focus:ring-white"
              />
            </div>

            {/* Row 3: Company Name */}
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full px-4 py-3 bg-transparent border border-white text-white placeholder-white rounded focus:outline-none focus:ring-1 focus:ring-white"
            />

            {/* Row 4: Download Button */}
            <div className="flex">
              <DynamicButton
                text="Download Now"
                bgColor="var(--color-darkNavyBlue)"
                hoverBgColor="var(--color-white)"
                textColor="var(--color-white)"
                hoverTextColor="var(--color-darkNavyBlue)"
                padding="0.75rem 2rem"
                height="44px"
                onClick={handleSubmit}
                className="w-1/2 border-b-2 border-transparent hover:border-darkNavyBlue"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
