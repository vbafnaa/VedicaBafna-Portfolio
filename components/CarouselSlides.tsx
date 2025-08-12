"use client";

import { Carousel } from "./ui/carousel";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

export function CarouselSlides() {
  const slideData = [
    {
      title: "VERITAS-NLI",
      button: "Go To Publication  ",
      button2: "Go To Artifact",
      src: "assets/VERITASImage.png",
      icon: <HiOutlineAcademicCap style={{ display: "inline" }}/>,
      icon2: <FaGithub style={{ display: "inline" }}/>,
      desc:"enter desc here",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0952197625002842?via%3Dihub",
      link2:"https://github.com/vbafnaa/VERITAS-NLI"
    },
    // {
    //   title: "ProductVision - Amazon ML Challenge",
    //   button: "Explore Component",
    //   src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   desc:"enter desc here",
    //   link: "https://github.com/vbafnaa/Amazon-ML-Challenge",
    // },
    {
      title: "Railway Buddy - Smart India Hackathon",
      button: "Go To Github  ",
      src: "assets/RailwayBuddy.png",
      icon: <FaGithub style={{ display: "inline" }}/>,
      desc:"enter desc here",
      link: "https://github.com/vbafnaa/SIH1348_LichtDenCode",
    },
    {
      title: "Stock Watch - Bajaj HackRx",
      button: "Go To Github  ",
      src: "assets/StockWatch2.png",
      icon: <FaGithub style={{ display: "inline" }}/>,
      desc:"enter desc here",
      link: "https://github.com/vbafnaa/StockWatch-FastAPI",
    },
    {
      title: "Authentica",
      button: "Go To Github  ",
      src: "assets/Authentica.jpeg",
      icon: <FaGithub style={{ display: "inline" }}/>,
      desc:"enter desc here",
      link: "https://github.com/vbafnaa/LichtDenCode_LOC5.0",
    },
    {
      title: "Clinical Sage - Techgium",
      button: "Go To Github  ",
      src: "assets/ClinicalSage.jpeg",
      icon: <FaGithub style={{ display: "inline" }}/>,
      desc:"enter desc here",
      link: "https://github.com/vbafnaa/ClinicalSage-Techgium",
    },
    {
      title: "Curate Sage - Techgium",
      button: "Go To Github  ",
      src: "assets/CurateSage.png",
      icon: <FaGithub style={{ display: "inline" }}/>,
      desc:"enter desc here",
      link: "https://github.com/vbafnaa/CurateSage---Techgium",
    },
    {
      title: "Sonify - NASA Space Apps",
      button: "Go To Github  ",
      src: "assets/milkywaygif.gif",
      icon: <FaGithub style={{ display: "inline" }}/>,
      desc:"enter desc here",
      link: "https://github.com/vbafnaa/NasaSpaceApps2023",
    },
  ];
  return (
    <section id="projects">
        <div className="relative flex flex-col overflow-hidden w-full h-full py-20">
            <h1 className="flex m-10 text-2xl font-bold md:text-5xl mb-4 text-black dark:text-white max-w-4xl">Projects and Research</h1>
            <Carousel slides={slideData} />
        </div>

    </section>
  );
}