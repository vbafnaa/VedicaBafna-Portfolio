import { Achievements } from "@/components/Achievements";
import { CarouselSlides } from "@/components/CarouselSlides";
import { Footer } from "@/components/Footer";
import Grid from "@/components/Grid";
import Landing from "@/components/Landing";
import { TimelineComp } from "@/components/TimelineComp";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {FaHome} from "react-icons/fa";
import { BsPersonRaisedHand } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { HiTrophy } from "react-icons/hi2";
import { FaHandsHelping } from "react-icons/fa";
import { Volunteering } from "@/components/Volunteering";
import { ThankYou } from "@/components/ThankYou";

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-x-hidden bg-slate-50 px-5 dark:bg-slate-900 sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name:'Home', link:'/' ,icon:<FaHome/>},
          {name:'About', link:'#about' ,icon:<BsPersonRaisedHand/>},
          {name:'Experiences', link:'#timeline' ,icon:<FaBriefcase/>},
          {name:'Projects', link:'#projects' ,icon:<MdOutlineRocketLaunch/>},
          {name:'Volunteering', link:'#volunteering' ,icon:<FaHandsHelping/>},
          {name:'Achievements', link:'#achievements' ,icon:<HiTrophy/>},
          // {name:'FunFacts', link:'#funfacts' ,icon:<FaHome/>},
          // {name:'Contact', link:'#contact' ,icon:<FaHome/>},

          
        ]}/>
        <Landing/>
        
        <Grid/>

        <TimelineComp/>

        <CarouselSlides/>

        <Volunteering />

        <Achievements/>

        {/* <ThankYou /> */}

        <Footer/>
      </div>
    </main>
  );
}
