"use client";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

export function CallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="tel:7204358409"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 rounded-full bg-[#8aebff] text-[#0b1326] shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:scale-110 hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] transition-all duration-300 animate-bounce"
      aria-label="Call Ares Tire and Auto"
    >
      <Phone className="w-6 h-6 fill-current" />
    </a>
  );
}
