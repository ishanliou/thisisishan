import React from "react";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

const ArrowLeft = () => {
  return (
    <div className=" text-3xl ">
      <Link href="/">
        <BsArrowLeft />
      </Link>
    </div>
  );
};

export default ArrowLeft;
