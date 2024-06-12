export default function Process() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
            Süreç
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
            Proje süreciniz nasıl?
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Kanıtlanmış sürecimiz, web sitenizin en yüksek standartlarda
            oluşturulmasını ve iş hedeflerinizi karşılamasını sağlar.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pt-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
          <div className="flex flex-col items-start gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
            <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 dark:bg-gray-800">
              <LightbulbIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Keşif</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Proje kapsamını tanımlamak için iş hedeflerinizi ve hedef
                kitlenizi anlayarak işe başlıyoruz.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
            <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 dark:bg-gray-800">
              <BrushIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Tasarım</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Tasarımcılarımız, markanızla uyumlu, görsel olarak çekici ve
                kullanıcı dostu bir arayüz oluşturur.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
            <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 dark:bg-gray-800">
              <CodeIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Geliştirme</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Yetenekli geliştiricilerimiz, tasarımı yüksek kaliteli kod ve
                modern teknolojilerle hayata geçiriyor.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
            <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 dark:bg-gray-800">
              <GaugeIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Test</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Hatasız olmasını ve tüm cihazlarda ve tarayıcılarda en iyi
                performansı göstermesini sağlamak için web sitesini kapsamlı bir
                şekilde test ediyoruz.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
            <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 dark:bg-gray-800">
              <UploadIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Yayınlanış</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Web sitesi onaylandıktan sonra, onu güvenli ve ölçeklenebilir
                bir barındırma platformuna yerleştiriyoruz.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
            <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 dark:bg-gray-800">
              <RefreshCwIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Bakım</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Web sitenizin güvenli ve güncel kalmasını sağlamak için sürekli
                bakım ve destek sağlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrushIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  );
}

function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function GaugeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  );
}

function LightbulbIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function RefreshCwIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  );
}

function UploadIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
