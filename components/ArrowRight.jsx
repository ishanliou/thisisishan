import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const ArrowRight = () => {
  return (
    <div className=" text-3xl ">
      <Link href="/projects">
        {" "}
        <BsArrowRight />
      </Link>
    </div>
  );
};

export default ArrowRight;
