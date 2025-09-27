import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Achievements() {
  const testimonials = [
    {
      name:
        "All India Rank 4 Amazon ML Challenge",
      designation: "2024",
      quote:"",
      src: "assets/AmazonMLChallenge.png",
    },
    {
      name:
        "Winner of Smart India Hackathon ",
      designation: "2023",
      quote: "",
      src: "assets/SIH2023WINNER.jpeg",
    },
    {
      name:
        "Rank 1 Nation-wide Bajaj HackRx 4.0",
      designation: "2023",
      quote: "",
      src: "assets/BajajHackRx4WINNER.jpeg", 
    },
    {
      name:
        "11th Position Internationally European Rover Challenge-Onsite Edition",
      designation: "2024",
      quote: "",
      src: "assets/ERC.png",
    },
    {
      name:
        "2nd Position Internationally European Rover Challenge - Remote Edition",
      designation: "2023",
      quote: "",
      src: "assets/ERC2023Remote.jpeg",
    },
    {
      name:
        "Placed 3rd at the International Rover Challenge",
      designation: "2024",
      quote: "",
      src: "assets/IRC20243rd.JPG",
    },
    {
      name:
        "Placed 2nd at the International Spcae Drone Challenge",
      designation: "2024",
      quote: "",
      src: "assets/ISDC2nd.jpeg",
    },
    {
      name:
        "Top 10 Female Student Leaders in India & Top 80 Unstoppable E-School Leaders",
      designation: "2024",
      quote: "",
      src: "assets/Unstop.png",
    },
    {
      name:
        "Placed 2nd in the Lines of Code 5.0 Hackathon",
      designation: "2023",
      quote: "",
      src: "assets/2ndLOC5.jpeg",
    },
    {
      name:
        "Team Manager - DJS Antariksh",
      designation: "October 2023 - October 2024",
      quote: "",
      src: "assets/TeamManagerDJSA.png",
    },
    {
      name:
        "Co-founder and Research Executive - DJS Nova",
      designation: "May 2023 - June 2024",
      quote: "",
      src: "assets/ResearchExecutiveNova.png",
    },
    {
      name:
        "Head of Creatives Department - DJS Express",
      designation: "February 2023 - February 2024",
      quote: "",
      src: "assets/HODCreativesExpress.jpeg",
    },
  ];
  return(
    <section id="achievements">
          <h1 className="flex m-10 text-3xl text-center font-bold md:text-5xl mb-4 text-black dark:text-white max-w-4xl">Achievements and Leadership</h1>
        <AnimatedTestimonials testimonials={testimonials} />

    </section>

  )  
}
