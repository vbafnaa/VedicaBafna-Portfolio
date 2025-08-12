import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FaLink } from "react-icons/fa6";
// import railmadadImge from "@/components/assets/RailMadad.png";

export function TimelineComp() {
  const data = [
    {
      title: "December 2024 - June 2025",
      content: (
        <div>
          <p className="mb-2 text-md text-neutral-800 md:text-3xl dark:text-violet-300 font-bold underline ">
            Machine Learning Intern  
          </p>
          <p className="mb-3 text-md font-normal italic text-neutral-800 md:text-2xl dark:text-neutral-300">
            <a href="https://cris.org.in/"  >
              Center of Railway Information Systems - Ministry of Railways, Government of India  <FaLink style={{ display: "inline" }}/>
            </a>
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-sm dark:text-neutral-300 text-justify">
          ➜ Designed a hierarchical masked LSTM using Tensorflow with dynamic subtype gating via a custom ‘MaskedDense’ layer, enforcing class-conditional output spaces and hierarchical consistency, achieving a 94.92% type and 89.62% subtype classification accuracy on a blind test-set of 100k real-world complaints with millisecond inference times on CPU. 
          <br/><br/> ➜ Generated synthetic complaints via a Markov Chain system to augment underrepresented complaint classes, filling 88% of missing entries; improved dataset coverage by 4.67% and conducted ablation studies to validate tradeoffs in label quality vs. data quantity. 
          <br/><br/> ➜ Exhibited data-centric AI with a NLI-based mislabel detection pipeline to correct manual annotation, increasing accuracy by 18.7%. The entire pipeline is currently being deployed on the RailMadad website.
          </p>
          {/* <ul>
            <li className="mb-8 text-sm font-normal text-neutral-800 md:text-sm dark:text-neutral-300">
               Designed a hierarchical masked LSTM using Tensorflow with dynamic subtype gating via a custom ‘MaskedDense’ layer, enforcing class-conditional output spaces and hierarchical consistency, achieving a 94.92% type and 89.62% subtype classification accuracy on a blind test-set of 100k real-world complaints with millisecond inference times on CPU.
            </li>
            <li className="mb-8 text-sm font-normal text-neutral-800 md:text-sm dark:text-neutral-300">
               Generated synthetic complaints via a Markov Chain system to augment underrepresented complaint classes, filling 88% of missing entries; improved dataset coverage by 4.67% and conducted ablation studies to validate tradeoffs in label quality vs. data quantity. 
            </li>
            <li className="mb-8 text-sm font-normal text-neutral-800 md:text-sm dark:text-neutral-300">
              Exhibited data-centric AI with a NLI-based mislabel detection pipeline to correct manual annotation, increasing accuracy by 18.7%
             </li>
          </ul> */}
          
          <div className="grid grid-cols-1 gap-4">
            <a href="https://railmadad.indianrailways.gov.in/madad/final/home.jsp">
            <img
              src="components\assets\RailMadad.png"
              alt="RailMadadWebsiteImage"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />

            </a>
          </div>
        </div>
      ),
    },
    {
      title: "August 2024 - November 2024",
      content: (
       <div>
          <p className="mb-2 text-md text-neutral-800 md:text-3xl dark:text-violet-300 font-bold underline ">
            Technical Project Management Intern  
          </p>
          <p className="mb-3 text-md font-normal italic text-neutral-800 md:text-2xl dark:text-neutral-200">
            <a href="https://avioncloud.in/">

              Avion India <FaLink style={{ display: "inline" }}/>            
            </a>
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-sm dark:text-neutral-300 text-justify">
          ➜ Coordinated cross-functional collaboration between operations and sales teams, driving on-time task completion & deliverable quality through Agile methodologies, shadowing the Scrum Master and leveraging Jira-based project tracking. 
          <br/><br/> ➜ Developed and automated data analysis workflows using Python and SQL designed interactive Tableau dashboards to monitor Key Performance Indicators including revenue growth, cost optimization, client segmentation and team productivity. 
          <br/><br/> ➜ Maintained relationships with 10+ local and international clients, primarily in the IT and Finance Industry.
          </p>
          <div className="grid grid-cols-1 gap-4">
            {/* <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            /> */}
          </div>
        </div>
      ),
    },
   
    {
      title: "June 2024 - August 2024",
      content: (
       <div>
          <p className="mb-2 text-md text-neutral-800 md:text-3xl dark:text-violet-300 font-bold underline ">
            Artificial Intelligence and Machine Learning Intern                   
          </p>
          <p className="mb-3 text-md font-normal italic text-neutral-800 md:text-2xl dark:text-neutral-300">
            <a href="https://www.linkedin.com/company/tesseract-imaging/posts/?feedView=all">
              JIO Tesseract, Reliance Industries <FaLink style={{ display: "inline" }}/>

            </a>
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-sm dark:text-neutral-300 text-justify">
          ➜ Engineered and optimized AI-driven use cases for smart-glasses equipped with a multilingual assistant and hands-free speech-to-speech translation, leveraging a pipeline of ML models and LLMs; reduced response times by over 93% for real-time interaction.
          <br/><br/> ➜	Implemented a testing platform using ReactJS & FastAPI to validate pipeline compatibility across diverse use cases; deployed initial prototypes on Microsoft Azure using containerized services enabling scalable integration into the core application architecture.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "June 2023 - August 2023",
      content: (
       <div>
          <p className="mb-2 text-md text-neutral-800 md:text-3xl dark:text-violet-300 font-bold underline ">
            ReactJS Front End Development Intern                    
          </p>
          <p className="mb-3 text-md font-normal italic text-neutral-800 md:text-2xl dark:text-neutral-300">
            <a href="https://jwero.ai/">
              Jwero AI, Tanika Tech <FaLink style={{ display: "inline" }}/>

            </a>
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-sm dark:text-neutral-300 text-justify">
          ➜ Jwero AI is a startup and a Meta Business Partner, focused on automating and digitalizing the jewellery industry enabling jewellers to scale globally and prioritize customer engagement.
          <br/><br/> ➜	Developed iterations of a centralized social media management platform using ReactJS to integrate multiple platforms (Facebook, Instagram, Google My Business), consolidating data sources and performance metrics into a single, user-friendly interface. 
          <br/><br/> ➜	Integrated AI-powered caption generation and implemented Redux with Facebook’s Graph API to deliver seamless rendering of posts, likes, comments and engagement statistics hence enabling full-cycle content publishing without switching between applications. Rendered real-time notifications using WebSockets to alert users of new activity, increasing platform engagement and responsiveness.
interface. 
          </p>
          <div className="grid grid-cols-1 gap-4">
            {/* <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            /> */}
          </div>
        </div>
      ),
    },
   
  ];
  return (
    <section id="timeline">

    <div className="relative w-full overflow-clip bg">
      <Timeline data={data} />
    </div>
    </section>
  );
}
