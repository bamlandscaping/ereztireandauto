"use client";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { AnimatedEngine } from "./svgs/animated-engine";
import { AnimatedGauge } from "./svgs/animated-gauge";
import { ScrollReveal } from "./ui/scroll-reveal";

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
              title="Used & New Tires"
              subtitle="Tire Shop"
              description="Quality used and brand new tires for every budget, plus expert mounting, balancing, and installation for all weather conditions."
              linkText="Explore Tires"
              animation={<AnimatedGauge className="w-full h-full" />}
            />
            <ServiceCard
              id="repair"
              title="Auto Repair"
              subtitle="Light Duty Service"
              description="Light duty brakes, shocks, rims, and tires. Honest, reliable service to keep your vehicle safe and riding smooth."
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
                <h3 className="text-3xl md:text-4xl font-bold text-[#dae2fd] tracking-tight">Used & New Tires</h3>
                <p className="text-lg text-[#bbc9cd] font-light">We sell and install both quality used tires and brand new tires for every budget. Expert mounting and balancing for major brands.</p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Affordable used tires and brand new tires in stock.",
                    "Touchless mounting to protect your rims.",
                    "Road force balancing for the smoothest possible ride."
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
                <h3 className="text-3xl md:text-4xl font-bold text-[#dae2fd] tracking-tight">Light Duty Auto Repair</h3>
                <p className="text-lg text-[#bbc9cd] font-light">From brakes to shocks, rims, and tires, our experienced technicians keep your vehicle safe, smooth, and road-ready.</p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Light duty brake service: pads, rotors, and fluid.",
                    "Shock replacement for a smoother, controlled ride.",
                    "Rims and tires: mounting, balancing, and installation."
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
