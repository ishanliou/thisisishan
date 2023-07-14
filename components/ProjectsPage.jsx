import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { projectsData } from "./data/projectsData";
import ProjectSingle from "./ProjectSingle";

import ProjectPageHeader from "./ProjectPageHeader";
import ArrowLeft from "./ArrowLeft";

const ProjectsPage = () => {
  const useArrayRef = () => {
    const projectsRef = useRef([]);
    projectsRef.current = [];
    return [projectsRef, (ref) => ref && projectsRef.current.push(ref)];
  };

  const [projectsRef, setProjectsRef] = useArrayRef();

  useEffect(() => {
    const tl = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger);

    // const GSAP = require("gsap/CSSRulePlugin");
    // const { CSSRulePlugin } = GSAP;
    // gsap.registerPlugin(CSSRulePlugin);

    // console.log(projectsRef.current);

    projectsRef.current.forEach((project) => {
      const wrapper = project.querySelector(".reveal");
      const video = project.querySelector(".video-container");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: project,
          start: "top-=250 center+=100",
          end: "bottom +=80",
          // markers: true,
          toggleActions: "play none none reverse",
        },
      });

      tl.to(wrapper, {
        ease: "power2.out",
        duration: 1.8,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      });

      tl.to(
        video,
        {
          ease: "power2.out",
          duration: 1.8,
          scale: 1,
        },
        "<"
      );
    });
  }, [projectsRef]);

  return (
    <main className="project-sections flex flex-wrap justify-center lg:justify-between gap-x-2.5 lg:gap-x-2 gap-y-10 md:gap-y-28">
      {projectsData.map((project) => (
        <ProjectSingle
          key={project.name}
          name={project.name}
          hasMargin={project.hasMargin}
          backgroundColor={project.backgroundColor}
          backgroundMinWidth={project.backgroundMinWidth}
          backgroundMinHeight={project.backgroundMinHeight}
          image={project.image}
          borderRadiusRight={project.borderRadiusRight}
          borderRadiusLeft={project.borderRadiusLeft}
          sectionWidth={project.sectionWidth}
          backgroundWidth={project.backgroundWidth}
          sectionHeight={project.sectionHeight}
          videoWidth={project.videoWidth}
          setProjectsRef={setProjectsRef}
        />
      ))}
    </main>
  );
};

export default ProjectsPage;
