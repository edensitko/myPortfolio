"use client";

import Typewriter from "typewriter-effect";

const TypeWriterComp = ({
  skillsData = ["Web Developer", "DevOps engineer", "cloud engineer" ,"frontend"],
}) => {
  return (
    <div className="custom-typewriter">
      <Typewriter
        options={{
          strings: skillsData,
          autoStart: true,
          loop: true,
          delay: 20,
        }}
      />
    </div>
  );
};

export default TypeWriterComp;
