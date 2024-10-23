/** @format */

import { ReactNode, useState } from "react";
import { Footer } from "../Footer";
import FloatingNavbar from "../FloatingNavbar";
import homebg from "../../images/homebg.webp";
import MobileNav from "../MobileNav";

interface ProjectsLayoutProps {
  children: ReactNode;
}

const ProjectsLayout: React.FC<ProjectsLayoutProps> = ({ children }) => {
  const [buttonText, setButtonText] = useState("Copy Email");
  const email = process.env.REACT_APP_EMAIL_ADDRESS as string;
  const name = process.env.REACT_APP_MY_NAME;

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setButtonText("Copied");

        setTimeout(() => {
          setButtonText("Copy Email");
        }, 1000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="bg-black text-white flex flex-col justify-between overflow-x-hidden">
      <div className="relative z-20">
        <div className="absolute w-full h-[86%] sm:h-[87%] xl:h-[84%]">
          <img src={homebg} className="h-full w-full rounded-b-3xl z-0" />
        </div>

        <div className="flex z-10 flex-col justify-between px-3 md:px-24 py-5">
          <div className="md:hidden">
            <MobileNav className="w-8 h-8" />
          </div>

          <div className="flex z-20 justify-between">
            <div>
              <p className="font-montserrat font-bold text-xl xs:text-[13px] sm:py-2">
                {name}
              </p>
            </div>

            <div className="md:flex hidden gap-10">
              <div className=" flex border border-white/20 justify-center gap-2 rounded-3xl items-center p-1">
                <div className="p-2 hidden sm:flex">
                  <p className="font-montserrat text-xs">{email}</p>
                </div>
                <div
                  onClick={copyToClipboard}
                  className="bg-gradient-to-r hover:cursor-pointer from-zinc-950 to-gray-800 border border-white/15 p-2 text-xs sm:text-sm rounded-3xl"
                >
                  {buttonText}
                </div>
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
