/** @format */

import { BsArrowUpRight } from "react-icons/bs";
import BlackButton from "../../../components/BlackButton";
import { ReactNode } from "react";

const ProjectSection = () => {
  return (
    <div className="mt-20">
      <div>
        <div className="flex gap-10 lg:gap-20 ">
          <p className="text-7xl">01</p>
          <p className="text-6xl sm:text-3xl font-semibold">Mobile Apps</p>
          <div className="flex relative">
            <div className="border-t border-black w-[500px] sm h-[50%]  mt-auto"></div>
          </div>
        </div>

        <div className="px-20">
          <div className="w-fit">
            <div className="flex gap-2  mt-10">
              <p className="leading-3 text-xl">OMNITalk</p>
              <div>
                <BsArrowUpRight />
              </div>
            </div>
            <div>
              <p>A mobile app for service providers with messaging feature.</p>
            </div>
            <div className="mt-2">
              <BlackButton name={"Check Project"} url={""} className={""} />
            </div>
            <div className="flex justify-center items-center w-[550px] h-[350px] shadow-md mt-10 bg-gray-200">
              <div className="flex justify-center items-center rounded-xl w-60 h-44 bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex gap-10 lg:gap-20 ">
          <p className="text-7xl">02</p>
          <p className="text-6xl sm:text-3xl font-semibold">Web Apps</p>
          <div className="flex relative">
            <div className="border-t border-black w-[500px] sm h-[50%]  mt-auto"></div>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="px-20">
            <div className="w-fit">
              <div className="flex gap-2  mt-10">
                <p className="leading-3 text-xl">Mutemwa Photography</p>
                <div>
                  <BsArrowUpRight />
                </div>
              </div>
              <div>
                <p>
                  A web app for a photography studio, with custom coded
                  E-commerce service.
                </p>
              </div>
              <div className="mt-2">
                <BlackButton name={"Check Project"} url={""} className={""} />
              </div>
              <div className="flex justify-center items-center w-[550px] h-[350px] shadow-md mt-10 bg-gray-200">
                <div className="flex justify-center items-center rounded-xl w-60 h-44 bg-gray-300"></div>
              </div>
            </div>
          </div>

          <div className="px-20">
            <div className="w-fit">
              <div className="flex gap-2  mt-10">
                <p className="leading-3 text-xl">Breezer</p>
                <div>
                  <BsArrowUpRight />
                </div>
              </div>
              <div>
                <p>
                  A single page web app built to practice positioning in css.
                </p>
              </div>
              <div className="mt-2">
                <BlackButton name={"Check Project"} url={""} className={""} />
              </div>
              <div className="flex justify-center items-center w-[550px] h-[350px] shadow-md mt-10 bg-gray-200">
                <div className="flex justify-center items-center rounded-xl w-60 h-44 bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex gap-10 lg:gap-20 ">
            <p className="text-7xl">03</p>
            <p className="text-6xl sm:text-3xl font-semibold">Team Projects</p>
            <div className="flex relative">
              <div className="border-t border-black w-[500px] sm h-[50%]  mt-auto"></div>
            </div>
          </div>

          <div className="px-20">
            <div className="w-fit">
              <div className="flex gap-2  mt-10">
                <p className="leading-3 text-xl">Doros</p>
                <div>
                  <BsArrowUpRight />
                </div>
              </div>
              <div>
                <p>
                  A mobile app for service providers with messaging feature.
                </p>
              </div>
              <div className="mt-2">
                <BlackButton name={"Check Project"} url={""} className={""} />
              </div>
              <div className="flex justify-center items-center w-[550px] h-[350px] shadow-md mt-10 bg-gray-200">
                <div className="flex justify-center items-center rounded-xl w-60 h-44 bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
