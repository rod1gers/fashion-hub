/** @format */

import React, { ReactNode, useState } from "react";
import { Footer } from "../Footer";
import homebg from '../../images/homebg.webp';

interface HomeLayoutProps {
  children: ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  const tiktokUrl = process.env.REACT_APP_TIKTOK as string;
  const whatsappUrl = process.env.REACT_APP_WHATSAPP;

  return (
    <div className="relative overflow-x-hidden bg-black text-white">
      <div className="absolute w-full h-[750px] md:h-[850px]">
        <img 
          src={homebg}
          alt="home background"
          className="h-full md:h-[] w-full rounded-b-3xl"
        />
      </div>
      
      <header className="py-4 px-8 md:px-20 ">
        <div className="relative flex justify-between z-10">
          <div className="relative text-white flex gap-2 z-10">

            {/* Replace the email with tiktok link */}
            <div className=" flex border border-white/20 justify-center gap-2 rounded-3xl items-center p-1">
              <a href={tiktokUrl} target="_blank" rel="noopener noreferrer">
                <div className="bg-gradient-to-l hover:cursor-pointer from-zinc-950 to-gray-800 p-2 text-xs sm:text-sm rounded-3xl">
                  Tiktok
                </div>

              </a>
            </div>
            <div className=" flex border border-white/20 justify-center gap-2 rounded-3xl items-center p-1">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <div className="bg-gradient-to-l hover:cursor-pointer from-zinc-950 to-gray-800 p-2 text-xs sm:text-sm rounded-3xl">
                  WhatsApp
                </div>
              </a>
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
      