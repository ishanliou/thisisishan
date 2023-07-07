import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { projectsData } from "./data/projectsData";
import ProjectSingle from "./ProjectSingle";
import ProjectPageTitle from "./ProjectPageTitle";

gsap.registerPlugin(ScrollTrigger);

const ProjectsPage = () => {
  const [projectsRef, setProjectsRef] = useArrayRef();

  function useArrayRef() {
    const projectsRef = useRef([]);
    projectsRef.current = [];
    return [projectsRef, (ref) => ref && projectsRef.current.push(ref)];
  }

  useEffect(() => {
    const tl = gsap.timeline();

    const GSAP = require("gsap/CSSRulePlugin");
    const { CSSRulePlugin } = GSAP;
    gsap.registerPlugin(CSSRulePlugin);

    // console.log(projectsRef.current);

    projectsRef.current.forEach((project) => {
      const wrapper = project.querySelector(".reveal");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: project,
          start: "top center+=30",
          // start: "top bottom",
          end: "bottom +=80",
          markers: true,
          toggleActions: "play none none reverse",
          // toggleActions: "restart none none reset",
          // scrub: true,
        },
      });

      tl.to(wrapper, {
        ease: "power2.out",
        duration: 1,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      });
    });
  }, []);

  return (
    <>
      <ProjectPageTitle />
      {projectsData.map((project) => (
        <ProjectSingle
          key={project.name}
          name={project.name}
          backgroundColor={project.backgroundColor}
          image={project.image}
          setProjectsRef={setProjectsRef}
        />
      ))}
    </>
  );
};

export default ProjectsPage;
