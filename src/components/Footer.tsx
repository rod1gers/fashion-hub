/** @format */

import { useEffect, useState } from "react";
import githubIcon from "../icons/github-142-svgrepo-com.svg";
import linkedInIcon from "../icons/linkedin-svgrepo-com.svg";
import tiktokIcon from '../icons/tiktok-svgrepo-com.svg';
import { checkIsMobile, setIsMobile } from "../redux/slices/screenSizeSlice";
import { useDispatch, useSelector } from "react-redux";
import useScreenSize from "../hooks/useScreenSize";

export function Footer() {
  useScreenSize();
  const isMobile = useSelector(checkIsMobile);
  
  return (
    <div>
      <div className="flex justify-center items-center px-20 lg:mt-10">
        <div className="w-full h-[0px] border mt-20 border-white/10"></div>
      </div>
      <footer className="flex justify-between mt-10 relative px-8 pb-10 md:px-20 z-10 bottom-0">
        <p className="py-3">&copy; 2024 All rights reserved.</p>

        {!isMobile ? (
          <div className="flex py-3 gap-2">
            <p>Github</p>
            <p>/</p>
            <p>LinkedIn</p>
            <p>/</p>
            <p>TikTok</p>
          </div>
        ) : (
          <div className="flex  py-3 gap-2">
            <div className="w-5 h-5">
            <img src={githubIcon} />
            </div>
            <p>/</p>
            <div className="w-5 h-5">
            <img src={linkedInIcon} />
            </div>
            <p>/</p>
            <div className="w-5 h-5">
            <img src={tiktokIcon} />
            </div>
          </div>
        )}
      </footer>
    </div>
  );
}
