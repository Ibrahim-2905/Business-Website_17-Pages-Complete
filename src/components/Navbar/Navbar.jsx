"use client";

import React, { forwardRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../Shadcn/NavigationMenu/ShadcnNavigationMenu";
import AnimatedButton from "../Button/Button";
import { ChevronRight, Menu, X, ChevronDown } from "lucide-react";

const Navbar = forwardRef(function Navbar(props, ref) {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsSolutionsOpen(false);
  };

  return (
    <header
      ref={ref}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200"
    >
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Logo */}
        <div className="relative cursor-pointer flex items-center" onClick={() => router.push("/")}>
          <Image src="/logo/logo.svg" alt="LOGO" width={80} height={40} className="md:w-[100px] md:h-[50px]" />
          <p className="text-[8px] md:text-[10px] absolute top-7 md:top-10 -right-12 md:-right-15 text-charcoalGray whitespace-nowrap">
            Your Vision Our Execution
          </p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-8">
              <SimpleNavLink href="/">Home</SimpleNavLink>
              <SimpleNavLink href="/about">About</SimpleNavLink>

              {/* Solutions Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-charcoalGray hover:text-darkOrange data-[state=open]:text-darkOrange">
                  Solutions
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <div className="w-full grid grid-cols-[400px_1fr]">
                    {/* Left Panel */}
                    <div className="bg-lightGray p-8 py-14 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-charcoalGray mb-2">
                          Solutions
                        </h3>
                        <Image
                          src="/logo/case1.jpg"
                          alt="Solutions"
                          width={250}
                          height={150}
                          className="rounded-md mb-4 mt-4"
                        />
                        <p className="text-sm text-charcoalGray/70 leading-relaxed">
                          Tailored solutions to boost business performance.
                        </p>
                      </div>

                      <Link
                        href="/solutions"
                        className="mt-6 text-sm font-semibold text-darkOrange hover:underline"
                      >
                        Learn More →
                      </Link>
                    </div>

                    {/* Right Mega Menu */}
                    <div className="flex p-16 gap-20">
                      <MegaColumn
                        title="FINANCIAL SOLUTIONS"
                        items={[
                          { label: "Accounting & Bookkeeping", href: "/accounting-bookkeeping" },
                          { label: "Financial Reporting", href: "/financial-reporting" },
                          { label: "Tax Consultancy", href: "/tax-consultancy" },
                          { label: "Payroll Processing", href: "/payroll-processing" },
                        ]}
                      />

                      <MegaColumn
                        title="ERP IMPLEMENTATION"
                        items={[
                          { label: "SAP Solutions", href: "/sap-solutions" },
                          { label: "Odoo ERP", href: "/odoo-erp" },
                          { label: "Custom Development", href: "/custom-development" },
                        ]}
                      />

                      <MegaColumn
                        title="BUSINESS PROCESS OUTSOURCING"
                        items={[
                          { label: "Data Management", href: "/data-management" },
                          { label: "Virtual Assistance", href: "/virtual-assistance" },
                          { label: "Process Optimization", href: "/process-optimization" },
                        ]}
                      />
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <SimpleNavLink href="/insight">Insight</SimpleNavLink>
              <SimpleNavLink href="/contact">Contact</SimpleNavLink>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <AnimatedButton
            text="Get Started"
            bgColor="bg-darkOrange"
            textColor="text-white"
            hoverBgColor="bg-transparent"
            hoverTextColor="text-white"
            border="hover:border-darkOrange border-2 border-darkOrange"
            padding="px-6 py-2"
            rounded="rounded-md"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-charcoalGray hover:text-darkOrange transition p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-[73px] left-0 h-[calc(100vh-73px)] w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden z-50 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <nav className="flex flex-col h-full overflow-y-auto">
          <div className="flex-1 py-6 px-6 space-y-1">
            <MobileNavLink href="/" onClick={closeMobileMenu}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/about" onClick={closeMobileMenu}>
              About
            </MobileNavLink>

            {/* Mobile Solutions Accordion */}
            <div>
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="w-full flex items-center justify-between py-3 px-4 text-sm font-semibold text-charcoalGray hover:bg-lightGray hover:text-darkOrange rounded-md transition"
              >
                <span>Solutions</span>
                <ChevronDown
                  size={18}
                  className={`transform transition-transform ${isSolutionsOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {isSolutionsOpen && (
                <div className="mt-2 ml-4 space-y-2 border-l-2 border-lightGray pl-4">
                  {/* Financial Solutions */}
                  <div className="mb-4">
                    <p className="text-xs font-bold text-darkNavyBlue mb-2 uppercase tracking-wide">
                      Financial Solutions
                    </p>
                    <MobileSolutionLink href="/accounting-bookkeeping" onClick={closeMobileMenu}>
                      Accounting & Bookkeeping
                    </MobileSolutionLink>
                    <MobileSolutionLink href="/financial-reporting" onClick={closeMobileMenu}>
                      Financial Reporting
                    </MobileSolutionLink>
                    <MobileSolutionLink href="/tax-consultancy" onClick={closeMobileMenu}>
                      Tax Consultancy
                    </MobileSolutionLink>
                    <MobileSolutionLink href="/payroll-processing" onClick={closeMobileMenu}>
                      Payroll Processing
                    </MobileSolutionLink>
                  </div>

                  {/* ERP Implementation */}
                  <div className="mb-4">
                    <p className="text-xs font-bold text-darkNavyBlue mb-2 uppercase tracking-wide">
                      ERP Implementation
                    </p>
                    <MobileSolutionLink href="/sap-solutions" onClick={closeMobileMenu}>
                      SAP Solutions
                    </MobileSolutionLink>
                    <MobileSolutionLink href="/odoo-erp" onClick={closeMobileMenu}>
                      Odoo ERP
                    </MobileSolutionLink>
                    <MobileSolutionLink href="/custom-development" onClick={closeMobileMenu}>
                      Custom Development
                    </MobileSolutionLink>
                  </div>

                  {/* Business Process Outsourcing */}
                  <div className="mb-4">
                    <p className="text-xs font-bold text-darkNavyBlue mb-2 uppercase tracking-wide">
                      Business Process Outsourcing
                    </p>
                    <MobileSolutionLink href="/data-management" onClick={closeMobileMenu}>
                      Data Management
                    </MobileSolutionLink>
                    <MobileSolutionLink href="/virtual-assistance" onClick={closeMobileMenu}>
                      Virtual Assistance
                    </MobileSolutionLink>
                    <MobileSolutionLink href="/process-optimization" onClick={closeMobileMenu}>
                      Process Optimization
                    </MobileSolutionLink>
                  </div>


                </div>
              )}
            </div>

            <MobileNavLink href="/insight" onClick={closeMobileMenu}>
              Insight
            </MobileNavLink>
            <MobileNavLink href="/contact" onClick={closeMobileMenu}>
              Contact
            </MobileNavLink>
          </div>

          {/* Mobile CTA */}
          <div className="p-6 border-t border-gray-200">



            <AnimatedButton
              onClick={() => router.push("/blogs")}
              text="Get Started"
              bgColor="bg-darkOrange"
              textColor="text-white"
              hoverBgColor="bg-transparent"
              hoverTextColor="text-darkOrange"
              border="hover:border-darkOrange border-2 border-darkOrange"
              padding="px-6 py-3"
              rounded="rounded-md"
            />

          </div>
        </nav>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden top-[73px]"
          onClick={closeMobileMenu}
        />
      )}
    </header>
  );
});

export default Navbar;

/* Simple Link */
function SimpleNavLink({ href, children }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="text-sm font-semibold text-charcoalGray hover:text-darkOrange transition"
        >
          {children}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

/* Mobile Nav Link */
function MobileNavLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block py-3 px-4 text-sm font-semibold text-charcoalGray hover:bg-lightGray hover:text-darkOrange rounded-md transition"
    >
      {children}
    </Link>
  );
}

/* Mobile Solution Link */
function MobileSolutionLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-2 py-2 px-3 text-sm text-charcoalGray hover:text-darkOrange hover:bg-orange-50 rounded-md transition"
    >
      <ChevronRight size={14} />
      {children}
    </Link>
  );
}

/* Mega Menu Column */
function MegaColumn({ title, items }) {
  return (
    <div>
      <h4 className="mb-6 text-md font-medium tracking-wide text-blue-900 uppercase">
        {title}
      </h4>
      <ul className="space-y-3">
        {items.map((item) => (
          <MegaItem key={item.href} title={item.label} href={item.href} />
        ))}
      </ul>
    </div>
  );
}

/* Mega Menu Item */
function MegaItem({ title, href }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="text-sm text-charcoalGray hover:text-peal flex items-center gap-2 transition"
        >
          <ChevronRight size={18} />
          {title}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}