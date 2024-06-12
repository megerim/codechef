import Works from "@/components/section/Works";

export default function WorkSection() {
    return(
        <>
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold text-slate-200 text-center my-12 py-5">
        Web Projelerimiz
      </h1>
      <p className="text-base text-slate-300 text-center mb-5">Projeler hakkında detaylı bilgi almak ve incelemek için lütfen tıklayınız.</p>
  
  
  <Works />
  </>
  );
}
