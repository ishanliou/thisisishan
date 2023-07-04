import React from "react";

const BaileyNelson = () => {
  return (
    <section className="baileyNelson-project project mt-28">
      <div className="project-container max-w-[1040px] w-full h-full mx-auto p-4 flex justify-center items-center bg-[#dfd9fe] rounded-r-full rounded-bl-full">
        <div className="video-container w-100 h-full ">
          <video className="w-80 h-auto]" controls autoPlay loop muted>
            <source src="/video/baileyNelson.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default BaileyNelson;
