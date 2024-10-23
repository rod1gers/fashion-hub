/** @format */

import { BsArrowUpRight } from "react-icons/bs";
import { ReactNode } from "react";
import Button from "../../../components/uiComponents/Button";
import omnitalk from "../../../images/omnitalk.webp";
import mutemwa from "../../../images/mutemwa.webp";
import breezer from "../../../images/breezer.webp";
import doros from "../../../images/doros.webp";

const ProjectSection = () => {
  return (
    <div className="mt-14 sm:mt-20 bg-gradient-to-r from-transparent border border-white/40 to-black px-3 py-14 pl-7 lg:pl-12 max-w-[2000px] rounded-3xl">
      <div className="mb-16">
        <div className="flex gap-3 sm:gap-6 lg:gap-20 ">
          <p className="text-3xl sm:text-7xl">01</p>
          <div className="flex flex-col relative gap-2 sm:gap-4">
            <p className="text-2xl sm:text-3xl md:text-6xl font-semibold">
              Mobile Apps
            </p>
            <div className="bg-white h-[1px] w-[110%] lg:w-[150%] mt-auto"></div>
          </div>
        </div>

        <div className="pl-11 sm:pl-[105px] lg:pl-40">
          <div className="md:w-fit">
            <div className="flex gap-2 mt-8 mb-5 md:mt-10">
              <p className="leading-3 text-xl font-medium hover:cursor-pointer">
                OMNITalk
              </p>
              <div>
                <BsArrowUpRight />
              </div>
            </div>
            <div className="pr-11">
              <div className="text-sm">
                <p>
                  A mobile app for service providers with messaging feature.
                </p>
              </div>
            </div>

            <div className="mt-4">
              <Button
                name={"Check Project"}
                url={'/comingSoon'}
                bgColor={"#000000"}
                className={"bg-gradient-to-r from-black to-gray-800"}
              />
            </div>
            <div className="pr-11 lg:pr-0 w-[300px] 1.3xs:w-[320px] 1.6xs:w-[380px] 0.3sm:w-[480px] lg:w-[550px]">
              <div className="relative overflow-hidden flex justify-center py-4 rounded-md items-center h-[450px] sm:h-[550px] shadow-md mt-5 sm:mt-10 bg-white/10">
                <p className="absolute text-[105px] font-bold font-montserrat -rotate-45 text-white/15 z-0">
                  OMNITALK
                </p>
                <img
                  src={omnitalk}
                  className="absolute h-full rounded-2xl z-10 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <div className="flex gap-3 sm:gap-6 lg:gap-20 ">
          <p className="text-3xl sm:text-7xl">02</p>
          <div className="flex flex-col relative gap-4">
            <p className="text-2xl sm:text-3xl md:text-6xl font-semibold">
              Web Apps
            </p>
            <div className="bg-white h-[1px] w-[110%] lg:w-[150%] mt-auto"></div>
          </div>
        </div>

        <div className="pl-11 sm:pl-[105px] lg:pl-40 flex flex-col gap-5 xl:grid xl:grid-cols-2">
          <div className="">
            <div className="w-full sm:w-fit">
              <div className="relative flex sm:gap-2  md:w-60 mt-7 mb-5">
                <div className="relative">
                  <p className="leading-6 text-xl font-medium hover:cursor-pointer">
                    Mutemwa Photography
                  </p>
                  <div className="h-[40%] absolute -right-5 top-2 sm:flex sm:top-2 sm:h-[100%]">
                    <BsArrowUpRight />
                  </div>
                </div>
              </div>
              <div className="pr-11">
                <p className="text-sm">
                  A web app for a photography studio, with custom coded
                  E-commerce service.
                </p>
              </div>
              <div className="mt-4">
                <Button
                  name={"Check Project"}
                  url={"https://www.mutemwaphotography.com/"}
                  bgColor={"#000000"}
                  className={"bg-gradient-to-r from-black to-gray-800"}
                />
              </div>
              <div className="pr-11 lg:pr-0 w-[300px] 1.3xs:w-[320px] 1.6xs:w-[380px] 0.3sm:w-[480px] lg:w-[550px]">
                <div className="relative overflow-hidden flex justify-center py-4 rounded-md items-center h-[450px] sm:h-[550px] shadow-md mt-5 sm:mt-10 bg-white/10">
                  <p className="absolute text-[105px] font-bold font-montserrat -rotate-45 text-white/15 z-0">
                    MUTEMWA
                  </p>
                  <img
                    src={mutemwa}
                    className="absolute rounded-2xl z-10 aspect-[16/9] "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="w-full sm:w-fit">
              <div className="flex gap-2 mt-10 mb-4">
                <p className="leading-3 text-xl font-medium hover:cursor-pointer">
                  Breezer
                </p>
                <div>
                  <BsArrowUpRight />
                </div>
              </div>
              <div className="pr-11">
                <p className="text-sm">
                  A single page web app built to practice positioning in css.
                </p>
              </div>
              <div className="mt-4">
                <Button
                  name={"Check Project"}
                  url={"https://breezer-replica.netlify.app/"}
                  bgColor={"#000000"}
                  className={"bg-gradient-to-r from-black to-gray-800"}
                />
              </div>
              <div className="pr-11 lg:pr-0 w-[300px] 1.3xs:w-[320px] 1.6xs:w-[380px] 0.3sm:w-[480px] lg:w-[550px]">
                <div className="relative overflow-hidden flex justify-center py-4 rounded-md items-center h-[450px] sm:h-[550px] shadow-md mt-5 sm:mt-10 bg-white/10">
                  <p className="absolute text-[105px] font-bold font-montserrat -rotate-45 text-white/15 z-0">
                    BREEZER
                  </p>
                  <img
                    src={breezer}
                    className="absolute rounded-2xl z-10 aspect-[16/9] "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <div className="flex gap-3 sm:gap-6 lg:gap-20 ">
          <p className="text-3xl sm:text-7xl">03</p>
          <div className="flex flex-col relative gap-4">
            <p className="text-2xl sm:text-3xl md:text-6xl font-semibold">
              Team Projects
            </p>
            <div className="bg-white h-[1px] w-[110%] lg:w-[150%] mt-auto"></div>
          </div>
        </div>

        <div className="px-11 sm:pl-[105px] lg:pl-40">
          <div className="w-full sm:w-fit">
            <div className="flex gap-2  mt-10 mb-4">
              <p className="leading-3 text-xl font-medium hover:cursor-pointer">
                Doros
              </p>
              <div>
                <BsArrowUpRight />
              </div>
            </div>
            <div>
              <p className="text-sm">
                A mobile app for service providers with messaging feature.
              </p>
            </div>
            <div className="mt-2">
              <Button
                name={"Check Project"}
                url={"https://cool-staging.doros.wedding/"}
                bgColor="#000000"
                className={"bg-gradient-to-r from-black to-gray-800"}
              />
            </div>
            <div className="pr-11 lg:pr-0 w-[300px] 1.3xs:w-[320px] 1.6xs:w-[380px] 0.3sm:w-[480px] lg:w-[550px]">
              <div className="relative overflow-hidden flex justify-center py-4 rounded-md items-center h-[450px] sm:h-[550px] shadow-md mt-5 sm:mt-10 bg-white/10">
                <p className="absolute text-[105px] font-bold font-montserrat -rotate-45 text-white/15 z-0">
                  DOROS
                </p>
                <img
                  src={doros}
                  className="absolute rounded-2xl z-10 aspect-[16/9] "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
