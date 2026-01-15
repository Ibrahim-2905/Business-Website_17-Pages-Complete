"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../Shadcn/NavigationMenu/ShadcnNavigationMenu"
import AnimatedButton from "../Button/Button"
import { ChevronRight } from "lucide-react"

export default function Navbar() {
  return (
    <div className="fixed  top-0 left-0 right-0 z-50 flex justify-between items-center bg-white py-4 px-20 border-b border-gray-200">
      {/* Logo Section */}
      <div className="relative">
        <img src="/logo/logo.svg" alt="LOGO" height={50} width={100} />
        <p style={{fontWeight:"500"}} className="text-[10px] absolute top-8 -right-20 text-charcoalGray whitespace-nowrap">
          Your Vision Our Execution
        </p>
      </div>

      {/* Navigation Menu */}
      <div>
        <NavigationMenu>
          <NavigationMenuList className="gap-8">
            <SimpleNavLink href="/">Home</SimpleNavLink>
            <SimpleNavLink href="/about">About</SimpleNavLink>

            {/* SOLUTIONS DROPDOWN */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-charcoalGray hover:text-darkOrange data-[state=open]:text-darkOrange">
                Solutions
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <div className="w-full grid grid-cols-[400px_1fr] gap-0">
                  {/* LEFT SIDEBAR */}
                  <div className="bg-lightGray p-8 py-14 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-charcoalGray mb-2">Solutions</h3>
                      <Image
                        src="/solutions.jpg"
                        alt="Solutions"
                        width={250}
                        height={150}
                        className="rounded-md mb-4 mt-4"
                      />
                      <p className="text-sm text-charcoalGray/70 leading-relaxed">
                        Tailored solutions to boost business performance, from
                        financial strategies to ERP and outsourcing.
                      </p>
                    </div>

                    <Link
                      href="/solutions"
                      className="mt-6 text-sm font-semibold text-darkOrange hover:underline inline-flex items-center gap-1"
                    >
                      Learn More →
                    </Link>
                  </div>

                  {/* RIGHT GRID */}
                  <div className="flex p-20 justify-between gap-20 ">
                    <MegaColumn
                      title="FINANCIAL SOLUTIONS"
                      items={[
                        "Accounting & Bookkeeping",
                        "Financial Reporting",
                        "Tax Consultancy",
                        "Payroll Processing",
                      ]}
                    />

                    <MegaColumn
                      title="ERP IMPLEMENTATION"
                      items={[
                        "SAP Solutions",
                        "Odoo ERP",
                        "Custom Development",
                      ]}
                    />

                    <MegaColumn
                      title="BUSINESS PROCESS OUTSOURCING"
                      items={[
                        "Data Management",
                        "Virtual Assistance",
                        "Process Optimization",
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

      {/* CTA Button */}
      <div>
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
    </div>
  )
}

/* Simple Navigation Link */
function SimpleNavLink({ href, children }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="text-sm font-semibold text-charcoalGray hover:text-darkOrange transition-colors duration-200"
        >
          {children}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}

/* Mega Menu Column */
function MegaColumn({ title, items }) {
  return (
    <div className="w-full">
      <h4 style={{fontWeight:"500"}} className="mb-6 text-md  tracking-wide text-blue-900 uppercase">
        {title}
      </h4>
      <ul className="space-y-3">
        {items.map((item) => (
          <MegaItem key={item} title={item} />
        ))}
      </ul>
    </div>
  )
}

/* Mega Menu Item */
function MegaItem({ title }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href="/"
          className="text-sm text-charcoalGray hover:text-peal transition-colors duration-200 flex items-center gap-2 group"
        >
          <span className="text-peal text-[2px]"><ChevronRight size={20} /></span>
          
          {title}
        </Link>
      </NavigationMenuLink>
    </li>
  )
}