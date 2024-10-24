/** @format */

import { useEffect, useState } from "react";
import githubIcon from "../icons/github-142-svgrepo-com.svg";
import linkedInIcon from "../icons/linkedin-svgrepo-com.svg";
import tiktokIcon from "../icons/tiktok-svgrepo-com.svg";
import { checkIsMobile, setIsMobile } from "../redux/slices/screenSizeSlice";
import { useDispatch, useSelector } from "react-redux";
import useScreenSize from "../hooks/useScreenSize";

export function Footer() {
  useScreenSize();
  const isMobile = useSelector(checkIsMobile);
  const tiktokLink = process.env.REACT_APP_TIKTOK_LINK;
  const githubLink = process.env.REACT_APP_GITHUB_LINK;
  const linkedinLink = process.env.REACT_APP_LINKEDIN_LINK;

  return (
    <div>
      <div className="flex justify-center items-center px-20 lg:mt-10">
        <div className="w-full h-[0px] border mt-20 border-white/10"></div>
      </div>
      <footer className="flex justify-between mt-10 relative px-8 pb-10 md:px-20 z-10 bottom-0">
        <p className="py-3">&copy; 2024 All rights reserved.</p>

        {!isMobile ? (
          <div className="flex py-3 gap-2">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:cursor-pointer"
            >
              Github
            </a>
            <p>/</p>
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:cursor-pointer"
            >
              LinkedIn
            </a>
            <p>/</p>
            <a
              href={tiktokLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:cursor-pointer"
            >
              TikTok
            </a>
          </div>
        ) : (
          <div className="flex py-3 gap-2">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-5 h-5  hover:cursor-pointer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <p>/</p>
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-5 h-5  hover:cursor-pointer"
            >
              <img src={linkedInIcon} alt="LinkedIn" />
            </a>
            <p>/</p>
            <a
              href={tiktokLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-5 h-5  hover:cursor-pointer"
            >
              <img src={tiktokIcon} alt="TikTok" />
            </a>
          </div>
        )}
      </footer>
    </div>
  );
}
