/** @format */

import { ReactNode } from "react";
import { Footer } from "../Footer";
import FloatingNavbar from "../FloatingNavbar";
import grayBackground from "./assets/projects-background.jpg";

interface ProjectsLayoutProps {
  children: ReactNode;
}

const ProjectsLayout: React.FC<ProjectsLayoutProps> = ({ children }) => {
  const email = process.env.REACT_APP_EMAIL_ADDRESS;
  const name = process.env.REACT_APP_MY_NAME;

  return (
    <div className="flex flex-col justify-between">
      <div className="absolute z-0 w-full">
        <img
          src={grayBackground}
          alt="background"
          className="max-h-[2960px] w-full"
          style={{ userSelect: "none", pointerEvents: "none" }}
        />
      </div>

      <div className="z-20">
        <div className="flex flex-col justify-between px-24 py-8">
          <div className="flex justify-between">
            <div>
              <p className="font-montserrat font-bold text-xl py-2">{name}</p>
            </div>

            <div className="flex gap-10">
              <div className="border border-gray-300 p-2 rounded-3xl">
                {email}
              </div>
              <div className="border border-gray-300 p-2 rounded-3xl">
                hit me up
              </div>
            </div>
          </div>

          <div>{children}</div>

          <FloatingNavbar></FloatingNavbar>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default ProjectsLayout;
