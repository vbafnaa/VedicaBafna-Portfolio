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

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto bg-slate-900 sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name:'Home', link:'/' ,icon:<FaHome/>},
          {name:'About', link:'#about' ,icon:<BsPersonRaisedHand/>},
          {name:'Experiences', link:'#timeline' ,icon:<FaBriefcase/>},
          {name:'Projects', link:'#projects' ,icon:<MdOutlineRocketLaunch/>},
          {name:'Achievements', link:'#achievements' ,icon:<HiTrophy/>},
          // {name:'Volunteering', link:'#volunteering' ,icon:<FaHome/>},
          // {name:'FunFacts', link:'#funfacts' ,icon:<FaHome/>},
          // {name:'Contact', link:'#contact' ,icon:<FaHome/>},

          
        ]}/>
        <Landing/>
        
        <Grid/>

        <TimelineComp/>

        <CarouselSlides/>

        <Achievements/>

        <Footer/>
      </div>
    </main>
  );
}
