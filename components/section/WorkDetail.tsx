"use client"
import Image from "next/image";
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  CalendarDaysIcon,
  CameraIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";

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
}

const WorkDetail = (works: Work) => {

  return (
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] min-h-screen bg-slate-200">
        <div className="p-10">
          <div className="sticky top-10">
            <motion.div
              className="flex justify-between mb-8"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
              }}
            >
                <Link href="/" className="inline-flex items-center rounded-md border border-gray-300 bg-white pl-3 pr-4 py-2 text-sm font-medium text-gray-700 hover:text-white hover:bg-purple-600 hover:border-purple-600 focus:border-purple-200 focus:outline-0 focus:ring-2 focus:ring-purple-300 group">
                  <ArrowLeftIcon className="w-5 h-5 mr-2 text-gray-300 group-hover:text-purple-200" />
                  Back
              </Link>
              <a
                href={works.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-2.5 py-1.5 rounded-md hover:bg-gray-100 text-gray-500 hover:text-purple-600 text-sm tracking-tight font-medium focus:outline-0 focus:ring-2 focus:ring-purple-400 group"
              >
                View Source
                <ArrowUpRightIcon className="w-4 h-4 text-gray-400 ml-2 group-hover:text-purple-400" />
              </a>
            </motion.div>
            <motion.h2
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
              }}
              className="text-4xl font-bold tracking-tight"
            >
              {works.title}
            </motion.h2>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.6,
              }}
              className="mt-5 text-sm text-gray-600 space-y-2"
            >
              <p className="flex items-center">
                <CameraIcon className="w-4 h-4 mr-2 text-purple-500" />
                {works.author}
              </p>
              <p className="flex items-center">
                <MapPinIcon className="w-4 h-4 mr-2 text-purple-500" />
                {works.location}
              </p>
              <p className="flex items-center">
                <CalendarDaysIcon className="w-4 h-4 mr-2 text-purple-500" />
                {works.date}
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.8,
              }}
              className="mt-5 text-sm text-gray-500 space-y-5"
            >
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
                nesciunt qui laborum ipsam. Recusandae nemo officia praesentium
                architecto doloribus numquam autem porro eligendi perferendis
                pariatur omnis ipsam, quas, facere deleniti! Asperiores, ea
                voluptate molestiae amet odio rerum officiis id in corrupti
                esse? Saepe animi modi reprehenderit error, voluptatem iure
                quibusdam deserunt tempore illo eaque labore, soluta minus
                tempora distinctio sit.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="overflow-hidden flex">
          <Image
            src={works.src}
            alt={works.title}
            width={parseInt(works.width)}
            height={parseInt(works.height)}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
  );
};

export default WorkDetail;
