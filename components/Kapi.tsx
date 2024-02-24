"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/Lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" bg-gradient-to-br from-gray-200 to-gray-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Dijital Dünyanın Kapılarını<br/>
        Sizin İçin Açalım
      </motion.h1>
    </LampContainer>
  );
}
