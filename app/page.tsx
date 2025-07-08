import Grid from "@/components/Grid";
import Landing from "@/components/Landing";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";
import {FaHome} from "react-icons/fa"

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto bg-slate-900 sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name:'Home', link:'/' ,icon:<FaHome/>
            }
        ]}/>
        <Landing/>
        
        <Grid/>
      </div>
    </main>
  );
}
