
import {ThreeDCardDemo} from '@/components/Three';
import {EvervaultCardDemo} from '@/components/Vault';
import Iletisim from '@/components/Iletisim';
import { Cinzel_Decorative, Oxanium } from "next/font/google";


const oxanium = Oxanium({ subsets: ["latin"] });

const cinzeld = Cinzel_Decorative({
  weight: '400',
  subsets: ['latin'],
})


  export default function Cards() {
    return (
      <>
      <div className=" flex flex-col items-center justify-center bg-no-repeat  bg-cover  bg-center bg-[url('/img/bg7.jpg')]  " >
        {/* First Row: Card - Text */}
        <div className=' flex flex-col md:flex-row items-center justify-center w-full gap-1 bg-black bg-opacity-50  mt-[10rem]' >
          
          <div className='md:basis-1/2 w-full '>
            <ThreeDCardDemo />
          </div>
          <div className='md:basis-1/2 w-full text-end md:text-end md:pr-5 mr-12 p-6'>
            <h1 className={`text-orange-400 py-4 bg-clip-text text-5xl font-bold tracking-tight md:text-7xl md:pr-12  ${cinzeld.className}`}>FARkLI</h1>
            <p className='text-white font-light text-base' >Markanızın farkını yansıtan, web / görsel / video tasarımları.</p>
            
          </div>
        </div>
    
        {/* Second Row: Text - Card */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-4 mb-12 w-full bg-black bg-opacity-50 p-8 mt-[10rem]'>
          <div className='md:basis-1/2 w-full md:order-last'>
            <EvervaultCardDemo />
          </div>
          <div className='md:basis-1/2 w-full text-start md:text-start md:pr-5 ml-12 p-6'>
            <h1 className={`text-orange-400 py-4 bg-clip-text text-5xl font-bold tracking-tight md:text-7xl md:pr-12  ${oxanium.className}`}>GÜVENLİ</h1>
            <p className='text-white font-semibold text-base' >Kendini tekrar etmeyen, temiz , hızlı , güvenli ve tam web hizmetleri.</p>
            
          </div>
        </div>
    

        <div className='relative mt-8 px-12'>

        <a href='/works' className="relative text-xl text-white font-bold w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          Projelerimiz 
          </a>
        </div>
        <div className='relative m-4 p-8'>
        <Iletisim/>
        </div>
      </div>
    </>
    

    );
  }
  

