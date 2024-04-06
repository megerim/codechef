"use client";
import React from "react";
import { TracingBeam } from "../ui/tracing-beam";

import { motion } from "framer-motion";

import MobileMenu from "@/components/MobileMenu";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function AboutSection() {
  return (
    <>
      <MobileMenu />
      <TracingBeam className="px-6 bg-black bg-opacity-80 border shadow-[0_0px_100px_rgb(0_0_0/1)]  border-black/[0] shadow-black  rounded-md">
        <div className="max-w-3xl mx-auto antialiased pt-4 relative text-white ">
          <section key="1" className="w-full py-12 md:py-24 ">
            <div className="container px-1 md:px-2">
              <motion.div
                className="container grid gap-6"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                <div className="flex flex-col justify-center space-y-4">
                  <div
                    className="space-y-2"
                  >
                    <motion.h2 
                    variants={item} className="text-2xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl text-orange-400">
                      Biz Kimiz ?<br /> Nasıl Düşünüyoruz ?
                    </motion.h2>
                    <motion.p 
                    variants={item} className=" text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      &nbsp; &nbsp; Biz genç ve dinamik bir ekibiz. Detaylara
                      önem veren, yaptığı ve yapabileceği konularda şeffaf ve
                      net olan bir iş anlayışımız var. Sadeliği, modernliği ve
                      öne çıkmayı seven tasarım anlayışımız ile sizinle aynı
                      noktada buluşabileceğimize eminiz.
                    </motion.p>
                  </div>
                  <div
                    
                    className="space-y-2"
                  >
                    <motion.h3 variants={item} className="text-2xl font-bold tracking-tight text-orange-400">
                      Web Tasarım & Kodlama
                    </motion.h3>
                    <motion.p 
                    variants={item} className="max-w-prose text-white md:text-base/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400/60">
                      &nbsp; &nbsp;Yenilikçi tasarım ve efektif kodlama
                      temellerini bir araya getirerek, güvenli ve hızlı bir web
                      site / web uygulamasını markanızın kimliğini yansıtacak
                      şekilde ortaya koyabiliriz.
                    </motion.p >
                    <motion.ul className="grid gap-2 py-2">
                      <motion.li 
                    variants={item}>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Tamamen Kişiselleştirilmiş Arayüz ve Tema
                      </motion.li>
                      <motion.li 
                    variants={item}>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Hızlı ve Güvenli Altyapı
                      </motion.li>
                      <motion.li 
                    variants={item}>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Özel Geliştirilmiş İşlevsellikler
                      </motion.li>
                      <motion.li 
                    variants={item}>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Arama Motorlarına Tam Optimizasyon
                      </motion.li>
                    </motion.ul>
                  </div>
                  <motion.div
                    variants={item}
                    className="space-y-2"
                  >
                    <h3 className="text-2xl font-bold tracking-tight text-orange-400">
                      Sosyal Medya İçerik Üretimi & Hesap Yönetimi
                    </h3>
                    <p className="max-w-prose text-white md:text-base/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400/60">
                      Başarınıza giden yolda sosyal medya görüntünüzü daha güçlü
                      hale getirelim. Sizin markanızın da kendisiyle bütünleşmiş
                      bir tasarım kimliği oluşsun.
                    </p>
                    <motion.ul 
                    variants={item} className="grid gap-2 py-2">
                      <motion.li 
                    variants={item}>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Fotoğraf & Drone Çekimi
                      </motion.li>
                      <motion.li 
                    variants={item}>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Kullanıcı Sayısı ve Etkileşim Analizi
                      </motion.li>
                      <motion.li 
                    variants={item}>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Yenilikçi ve Uyumlu Tasarım
                      </motion.li>
                      <motion.li 
                    variants={item}>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Düzenli İçerik Üretimi ve Yönetimi
                      </motion.li>
                    </motion.ul>
                  </motion.div>
                  <motion.div
                    variants={item}
                    className="space-y-2"
                  >
                    <h3 className="text-2xl font-bold tracking-tight text-orange-400">
                      Reklam Hesabı Yönetimi
                    </h3>
                    <p className="max-w-prose text-white md:text-base/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400/60">
                      Bilinirliğinizi arttırmak bir süreç gerektirir. Bu süreçte
                      gerekli istatistik analizleri ile daha doğru ve etkili
                      reklam kampanyaları yürütebiliriz.
                    </p>
                    <motion.ul className="grid gap-2 py-2">
                      <motion.li 
                    variants={item}>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Düzenli İstatistik Raporları
                      </motion.li>
                      <motion.li 
                    variants={item}>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Yenilikçi Reklam Kreatifleri
                      </motion.li>
                      <motion.li 
                    variants={item}>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Kullanıcı Davranış Analizi
                      </motion.li>
                      <motion.li 
                    variants={item}>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Detaylı Hedef Kitle Analizi
                      </motion.li>
                    </motion.ul>
                  </motion.div>
                  <motion.div
                    variants={item}
                    className="space-y-2"
                  >
                    <h3 className="text-2xl font-bold tracking-tight text-orange-400">
                      Arama Motoru Optimizasyonu
                    </h3>
                    <p className="max-w-prose text-white md:text-base/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400/60">
                      Websiteniz eğer bizim tarafımızdan yapıldıysa arama
                      motorlarına optimize haldedir. Ancak Google&apos;da daha
                      üst sıralarda yer almak istiyorsanız websitenizin içeriği
                      buna göre düzenlenmelidir.
                    </p>
                    <motion.ul className="grid gap-2 py-2">
                      <motion.li 
                    variants={item}>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Doğru Anahtar Kelime Kullanımı
                      </motion.li>
                      <motion.li 
                    variants={item}>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Meta ve Başlık Etiketlerinin Optimize Edilmesi
                      </motion.li>
                      <motion.li 
                    variants={item}>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Anlamsal (Semantic) HTML Elementleri
                      </motion.li>
                      <motion.li 
                    variants={item}>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Doğru Link Yönetimi
                      </motion.li>
                    </motion.ul>
                  </motion.div>
                </div>

                <div className="flex flex-col justify-center space-y-4" />
              </motion.div>
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
  );
}
