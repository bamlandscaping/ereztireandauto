"use client";
import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimatedGauge } from "./svgs/animated-gauge";
import { AnimatedEngine } from "./svgs/animated-engine";
import { ScrollReveal } from "./ui/scroll-reveal";
import Image from "next/image";

interface ServiceCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  linkText: string;
  animation: React.ReactNode;
  delay?: number;
}

function ServiceCard({ id, title, subtitle, description, linkText, animation, delay = 0 }: ServiceCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <a href={`#${id}`} className="block group p-8 md:p-12 rounded-2xl border border-[#3c494c]/30 bg-[#131b2e] glow-hover relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity w-32 h-32 flex items-center justify-center">
          {animation}
        </div>
        <div className="relative z-10 flex flex-col h-full justify-between min-h-[300px]">
          <div>
            <span className="font-mono text-sm text-[#8aebff] mb-2 block uppercase tracking-wider">{subtitle}</span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#dae2fd] mb-6">{title}</h3>
            <p className="text-lg text-[#bbc9cd] mb-8 font-light">{description}</p>
          </div>
          <div className="mt-auto">
            <span className="text-[#8aebff] text-sm font-bold uppercase tracking-wider flex items-center gap-2 group-hover:text-[#a2eeff] transition-colors">
              {linkText} <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </a>
    </ScrollReveal>
  );
}

export function ServicesSection() {
  return (
    <>
      <section className="py-24 border-b border-[#3c494c]/30 bg-[#0b1326]" id="services">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-16">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#dae2fd] mb-4 tracking-tight">Expertise in Every Domain</h2>
              <p className="text-[#bbc9cd] max-w-2xl mx-auto">Select your required service for specialized care.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard 
              id="tires"
              title="Tire Shop"
              subtitle="Premium Rubber"
              description="Focusing on premium tire sales, installation, balancing, and performance solutions for all weather conditions."
              linkText="Explore Tires"
              animation={<AnimatedGauge className="w-full h-full" />}
            />
            <ServiceCard 
              id="repair"
              title="Car Repair"
              subtitle="Expert Diagnostics"
              description="Focusing on expert mechanical service, engine diagnostics, brake repair, and comprehensive maintenance."
              linkText="Explore Repair"
              animation={<AnimatedEngine className="w-full h-full" />}
              delay={0.1}
            />
          </div>
        </div>
      </section>

      {/* Service Details: Tires */}
      <section className="py-24 border-b border-[#3c494c]/30 bg-[#060e20]" id="tires">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-16">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative h-[400px] w-full rounded-2xl overflow-hidden border border-[#3c494c]/50">
                <Image src="/winter-tires.webp" alt="Winter Tires" fill className="object-cover" />
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-[#dae2fd] tracking-tight">Tire Experts</h3>
                <p className="text-lg text-[#bbc9cd] font-light">We stock and install industry-leading rubber compounds designed for exact grip, wear, and performance metrics. Featuring certified installations for major brands.</p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Touchless mounting systems to protect custom rims.",
                    "Road force balancing for the smoothest possible ride.",
                    "Precision digital alignment services."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#8aebff] w-5 h-5 shrink-0 mt-0.5" />
                      <span className="text-base text-[#bbc9cd]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Details: Repair */}
      <section className="py-24 border-b border-[#3c494c]/30 bg-[#0b1326]" id="repair">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-16">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-[#dae2fd] tracking-tight">Mechanical Masters</h3>
                <p className="text-lg text-[#bbc9cd] font-light">Our ASE-certified technicians employ state-of-the-art diagnostic equipment to accurately identify and resolve complex mechanical and electrical issues.</p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Comprehensive engine diagnostics and repair.",
                    "Brake system overhaul and fluid services.",
                    "Scheduled factory maintenance protocols."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#8aebff] w-5 h-5 shrink-0 mt-0.5" />
                      <span className="text-base text-[#bbc9cd]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[400px] w-full flex items-center justify-center">
                 <AnimatedEngine className="w-full h-48 text-[#8aebff]" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
