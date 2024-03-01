"use client";
// MobileMenu.tsx
import React, { useState, FC } from 'react';
import { motion } from 'framer-motion';

interface NavItem {
  id: number;
  navTitle: string;
}

const MOBILE_NAV_ITEMS: NavItem[] = [
  { id: 1, navTitle: 'Ana Sayfa' },
  { id: 2, navTitle: 'Çalışmalarımız' },
  { id: 3, navTitle: 'Hakkımızda' },
  { id: 4, navTitle: 'İletişim' },
];

const MobileMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'tween', stiffness: 260, damping: 20 }
    },
    closed: {
      opacity: 0,
      y: '-100%',
      transition: { stiffness: 260, damping: 20 }
    }
  };

  return (
    <div className="fixed top-0 right-0 md:p-10 z-50">
      <button className="text-white p-4 md:text-xl" onClick={() => setIsOpen(true)}>MENU</button>
      <motion.nav
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center z-40"
      >
        <ul>
          {MOBILE_NAV_ITEMS.map(item => (
            <li key={item.id} className="text-white text-2xl my-2">{item.navTitle}</li>
          ))}
        </ul>
        <button className="text-white p-4" onClick={() => setIsOpen(false)}>Close</button>
      </motion.nav>
    </div>
  );
};

export default MobileMenu;
