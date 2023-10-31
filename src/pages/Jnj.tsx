import React from "react";
import Image from "next/image";

const Jnj = () => {
  return (
    <>
      <div className="text-3xl text-center font-extrabold">JNJ Bhangra</div>
      <div className="text-center justify-center text-sm text-gray-400">
        JnJ Bhangra is a part of the legacy that celebrates the age old art of
        Bhangra, the heart and soul of Punjabi Culture. We attempt to, in our
        own way, intricately represent this enriched art form through well
        chosen sounds and music to showcase the spirit and vibrancy embodied
        through this legacy.
      </div>
      <hr className="my-5" />
      <div>
        <Image
          src="/JNJ/004A8077 1.svg"
          alt="BBC"
          width={500}
          height={500}
          className="w-full"
        />
      </div>
      <div className="py-10 text-center justify-center flex border rounded-3xl mt-10">
        <Image src="/BBC/Frame 11.svg" alt="BBC" width={40} height={40} />
        <div className="px-5 py-2 font-bold text-lg">
          {" "}
          The Junior Dance Team of JnJ Bhangra is{" "}
          <span className="text-[#BBC1FF]"> Bhangra Folks  </span>{" "}
        </div>
      </div>
      <div className="gap-4 columns-3 py-10">
        <Image
          src="/JNJ/image 161.svg"
          alt="BBC"
          width={500}
          height={500}
          className="pt-12"
        />
        <div className="text-center pt-4 font-semibold uppercase">anshuman gill</div>
        <div className="text-center text-xs text-gray-400 font-semibold ">
          TEAM REPRESENTATIVE
        </div>
        <Image src="/JNJ/image 151.svg" alt="BBC" width={500} height={500} />
        <div className="text-center pt-4 font-semibold uppercase">srishti sinha</div>
        <div className="text-center text-xs text-gray-400 font-semibold">
          TEAM HEAD
        </div>
        <Image
          src="/JNJ/image 149.svg"
          alt="BBC"
          width={500}
          height={500}
          className="pt-12"
        />
        <div className="text-center pt-4 font-semibold uppercase">nikita singh</div>
        <div className="text-center text-xs text-gray-400 font-semibold">
          JDC COORDINATOR - LAASYA
        </div>
      </div>
      <div className="text-3xl text-center font-extrabold">Mini-Gallery</div>
      <div className="text-center justify-center text-sm text-gray-400">
        Glimpse of our latest performances throughout many events
      </div>
      <div className="py-4">
        <Image src="/JNJ/Group 131.png" alt="BBC" width={5000} height={5000} />
      </div>

      <div className="lg:px-24 py-10 pb- flex-col flex">
        <div className="text-center text-2xl md:text-3xl lg:text-4xl text-white font-medium">
          Recent Performances
        </div>
        <div className="text-center text-neutral-400 pt-3 font-normal ">
          We have performed in many different stages across India, also
          conquered levels of awards too
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/JNJ/Jnj 1.svg"
            alt=""
            height={150}
            width={669}
          />
        </div>
        <div className="px-10">
          <div className="w-full h-6 text-white text-xl md:text-xl lg:text-xl font-semibold uppercase leading-normal tracking-wide pb-10">
            World dance day, vit vellore
          </div>

          <div className="md:w-96 text-white text-sm sm:text-base font-normal leading-7 text-left justify-center items-center">
            Experience a mesmerizing celebration of rhythm and culture paying
            ode to World Dance Day with our dynamic performance.It is a night of
            breathtaking choreography and boundless creativity as we pay homage
            to the universal language of dance.
          </div>
          <div className="py-2"></div>
          <div className="w-40 h-12 justify-center items-center ">
            <div className="w-40 h-12 relative bg-white bg-opacity-10 rounded-sm flex-col justify-start items-start flex">
              <div className="w-40 h-6 absolute">
                <div className="w-40 h-6 left-0 top-2 absolute text-center text-white text-md md:text-xl font-normal leading-normal tracking-wide ">
                  Watch Now
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-full h-6 px-6 text-white text-xl md:text-xl lg:text-xl font-semibold uppercase leading-normal tracking-wide pt-6 ">
            international dance day, vit vellore
          </div>
          <div className="py-8"></div>
          <div className="px-4 pl-6 text-white text-sm text-left pb-4">
            Missed our International dance day performance? Don&apos;t sweat it
            cause we&apos;ve bought international dance day TO YOU! <br />{" "}
            Presenting a plethora of performances by our very own dance teams.
            click below & enjoy the performance.
          </div>
          <div className="w-40 h-12  max-sm:px-10 justify-center items-center inline-flex">
            <div className="w-40 h-12 relative bg-white bg-opacity-10 rounded-sm flex-col justify-start items-start flex">
              <div className="w-40 h-6 relative">
                <div className="w-40 h-6 top-2 absolute text-center text-white text-md md:text-xl font-normal leading-normal tracking-wide">
                  Watch Now
                </div>
              </div>
              <div className="w-5 h-5 origin-top-left rotate-[-34.72deg] bg-gradient-to-b from-emerald-300 to-green-600 rounded-full blur-xl" />
              <div className="w-6 h-7 origin-top-left rotate-[-34.72deg] bg-gradient-to-b from-pink-400 to-violet-700 rounded-full blur-xl" />
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/JNJ/image 156.svg"
            height={150}
            width={669}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Jnj;
