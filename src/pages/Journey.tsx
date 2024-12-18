import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const monte = Montserrat({ subsets: ["latin"] });

const Journey = () => {
  return (
    <>
      <div className="backdrop-blur-2xl backdrop-brightness-150 ">
        <Link
          href="/"
          className="absolute hidden lg:block text-white mt-14 pt-2 px-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
        <div className="py-4"></div>
        <div className="text-center text-white text-lg md:text-xl lg:text-4xl px-4 uppercase font-bold tracking-wide leading-2 pt-12  md:mb-1">
          <div className={monte.className}> Journey of Dance Club </div>
        </div>
        <div className="text-center text-gray-400 text-md  font-normal px-4 mb-8">
          Let us go through the journey of Dance Club!
        </div>
        <div className="flex justify-center">
          <Image src="/image 640.png" alt="Journey" width={1000} height={300} />
        </div>
        <Link href="/Currentstatus">
          <Image
            src="/journeystats.png"
            alt="Journey"
            width={315}
            height={315}
            className="absolute bottom-4 lg:bottom-12 left-40 lg:left-82 sm:w-1/4 md:w-1/4 w-1/4"
          />
        </Link>
      </div>
    </>
  );
};

export default Journey;
