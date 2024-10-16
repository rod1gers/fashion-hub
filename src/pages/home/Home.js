/** @format */

import { HomeLayout } from "../../components/layouts/HomeLayout.tsx";
import { InfiniteScroll } from "./components/infiniteScroll.tsx";
import appIcon from "./icons/app-development-icon.svg";
import backendIcon from "./icons/backend.svg";
import apiIcon from "./icons/api_8297510.png";
import uiuxIcon from "./icons/ui ux.png";
import handshake from './icons/handshake-FWPX82A9T3.svg';

function Home() {
  const name = process.env.REACT_APP_MY_NAME;

  return (
    <HomeLayout>
      <div className="flex flex-col mt-11 items-center justify-center">
        <div className=" relative p-8 rounded-lg text-center">
          <div className="flex justify-center">
            <img
              src="profile.jpg"
              alt="Profile Picture"
              className="w-28 h-28 rounded-full border-2 border-gray-300"
            />
          </div>

          <div className="absolute -rotate-12 top-[60px] md:top-[70px] md:right-7 -right-3  ">
            <div className="bg-white w-fit px-3 py-2 rounded-2xl up-down-animation">
              <h2 className="text-sm font-medium">{name} 👋🏼</h2>
            </div>
          </div>

          <p className="mt-6 font-montserrat text-2xl md:text-4xl font-semibold w-72 md:w-96 small-caps">
            Crafting innovative software solutions with a passion for code and
            creativity.
          </p>
          <a
            href="#"
            className="mt-8 inline-block px-10 py-5 text-white bg-black rounded-full hover:underline transition"
          >
            Projects
          </a>
        </div>

        <div className="mt-8 justify-start">{InfiniteScroll()}</div>

        <div className="mt-28 flex flex-col justify-center items-center">
          <div>
            <p className="font-montserrat font-semibold md:text-3xl md:w-96 small-caps text-center">
              Let’s collaborate and leverage my skills for your next project
            </p>
          </div>
          <div className="relative flex flex-col justify-center items-center">
            <div className="w-[600px] h-[0px] border mt-20 border-black/20"></div>
            <div className="absolute top-16 px-[40px] py-[14px] origin-top-left rotate-[-10deg] bg-white rounded-[30px] justify-center items-center inline-flex">
              <div className="text-black text-base font-semibold font-montserrat">
                Services
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:flex gap-8">

          <div className="w-60">
            <div className="w-16 h-16">
              <img src={appIcon} alt="app icon" className="w-full h-full" />
            </div>
            <p className="font-bold mb-4 mt-1 text-lg">Web & Mobile App</p>
            <p>Turning concepts into outstanding web and mobile app solutions.</p>
          </div>

          <div className="w-60">
            <div className="w-16 h-16">
              <img
                src={backendIcon}
                alt="backend icon"
                className="w-full h-full"
              />
            </div>
            <p className="font-bold mb-4 mt-1 text-lg">Backend Development</p>
            <p>Bringing powerful backend systems to life, ensuring seamless functionality and scalability.</p>
          </div>

          <div className="w-60">
            <div className="w-16 h-16">
              <img src={apiIcon} alt="api icon" className="w-full h-full" />
            </div>
            <p className="font-bold mb-4 mt-1 text-lg">API Development</p>
            <p>Crafting robust APIs that drive seamless communication between systems and power efficient integrations</p>
          </div>

          <div className="w-60">
            <div className="w-16 h-16">
              <img src={uiuxIcon} alt="uiux icon" className="w-full h-full" />
            </div>
            <p className="font-bold mb-4 mt-1 text-lg">UX & UI</p>
            <p>Designing intuitive and visually engaging interfaces that deliver seamless user experiences across all platforms.</p>
          </div>

        </div>

        <div className="flex flex-col justify-center items-center mt-32 lg:mt-32 mb-10">
          <div className="h-32 w-32">
            <img
              src={handshake}
              alt="handshake icon"
              className=""
            />
          </div>

          <div>
            <p className="font-bold text-3xl text-center">Tell me about your next <br/> project</p>
          </div>
        </div>

        <div className="flex gap-10">
          <div className="p-1 rounded-3xl bg-gray-200">
            <div className="bg-black text-white p-2 text-sm rounded-3xl hover:cursor-pointer hover:underline transition">Email Me</div>
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
    </HomeLayout>
  );
}

export default Home;
