/** @format */

import { ReactNode } from "react";
import { Footer } from "../Footer";
import FloatingNavbar from "../FloatingNavbar";
import homebg from '../../images/homebg.webp';
import MobileNav from "../MobileNav";


interface ProjectsLayoutProps {
  children: ReactNode;
}

const ProjectsLayout: React.FC<ProjectsLayoutProps> = ({ children }) => {
  const email = process.env.REACT_APP_EMAIL_ADDRESS;
  const name = process.env.REACT_APP_MY_NAME;

  return (
    <div className="bg-black text-white flex flex-col justify-between overflow-x-hidden">
      <div className="relative z-20">
        <div className="absolute w-full h-[79%] lg:h-[81%]">
          <img 
            src={homebg}
            className="h-full w-full rounded-b-3xl z-0"
          />
        </div>

        <div className="flex z-10 flex-col justify-between px-3 md:px-24 py-5">

          <div className="md:hidden">
            <MobileNav 
              className="w-8 h-8"
            />
          </div>


          <div className="flex z-20 justify-between">
            <div>
              <p className="font-montserrat font-bold text-xl xs:text-[13px] sm:py-2">{name}</p>
            </div>

            <div className="md:flex hidden gap-10">
              <div className="border border-gray-300 bg-dark_gray p-2 rounded-3xl">
                {email}
              </div>
              <div className="border border-gray-300 bg-dark_gray p-2 rounded-3xl">
                hit me up
              </div>
            </div>
          </div>

          <div>{children}</div>

          <div className="hidden md:flex">
            <FloatingNavbar></FloatingNavbar>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default ProjectsLayout;
