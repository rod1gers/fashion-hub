/** @format */

import React, { ReactNode } from "react";
import gray from "./assets/gray-background.jpg";
import { Footer } from "../Footer";
import Button from "../uiComponents/Button";
import MobileNav from "../MobileNav";
import homebg from '../../images/homebg.webp';

interface HomeLayoutProps {
  children: ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  const email_address = process.env.REACT_APP_EMAIL_ADDRESS;

  return (
    <div className="relative overflow-x-hidden bg-black text-white">
      <div className="absolute w-full h-[750px] md:h-[780px]">
        <img 
          src={homebg}
          className="h-full md:h-[] w-full rounded-b-3xl"
        />
      </div>
      

      <header className="py-4 px-8 md:px-20 ">
        <div className="relative flex justify-between z-10">
          <div className="relative text-white flex gap-2 z-10">
            <div className=" flex border border-gray-500 justify-center gap-2 rounded-3xl items-center p-1">
              <div className="p-2 hidden sm:flex">
                <p className="font-montserrat text-xs">{email_address}</p>
              </div>
              <div className="bg-gradient-to-r from-zinc-950 to-gray-800 p-2 text-xs sm:text-sm rounded-3xl">Copy Email</div>
            </div>
            <div className=" flex border border-gray-500 justify-center gap-2 rounded-3xl items-center p-1">
              <div className="bg-gradient-to-l from-zinc-950 to-gray-800 p-2 text-xs sm:text-sm rounded-3xl">
                View Resume
              </div>
            </div>
          </div>

          
        </div>
      </header>

      <div className="relative z-10">{children}</div>

      <div className="absolute top-[920px] z-0 w-full h-[820px] lg:h-[620px]">
        
      </div>

      <Footer></Footer>
    </div>
  );
};
      