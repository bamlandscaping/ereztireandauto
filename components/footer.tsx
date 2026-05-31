"use client";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0b1326] border-t border-[#3c494c]/30 w-full py-16 reveal-on-scroll is-visible">
      <div className="flex flex-col items-center justify-center gap-8 px-4 md:px-16 text-center max-w-screen-2xl mx-auto">
        <Link href="/" className="flex items-center gap-2 mb-4">
          <Image
          src="/logo.jpeg"
          alt="Ares Tire and Auto Logo"
          width={160}
          height={40}
          className="h-10 w-auto object-contain"
        />
      </Link>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
        <a href="#privacy" className="text-[#bbc9cd] hover:text-[#8aebff] transition-colors opacity-80 hover:opacity-100">Privacy Policy</a>
        <a href="#terms" className="text-[#bbc9cd] hover:text-[#8aebff] transition-colors opacity-80 hover:opacity-100">Terms of Service</a>
        <a href="#accessibility" className="text-[#bbc9cd] hover:text-[#8aebff] transition-colors opacity-80 hover:opacity-100">Accessibility</a>
        <a href="#contact" className="text-[#bbc9cd] hover:text-[#8aebff] transition-colors opacity-80 hover:opacity-100">Contact</a>
      </div>
      <p className="font-mono text-sm text-[#bbc9cd]/50">
        &copy; 2026 Ares Tire and Auto - Arvada, CO. All Rights Reserved.
      </p>
      </div>
    </footer>
  );
}
