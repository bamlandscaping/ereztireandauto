"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ui/scroll-reveal";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden border-b border-[#3c494c]/30 bg-[#0b1326] pt-24 pb-16">
      {/* Clean Subtle Gradient */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary)_0%,_transparent_50%)]"></div>
      
      <div className="max-w-screen-2xl mx-auto px-4 md:px-16 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#22d3ee]/20 bg-[#0b1326]/50 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#8aebff] shadow-[0_0_8px_#22d3ee]"></span>
              <span className="text-sm font-mono text-[#8aebff] uppercase tracking-wider">Arvada&apos;s Most Trusted Shop</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#dae2fd] leading-tight tracking-tight">
              Erez Tire & <br className="hidden lg:block" />
              <span className="text-[#8aebff]">Auto.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#bbc9cd] max-w-xl font-light">
              Engineered for performance, driven by reliability. We provide expert diagnostics, meticulous repairs, and top-tier tire solutions for discerning drivers.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#contact" className="highlight-button px-8 py-3 rounded text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                Book Appointment
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#services" className="px-8 py-3 rounded border border-[#3c494c]/50 text-[#dae2fd] hover:border-[#8aebff]/50 transition-colors text-sm uppercase tracking-wider">
                View Services
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.1)] border border-[#3c494c]/50">
            <Image
              src="/engine.jpg"
              alt="Premium Performance Tires in shop"
              fill
              className="object-cover"
              priority
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
