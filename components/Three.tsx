"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card max-w-sm mr-5 w-auto sm:w-[30rem] h-auto rounded-xl p-6 border shadow-[0_8px_16px_rgb(0_0_0/0.4)]  border-black/[0.2] shadow-black  ">
       
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full "
        >
          <Image
            src="/bg-card.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
