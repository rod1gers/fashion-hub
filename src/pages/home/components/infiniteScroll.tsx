/** @format */

import React from "react";
import javascriptIcon from "../icons/javascript-2.svg";
import nodeIcon from "../icons/icons8-node-js.svg";
import cppIcon from "../icons/icons8-cpp.svg";
import gitIcon from "../icons/icons8-git.svg";
import awsIcon from "../icons/icons8-aws.svg";
import typescriptIcon from "../icons/icons8-typescript.svg";
import reactIcon from "../icons/icons8-react.svg";
import mongodbIcon from "../icons/mongodb-icon-2.svg";

export function InfiniteScroll() {
  return (
    <div>
        <div className=' flex gap-16 md:gap-36 py-14 animate-infinite-scroll'>
            <div className='w-14 h-14 md:w-20 md:h-20'>
              <img 
                src={javascriptIcon}
                alt='javascript'
                className='w-full h-full'
              />
            </div>
            <div className='w-14 h-14 md:w-20 md:h-20'>
              <img 
                src={nodeIcon}
                alt='nodejs'
                className='w-full h-full'
              />
            </div>
            <div className='w-14 h-14 md:w-20 md:h-20'>
              <img 
                src={cppIcon}
                alt='cpp'
                className='w-full h-full'
              />
            </div>
            <div className='w-14 h-14 md:w-20 md:h-20'>
              <img 
                src={gitIcon}
                alt='git'
                className='w-full h-full'
              />
            </div>
            <div className='w-14 h-14 md:w-20 md:h-20'>
              <img 
                src={awsIcon}
                alt='aws'
                className='w-full h-full'
              />
            </div>
            <div className='w-14 h-14 md:w-20 md:h-20'>
              <img 
                src={typescriptIcon}
                alt='typescript'
                className='w-full h-full'
              />
            </div>
            <div className='w-14 h-14 md:w-20 md:h-20'>
              <img 
                src={reactIcon}
                alt='react'
                className='w-full h-full'
              />
            </div>
            <div className='w-14 h-14 md:w-20 md:h-20'>
              <img 
                src={mongodbIcon}
                alt='mongodb'
                className='w-full h-full'
              />
            </div>
            {/* {repeat icons} */}
            <div className='w-14 h-14 md:w-20 md:h-20'>
              <img 
                src={javascriptIcon}
                alt='javascript'
                className='w-full h-full'
              />
            </div>
            <div className='w-14 h-14 md:w-20 md:h-20'>
              <img 
                src={nodeIcon}
                alt='nodejs'
                className='w-full h-full'
              />
            </div>
            <div className='w-14 h-14 md:w-20 md:h-20'>
              <img 
                src={cppIcon}
                alt='cpp'
                className='w-full h-full'
              />
            </div>
            <div className='w-14 h-14 md:w-20 md:h-20'>
              <img 
                src={gitIcon}
                alt='git'
                className='w-full h-full'
              />
            </div>
            <div className='w-14 h-14 md:w-20 md:h-20'>
              <img 
                src={awsIcon}
                alt='aws'
                className='w-full h-full'
              />
            </div>
            <div className='w-14 h-14 md:w-20 md:h-20'>
              <img 
                src={typescriptIcon}
                alt='typescript'
                className='w-full h-full'
              />
            </div>
            <div className='w-14 h-14 md:w-20 md:h-20'>
              <img 
                src={reactIcon}
                alt='react'
                className='w-full h-full'
              />
            </div>
            <div className='w-14 h-14 md:w-20 md:h-20'>
              <img 
                src={mongodbIcon}
                alt='mongodb'
                className='w-full h-full'
              />
            </div>
        </div>
    </div>
  );
}
