/** @format */

import React, { ReactNode } from "react";
import gray from "./assets/gray-background.jpg";

interface HomeLayoutProps {
  children: ReactNode;
}

export const HomeLayout = ({ children, position }) => {
  const email_address = process.env.REACT_APP_EMAIL_ADDRESS;

  return (
    <div className="relative h-[500px]">
      <div className="absolute z-0">
        <img
          src={gray}
          alt="background"
          className="h-full"
          style={{ userSelect: "none", pointerEvents: "none" }}
        />
      </div>

      <header className="py-10 px-8 md:px-20 ">
        <div className="relative flex justify-between z-10">
          <div className="relative flex gap-2 z-10">
            <div className=" flex justify-center border-[1px] border-gray-300 gap-2 rounded-3xl align-middle bg-gray-200 p-1">
              <div className="p-2">
                <p className="font-montserrat text-xs">{email_address}</p>
              </div>
              <div className="bg-white p-2 text-sm rounded-3xl">Copy Email</div>
            </div>
            <div className=" flex justify-center border-[1px] border-gray-300 gap-2 rounded-3xl align-middle bg-gray-200 p-1">
              <div className="bg-white p-2 text-sm rounded-3xl">
                View Resume
              </div>
            </div>
          </div>

          <div className="flex py-3 gap-2">
            <p>Github</p>
            <p>/</p>
            <p>LinkedIn</p>
            <p>/</p>
            <p>TikTok</p>
          </div>
        </div>
      </header>

      <div className="relative z-10">{children}</div>

      <footer className="flex justify-between relative px-8 md:px-20 z-10 bottom-0">
        <p className="py-3">&copy; 2024 All rights reserved.</p>
        <div className="flex py-3 gap-2">
            <p>Github</p>
            <p>/</p>
            <p>LinkedIn</p>
            <p>/</p>
            <p>TikTok</p>
        </div>
      </footer>
    </div>
  );
};
