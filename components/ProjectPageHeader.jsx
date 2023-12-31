import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectPageHeader = () => {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".header-container",
        start: "bottom center-=100",
        end: "top top=+100",
        // markers: true,
        toggleActions: "play none none reverse",
      },
    });
    gsap.registerPlugin(ScrollTrigger);

    tl.fromTo(
      ".tech",
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
          amount: 0.5,
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
        ".project-header > div",
        {
          duration: 1.3,
          opacity: 0,
          autoAlpha: 0,
          ease: "power4.out",
          y: 30,
        },
        {
          duration: 1.3,
          opacity: 1,
          autoAlpha: 1,
          ease: "power4.out",
          y: 0,
          stagger: {
            from: "end",
            each: 0.2,
          },
        },
        "-=0.8"
      );
  }, []);
  return (
    <div className="header-container max-w-[1440px] group mb-28">
      <div className="project-header  text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-wide text-gray-600 dark:text-gray-400 ">
        <div>Frontend</div>
        <div>Projects &</div>
        <div>Cases</div>
      </div>

      <div className="hr w-full h-[1px] bg-slate-700"></div>
      <div className="flex flex-row flex-wrap lg:flex-col tracking-widest text-lg text-gray-400 dark:text-gray-400 mt-3 ml-1">
        <div className="mr-1 tech">HTML |</div>
        <div className="mr-1 tech">CSS |</div>
        <div className="mr-1 tech">Bootstrap |</div>
        <div className="mr-1 tech">Tailwind |</div>
        <div className="mr-1 tech"> JavaScript |</div>
        <div className="mr-1 tech"> React.js |</div>
        <div className="mr-1 tech"> Next.js |</div>
        <div className="mr-1 tech"> GreenSock / Gsap |</div>
      </div>
    </div>
  );
};

export default ProjectPageHeader;
