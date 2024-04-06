"use client";
// MobileMenu.tsx
import React, { useState, FC } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { ArrowLeftFromLine } from "lucide-react";

interface NavItem {
  id: number;
  navTitle: string;
}

const MOBILE_NAV_ITEMS: NavItem[] = [
  { id: 1, navTitle: "Ana Sayfa" },
  { id: 2, navTitle: "Hakkımızda" },
  { id: 3, navTitle: "Çalışmalarımız" },
  { id: 4, navTitle: "İletişim" },
];
function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

const MobileMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", duration: 0.3, ease: "easeInOut" },
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { type: "tween", duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <>
      <div className="fixed top-0 right-0 z-50">
        <Button
          variant={"ghost"}
          className="text-white p-4 mt-5 mr-5 md:text-xl"
          onClick={() => setIsOpen(true)}
        >
          <MenuIcon className="h-8 w-8" />
        </Button>
        <motion.nav
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          initial={"closed"}
          className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center z-40"
        >
          <ul>
            {MOBILE_NAV_ITEMS.map((item, index) => (
              <li key={item.id} className="text-white text-2xl my-2">
                <Link
                  href={
                    index === 0
                      ? "/"
                      : index === 1
                      ? "/about"
                      : index === 2
                      ? "/works"
                      : "/#contact"
                  }
                >
                  {item.navTitle}
                </Link>
              </li>
            ))}
          </ul>

          <button className="text-white p-4" onClick={() => setIsOpen(false)}>
            KAPAT
          </button>
        </motion.nav>
      </div>

      <div className="fixed top-0 left-0 z-50">
      <Link href="/">
          <Button
            variant={"ghost"}
            className="text-white p-4 mt-5 ml-5 md:text-xl"
          >
            <ArrowLeftFromLine className="h-8 w-8" />
          </Button>
      </Link>

      </div>
    </>
  );
};

export default MobileMenu;
