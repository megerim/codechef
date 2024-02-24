import React from 'react';
import { HeroParallaxDemo } from '@/components/Hero';
import NavbarDemo from '@/components/Navbar';
import Footer from '@/components/ui/Footer';
import {LampDemo} from '@/components/Kapi';

import Cards from "@/components/section/Cards";

export default function Home() {
  return (
    <>
      <NavbarDemo/>
      <HeroParallaxDemo />
      
      <LampDemo />
      <div className="bg-gradient-to-b from-black to-gray-800">
      <Cards />
      </div>
      <Footer />
      </>
  );
}
