import React, { useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { gsap } from "gsap";
import ToggleButton from "./ToggleButton";

const Main = () => {
  let tl = gsap.timeline({ delay: 0.2 });

  useEffect(() => {
    tl.to(".animation", {
      duration: 1,
      autoAlpha: 1,
      opacity: 1,
      y: -20,
      ease: "power2.out",
      stagger: {
        each: 0.1,
        ease: "sine.out",
      },
    });
  }, [tl]);

  return (
    <div id="main" className="w-full h-screen text-center dark:bg-[#121212]">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div className="animation">
          <ToggleButton />
          <p className="uppercase text-sm md:text-l tracking-widest text-gray-400 animation">
            Let&apos;s build something together
          </p>

          <h1 className="py-4 text-gray-700 tracking-widest animation dark:text-gray-200">
            this is <span className="text-[#5651e5] animate-text">ishan</span>
          </h1>

          <p className="uppercase text-md md:text-xl tracking-widest text-gray-600 dark:text-gray-400 animation">
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
