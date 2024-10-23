/** @format */

import { HomeLayout } from "../../components/layouts/HomeLayout.tsx";
import { InfiniteScroll } from "./components/infiniteScroll.tsx";
import appIcon from "./icons/app-development-icon.svg";
import backendIcon from "./icons/backend.svg";
import apiIcon from "../../icons/api-svgrepo-com.svg";
import uiuxIcon from "../../icons/frontend icon.svg";
import handshake from "./icons/handshake-FWPX82A9T3.svg";
import { Link } from "react-router-dom";
import Button from "../../components/uiComponents/Button.tsx";
import MobileNav from "../../components/MobileNav.tsx";
import heroImage from "../../images/Rodgers 2.webp";
import { checkIsMobile } from "../../redux/slices/screenSizeSlice.ts";
import { useSelector } from "react-redux";
import githubIcon from "../../icons/github-142-svgrepo-com.svg";
import linkedInIcon from "../../icons/linkedin-svgrepo-com.svg";
import tiktokIcon from "../../icons/tiktok-svgrepo-com.svg";
import useScreenSize from "../../hooks/useScreenSize.ts";

function Home() {
  const name = process.env.REACT_APP_MY_NAME;
  const email = process.env.REACT_APP_MY_EMAIL;
  const tiktokLink = process.env.REACT_APP_TIKTOK_LINK;
  const githubLink = process.env.REACT_APP_GITHUB_LINK;
  const linkedinLink = process.env.REACT_APP_LINKEDIN_LINK;
  const whatsappUrl = process.env.REACT_APP_WHATSAPP;
  useScreenSize();
  const mobile = useSelector(checkIsMobile);

  return (
    <HomeLayout>
      <div className="flex relative flex-col px-8 lg:px-20 mt-11 items-center justify-center">
        {mobile ? (
          <div className="flex absolute -top-[105px] z-100 gap-2">
            <MobileNav className="w-8 h-8" />
          </div>
        ) : (
          <div className="flex justify-end w-full relative">
            <div className="flex absolute -top-[105px] py-3 gap-2">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>
              <p>/</p>
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5"
              >
                <img src={linkedInIcon} alt="LinkedIn" />
              </a>
              <p>/</p>
              <a
                href={tiktokLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5"
              >
                <img src={tiktokIcon} alt="TikTok" />
              </a>
            </div>
          </div>
        )}

        <div className="relative p-8 rounded-3xl text-center ">
          <div className="flex justify-center">
            <div className="relative rounded-full w-40 h-40 overflow-hidden">
              <img
                src={heroImage}
                alt="Profile Picture"
                className="absolute -top-8 border-2 border-gray-300"
              />
            </div>
          </div>

          <div className="absolute -rotate-12 top-[60px] md:top-[70px] md:right-7 -right-3  ">
            <div className="bg-white w-fit px-3 py-2 rounded-2xl up-down-animation z-30">
              <h2 className="text-sm text-black font-medium">{name} 👋🏼</h2>
            </div>
          </div>

          <p className="mt-10 sm:mt-6 tracking-wide font-montserrat text-2xl md:text-4xl font-semibold w-72 md:w-96 small-caps">
            Crafting innovative software solutions with a passion for code and
            creativity.
          </p>

          <div className="flex justify-center">
            <Button
              name="Projects"
              url="/projects"
              bgColor=""
              className="bg-gradient-to-r from-zinc-950 to-gray-800 mt-10 px-14 border border-white/20 py-5 text-white text-base rounded-full hover:underline transition"
            />
          </div>
        </div>

        <div className="justify-start">{InfiniteScroll()}</div>

        <div className="mt-28 flex flex-col justify-center items-center">
          <div className="w-[300px] sm:w-fit">
            <p className="font-montserrat font-semibold md:text-3xl md:w-96 small-caps text-center">
              Let’s collaborate and leverage my skills for your next project
            </p>
          </div>
          <div className="relative flex flex-col justify-center items-center">
            <div className="w-[600px] h-[1px] mt-20 bg-white/20"></div>
            <div className="absolute top-16 px-[40px] py-[14px] origin-top-left rotate-[-10deg] bg-white rounded-[30px] justify-center items-center inline-flex">
              <div className="text-black text-base font-semibold font-montserrat">
                Services
              </div>
            </div>
          </div>
        </div>

        <div className="w-fit border border-white/20 mt-20 lg:mt-28 py-16 px-6 sm:p-16 lg:px-20 lg:py-28 rounded-3xl flex justify-center bg-gradient-to-l from-dark_gray to-transparent">
          <div className="p-5 flex flex-col sm:grid sm:grid-cols-2 xl:flex xl:flex-row  gap-20 lg:gap-20">
            <div className="w-50 lg:w-60">
              <div className="w-16 h-16">
                <img src={uiuxIcon} alt="uiux icon" className="w-full h-full" />
              </div>
              <p className="font-bold mb-4 mt-1 text-lg">
                Frontend Development
              </p>
              <p className="text-[12px] tracking-wider sm:text-sm">
                Designing intuitive and visually engaging interfaces that
                deliver seamless user experiences across all platforms.
              </p>
            </div>

            <div className="w-50 lg:w-60">
              <div className="w-16 h-16">
                <img
                  src={backendIcon}
                  alt="backend icon"
                  className="w-full h-full"
                />
              </div>
              <p className="font-bold mb-4 mt-1 text-lg">Backend Development</p>
              <p className="text-[12px] tracking-wider sm:text-sm">
                Bringing powerful backend systems to life, ensuring seamless
                functionality and scalability.
              </p>
            </div>

            <div className="w-50 lg:w-60">
              <div className="w-16 h-16">
                <img src={appIcon} alt="app icon" className="w-full h-full" />
              </div>
              <p className="font-bold mb-4 mt-1 text-lg">Web & Mobile App</p>
              <p className="text-[12px] tracking-wider sm:text-sm">
                Turning concepts into outstanding web and mobile app solutions.
              </p>
            </div>

            <div className="w-50 lg:w-60">
              <div className="w-16 h-16">
                <img src={apiIcon} alt="api icon" className="w-full h-full" />
              </div>
              <p className="font-bold mb-4 mt-1 text-lg">API Development</p>
              <p className="sm:text-sm text-[12px] tracking-wider">
                Crafting robust APIs that drive seamless communication between
                systems and power efficient integrations
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-10 md:mt-32 lg:mt-32 mb-10">
          <div className="h-32 w-32">
            <img src={handshake} alt="handshake icon" className="" />
          </div>

          <div>
            <p className="font-bold text-xl sm:text-3xl text-center">
              Tell me about your next <br /> project
            </p>
          </div>
        </div>

        <div className="flex gap-10">
          <div className="p-1 rounded-3xl bg-gray-200">
            <a href={`mailto:${email}`}>
              <div className="bg-black text-white p-2 text-sm rounded-3xl hover:cursor-pointer hover:underline transition">
                Email Me
              </div>
            </a>
          </div>
          <div>
            <div className="p-1 rounded-3xl bg-black border">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <div className="bg-white p-2 font-semibold text-black text-sm rounded-3xl hover:cursor-pointer hover:underline transition">
                  WhatsApp
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default Home;
