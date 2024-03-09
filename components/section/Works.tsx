import Image from "next/image";

import MobileMenu from '@/components/MobileMenu';

export default function WorksSection() {
    return (
      <div className="w-full py-24 bg-gradient-to-b from-black to-gray-800 text-white">
        <section className="w-full py-5">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Website Projelerimiz</h2>
              <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The websites we have built for our customers. Beautiful, performant, and functional.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-5">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="grid w-full grid-cols-1 items-stretch justify-center md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex flex-col items-center justify-center p-4 sm:p-8">
                <div className="aspect-video overflow-hidden rounded-xl w-full max-w-sm">
                  <Image
                    alt="Project"
                    className="rounded-lg object-cover object-center"
                    height="225"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "400/225",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                </div>
                <h3 className="text-xl font-bold mt-4">Acme Inc</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Dynamic & responsive</p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 sm:p-8">
                <div className="aspect-video overflow-hidden rounded-xl w-full max-w-sm">
                  <Image
                    alt="Project"
                    className="rounded-lg object-cover object-center"
                    height="225"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "400/225",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                </div>
                <h3 className="text-xl font-bold mt-4">Bolt Logistics</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Sleek & modern</p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 sm:p-8">
                <div className="aspect-video overflow-hidden rounded-xl w-full max-w-sm">
                  <Image
                    alt="Project"
                    className="rounded-lg object-cover object-center"
                    height="225"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "400/225",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                </div>
                <h3 className="text-xl font-bold mt-4">Cafe Noir</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Elegant & sophisticated</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sosyal Medya Çalışmalarımız</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                A glimpse into our world. Beautiful images that inspire us every day.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full ">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="grid w-full grid-cols-1 items-stretch justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <div className="aspect-square overflow-hidden rounded-xl">
                <Image
                  alt="Image"
                  className="object-cover object-center"
                  height="600"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "600/600",
                    objectFit: "cover",
                  }}
                  width="600"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl">
                <Image
                  alt="Image"
                  className="object-cover object-center"
                  height="600"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "600/600",
                    objectFit: "cover",
                  }}
                  width="600"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl">
                <Image
                  alt="Image"
                  className="object-cover object-center"
                  height="600"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "600/600",
                    objectFit: "cover",
                  }}
                  width="600"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl">
                <Image
                  alt="Image"
                  className="object-cover object-center"
                  height="600"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "600/600",
                    objectFit: "cover",
                  }}
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>
        <MobileMenu />
      </div>
    )
  }
  
  