import Link from "next/link";
import { works } from "@/data/works";
import Image from "next/image";

interface Work {
  id: number;
  src: string;
  placeholder: string;
  title: string;
  link: string;
  author: string;
  location: string;
  date: string;
  width: string;
  height: string;
  slug: string;
}

export default function Home() {
  return (
      <div className="p-10 grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div className="bg-gradient-to-tr from-purple-600 to-indigo-600 p-8 flex rounded-2xl items-center">
          <h1 className="font-extrabold text-3xl xl:text-5xl text-indigo-200 leading-tight text-center align-top justify-start top-0 flex">
            WEB PROJELERİ
          </h1>
        </div>
        {works.map((work: Work) => (
          <Link href={`/works/${work.slug}`} scroll={false} key={work.id} className="overflow-hidden flex rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl hover:z-10 transition-all ease-in-out">
              <Image
                src={work.src}
                alt={work.title}
                placeholder="blur"
                blurDataURL={work.placeholder}
                width={parseInt(work.width)}
                height={parseInt(work.height)}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Link>
        ))}
      </div>
  );
}
