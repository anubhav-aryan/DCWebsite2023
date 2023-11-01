import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Slideshow: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const numberOfImages = 21;

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : numberOfImages - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < numberOfImages - 1 ? prevIndex + 1 : 0
    );
  };

  const imagePaths = [
    "/NotableAlumni/Group 141.svg",
    "/NotableAlumni/Group 153.svg",
    "/NotableAlumni/Group 160.svg",
    "/NotableAlumni/Group 144.svg",
    "/NotableAlumni/Group 146.svg",
    "/NotableAlumni/Group 161.svg",
    "/NotableAlumni/Group 143.svg",
    "/NotableAlumni/Group 147.svg",
    "/NotableAlumni/Group 148.svg",
    "/NotableAlumni/Group 149.svg",
    "/NotableAlumni/Group 150.svg",
    "/NotableAlumni/Group 145.svg",
    "/NotableAlumni/Group 152.svg",
    "/NotableAlumni/Group 151.svg",
    "/NotableAlumni/Group 159.svg",
    "/NotableAlumni/Group 142.svg",
    "/NotableAlumni/Group 158.svg",
    "/NotableAlumni/Group 154.svg",
    "/NotableAlumni/Group 155.svg",
    "/NotableAlumni/Group 157.svg",
    "/NotableAlumni/Group 156.svg",
  ];

  return (
    <>
    <Link
          href="/"
          className="absolute hidden lg:block text-white mt-14 pt-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
        <div className="py-10">
      <div className="text-center font-extrabold text-4xl">Notable Alumnis</div>
      <div className="text-center font-medium text-sm text-gray-400 pb-10">
        Check out the list of our notable Alumni who are on top of their Passion
      </div>
      </div>
      <div className="">
        <div className=" mx-auto relative px-[2vw]" data-carousel="static">
          <div className="relative overflow-hidden rounded-lg">
            {imagePaths.map((path, index) => {
              return (
                <div
                  key={index}
                  className={`duration-700 ease-in-out ${
                    index === activeIndex ? "block" : "hidden"
                  } flex`}
                  data-carousel-item={
                    index === activeIndex ? "active" : undefined
                  }
                >
                  <div className="flex items-center">
                    <Image
                      src={imagePaths[index % 21]} // Use the image path from the array
                      alt={`Image ${index}`}
                      width={150} // Adjust the width and height as needed
                      height={150}
                      className=""
                    />
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={imagePaths[(index + 1) % 21]} // Use the image path from the array
                      alt={`Image ${index + 1}`}
                      width={250} // Adjust the width and height as needed
                      height={250}
                      className=""
                    />
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={imagePaths[(index + 2) % 21]} // Use the image path from the array
                      alt={`Image ${index + 2}`}
                      width={350} // Adjust the width and height as needed
                      height={350}
                      className=""
                    />
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={imagePaths[(index + 3) % 21]} // Use the image path from the array
                      alt={`Image ${index + 3}`}
                      width={250} // Adjust the width and height as needed
                      height={250}
                      className=""
                    />
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={imagePaths[(index + 4) % 21]} // Use the image path from the array
                      alt={`Image ${index + 4}`}
                      width={150} // Adjust the width and height as needed
                      height={150}
                      className=""
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            className="absolute top-0 left-60 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
            onClick={handlePrevClick}
          >
            <Image
              src="/chevron-left.svg"
              alt="Left arrow"
              width={50}
              height={50}
            />
          </button>

          <button
            type="button"
            className="absolute top-0 right-60 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none "
            data-carousel-next
            onClick={handleNextClick}
          >
            <Image
              src="/chevron-right.svg"
              alt="Right arrow"
              width={50}
              height={50}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Slideshow;