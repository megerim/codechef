import React from 'react';
import MobileMenu from '@/components/MobileMenu';
import Footer from '@/components/section/Footer';
import {Intro} from '@/components/section/intro'

import Cards from "@/components/section/Cards";

export default function Home() {
  return (
    <>
      <MobileMenu/>
      <Intro />
      <div className="bg-gradient-to-b from-black to-gray-800">
      <Cards />
      </div>
      <Footer />
      </>
  );
}
