import React, { useEffect } from "react";
import { gsap } from "gsap";

const ProjectPageTitle = () => {
  useEffect(() => {
    let tl = gsap.timeline();

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
      );
  }, []);
  return (
    <>
      <div className="max-w-[1440px] w-full h-200 p-2 group mx-20 my-20">
        <p className=" project-title uppercase text-md md:text-7xl font-bold tracking-widest text-gray-600 dark:text-gray-400 ">
          Frontend
        </p>

        <div className="hr w-full h-[1px] bg-slate-700"></div>
        <div className="flex-col  tracking-widest text-gray-400 dark:text-gray-400 mt-1">
          <div className="mr-1 tech">HTML |</div>
          <div className="mr-1 tech">CSS |</div>
          <div className="mr-1 tech">Bootstrap |</div>
          <div className="mr-1 tech">Tailwind |</div>
          <div className="mr-1 tech"> JavaScript |</div>
          <div className="mr-1 tech"> React.js |</div>
          <div className="mr-1 tech"> Next.js |</div>
          <div className="mr-1 tech"> Greensock Gsap |</div>
        </div>
      </div>
    </>
  );
};

export default ProjectPageTitle;
