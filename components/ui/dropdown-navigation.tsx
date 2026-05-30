"use client";
import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export type NavItem = {
  id: number;
  label: string;
  subMenus?: {
    title: string;
    items: {
      label: string;
      description: string;
      icon: React.ElementType;
    }[];
  }[];
  link?: string;
};

export function DropdownNavigation({ navItems }: { navItems: NavItem[] }) {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);

  const handleHover = (menuLabel: string | null) => {
    setOpenMenu(menuLabel);
  };

  const [isHover, setIsHover] = useState<number | null>(null);
  return (
    <div className="relative w-full flex items-center justify-center">
      <div className="relative gap-5 flex flex-col items-center justify-center">
        <ul className="relative flex items-center space-x-0">
          {navItems.map((navItem) => (
            <li
              key={navItem.label}
              className="relative"
              onMouseEnter={() => handleHover(navItem.label)}
              onMouseLeave={() => handleHover(null)}
            >
              {navItem.link && !navItem.subMenus ? (
                <a
                  href={navItem.link}
                  className="text-sm py-1.5 px-4 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1 text-[#bbc9cd] hover:text-[#8aebff] relative"
                  onMouseEnter={() => setIsHover(navItem.id)}
                  onMouseLeave={() => setIsHover(null)}
                >
                  <span>{navItem.label}</span>
                  {(isHover === navItem.id || openMenu === navItem.label) && (
                    <motion.div
                      layoutId="hover-bg"
                      className="absolute inset-0 size-full bg-[#22d3ee]/10"
                      style={{ borderRadius: 99 }}
                    />
                  )}
                </a>
              ) : (
                <button
                  className="text-sm py-1.5 px-4 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1 text-[#bbc9cd] hover:text-[#8aebff] relative"
                  onMouseEnter={() => setIsHover(navItem.id)}
                  onMouseLeave={() => setIsHover(null)}
                >
                  <span>{navItem.label}</span>
                  {navItem.subMenus && (
                    <ChevronDown
                      className={`h-4 w-4 group-hover:rotate-180 duration-300 transition-transform
                      ${openMenu === navItem.label ? "rotate-180" : ""}`}
                    />
                  )}
                  {(isHover === navItem.id || openMenu === navItem.label) && (
                    <motion.div
                      layoutId="hover-bg"
                      className="absolute inset-0 size-full bg-[#22d3ee]/10"
                      style={{ borderRadius: 99 }}
                    />
                  )}
                </button>
              )}

              <AnimatePresence>
                {openMenu === navItem.label && navItem.subMenus && (
                  <div className="w-auto absolute left-0 top-full pt-2 z-50">
                    <motion.div
                      className="bg-[#0b1326] border border-[#334155] p-4 w-max shadow-2xl shadow-black/50"
                      style={{ borderRadius: 16 }}
                      layoutId="menu"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-fit shrink-0 flex space-x-9 overflow-hidden">
                        {navItem.subMenus.map((sub) => (
                          <motion.div layout className="w-full" key={sub.title}>
                            <h3 className="mb-4 text-sm font-medium capitalize text-[#859397]">
                              {sub.title}
                            </h3>
                            <ul className="space-y-5">
                              {sub.items.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <li key={item.label}>
                                    <a
                                      href="#"
                                      className="flex items-start space-x-3 group"
                                    >
                                      <div className="border border-[#334155] text-[#dae2fd] rounded-md flex items-center justify-center size-9 shrink-0 group-hover:bg-[#22d3ee]/10 group-hover:text-[#22d3ee] group-hover:border-[#22d3ee]/30 transition-colors duration-300">
                                        <Icon className="h-5 w-5 flex-none" />
                                      </div>
                                      <div className="leading-5 w-max">
                                        <p className="text-sm font-medium text-[#dae2fd] shrink-0">
                                          {item.label}
                                        </p>
                                        <p className="text-xs text-[#859397] shrink-0 group-hover:text-[#bbc9cd] transition-colors duration-300">
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
