"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { Globe } from "./ace-globe";
import { GlobeDemo } from "./grid-globe";
import { CardHoverEffectCards } from "./cardHoverCards";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from '@/data/Confetti.json'
import MagicButton from "./magicButton";
import { FaMailchimp } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { DraggableImages } from "./draggableImages";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  // key, 
  imgClassName,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode; 
  icon?: React.ReactNode;
  id?:number;
  img?:string;
  imgClassName?:string;
  titleClassName?:string,
  // key?:number;
}) => {
  const [copied,setCopied] = useState(false)
  const handleCopy =() => {
    navigator.clipboard.writeText('vedicabafna@gmail.com');
    setCopied(true);
    // setTimeout(() => {
    //   setCopied(false)
    // }, 4000);
  }
  return (
    <div
      className={cn(
        "group/bento shadow-input relative row-span-1 overflow-hidden flex flex-col justify-between space-y-5 m-2 rounded-3xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
      style ={{
        background:'rgb(4,7,29)',
        backgroundColor:"gradient..."
      }}
    >
      <div className={`${id === 3 && 'flex justify-center'} h-full`}>
      {/* <div className="flex justify-center items-center"> */}
        <div className="">
        {img && (
          <img
          src={img}
          alt={img}
          className={cn(imgClassName, 'object-cover, object-center')}
          />
          )}
        </div>
        {id===3 && (
            <BackgroundGradientAnimation>
              <div className="absolute flex items-center justify-center text-white font-bold z-0"/>
            </BackgroundGradientAnimation>
          )}

          {/* {id===1 && 
          <div className="flex ">
            <DraggableImages/>
          </div>
          } */}
         
        <div className={cn(
        titleClassName, ` transition duration-200 relative items-center justify-center md:h-full min-h-40 flex flex-col lg:py-10 ${id !== 2 && "px-5"}` )}>
          <div className="group-hover/bento:translate-x-2 font-sans text-sm md:text-xs lg:text-base z-20 font-extralight text-neutral-600 dark:text-[#c1c2d3] ">
          {id !== 1 && description}
          </div>
          <div className="group-hover/bento:translate-x-2 lg:text-3xl max-w-96 z-20 font-sans font-bold text-lg text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
          {id === 4 && (
            <GlobeDemo/>
          )}
          {id===2 && (
            <div className="flex items-center justify-center  ">
              <CardHoverEffectCards/>
            </div>
          )}


           {id === 3 && (
            <div className="relative mt-5 "> 
              <div className={`absolute -bottom-8 -right-25 md:-bottom-15 md:-right-30`}>
                <Lottie options={{
                  loop:copied,
                  autoplay:copied,
                  animationData,
                  rendererSettings:{
                    preserveAspectRatio:"XMidYMid slice",
                  }
                }}/>
              
              <MagicButton 
                  title={copied? "Email Copied!": "Copy my Email"} 
                  icon= {<IoCopyOutline/> }
                  otherClasses = "!bg-[#161a31] z-1000"
                  position = "left" 
                  handleClick={handleCopy}
                  />
              </div>
            </div>

          )}
          </div>
      </div>
      {/* {header} */}
      {/* <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        
      </div> */}
    </div>
  );
};
