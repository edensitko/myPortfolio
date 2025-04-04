import {
  projectExperiences,
  technologies,
  userDetails,
  userDetailsSidebar,
} from "@/src/staticData/home/home";
import { CiUser } from "react-icons/ci";
import AboutTechnologies from "./AboutTechnologies";
import UserDetail from "./UserDetail";
import ProjectExperience from "./ProjectExperience";

const AboutMe = () => {
  return (
    <div
      data-scroll-index="1"
      id="about"
      className="py-3.5  max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
    >
      <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl about-section lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <CiUser className="text-theme" size={14} />
          ABOUT ME
        </div>
        <div className="mt-7 md:mt-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            About <span className="font-semibold text-theme">Me</span>
          </h2>
          <p className="max-w-2xl mt-4 md:mt-6 subtitle">
            Hi, my name is{" "}
            <span className="text-black dark:text-white">
              {userDetailsSidebar?.userName}
            </span>{" "}
           Hi, I’m Eden Sitkovetsky – a passionate Full-Stack Developer & DevOps enthusiast with a strong background in web, mobile, and cloud-based development. This portfolio showcases my work across multiple domains including:
<br/> <br/>
⚙️ DevOps & Cloud Infrastructure
Projects involving Terraform, Docker, AWS, CI/CD pipelines, Prometheus, and Alerting systems.
<br/><br/>
📱 Mobile App Development
Beautiful and functional apps built with Flutter and Firebase, tailored for real-world needs like scheduling, chat, and more.
<br/><br/>
🌐 Web Development
Interactive web apps and SaaS platforms built with React, Next.js, Node.js, and integrated AI tools (OpenAI, Serverless).
<br/><br/>
🧠 AI & Automation
Smart systems using OpenAI, automation scripts, and prompt-based tools to streamline workflows and enhance user experience.
<br/>

          </p>
        </div>
        <div className="mt-6 section-content">
          <div className="inline-flex flex-wrap items-center gap-2 mb-5 text-sm md:gap-4">
            {technologies?.map((tech) => (
              <AboutTechnologies key={tech?.id} {...tech} />
            ))}
          </div>

          <ul className="grid mt-4 mb-10 text-sm lg:mt-6 md:grid-cols-2 gap-x-8 gap-y-3">
            {userDetails?.map((singlInfo, i) => (
              <UserDetail key={i} {...singlInfo} />
            ))}
          </ul>

          <ul className="grid grid-cols-2 gap-6 counters md:grid-cols-4 xl:gap-8">
            {projectExperiences?.map((exp, i) => (
              <ProjectExperience key={i} {...exp} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
