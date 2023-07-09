import React, { useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { gsap } from "gsap";
import ToggleButton from "./ToggleButton";
import ArrowRight from "./ArrowRight";

const Main = () => {
  const thisis = "this is ";

  useEffect(() => {
    let tl = gsap.timeline({ delay: 0.2 });

    tl.to(".animation", {
      duration: 1,
      autoAlpha: 1,
      opacity: 1,
      y: -20,
      ease: "power2.out",
      stagger: {
        each: 0.1,
        ease: "power2.out",
      },
    });
  }, []);

  return (
    <div id="main" className="w-full h-screen text-center dark:bg-[#121212]">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <ArrowRight />
        <div className="animation">
          <ToggleButton />

          <p className="uppercase text-sm md:text-l tracking-wider text-gray-400 animation">
            Let&apos;s build something together
          </p>

          <h1 className="py-4 text-gray-700 tracking-wider animation dark:text-gray-200">
            {thisis.split("").map((letter, index) => (
              <span
                className="py-4 text-gray-700 tracking-wider animation dark:text-gray-200"
                key={index}
              >
                {letter}
              </span>
            ))}

            <span className="text-[#5651e5] animate-text animation">ishan</span>
          </h1>

          <p className="uppercase text-md md:text-xl tracking-wider text-gray-600 dark:text-gray-400 animation">
            A Front-End Developer
          </p>
          <div className="flex items-center justify-center max-w-[330px] m-auto py-4 animation">
            <a
              href="https://www.linkedin.com/in/ishanliou/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn className="dark:fill-gray-400" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
