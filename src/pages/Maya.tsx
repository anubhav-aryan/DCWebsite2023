import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const monte = Montserrat({ subsets: ["latin"] });
const Maya = () => {
  return (
    <>
      <div className="backdrop-blur-2xl">
        <div className="flex items-center justify-center">
          <Image src="/Maya/LOGO (1) 1.svg" alt="BBC" width={75} height={75} />
        </div>
        <div className="lg:text-3xl text-xl md:text-2xl text-center font-extrabold">
          <div className={monte.className}> MAYA</div>{" "}
        </div>
        <div className="text-center justify-center text-sm text-gray-400">
          Maya, is the team that can effortlessly synchronize their movements to
          any music because they find their true selves in classical dance. And
          they are versatile in performing both soothing classical compositions
          to ever-jamming pop hits with equal aplomb.
        </div>
        <hr className="w-3/4 h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
        <div className="py-8">
          <Image
            src="/Maya/004A8099 2.svg"
            alt="BBC"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
        <div className="flex justify-center">
          <div className="px-10 flex items-center max-md:hidden">
            <hr className="w-12 lg:w-40 h-0.5 mx-auto bg-gray-700 border-0 rounded md:my-10" />
          </div>
          <div className="py-6 text-center justify-center flex border rounded-3xl">
            <Image
              src="/BBC/Frame 11.svg"
              alt="BBC"
              width={40}
              height={40}
              className="pl-2"
            />
            <div className="px-5 py-1 font-bold text-sm lg:text-lg">
              The Junior Dance Team of Maya is{" "}
              <span className="text-[#BBC1FF]"> Laasya </span>
            </div>
          </div>
          <div className="px-10 flex items-center max-md:hidden">
            <hr className="w-12 lg:w-40 h-0.5 mx-auto bg-gray-700 border-0 rounded md:my-10" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 py-10">
            
            <div className="flex flex-col items-center w-full md:w-1/3">
              <Image
                src="/Maya/Shreya1.png"
                alt="BBC"
                width={300}
                height={367}
                className="pt-12"
              />
              <div className="text-center pt-4 font-semibold">SHREYA</div>
              <div className="text-center text-xs text-gray-400 font-semibold uppercase">
                TEAM REPRESENTATIVE
              </div>
            </div>

            {/* Second Item (Nikhil Agarwal - Middle one, positioned higher) */}
            <div className="flex flex-col items-center w-full md:w-1/3" style={{ marginTop: '-50px' }}>
              <Image
                src="/Maya/TEAMREP.png"
                alt="BBC"
                width={500}
                height={500}
                className="pt-12"
              />
              <div className="text-center pt-4 font-semibold">NEHA</div>
              <div className="text-center text-xs text-gray-400 font-semibold uppercase">
                TEAM HEAD
              </div>
            </div>

            {/* Third Item (Satwik Tripathy) */}
            <div className="flex flex-col items-center w-full md:w-1/3">
              <Image
                src="/Maya/Nithika .png"
                alt="BBC"
                width={500}
                height={500}
                className="pt-12"
              />
              <div className="text-center pt-4 font-semibold uppercase">Nithika </div>
              <div className="text-center text-xs text-gray-400 font-semibold uppercase">
                JDC COORDINATOR - LAASYA
              </div>
            </div>
          </div>

        <div className="md:text-2xl text-xl text-center font-extrabold">
          Mini-Gallery
        </div>
        <div className="text-center justify-center text-sm text-gray-400 pb-6">
          Glimpse of our latest performances throughout many events
        </div>
        <div className="py-4">
          <Image
            src="/Maya/Group 133.png"
            alt="BBC"
            width={5000}
            height={5000}
          />
        </div>
        <div className="backdrop-blur-2xl backdrop-brightness-150">
          <div className="lg:px-24 py-10 pb- flex-col flex">
            <div className="text-center text-xl md:text-2xl text-white font-medium">
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
                className="h-auto max-w-full px-8 pb-8 rounded-lg"
                src="/Maya/4 2 (1).svg"
                alt=""
                height={150}
                width={669}
              />
            </div>
            <div className="sm:px-2 md:px-10 ">
              <div className="w-full h-6 max-sm:text-center  text-white text-md md:text-lg  font-semibold uppercase leading-normal tracking-wide pb-10">
                World dance day, vit vellore
              </div>

              <div className="md:w-96 text-white text-sm sm:text-base font-normal leading-7 text-center md:text-left justify-center items-center">
                Experience a mesmerizing celebration of rhythm and culture
                paying ode to World Dance Day with our dynamic performance.It is
                a night of breathtaking choreography and boundless creativity as
                we pay homage to the universal language of dance.
              </div>
              <div className="py-2"></div>
              <Link href="https://youtu.be/90Y3j_kRMVU?si=eqMN2lfgtCRBBQd0">
                <div className="flex max-sm:justify-center max-sm:items-center">
                  <div className="w-40 h-12 justify-center items-center ">
                    <div className="w-40 h-12 relative bg-white bg-opacity-10 hover:opacity-30 rounded-sm flex-col justify-start items-start flex">
                      <div className="w-40 h-6 absolute">
                        <div className="w-40 h-6 left-0 top-2 absolute text-center text-white text-md md:text-lg font-normal leading-normal tracking-wide ">
                          Watch Now
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="sm:px-2 md:px-5">
              <div className="w-full h-6 max-sm:text-center px-6 text-white text-md md:text-lg font-semibold uppercase leading-normal tracking-wide pt-6 ">
                international dance day, vit vellore
              </div>
              <div className="py-8"></div>
              <div className="md:px-4 md:pl-6 text-white sm:text-base font-normal leading-7 text-center md:text-left pb-4">
                Missed our International dance day performance? Don&apos;t sweat
                it cause we&apos;ve bought international dance day TO YOU!{" "}
                <br /> Presenting a plethora of performances by our very own
                dance teams. click below & enjoy the performance.
              </div>
              <Link href="https://youtu.be/dIR3gevXn0c?si=sj0Qx-_ZzU_agASj">
                <div className="flex max-sm:justify-center max-sm:items-center">
                  <div className="pl-12 w-40 h-10  max-sm:px-10 justify-center items-center inline-flex">
                    <div className=" w-40 h-12 relative bg-white bg-opacity-10 hover:opacity-30 rounded-sm flex-col justify-start items-start flex">
                      <div className="w-40 h-6 relative">
                        <div className="w-40 h-6 top-2 absolute text-center text-white text-md md:text-lg font-normal leading-normal tracking-wide">
                          Watch Now
                        </div>
                      </div>
                      <div className="w-5 h-5 origin-top-left rotate-[-34.72deg] bg-gradient-to-b from-emerald-300 to-green-600 rounded-full blur-xl" />
                      <div className="w-6 h-7 origin-top-left rotate-[-34.72deg] bg-gradient-to-b from-pink-400 to-violet-700 rounded-full blur-xl" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="p-8">
              <Image
                src="/Maya/image 156 (1).svg"
                height={150}
                width={669}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maya;