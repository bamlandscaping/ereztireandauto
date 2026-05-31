"use client";
import { Award, Clock, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";
import { ScrollReveal } from "./ui/scroll-reveal";

export function AboutSection() {
  return (
    <section className="py-24 border-b border-[#3c494c]/30 bg-[#060e20]" id="about">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <span className="font-mono text-sm text-[#8aebff] mb-2 block uppercase tracking-wider">Our Legacy</span>
                <h2 className="text-3xl md:text-5xl font-bold text-[#dae2fd] tracking-tight mb-6">
                  Engineered for Performance. Driven by Trust.
                </h2>
                <p className="text-lg text-[#bbc9cd] font-light leading-relaxed">
                  Since our founding, Ares Tire & Auto has been Arvada&apos;s trusted destination for used and new tires plus light duty brakes, shocks, rims, and tires. We believe every vehicle deserves honest service and fair pricing. Our experienced technicians bring years of combined experience to every brake job, shock install, and tire installation.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#3c494c]/50">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck className="text-[#8aebff] w-6 h-6" />
                    <h4 className="text-xl font-bold text-[#dae2fd]">Certified</h4>
                  </div>
                  <p className="text-sm text-[#bbc9cd]">ASE-certified master technicians on staff.</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="text-[#8aebff] w-6 h-6" />
                    <h4 className="text-xl font-bold text-[#dae2fd]">Guaranteed</h4>
                  </div>
                  <p className="text-sm text-[#bbc9cd]">Industry-leading warranties on parts & labor.</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="text-[#8aebff] w-6 h-6" />
                    <h4 className="text-xl font-bold text-[#dae2fd]">Local</h4>
                  </div>
                  <p className="text-sm text-[#bbc9cd]">Proudly serving the Arvada, CO community.</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="text-[#8aebff] w-6 h-6" />
                    <h4 className="text-xl font-bold text-[#dae2fd]">Efficient</h4>
                  </div>
                  <p className="text-sm text-[#bbc9cd]">Rapid turnaround without cutting corners.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-[#3c494c]/50 group">
              <div className="absolute inset-0 bg-[#22d3ee]/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
              <Image
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2000&auto=format&fit=crop"
                alt="Professional mechanic working on a car engine"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
