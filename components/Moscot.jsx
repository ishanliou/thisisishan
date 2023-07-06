import React from "react";

const Moscot = () => {
  return (
    <section className="moscot-project project mt-28">
      <div className="project-container max-w-[1040px] w-full h-full mx-auto px-4 py-10 flex justify-center items-center bg-[#fbcd03] rounded-l-full rounded-tr-full">
        <div className="video-container w-100 h-full ">
          <video className="max-w-xl h-auto" controls autoPlay loop muted>
            <source src="/video/moscot_s.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Moscot;
