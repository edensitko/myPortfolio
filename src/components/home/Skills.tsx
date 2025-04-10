"use client";

import { skills } from "@/src/staticData/home/home";
import { useEffect } from "react";
import SectionHeading from "../shared/SectionHeading";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const Skills = () => {
  useEffect(() => {
    // Initialize any effects if needed
  }, []);

  return (
    <div
      data-scroll-index="3"
      id="skill"
      className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
    >
      <div className="relative px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl service-section lg:p-10 2xl:p-13">
        <SectionHeading {...skills?.skillsHeading} />

        {/* Detailed Skills Categories */}
        <div className="mt-10">
          {skills?.skillCategories?.map((category) => (
            <div key={category.id} className="mb-10">
              <h3 className="mb-6 text-xl font-medium text-black dark:text-white border-b border-platinum dark:border-metalBlack pb-2">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="skill-item flex items-center p-3 rounded-lg border border-platinum dark:border-metalBlack hover:border-theme dark:hover:border-theme transition-all duration-300"
                  >
                    {skill.image ? (
                      <div className="mr-3 flex-shrink-0">
                        <Image 
                          src={skill.image} 
                          width={24} 
                          height={24} 
                          alt={skill.name}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                    ) : (
                      <div className="mr-3 text-theme">
                        <FaCheck />
                      </div>
                    )}
                    <span className="text-sm font-medium text-black dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
