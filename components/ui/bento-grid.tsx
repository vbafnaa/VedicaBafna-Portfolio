"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { Globe } from "./ace-globe";
import { GlobeDemo } from "./grid-globe";


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
  return (
    <div
      className={cn(
        "group/bento shadow-input relative row-span-1 flex flex-col justify-between space-y-5 m-2 rounded-3xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
      style ={{
        background:'rgb(4,7,29)',
        backgroundColor:"gradient..."
      }}
    >
      {/* <div className={`${id === 3} && 'flex justify-center h-full`}> */}
      <div>
        <div className="w-full h-full absolute">
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
              <div className="absolute flex items-center justify-center text-white font-bold"/>
            </BackgroundGradientAnimation>
          )}
        <div className={cn(
        titleClassName, 'group-hover/bento: translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10' )}>
          <div className="font-sans text-sm md:text-xs lg:text-base z-10 font-extralight text-neutral-600 dark:text-[#c1c2d3] ">
          {description}
          </div>
          <div className="lg:text-3xl max-w-96 z-10 font-sans font-bold text-lg text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        </div>
          {id === 4 && (
            <GlobeDemo/>
          )}
      </div>
      {/* {header} */}
      {/* <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        
      </div> */}
    </div>
  );
};
