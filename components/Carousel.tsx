"use client";
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";

const CarouselImages = [
  "/1.png" ,
  "https://picsum.photos/id/12/600/400",
  "https://picsum.photos/id/13/600/400",
  "https://picsum.photos/id/14/600/400",
  "https://picsum.photos/id/15/600/400",
];

export default function HeroCarousel() {
  return (
    <>
      <Carousel 
        opts={{
          align: "start",
          loop: true, 
        }}
        orientation="vertical"
        className="w-full max-w-md max-h-72 md:max-h-80 "
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="-mt-1 h-[310px] ">
          {CarouselImages.map((imageUrl, index) => (
            <CarouselItem key={index} className="pt-1 md:basis-1/2">
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-1 ">
                    <Image 
                      src={imageUrl} 
                      alt={`Slide ${index + 1}`} 
                      width={600} 
                      height={400}
                      className='rounded-md bg-transparent'
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
    
      </Carousel>
    </>
  );
}
