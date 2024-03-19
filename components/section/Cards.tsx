
import {ThreeDCardDemo} from '@/components/Three';
import {EvervaultCardDemo} from '@/components/Vault';
import Iletisim from '@/components/Iletisim';

import { Caveat } from "next/font/google";


const caveat = Caveat({ subsets: ["latin"] });


  export default function Cards() {
    return (
      <>
      <div className=" flex flex-col items-center justify-center bg-no-repeat  bg-cover  bg-center bg-[url('/img/bg7.jpg')]  " >
        {/* First Row: Card - Text */}
        <div className=' flex flex-col md:flex-row items-center justify-center gap-1 mb-12 bg-black bg-opacity-50  mt-[10rem]' >
          
          <div className='md:basis-1/2 w-full '>
            <ThreeDCardDemo />
          </div>
          <div className='md:basis-1/2 w-full text-end md:text-end md:pr-5 mr-12 p-6 '>
            <h1 className={`text-orange-400 py-4 bg-clip-text text-5xl font-bold tracking-tight text-orange-400 md:text-7xl md:pr-2  ${caveat.className}`}>Farklı</h1>
            <p className='text-white font-light '>
            Web tasarım konusunda uzman ekibimizle, her projeye özel ve yenilikçi çözümler sunuyoruz. Markanızın özgünlüğünü ve farkını vurgulamak için buradayız. Kullanıcı dostu arayüzler, custom görseller ve çok daha fazlası için şimdi iletişime geçin
            </p>
          </div>
        </div>
    
        {/* Second Row: Text - Card */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-4 mb-12  bg-black bg-opacity-50 p-8 mt-[10rem]'>
          <div className='md:basis-1/2 w-full md:order-last'>
            <EvervaultCardDemo />
          </div>
          <div className='md:basis-1/2 w-full ml-12'>
            <h1 className={`text-orange-400 py-4 bg-clip-text text-5xl font-bold tracking-tight text-orange-400x md:text-7xl ${caveat.className}`}>Güvenli</h1>
            <p className='text-white font-light'>
            Web sitenizin güvenliği, bizim için en önemli önceliklerden biridir. Deneyimli ekibimiz, en son güvenlik standartlarına uygun olarak web sitenizin korunmasını sağlar. Veri güvenliğini garanti altına alırken, web sitenizin performansını da maksimize ediyoruz. Size güvenli ve sorunsuz bir web sitesi deneyimi sunmak için buradayız.
            </p>
          </div>
        </div>
    

        <div className='relative m-12 p-12'>
        <Iletisim/>
        </div>
      </div>
    </>
    

    );
  }
  

