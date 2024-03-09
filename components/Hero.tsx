import HeroCarousel from "./Carousel";



export default function Hero() {
  return (
    <>
    <div className="bg-gradient-to-b min-h-screen flex from-gray-800 to-black">
      <div className="max-w-7xl relative mx-auto my-20 md:my-40 px-4 w-full  left-0 top-0 text-white z-50">
        <h1 className="text-3xl md:text-9xl font-extrabold tracking-[-.15rem] md:tracking-[-.8rem] ">
          codechef.
        </h1>
        <p className="max-w-2xl text-base md:text-lg mt-8">
          Dijital Çözüm Partneriniz
        </p>
        
      </div>
      
      <div className="max-w-96 md:max-h-[600px] md:min-w-[600px] flex m-12 md:mr-36 rounded-md">
      <HeroCarousel />
    </div>
    </div>
    
    </>
  );
}
