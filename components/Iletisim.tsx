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
        <DrawerTrigger className="py-12 px-24 bg-orange-400 rounded-sm hover:text-white hover:bg-orange-600 transition duration-300 ">
          <p id="contact" className="font-bold text-2xl">İletişim İçin Tıklayınız</p>
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
              <Button variant="outline" className="flex px-36 mx-auto">
                Kapat
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
