// "use client"
// import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin } from 'lucide-react';
// import { useState } from 'react';
// import { DynamicButton } from '../Button/DynamicButton';

// const ContactForm = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         subject: 'General Inquiry',
//         message: ''
//     });

//     const subjectOptions = [
//         'General Inquiry',
//         'Financial Solution',
//         'ERP Implementation',
//         'Business Process Outsourcing'
//     ];

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     const handleSubmit = () => {
//         console.log('Form submitted:', formData);
//         alert('Message sent successfully!');
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center px-4">
//             <div className="max-w-6xl w-full grid md:grid-cols-2 bg-white overflow-hidden">

//                 {/* Left Side - Form */}
//                 <div className="p-8 md:p-12">
//                     <h2 className="text-3xl font-poppins font-semibold text-charcoalGray mb-8">
//                         Send Us a Message
//                     </h2>

//                     <div className="space-y-6">
//                         {/* First Name & Last Name */}
//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm text-gray-600 mb-2">First Name</label>
//                                 <input
//                                     type="text"
//                                     name="firstName"
//                                     value={formData.firstName}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-2.5 text-gray-500 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-sm text-gray-600 mb-2">Last Name</label>
//                                 <input
//                                     type="text"
//                                     name="lastName"
//                                     value={formData.lastName}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-2.5 text-gray-500 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors"
//                                 />
//                             </div>
//                         </div>

//                         {/* Email & Phone */}
//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm text-gray-600 mb-2">Email</label>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-2.5 text-gray-500 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-sm text-gray-600 mb-2">Phone No</label>
//                                 <input
//                                     type="tel"
//                                     name="phone"
//                                     value={formData.phone}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-2.5 text-gray-500 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors"
//                                 />
//                             </div>
//                         </div>

//                         {/* Subject Dropdown */}
//                         <div>
//                             <label className="block text-sm text-gray-600 mb-2">Subject</label>
//                             <select
//                                 name="subject"
//                                 value={formData.subject}
//                                 onChange={handleChange}
//                                 className="w-full px-4 py-2.5 text-gray-500 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors bg-white"
//                             >
//                                 {subjectOptions.map(option => (
//                                     <option key={option} value={option} className="bg-white text-gray-800">
//                                         {option}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>

//                         {/* Message */}
//                         <div>
//                             <label className="block text-sm mb-2">Message</label>
//                             <textarea
//                                 name="message"
//                                 value={formData.message}
//                                 onChange={handleChange}
//                                 rows="4"
//                                 className="w-full px-4 py-2.5 border border-gray-300 text-gray-500 rounded focus:outline-none focus:border-blue-500 transition-colors resize-none"
//                             ></textarea>
//                         </div>

//                         {/* Submit Button */}
//                         <DynamicButton
//                             text="Send Message"
//                             bgColor="var(--color-darkNavyBlue)"
//                             hoverBgColor="var(--color-white)"
//                             textColor="var(--color-white)"
//                             hoverTextColor="var(--color-darkNavyBlue)"
//                             padding="0.75rem 2rem"
//                             height="44px"
//                             onClick={handleSubmit}
//                             className="border-b-2 border-transparent hover:border-darkNavyBlue"
//                         />
//                     </div>
//                 </div>

//                 {/* Right Side - Contact Info */}
//                 {/* <div className="relative p-8 md:p-12  text-white flex justify-center" style={{ background: "var(--bg-navy-gradient)" }}> */}

//                 <div
//                     className="relative p-8 md:p-12 text-white overflow-hidden
//   flex flex-col justify-center gap-30 items-center
//                rounded-bl-[100px] rounded-br-[100px] border-b-6 border-darkOrange"
//                     style={{ background: "var(--bg-navy-gradient)" }}
//                 >


//                     {/* Decorative Pattern Images */}
//                     <div className="absolute top-0 left-1 w-100 rotate-180  pointer-events-none">
//                         <img src="/logo/pattern4.png" className="w-full h-full" alt="" />
//                     </div>
//                     <div className="absolute bottom-0 right-0 overflow-hidden w-100  pointer-events-none">
//                         <img src="/logo/pattern4.png" className="w-full h-auto" alt="" />
//                     </div>

//                     <div className="relative z-10">
//                         <div>
//                             <h2 className="text-3xl font-semibold font-poppins text-darkOrange mb-8">
//                                 Contact Information
//                             </h2>

//                             <div className="space-y-6 flex flex-col justify-center ">
//                                 <div className="flex items-center  space-x-4">
//                                     <Phone size={20} />
//                                     <p className="text-lg">+1234 567-8900</p>
//                                 </div>
//                                 <div className="flex items-center space-x-4">
//                                     <Mail size={20} />
//                                     <p className="text-lg">info@mirageworks.com</p>
//                                 </div>
//                                 <div className="flex items-start space-x-4">
//                                     <MapPin size={20} className="mt-1" />
//                                     <div>
//                                         <p className="text-lg">1234 Business Ave, Suite 100</p>
//                                         <p className="text-lg">City, State 12345</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-start space-x-4">
//                                     <Clock size={20} className="mt-1" />
//                                     <div>
//                                         <p className="text-lg">Monday - Friday: 9:00 AM - 6:00 PM</p>
//                                         <p className="text-lg">Saturday - Sunday: Closed</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Social Media */}
//                         <div className="mt-12">
//                             <h3 className="text-xl font-semibold mb-4 text-darkOrange">
//                                 Follow Us
//                             </h3>
//                             <div className="flex space-x-4">
//                                 {[Facebook, Twitter, Linkedin].map((Icon, index) => (
//                                     <button
//                                         key={index}
//                                         className="
//                                             w-10 h-10
//                                             bg-white/20
//                                             rounded-full
//                                             flex items-center justify-center
//                                             text-white
//                                             hover:bg-white hover:text-darkNavyBlue
//                                             transition-all duration-300
//                                             hover:scale-105
//                                         "
//                                     >
//                                         <Icon size={18} />
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactForm;























"use client"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { DynamicButton } from '../Button/DynamicButton';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const subjectOptions = [
    'General Inquiry',
    'Financial Solution',
    'ERP Implementation',
    'Business Process Outsourcing'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 ">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-lg">
        
        {/* Left Side - Form */}
        <div className="p-6 sm:p-8 md:p-12">
          <h2 className="text-3xl font-poppins font-semibold text-charcoalGray mb-8">
            Send Us a Message
          </h2>

          <div className="space-y-6">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-gray-500 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-gray-500 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-gray-500 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Phone No</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-gray-500 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2.5 text-gray-500 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors bg-white"
              >
                {subjectOptions.map(option => (
                  <option key={option} value={option} className="bg-white text-gray-800">
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2.5 border border-gray-300 text-gray-500 rounded focus:outline-none focus:border-blue-500 transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <DynamicButton
              text="Send Message"
              bgColor="var(--color-darkNavyBlue)"
              hoverBgColor="var(--color-white)"
              textColor="var(--color-white)"
              hoverTextColor="var(--color-darkNavyBlue)"
              padding="0.75rem 2rem"
              height="44px"
              onClick={handleSubmit}
              className="border-b-2 border-transparent hover:border-darkNavyBlue"
            />
          </div>
        </div>

        {/* Right Side - Contact Info */}
        <div
          className="relative p-6 sm:p-8 md:p-12 text-white overflow-hidden justify-center
                     flex flex-col justify-between items-center
                     rounded-bl-[80px] rounded-br-[80px] rounded-tr-[0px] rounded-tl-[0px]
                     border-b-8 border-darkOrange"
          style={{ background: "var(--bg-navy-gradient)" }}
        >
          {/* Decorative Pattern Images */}
          <div className="absolute top-0 left-0 w-100 rotate-180 pointer-events-none">
            <img src="/logo/pattern4.png" className="w-full h-full object-cover" alt="" />
          </div>
          <div className="absolute bottom-0 right-0 w-100  pointer-events-none">
            <img src="/logo/pattern4.png" className="w-full h-full object-cover" alt="" />
          </div>

          <div className="relative z-10 w-full">
            <h2 className="text-3xl font-semibold font-poppins text-darkOrange mb-8 text-center md:text-left">
              Contact Information
            </h2>

            <div className="space-y-6 flex flex-col justify-center items-center md:items-start">
              <div className="flex items-center space-x-4">
                <Phone size={20} />
                <p className="text-lg">+1234 567-8900</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail size={20} />
                <p className="text-lg">info@mirageworks.com</p>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin size={20} className="mt-1" />
                <div>
                  <p className="text-lg">1234 Business Ave, Suite 100</p>
                  <p className="text-lg">City, State 12345</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock size={20} className="mt-1" />
                <div>
                  <p className="text-lg">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-lg">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-12 flex flex-col items-center md:items-start">
              <h3 className="text-xl font-semibold mb-4 text-darkOrange">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Linkedin].map((Icon, index) => (
                  <button
                    key={index}
                    className="
                      w-10 h-10
                      bg-white/20
                      rounded-full
                      flex items-center justify-center
                      text-white
                      hover:bg-white hover:text-darkNavyBlue
                      transition-all duration-300
                      hover:scale-105
                    "
                  >
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactForm;
