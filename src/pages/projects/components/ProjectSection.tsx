/** @format */

import { BsArrowUpRight } from "react-icons/bs";
import { ReactNode } from "react";
import Button from "../../../components/uiComponents/Button";

const ProjectSection = () => {
  return (
    <div className="mt-14 sm:mt-20 bg-gradient-to-r from-transparent border to-black px-3 py-14 pl-12 rounded-3xl">
      <div className="mb-16">
        <div className="flex gap-3 sm:gap-6 lg:gap-20 ">
          <p className="text-3xl sm:text-7xl">01</p>
          <div className="flex flex-col relative gap-2 sm:gap-4">
            <p className="text-2xl sm:text-3xl md:text-6xl font-semibold">
              Mobile Apps
            </p>
            <div className="bg-white h-[1px] w-[110%] sm:w-[150%] mt-auto"></div>
          </div>
        </div>

        <div className="pl-11 sm:pl-32 md:pl-40">
          <div className="md:w-fit">
            <div className="flex gap-2 mt-8 mb-5 md:mt-10">
              <p className="leading-3 text-xl font-medium hover:cursor-pointer">
                OMNITalk
              </p>
              <div>
                <BsArrowUpRight />
              </div>
            </div>
            <div className="text-sm">
              <p>A mobile app for service providers with messaging feature.</p>
            </div>
            <div className="mt-4">
              <Button
                name={"Check Project"}
                url={""}
                bgColor={"#000000"}
                className={"bg-gradient-to-r from-black to-gray-800"}
              />
            </div>
            <div className="pr-11 lg:pr-0 lg:w-[530px]">
              <div className="flex justify-center rounded-md items-center h-[150px] sm:h-[350px] shadow-md mt-5 sm:mt-10 bg-gray-200">
                <div className="flex justify-center items-center rounded-xl w-1/2 h-20 bg-gray-300"></div>
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
            <div className="bg-white h-[1px] w-[110%] sm:w-[150%] mt-auto"></div>
          </div>
        </div>

        <div className="pl-11 md:pl-40 flex flex-col gap-5 sm:grid sm:grid-cols-2">
          <div className="">
            <div className="w-full sm:w-fit">
              <div className="relative flex sm:gap-2  md:w-60 mt-7 mb-5">
                <p className="leading-6 text-xl font-medium hover:cursor-pointer">
                  Mutemwa Photography
                </p>
                <div className="h-[40%] absolute right-14 top-8 sm:flex sm:right-0 sm:top-2 sm:h-[100%]">
                  <BsArrowUpRight />
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
                  url={""}
                  bgColor={"#000000"}
                  className={"bg-gradient-to-r from-black to-gray-800"}
                />
              </div>
              <div className="pr-11 lg:pr-0 lg:w-[530px]">
                <div className="flex justify-center rounded-md items-center h-[150px] sm:h-[350px] shadow-md mt-5 sm:mt-10 bg-gray-200">
                  <div className="flex justify-center items-center rounded-xl w-1/2 h-20 bg-gray-300"></div>
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
                  url={""}
                  bgColor={"#000000"}
                  className={"bg-gradient-to-r from-black to-gray-800"}
                />
              </div>
              <div className="pr-11 lg:pr-0 lg:w-[530px]">
                <div className="flex justify-center rounded-md items-center h-[150px] sm:h-[350px] shadow-md mt-5 sm:mt-10 bg-gray-200">
                  <div className="flex justify-center items-center rounded-xl w-1/2 h-20 bg-gray-300"></div>
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
            <div className="bg-white h-[1px] w-[110%] sm:w-[150%] mt-auto"></div>
          </div>
        </div>

        <div className="px-11 sm:pl-20 md:pl-40">
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
                url={""}
                bgColor="#000000"
                className={"bg-gradient-to-r from-black to-gray-800"}
              />
            </div>
            <div className="pr-11 lg:pr-0 lg:w-[530px]">
              <div className="flex justify-center rounded-md items-center h-[150px] sm:h-[350px] shadow-md mt-5 sm:mt-10 bg-gray-200">
                <div className="flex justify-center items-center rounded-xl w-1/2 h-20 bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
