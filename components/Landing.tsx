"use client";
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { SpotlightNew } from './ui/spotlight-new'
import MagicButton from './ui/magicButton'
import Threemodel from './ui/Threemodel'
import { FloatingNav } from './ui/floating-navbar'
import { FaLocationArrow } from 'react-icons/fa'
import { BackgroundBeams } from './ui/background-beams'


const Landing = () => {
  return (
    <div className='pb-36 pt-36 scroll-m-1'>
        {/* <FloatingNav navItems={[
          {name:'Home', link:'/' ,
            // icon:<FaHome/>
            }
        ]}/> */}
        {/* <BackgroundBeams/> */}
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vh]' fill='violet'/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vh]' fill='indigo'/>
            {/* <SpotlightNew /> */}
        </div>
        <div className="h-screen w-full dark:bg-slate-900 bg-slate-200 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center" >
            {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-slate-900 bg-slate-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"> </div> */}
        </div>

        <div className=' -right-30 top-85 justify-center items-center align-middle absolute hidden lg:block h-[80vh] w-[80vh]'>
        <Threemodel/>
        
        </div>

            {/* <BackgroundBeams className=' z-50000'/> */}
        <div className="flex relative my-10 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-ledt justify-center">

            <p className="uppercase tracking-widest text-s text-left text-blue-100 max-w-80">
                Enter text here
            </p>
            <TextGenerateEffect duration={2} filter={false} 
                words="Welcome to my Portfolio Lets learn more about me!"
                className="text-left text-3xl md:text-5xl lg:text-7xl "
            />

            <p className="text-left md:tracking-wider mb-4 text-xl md:text-xl lg:text-3xl">
                Hi I&apos;m Vedica, a Developer based in India.
            </p>
            <a href='#about'>
                <MagicButton title="Take me to ..." 
                icon= {<FaLocationArrow/> }
                position = "right" />

            </a>
        
            </div>
        </div>
        
        

    </div>
  )
}

export default Landing