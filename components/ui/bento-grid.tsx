"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
// import { Globe } from "./ace-globe";
import { GlobeDemo } from "./grid-globe";
import { CardHoverEffectCards } from "./cardHoverCards";
import { useState } from "react";
// import Lottie from "react-lottie"
import Lottie from "lottie-react";
import animationData from '@/data/Confetti.json'
import MagicButton from "./magicButton";
// import { FaMailchimp } from "react-icons/fa";
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
  // header,
  // icon,
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
    setTimeout(() => {
      setCopied(false)
    }, 3000);
  }
  return (
    <div
      className={cn(
        "group/bento shadow-input relative row-span-1 overflow-hidden flex flex-col justify-between space-y-5 m-2 rounded-3xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
      style={id === 3 ? { background: "rgb(4, 7, 29)" } : undefined}
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
          <div
            className={cn(
              "group-hover/bento:translate-x-2 z-20 font-sans text-sm font-normal md:text-xs lg:text-base dark:font-extralight dark:text-[#c1c2d3]",
              id === 3
                ? "text-neutral-200"
                : "text-slate-700",
            )}
          >
            {id !== 1 && description}
          </div>
          <div
            className={cn(
              "group-hover/bento:translate-x-2 z-20 flex max-w-96 font-sans text-lg font-bold lg:text-3xl dark:text-neutral-200",
              id === 3 ? "text-white" : "text-slate-900",
            )}
          >
            {title}
          </div>
            {/* {id===1 && 
          <div className="group-hover/bento:translate flex w-50 ">
            <img src="assets\MyImage.jpeg" alt=" ">
            </img>
          </div>
          } */}
              {id===1 && 
          <div className="flex z-100 m-5">
            <DraggableImages/>
          </div>
          }
          
        { id == 1 &&  (
          <div className="group-hover/bento:translate-x-2 z-20 flex p-7 text-center font-sans text-sm font-normal text-slate-700 dark:font-extralight md:text-xl dark:text-[#c1c2d3]">
          {description}
          </div>
        )
        } 
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
                {/* <Lottie options={{
                  loop:copied,
                  autoplay:copied,
                  animationData,
                  rendererSettings:{
                    preserveAspectRatio:"XMidYMid slice",
                  }
                    
                }}/> */}

                <Lottie animationData={animationData} loop={copied} autoplay={copied}  />
              
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

          {id==5 && (
            <div className="group-hover/bento:translate-x-2 flex flex-col relative mt-2 md:flex-row justify-end items-stretch w-full">
              <div className="group-hover/bento:translate-x-2 flex border-2 flex-col md:flex-row border-slate-600 m-3 p-2 items-center justify-center relative w-full rounded-3xl">
              <img className="h-30 w-30 mr-3 mt-1 flex" src="assets/DJSCE_Logo.png">
              </img>
              <p className="flex min-w-0 flex-col text-sm leading-relaxed text-slate-900 dark:text-slate-100">
               <b> University of Mumbai - Dwarkadas J Sanghvi College of Engineering, Mumbai, India </b> <br/> <i className="text-slate-700 dark:text-slate-300"> Bachelors of Technology in Computer Engineering with Honors in Intelligent Computing </i> <br/> <span className="text-slate-600 dark:text-slate-300">December 2021 - June 2025</span>
              </p>

              </div>
              <div className="group-hover/bento:translate-x-2 flex border-2  flex-col md:flex-row border-slate-600 m-3 p-2 items-center justify-center relative w-full rounded-3xl">
              <img className="h-30 w-40 mr-3 mt-1 flex" src="assets/WashingtonLogo.png">
              </img>
              <p className="flex min-w-0 flex-col text-sm leading-relaxed text-slate-900 dark:text-slate-100">
               <b> University of Washington, Information School, Seattle, United States</b> <br/> <i className="text-slate-700 dark:text-slate-300"> Masters of Science in Information Management </i> <br/> <span className="text-slate-600 dark:text-slate-300">September 2025 - June 2027</span>
              </p>
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
