import React from "react";

const ProjectSingle = ({
  name,
  backgroundColor,
  backgroundMinWidth,
  backgroundMinHeight,
  image,
  hasMargin,
  borderRadiusRight,
  borderRadiusLeft,
  sectionWidth,
  backgroundWidth,
  sectionHeight,
  videoWidth,
  setProjectsRef,
}) => {
  // console.log(name);
  return (
    <section
      className={`${name}-project  project ${sectionWidth}
      min-w-[340px] ${sectionHeight} ${hasMargin ? "md:mt-56" : ""}`}
      ref={setProjectsRef}
    >
      <div
        className={`project-container relative ${backgroundWidth} w-full h-full mx-auto p-4 ${backgroundMinWidth} ${backgroundMinHeight}
        flex justify-center items-center ${backgroundColor} ${borderRadiusRight} reveal ${borderRadiusLeft}`}
      >
        {/* <div className="absolute bottom-0 left-0 h-16 w-16 ml-10 uppercase text-sm md:text-l tracking-widest text-gray-100">
          {name}
        </div> */}
        <div className={`video-container w-100 h-auto`}>
          <video
            className={` ${videoWidth} h-auto `}
            controls
            autoPlay
            playsInline
            loop
            muted
          >
            <source src={image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default ProjectSingle;
