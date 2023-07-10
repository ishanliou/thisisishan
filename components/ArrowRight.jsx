import React, { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";

import { VscArrowCircleRight } from "react-icons/vsc";

const ArrowRight = () => {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 1.8 });
    tl.fromTo(
      ".arrow-right",
      {
        duration: 1.8,
        opacity: 0,
        autoAlpha: 0,
        y: 20,
        ease: "power4.out",
      },
      { duration: 1.8, opacity: 1, autoAlpha: 1, y: 0, ease: "power4.out" }
    );
  });
  return (
    <div className=" text-4xl text-gray-600 flex justify-center  dark:text-gray-400 cursor-pointer   arrow-right arrow">
      <Link href="/projects">
        <VscArrowCircleRight className="hover:scale-110 hover:text-sky-500 ease-out duration-300 " />
      </Link>
    </div>
  );
};

export default ArrowRight;
