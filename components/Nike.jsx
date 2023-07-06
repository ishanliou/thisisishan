import React from "react";

const Nike = () => {
  return (
    <section className="nike-project project mt-28">
      <div className="project-container max-w-[1240px] w-7/12 h-full mx-auto p-10 flex justify-center items-center bg-[#db4c44] rounded-r-full">
        <div className="video-container w-100 h-full ">
          <video className="w-80 h-auto" controls autoPlay loop muted>
            <source src="/video/nike.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Nike;
