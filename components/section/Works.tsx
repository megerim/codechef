"use client";
import Link from "next/link";
import { works } from "@/data/works";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

interface Work {
  id: number;
  src: string;
  placeholder: string;
  title: string;
  link: string;
  author: string;
  location: string;
  date: string;
  width: string;
  height: string;
  slug: string;
}

export default function Home() {
  return (
    

        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1, // Ensure it scrolls one slide at a time
          }}
          orientation="horizontal"
          plugins={[
            Autoplay({
              delay: 3000, // Increased delay for a more relaxed feel
              stopOnInteraction: false,
            }),
          ]}
          className="my-12 mx-5" // Adjusted height
        >
          <CarouselContent>
            {works.map((work: Work) => (
              <CarouselItem
                key={work.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Link
                  href={`/works/${work.slug}`}
                  scroll={false}
                  className="group overflow-hidden rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl hover:z-10 transition-all duration-300 ease-in-out transform"
                >
                  <Image
                    src={work.src}
                    alt={work.title}
                    placeholder="blur"
                    blurDataURL={work.placeholder}
                    width={800} 
                    height={350}
                    className="w-full h-full group-hover:scale-110 transition-transform duration-300 p-5"
                  />
                  <span className="text-white text-center text-xs absolute z-40 font-semibold">
                    {work.title}
                  </span>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
  );
}