import React, { useState } from "react";
import Image from "next/image";

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
    "/NotableAlumni/image 70.svg",
    "/NotableAlumni/image 65.svg",
    "/NotableAlumni/image 66.svg",
    "/NotableAlumni/image 49.svg",
    "/NotableAlumni/image 71.svg",
    "/NotableAlumni/image 67.svg",
    "/NotableAlumni/image 51.svg",
    "/NotableAlumni/image 55.svg",
    "/NotableAlumni/image 56.svg",
    "/NotableAlumni/image 53.svg",
    "/NotableAlumni/image 57.svg",
    "/NotableAlumni/image 52.svg",
    "/NotableAlumni/image 64.svg",
    "/NotableAlumni/image 63.svg",
    "/NotableAlumni/image 62.svg",
    "/NotableAlumni/image 59.svg",
    "/NotableAlumni/image 60.svg",
    "/NotableAlumni/image 61.svg",
    "/NotableAlumni/image 58.svg",
    "/NotableAlumni/image 68.svg",
    "/NotableAlumni/image 69.svg",
  ];

  return (
    <>
      <div className="text-center font-extrabold text-4xl">Notable Alumnis</div>
      <div className="text-center font-medium text-sm text-gray-400 pb-10">
        Check out the list of our notable Alumni who are on top of their Passion
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
                      width={100} // Adjust the width and height as needed
                      height={100}
                      className=""
                    />
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={imagePaths[(index + 1) % 21]} // Use the image path from the array
                      alt={`Image ${index + 1}`}
                      width={200} // Adjust the width and height as needed
                      height={200}
                      className=""
                    />
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={imagePaths[(index + 2) % 21]} // Use the image path from the array
                      alt={`Image ${index + 2}`}
                      width={300} // Adjust the width and height as needed
                      height={300}
                      className=""
                    />
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={imagePaths[(index + 3) % 21]} // Use the image path from the array
                      alt={`Image ${index + 3}`}
                      width={200} // Adjust the width and height as needed
                      height={200}
                      className=""
                    />
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={imagePaths[(index + 4) % 21]} // Use the image path from the array
                      alt={`Image ${index + 4}`}
                      width={100} // Adjust the width and height as needed
                      height={100}
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
            className="absolute top-0 right-60 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
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
