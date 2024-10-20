/** @format */

import React from "react";
import ProjectsLayout from "../../components/layouts/ProjectsLayout";
import handshake from "./icons/handshake-FWPX82A9T3.svg";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import BlackButton from "../../components/BlackButton";
import ProjectSection from "./components/ProjectSection";

export default function Projects() {
  return (
    <ProjectsLayout>
      <div>
        <div className="flex justify-center">
          <p className="font-bold md:text-[88px] lg:text-[210px] ">
            MY PROJECTS
          </p>
        </div>

        <div className="flex justify-center">
          <p>
            Throughout my experience, I've completed numerous projects, some of
            which I'm presenting here.
          </p>
        </div>
        <div className="border border-gray-300 mt-3 w-[500px] mx-auto"></div>

        <ProjectSection />

        <div className="flex flex-col justify-center items-center mt-32 lg:mt-32 mb-10">
          <div className="h-32 w-32">
            <img src={handshake} alt="handshake icon" className="" />
          </div>

          <div>
            <p className="font-bold text-3xl text-center">
              Tell me about your next <br /> project
            </p>
          </div>
        </div>

        <div className="flex gap-10 justify-center">
          <div className="p-1 rounded-3xl bg-gray-200">
            <div className="bg-black text-white p-2 text-sm rounded-3xl hover:cursor-pointer hover:underline transition">
              Email Me
            </div>
          </div>
          <div>
            <div className="p-1 rounded-3xl bg-gray-200">
              <div className="bg-white p-2 text-sm rounded-3xl hover:cursor-pointer hover:underline transition">
                WhatsApp
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProjectsLayout>
  );
}
