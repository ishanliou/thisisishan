import React from "react";

const Kind = () => {
  return (
    <section className="kind-project project mt-28">
      <div className="project-container max-w-[640px] w-7/12 h-full mx-auto p-10 flex justify-center items-center bg-black rounded-l-full rounded-tr-full">
        <div className="video-container w-100 h-full ">
          <video className="w-80 h-auto]" controls autoPlay loop muted>
            <source src="/video/kind.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Kind;
