import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#041435] text-white px-4 sm:px-8 md:px-16 lg:px-20 py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Logo Section */}
          <div className="flex flex-col lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 relative">
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#D4A574', stopOpacity: 1 }} />
                      <stop offset="50%" style={{ stopColor: '#C9944A', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#8B6F47', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  {/* Mountain/Triangle Shape */}
                  <path d="M25 5 L45 20 L45 35 L25 45 L5 35 L5 20 Z" fill="url(#logoGradient)" />
                  <path d="M25 15 L35 22 L35 32 L25 38 L15 32 L15 22 Z" fill="#1a2942" opacity="0.6" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[17px] font-bold tracking-[0.2em]">MIRAGE</span>
                <span className="text-[9px] tracking-[0.15em] -mt-0.5">WORKS</span>
              </div>
            </div>
            
            <p className="text-[13px] font-medium mb-2">Your Vision, Our Execution</p>
            
            <p className="text-[12px] leading-[1.6] opacity-80 mb-4 pr-4">
              Empowering businesses with comprehensive financial, ERP, and outsourcing solutions tailored for growth and efficiency.
            </p>
            
            <div className="flex gap-2">
              <a href="#" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f97316] transition-colors duration-300">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f97316] transition-colors duration-300">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f97316] transition-colors duration-300">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#f97316] text-[13px] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-[13px] opacity-85 hover:opacity-100 hover:text-[#f97316] transition-all duration-300 inline-block">
                  Financial Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] opacity-85 hover:opacity-100 hover:text-[#f97316] transition-all duration-300 inline-block">
                  ERP Implementation
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] opacity-85 hover:opacity-100 hover:text-[#f97316] transition-all duration-300 inline-block">
                  Business Process Outsourcing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#f97316] text-[13px] font-semibold mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-[13px] opacity-85 hover:opacity-100 hover:text-[#f97316] transition-all duration-300 inline-block">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] opacity-85 hover:opacity-100 hover:text-[#f97316] transition-all duration-300 inline-block">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] opacity-85 hover:opacity-100 hover:text-[#f97316] transition-all duration-300 inline-block">
                  Insight
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] opacity-85 hover:opacity-100 hover:text-[#f97316] transition-all duration-300 inline-block">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-[#f97316] text-[13px] font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="#f97316">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                <span className="text-[12px] opacity-90">+1234 567-8900</span>
              </div>
              
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="#f97316">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="text-[12px] opacity-90">info@mirageworks.com</span>
              </div>
              
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="#f97316">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="text-[12px] opacity-90 leading-[1.5]">1234 Business Ave, Suite 100 City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] opacity-70">
          <div>© 2025 Mirage Works. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[#f97316] transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#f97316] transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;