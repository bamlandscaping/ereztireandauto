"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden py-24 bg-[#0b1326]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-[#bbc9cd] dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-[#8aebff]">
                Premium Auto Care
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="/wall-of-wheels.webp"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
