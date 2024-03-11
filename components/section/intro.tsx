import Carousel  from "@/components/Carousel"
import Combobox from "@/components/SelectForm"

export function Intro() {
  return (
<section className="w-full h-screen pt-12 bg-cover bg-center bg-[url('/img/bg3.jpg')]">
    <div className="container flex flex-col items-center justify-center gap-50 px-0 md:px- md:grid md:grid-cols-2 lg:gap-10">
      <div className="max-w-7xl relative mx-auto my-20 md:my-40 px-4 w-full  left-0 top-0 text-white">
        <h1 className="text-3xl md:text-8xl lg:text-9xl font-extrabold tracking-[-.15rem] md:tracking-[-.8rem] bg-clip-text text-transparent bg-gradient-to-bl from-gray-100 to-gray-300 drop-shadow-2xl">
          codechef.
        </h1>

        <p className="drop-shadow-2xl ml-3 text-xl">Dijital Mutfak</p>
        
      </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <Carousel />
        </div>
      </div>
      
      <div className="flex items-center justify-center gap-4 mt-8" >
  <Combobox />
</div>

    </section>
  )
}


