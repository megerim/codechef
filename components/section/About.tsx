"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "../ui/tracing-beam";

import MobileMenu from '@/components/MobileMenu';

export default function AboutSection() {
  return (
    <>
    <MobileMenu/>
    <TracingBeam className="px-6 bg-black bg-opacity-80 border shadow-[0_0px_100px_rgb(0_0_0/1)]  border-black/[0] shadow-black  rounded-md">
        
      <div className="max-w-2xl mx-auto antialiased pt-4 relative text-white ">
    <section key="1" className="w-full py-12 md:py-24 ">
      <div className="container px-1 md:px-2">
        <div className="grid gap-6">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl text-orange-400">
                Biz Kimiz ?<br/> Neden Kendimize Güveniyoruz ?
              </h2>
              <p className="max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              CodeChef, yazılım geliştirme alanında yenilikçi çözümler sunan bir yazılım firmasıdır. Müşterilerimize 
              en üst düzeyde hizmet sağlamak için tutkuyla çalışıyoruz. Deneyimli bir ekip tarafından yönetilen CodeChef
               her projeye özgün ve etkileyici bir yaklaşım getiriyor. Öyleyse işin mutfağına hoş geldiniz!
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight text-orange-400">Web Tasarım & Kodlama</h3>
              <p className="max-w-prose text-white md:text-base/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400/60">
              CodeChef olarak, her satır kod bir tarif  ve her algoritma  lezzetli bir yemeğin bileşenleri gibidir. Sloganımızı yansıtan bir yaklaşımla, her bir projede özgün çözümler sunarak, yazılım dünyasında farkımızı ortaya koyuyoruz. Yenilikçi fikirlerimizle, kodlama mutfağında ustalaşıyor ve müşterilerimize lezzetli yazılım deneyimleri sunuyoruz. 
              </p>
              <ul className="grid gap-2 py-2">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Tamamen Kişiselleştirilmiş Görseller ve Tema
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  En Hızlı Alt Yapı Seçenekleri ve Teknojileri
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Müşteriye Özel Yazılım Çözümleri
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Seo Hizmetleri
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight text-orange-400">Sosyal Medya İçerik Üretimi & Hesap Yönetimi</h3>
              <p className="max-w-prose text-white md:text-base/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400/60">
              Sosyal medya hesaplarınız için profesyonel bir dokunuşa mı ihtiyacınız var? Her bütçeye uygun fotoğraf çekimi paketlerimiz, profesyonel tasarımlar ve çok daha fazlası sizi CodeChef'te bekliyor.              </p>
              <ul className="grid gap-2 py-2">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Fotoğraf Çekimi
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Özel Font ve Renk Paletleri
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Yenilikçi Tasarımlar
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Düzenli İçerik Üretimi
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight text-orange-400">Reklam Hesabı Yönetimi</h3>
              <p className="max-w-prose text-white md:text-base/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400/60">
              CodeChef ekibi olarak yaptığımız işe dört kolla sarılıyoruz. Bir işletmeyi başarıya ulaştırmanın yolunun, o işi benimsemekten geçtiğine inanıyoruz.
               Markanızın reklam hesaplarını profesyonelce yönetmek ve en etkili sonuçları elde etmek için elimizden geleni ardımıza koymuyoruz.     </p>
              <ul className="grid gap-2 py-2">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Düzenli İstatistik Raporları
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Yenilikçi Reklam Kreatifleri
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Müşteri Analizi 
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Detaylı Demografik Yapı 
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight text-orange-400">Arama Motoru Optimizasyonu</h3>
              <p className="max-w-prose text-white md:text-base/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400/60">
              Web sitenizin görünürlüğünü artırmak ve hedef kitlenizi çekmek için mutfağımızdan çıkan arama motoru optimizasyonu hizmetlerimizle tanışın.
              </p>
              <ul className="grid gap-2 py-2">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Görsel Optimizasyon ve Etiketleme
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Meta ve Başlık Etiketlerinin Optimize Edilmesi
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  İç ve Dış Bağlantı Stratejileri
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  SEO Dostu URL Yapısı Oluşturma
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
  