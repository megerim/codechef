import Carousel  from "@/components/Carousel"
import Combobox from "@/components/SelectForm"

export function Intro() {
  return (
    <section key="1" className="w-full pt-12 md:pt-24 lg:pt-12 bg-gradient-to-b from-gray-800 to-black">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:grid md:grid-cols-2 lg:gap-8">
      <div className="max-w-7xl relative mx-auto my-20 md:my-40 px-4 w-full  left-0 top-0 text-white">
        <h1 className="text-3xl md:text-8xl lg:text-9xl font-extrabold tracking-[-.15rem] md:tracking-[-.8rem] bg-clip-text text-transparent bg-gradient-to-br from-green-600 via-gray-400 to-orange-700">
          codechef.
        </h1>

        <p>Dijital Mutfak</p>
        
      </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <Carousel />
        </div>
      </div>
      
      <div className="flex items-center justify-center gap-4 mt-8">
        <Combobox />
      </div>
    </section>
  )
}


