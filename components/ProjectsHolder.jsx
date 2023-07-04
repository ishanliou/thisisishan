import BaileyNelson from "@/components/BaileyNelson";
import Grammarly from "@/components/Grammarly";
import Kind from "@/components/Kind";
import Moscot from "@/components/Moscot";
import Nike from "@/components/Nike";
import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProjectsHolder = () => {
  const ref = useRef(null);

  const triggerRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline();
    console.log(ref.current);
    tl.fromTo(
      "span",
      {
        duration: 1.8,
        opacity: 0,
        y: -80,
        delay: 1,
        ease: "power4.out",
        stagger: {
          amount: 0.3,
        },
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "power4.out",
        stagger: {
          amount: 0.3,
        },
      }
    )
      .fromTo(
        ".hr",
        {
          duration: 1.8,
          width: 0,
          ease: "power4.out",
          // delay: 1,
        },
        {
          duration: 1,
          width: "100%",
          ease: "power4.out",
        },
        "-=1"
      )
      .fromTo(
        ".project-title",
        {
          duration: 1.5,
          opacity: 0,
          y: 20,
          ease: "power4.out",
        },
        {
          duration: 1.5,
          opacity: 1,
          y: 0,
          ease: "power4.out",
        },
        "-=0.7"
      )
      .from(ref.current, {
        scrollTrigger: {
          trigger: ".project",
          start: "top top",
          end: "+=200",
          scrub: 1,
          markers: true,
        },
        x: -200,
      });
  }, []);

  return (
    <div id="project-container" className="w-full h-screen dark:bg-[#121212] ">
      <div className="max-w-[1440px] w-full h-200 p-2 group mx-20 my-20">
        <p className=" project-title uppercase text-md md:text-7xl font-bold tracking-widest text-gray-600 dark:text-gray-400 ">
          Frontend
        </p>

        <div className="hr w-full h-[1px] bg-slate-700"></div>
        <div className="flex justify-end tracking-widest text-gray-400 dark:text-gray-400">
          <span className="mr-1">HTML |</span>
          <span className="mr-1">CSS |</span>
          <span className="mr-1">Bootstrap |</span>
          <span className="mr-1">Tailwind |</span>
          <span className="mr-1"> JavaScript |</span>
          <span className="mr-1"> React.js |</span>
          <span className="mr-1"> Next.js |</span>
          <span className="mr-1"> Greensock/ Gsap</span>
        </div>
      </div>
      <div
        className="projects-container max-w-[1440px] w-full h-200 p-2 group mx-20 my-20"
        ref={ref}
      >
        <Grammarly />
        <Moscot />
        <BaileyNelson />
        <Kind />
        <Nike />
      </div>
    </div>
  );
};

export default ProjectsHolder;
