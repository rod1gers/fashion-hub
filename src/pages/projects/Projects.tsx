/** @format */

import React from "react";
import ProjectsLayout from "../../components/layouts/ProjectsLayout";
import handshake from "./icons/handshake-FWPX82A9T3.svg";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import BlackButton from "../../components/uiComponents/Button";
import ProjectSection from "./components/ProjectSection";

export default function Projects() {
  return (
    <ProjectsLayout>
      <div className="relative z-30 pt-8 sm:pt-14 md:pt-0">
        <div className="flex justify-center mb-4">
          <p className="font-bold px-3 text-[42px] md:text-[88px] text-white/95 lg:text-[210px] whitespace-nowrap">
            MY PROJECTS
          </p>
        </div>

        <div className="flex justify-center px-8">
          <p className="text-center text-sm">
            Throughout my experience, I've completed numerous projects, some of
            which I'm presenting here.
          </p>
        </div>
        <div className="bg-gray-300 h-[0.5px] mt-3 w-[80%] lg:w-[85%] mx-auto"></div>

        <ProjectSection />

        <div className="pt-14">
          <div className="flex flex-col justify-center items-center mt-14 sm:mt-32 lg:mt-32 mb-10">
            <div className="h-32 w-32">
              <img src={handshake} alt="handshake icon" className="" />
            </div>

            <div>
              <p className="font-bold text-xl sm:text-3xl text-center">
                Tell me about your next <br /> project
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-10 justify-center">
          <div className="p-1 rounded-3xl bg-gray-200">
            <div className="bg-black text-white p-2 text-sm rounded-3xl hover:cursor-pointer hover:underline transition">
              Email Me
            </div>
          </div>
          <div>
            <div className="p-1 border rounded-3xl bg-black">
              <div className="bg-white p-2 text-sm font-semibold text-black rounded-3xl hover:cursor-pointer hover:underline transition">
                WhatsApp
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProjectsLayout>
  );
}
