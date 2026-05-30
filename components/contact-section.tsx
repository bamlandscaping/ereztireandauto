"use client";
import React from "react";
import { Phone, MessageSquare, MapPin, Clock } from "lucide-react";
import { ScrollReveal } from "./ui/scroll-reveal";

export function ContactSection() {
  return (
    <section className="py-24 border-b border-[#3c494c]/30 bg-[#0b1326]" id="contact">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-16">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="font-mono text-sm text-[#8aebff] mb-2 block uppercase tracking-wider">Get in Touch</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#dae2fd] tracking-tight mb-4">
              Call or Text Us for Service
            </h2>
            <p className="text-lg text-[#bbc9cd] max-w-2xl mx-auto font-light">
              Ready to schedule your appointment? Contact our Arvada shop directly. We respond quickly during business hours.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <a href="tel:7204358409" className="flex items-start gap-4 p-6 rounded-2xl bg-[#131b2e] border border-[#3c494c]/30 hover:border-[#8aebff]/50 transition-colors group">
              <div className="p-4 rounded-xl bg-[#0b1326] text-[#8aebff] group-hover:bg-[#8aebff] group-hover:text-[#0b1326] transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#dae2fd] mb-1">Call Us</h3>
                <p className="text-2xl font-mono text-[#8aebff]">(720) 435-8409</p>
              </div>
            </a>

            <a href="sms:7204358409" className="flex items-start gap-4 p-6 rounded-2xl bg-[#131b2e] border border-[#3c494c]/30 hover:border-[#8aebff]/50 transition-colors group">
              <div className="p-4 rounded-xl bg-[#0b1326] text-[#8aebff] group-hover:bg-[#8aebff] group-hover:text-[#0b1326] transition-colors">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#dae2fd] mb-1">Text Us</h3>
                <p className="text-[#bbc9cd]">Fast SMS response during hours</p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#131b2e] border border-[#3c494c]/30">
              <div className="p-4 rounded-xl bg-[#0b1326] text-[#8aebff]">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#dae2fd] mb-1">Hours</h3>
                <ul className="text-[#bbc9cd] space-y-1 text-sm font-mono">
                  <li className="flex justify-between gap-4"><span>Mon-Fri:</span> <span>8:00 AM - 6:00 PM</span></li>
                  <li className="flex justify-between gap-4"><span>Saturday:</span> <span>9:00 AM - 2:00 PM</span></li>
                  <li className="flex justify-between gap-4 text-[#859397]"><span>Sunday:</span> <span>Closed</span></li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#131b2e] border border-[#3c494c]/30">
              <div className="p-4 rounded-xl bg-[#0b1326] text-[#8aebff]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#dae2fd] mb-1">Pickup / Location</h3>
                <p className="text-[#bbc9cd]">5250 W 53rd Pl<br/>Arvada, CO 80002</p>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-[#3c494c]/30 h-[500px] lg:h-auto bg-[#131b2e] relative">
            {/* Fallback styling for the iframe */}
            <div className="absolute inset-0 bg-[#131b2e] animate-pulse flex items-center justify-center">
              <span className="text-[#859397] font-mono uppercase tracking-widest">Loading Map...</span>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.866579893322!2d-105.0560738!3d39.7875501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7f4284d720b5%3A0xc3fcd7795b5463f8!2s5250%20W%2053rd%20Pl%2C%20Arvada%2C%20CO%2080002!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
              className="absolute inset-0 w-full h-full border-0 z-10" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              style={{ filter: "invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.9)" }} // Stylize map to fit dark theme
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
