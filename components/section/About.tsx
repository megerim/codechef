"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "../ui/tracing-beam";

import MobileMenu from '@/components/MobileMenu';

export default function AboutSection() {
  return (
    <>
    <MobileMenu/>
    <TracingBeam className="px-6">
        
      <div className="max-w-2xl mx-auto antialiased pt-4 relative text-white">
    <section key="1" className="w-full py-12 md:py-24 ">
      <div className="container px-1 md:px-2">
        <div className="grid gap-6">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl text-white">
                Biz Kimiz ?<br/> Neden Kendimize Güveniyoruz ?
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our mission is to empower teams to build the best digital experiences. We envision a world where every
                idea can be realized, every team can innovate, and every business can thrive. Our values guide
                everything we do: customer focus, innovation, collaboration, inclusion, and integrity.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight">Web Tasarım & Kodlama</h3>
              <p className="max-w-prose text-gray-500/60 md:text-base/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400/60">
                Our platform provides a comprehensive suite of tools to enable rapid development and seamless
                collaboration. Features include:
              </p>
              <ul className="grid gap-2 py-2">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Instant previews for every push
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Built-in testing and test coverage analysis
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Automated CI/CD with native integration
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Performance and accessibility insights
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight">Sosyal Medya İçerik Üretimi & Hesap Yönetimi</h3>
              <p className="max-w-prose text-gray-500/60 md:text-base/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400/60">
                Customers choose our platform for its ease of use, powerful features, and seamless workflow integration.
                The advantages of using our platform include:
              </p>
              <ul className="grid gap-2 py-2">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Streamlined development process
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Improved team collaboration and communication
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Faster time to market for digital experiences
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Actionable insights for continuous improvement
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight">Arama Motoru Optimizasyonu</h3>
              <p className="max-w-prose text-gray-500/60 md:text-base/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400/60">
                Our platform provides a comprehensive suite of tools to enable rapid development and seamless
                collaboration. Features include:
              </p>
              <ul className="grid gap-2 py-2">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Instant previews for every push
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Built-in testing and test coverage analysis
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Automated CI/CD with native integration
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Performance and accessibility insights
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight">Reklam Hesabı Yönetimi</h3>
              <p className="max-w-prose text-gray-500/60 md:text-base/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400/60">
                Customers choose our platform for its ease of use, powerful features, and seamless workflow integration.
                The advantages of using our platform include:
              </p>
              <ul className="grid gap-2 py-2">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Streamlined development process
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Improved team collaboration and communication
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Faster time to market for digital experiences
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Actionable insights for continuous improvement
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col justify-center space-y-4" />
        </div>
      </div>
    </section>


      </div>
    </TracingBeam>
    </>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
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
        <polyline points="20 6 9 17 4 12" />
      </svg>
    )
  }
  