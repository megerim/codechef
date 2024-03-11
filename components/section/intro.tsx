import Carousel  from "@/components/Carousel"
import Combobox from "@/components/SelectForm"

export function Intro() {
  return (
<section key="1" className="w-screen h-screen pt-12 md:pt-24 lg:pt-40 bg-cover bg-center" style={{ backgroundImage: 'url("/img/bg3.jpg")' }}>
    <div className="container flex flex-col items-center justify-center gap-50 px-0 md:px- md:grid md:grid-cols-2 lg:gap-10">
      <div className="max-w-7xl relative mx-auto my-20 md:my-40 px-4 w-full  left-0 top-0 text-white">
        <h1 className="text-3xl md:text-8xl lg:text-9xl font-extrabold tracking-[-.15rem] md:tracking-[-.8rem] bg-clip-text text-transparent bg-white">
          codechef.
        </h1>

        <p style={{ fontSize: '24px',  marginLeft:'10px' }}>Dijital Mutfak</p>
        
      </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <Carousel />
        </div>
      </div>
      
      <div className="flex items-center justify-center gap-4 mt-8" style={{ marginTop: '400px', }}>
  <Combobox />
</div>

    </section>
  )
}


