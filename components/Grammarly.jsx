import React from "react";

const Grammarly = () => {
  return (
    <section className="grammarly-project project mt-28">
      <div className="project-container relative max-w-[1040px] w-full h-full mx-auto p-4 flex justify-center items-center bg-[#147a9c] rounded-r-full rounded-tl-full">
        <div className="absolute bottom-0 left-0 h-16 w-16 ml-10 uppercase text-sm md:text-l tracking-widest text-gray-100">
          Grammarly
        </div>
        <div className="video-container w-100 h-full ">
          <video className="w-80 h-auto]" controls autoPlay loop muted>
            <source src="/video/grammarly.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Grammarly;
