"use client";
import * as React from "react";
import Contactform from "./Contactform";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Iletisim() {
  return (
    <>
      <Drawer>
        <DrawerTrigger className="py-8 px-12 bg-orange-400 rounded-sm hover:text-white hover:bg-opacity-0 transition duration-300 border shadow-[32px_32px_16px_rgb(0_0_0/1)]  border-black/[0] shadow-black">
          <p id="contact" className="relative text-xl font-bold w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">İletişim İçin Tıklayınız</p>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              <p className="text-right">Bize ulaşın</p>
            </DrawerTitle>
            <DrawerDescription>
              <Contactform />
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline" className="flex px-36 w-50 mx-auto bg-white text-black hover:bg-orange-400 border-none">
                Kapat
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
