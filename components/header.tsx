"use client";
import { Cpu, Menu, Search, ShieldAlert, Wrench, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DropdownNavigation, NavItem } from "./ui/dropdown-navigation";

const NAV_ITEMS: NavItem[] = [
  {
    id: 1,
    label: "Services",
    subMenus: [
      {
        title: "Tire Shop",
        items: [
          { label: "Used & New Tires", description: "Quality used and brand new tires", icon: Cpu },
          { label: "Tire Repair", description: "Puncture and leak fixes", icon: Wrench },
          { label: "Balancing & Alignment", description: "Precision handling", icon: ShieldAlert },
        ],
      },
      {
        title: "Auto Repair",
        items: [
          { label: "Light Duty Brakes", description: "Pads, rotors, and fluid", icon: ShieldAlert },
          { label: "Shocks & Rims", description: "Ride comfort and wheels", icon: Wrench },
          { label: "Tires", description: "Mounting and installation", icon: Cpu },
        ],
      },
    ],
  },
  { id: 2, label: "About", link: "#about" },
  { id: 4, label: "Contact", link: "#contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0b1326]/90 backdrop-blur-md border-b border-[#3c494c]/30 transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center px-4 md:px-16 py-4 max-w-screen-2xl mx-auto">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <Image
            src="/logo.jpeg"
            alt="Ares Tire and Auto Logo"
            width={240}
            height={48}
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <DropdownNavigation navItems={NAV_ITEMS} />
        </nav>

        {/* Search Action (Moved out of nav) */}
        <div className="hidden md:flex items-center gap-2">
          <button aria-label="Search" className="text-[#bbc9cd] hover:text-[#8aebff] transition-colors p-2">
            <Search className="h-5 w-5" />
          </button>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:7204358409" className="text-sm font-medium tracking-wider text-[#8aebff] hover:text-[#a2eeff] transition-colors">
            Call (720) 435-8409
          </a>
          <a href="#contact" className="highlight-button px-6 py-2 rounded text-sm font-bold uppercase tracking-wider">
            Book Appointment
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Menu"
          className="md:hidden text-[#dae2fd] p-2 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-[#0b1326] flex flex-col pt-24 px-6 z-40 border-t border-[#3c494c]/30">
          <div className="flex flex-col gap-6 text-lg">
            <Link href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-[#dae2fd] hover:text-[#8aebff]">Services</Link>
            <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-[#dae2fd] hover:text-[#8aebff]">About</Link>
            <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-[#dae2fd] hover:text-[#8aebff]">Contact</Link>
          </div>
          <div className="mt-12 flex flex-col gap-4">
            <a href="tel:7204358409" className="highlight-button px-6 py-3 rounded text-center text-sm font-bold uppercase tracking-wider">
              Call (720) 435-8409
            </a>
            <a href="#contact" className="border border-[#3c494c] px-6 py-3 rounded text-center text-sm font-bold uppercase tracking-wider text-[#dae2fd]">
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
