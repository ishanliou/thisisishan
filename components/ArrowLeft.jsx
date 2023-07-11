import React, { useEffect } from "react";
import Link from "next/link";
import { VscArrowCircleLeft } from "react-icons/vsc";
import { gsap } from "gsap";

const ArrowLeft = () => {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 1 });
    tl.fromTo(
      ".arrow-left",
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
    <div className=" text-4xl text-gray-600  dark:text-gray-400 mb-4 arrow-left">
      <Link href="/">
        <VscArrowCircleLeft className="hover:scale-110 ease-out duration-300 hover:text-sky-500 " />
      </Link>
    </div>
  );
};

export default ArrowLeft;
