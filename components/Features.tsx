import { Receipt, FileCode, CircleDot, Camera } from 'lucide-react';
import { Oxanium } from "next/font/google";


const oxanium = Oxanium({ subsets: ["latin"] });

const features = [
  {
    icon: Receipt,
    title: 'Hesaplı Fiyatlar',
    description: 'Projelerimizde en uygun fiyatları sunuyoruz. Bütçenize uygun çözümler sunarak işinizi kolaylaştırıyoruz.',
  },
  {
    icon: FileCode,
    title: 'Kaynak Kod',
    description: 'Proje tamamlandığında yazılan kodları hem yayına hazır hem de düzenlenebilir şeklinde sizinle paylaşıyoruz.',
  },
  {
    icon: CircleDot,
    title: 'Sosyal Medya Yönetimi',
    description:
      'Sosyal medya hesaplarınızı yöneterek markanızın daha fazla kişiye ulaşmasını sağlıyoruz.',
  },
  {
    icon: Camera,
    title: 'Foto Çekim',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
];

export function FeaturesTitle() {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-20">
        <div className="col-span-1 md:col-span-2">
          <h2 className={`text-2xl font-bold mb-4 text-white ${oxanium.className}`}> 
            Hizmetlerimiz
          </h2>
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.
          </p>
          <button
            className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold py-2 px-4 rounded-md mt-4"
          >
            Projelerimiz 
          </button>
        </div>
        <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-11 h-11 bg-gradient-to-r from-orange-400 to-orange-600 rounded-md mb-4">
                <feature.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}