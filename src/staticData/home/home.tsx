import React from 'react';
import BrandingIcon from "@/src/components/icons/home/BrandingIcon";
import DevOpsIcon from "@/src/components/icons/home/DevOpsIcon";
import AiIcon from "@/src/components/icons/home/AiIcon";
import EmailIcon from "@/src/components/icons/home/EmailIcon";
import LocationIcon from "@/src/components/icons/home/LocationIcon";
import PhoneIcon from "@/src/components/icons/home/PhoneIcon";
import SeoIcon from "@/src/components/icons/home/SeoIcon";
import UiUxIcon from "@/src/components/icons/home/UiUxIcon";
import WebDevIcon from "@/src/components/icons/home/WebDevIcon";
import {
  FaBriefcase,
  FaFolderOpen,
  FaRegEnvelopeOpen,
  FaTwitter,
  FaBlog,
  FaLaptopCode,
  FaWhatsapp,
} from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { BiCheckDouble, BiCommentCheck } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";

// Using string paths instead of direct imports for images
const figmaImagePath = "/assets/img/skill/figma.svg";
const webflowImagePath = "/assets/img/skill/webflow.svg";
const tailwindImagePath = "/assets/img/skill/tailwind.svg";
const htmlImagePath = "/assets/img/skill/html.svg";
const cssImagePath = "/assets/img/skill/css.svg";
const jsImagePath = "/assets/img/skill/js.svg";
const jqueryImagePath = "/assets/img/skill/jquery.svg";

const partner1ImagePath = "/assets/img/partners/logo1.svg";
const partner2ImagePath = "/assets/img/partners/logo2.svg";
const partner3ImagePath = "/assets/img/partners/logo3.svg";
const partner4ImagePath = "/assets/img/partners/logo4.svg";
const partner5ImagePath = "/assets/img/partners/logo5.svg";
const partner6ImagePath = "/assets/img/partners/logo6.svg";
const partner7ImagePath = "/assets/img/partners/logo7.svg";

const userImagePath = "/assets/img/user-sidebar-thumb.png";
const userImageLightPath = "/assets/img/user-sidebar-thumb-light.png";

const portfolioImage1ThumbPath = "/assets/img/portfolio/portfolio-img1.png";
const portfolioImage1Path = "/assets/img/portfolio/portfolio-img1.png";

const portfolioImage2ThumbPath = "/assets/img/portfolio/portfolio-img2.png";
const portfolioImage2Path = "/assets/img/portfolio/portfolio-img2.png";

const portfolioImage3ThumbPath = "/assets/img/portfolio/portfolio-img3.png";
const portfolioImage3Path = "/assets/img/portfolio/portfolio-img3.png";

const portfolioImage4ThumbPath = "/assets/img/portfolio/portfolio-img4.png";
const portfolioImage4Path = "/assets/img/portfolio/portfolio-img4.png";

const projectInner1ImagePath = "/assets/img/blog/article-inner1.png";
const projectInner2ImagePath = "/assets/img/blog/article-inner2.png";

const blog1ThumbnailPath = "/assets/img/blog/article1.png";
const blog1ImagePath = "/assets/img/blog/article1.png";
const blog2ThumbnailPath = "/assets/img/blog/article2.png";
const blog2ImagePath = "/assets/img/blog/article2.png";
const blog3ThumbnailPath = "/assets/img/blog/article3.png";
const blog3ImagePath = "/assets/img/blog/article3.png";

const author1Path = "/assets/img/testimonial/author1.png";
const author2Path = "/assets/img/testimonial/author2.png";

// Define TypeScript interfaces
interface IconHeading {
  icon: React.ReactNode;
  title: string;
  heading?: string;
  coloredHeading?: string;
  description?: string;
}

interface Partner {
  imgUrl: string;
  altText: string;
  link: string;
}

interface Technology {
  id: number;
  title: string;
  skill: string;
  url: string;
}

interface Service {
  id: number;
  Icon?: React.ComponentType;
  title: string;
  description?: string;
  number?: string;
  desc?: string;
  icon?: React.ReactNode;
}

interface Skill {
  name: string;
  image: string;
  percent?: number;
}

interface SkillCategory {
  id: number;
  name: string;
  skills: Skill[];
}

interface Experience {
  id?: number;
  date?: string;
  title?: string;
  subtitle?: string;
  platform?: string;
  duration?: string;
  position?: string;
  description: string;
}

interface Education {
  institution: string;
  duration: string;
  degree: string;
  description: string;
}

interface ProjectImage {
  thumbnail: string;
  image: string;
  thumbnailText1?: string;
  thumbnailText2?: string;
}

interface Project {
  id: number;
  image: ProjectImage;
  title: string;
  subtitle?: string;
  slug: string;
  category?: string;
  description?: string;
  technologies?: string[];
  type?: string;
  projectHeading?: any;
  projectInfo?: any[];
  projectDescription?: any;
  details?: {
    client: string;
    date: string;
    service: string;
    website: string;
  };
}

interface BlogImage {
  thumbnail: string;
  image: string;
}

interface BlogProjectDescription {
  descriptionTitle: string;
  description: string;
  descriptionListsTitle?: string;
  descriptionLists?: string[];
  projectImage?: string[];
}

interface BlogProjectInfo {
  field: string;
  value: string;
}

interface BlogInfo {
  projectHeading: {
    icon: React.ReactNode;
    title: string;
  };
  projectInfo: BlogProjectInfo[];
  projectDescription: BlogProjectDescription;
}

interface Blog {
  image: BlogImage;
  date: string;
  title: string;
  subtitle?: string;
  description?: string;
  slug: string;
  category: string;
  blogInfo?: BlogInfo;
}

interface Testimonial {
  id: number;
  name: string;
  designation: string;
  text?: string | React.ReactNode;
  image: string;
  desc?: string | React.ReactNode;
  position?: string;
}

interface ContactInfo {
  id?: number;
  Icon?: React.ReactNode | React.ComponentType;
  title?: string;
  text?: string;
  field?: string;
  data?: string;
  link?: string;
}

interface Introduce {
  iconBox: {
    Icon: React.ReactNode;
    title: string;
  };
  heading: {
    heading1: string;
    heading2: string;
  };
  desc: React.ReactNode;
  jobs: {
    id: number;
    title: string;
    icon: React.ReactNode;
  }[];
}

interface UserDetails {
  field: string;
  value: string;
}

interface UserDetailsSidebar {
  userImage: string;
  userImageLight: string;
  userName: string;
  designations: string[];
  basicInfo: {
    id: number;
    field: string;
    value: string;
    url?: string;
  }[];
  skillsInfo: {
    id: number;
    name: string;
    value: number;
  }[];
}

interface ProjectExperiences {
  title: string;
  count: number;
  postFix: boolean;
}

interface Resume {
  resumeHeading: {
    icon: React.ReactNode;
    title: string;
    heading: string;
    coloredHeading: string;
    description: string;
  };
  resumeData: Experience[];
}

interface Educations {
  educationsHeading: {
    icon: React.ReactNode;
    title: string;
    heading: string;
    coloredHeading: string;
    description: string;
  };
  educationsData: Education[];
}

interface Portfolio {
  portfolioHeading: {
    icon: React.ReactNode;
    title: string;
    heading: string;
    coloredHeading: string;
    description: string;
  };
  projectsData: Project[];
}

interface Blogs {
  blogsHeading: {
    icon: React.ReactNode;
    title: string;
    heading: string;
    coloredHeading: string;
    description: string;
  };
  blogsData: Blog[];
}

interface Testimonials {
  testimonialsHeading: {
    icon: React.ReactNode;
    title: string;
    heading: string;
    coloredHeading: string;
    description: string;
  };
  testimonialsData: Testimonial[];
}

interface Contact {
  contactInfoHeading: {
    icon: React.ReactNode;
    title: string;
    heading: string;
    coloredHeading: string;
    description: string;
  };
  contactInfoData: ContactInfo[];
}

export const introduce: Introduce = {
  iconBox: {
    Icon: <IoHomeOutline className="text-theme" size={14} />,
    title: "INTRODUCE",
  },
  heading: {
    heading1: "Code is My Canvas",
    heading2: "Let’s Paint Something Amazing",
  },
  desc: (
    <p>
      Full-Stack Developer & DevOps enthusiast with a strong background in web, mobile, and cloud-based development.
    </p>
  ),
  jobs: [
    {
      id: 1,
      title: "Available for work",
      icon: <BiCheckDouble size={25} className="text-theme mr-1" />,
    },
    {
      id: 2,
      title: "Full Time Job",
      icon: <BiCheckDouble size={25} className="text-theme mr-1" />,
    },
  ],
};

export const partners: Partner[] = [
  {
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    altText: "Python",
    link: "#",
  },

  {
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    altText: "AWS",
    link: "#",
  },

  {
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    altText: "TypeScript",
    link: "#",
  },
  {
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    altText: "Bash",
    link: "#",
  },
  {
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    altText: "HTML",
    link: "#",
  },
  {
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    altText: "PHP",
    link: "#",
  },
  {
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    altText: "CSS",
    link: "#",
  },
  {
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    altText: "MySQL",
    link: "#",
  },

  //react
  {
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    altText: "React",
    link: "#",
  },
  {
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    altText: "NodeJS",
    link: "#",
  },
  {
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    altText: "Docker",
    link: "#",
  },
  {
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    altText: "JavaScript",
    link: "#",
  },
  {
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    altText: "Kubernetes",
    link: "#",
  },
  {
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    altText: "Terraform",
    link: "#",
  },
  {
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    altText: "Jenkins",
    link: "#",
  },
];

export const technologies: Technology[] = [
  {
    id: 1,
    title: "web",
    skill: "95",
    url: "#",
  },
  {
    id: 2,
    title: "mobile",
    skill: "90",
    url: "#",
  },
  {
    id: 3,
    title: "cloud",
    skill: "85",
    url: "#",
  },
  {
    id: 4,
    title: "devops",
    skill: "92",
    url: "#",
  },
];

export const userDetailsSidebar: UserDetailsSidebar = {
  userImage: userImagePath,
  userImageLight: userImageLightPath,
  userName: "Eden Sitkovetsky",
  designations: ["Web Developer", "DevOps engineer", "cloud engineer"],
  basicInfo: [
    {
      id: 2,
      field: "Email",
      value: "edensit139@gmail.com",
    },
    {
      id: 3,
      field: "LinkedIn",
      value: "linkedin.com/in/eden-sitkovetsky",
      url: "https://www.linkedin.com/in/eden-sitkovetsky-974460238/",
    },
    {
      id: 4,
      field: "GitHub",
      value: "github.com/edensitko",
      url: "https://github.com/edensitko",
    },
  ],
  skillsInfo: [
    {
      id: 1,
      name: "web",
      value: 95,
    },
    {
      id: 2,
      name: "mobile",
      value: 90,
    },
    {
      id: 4,
      name: "devops",
      value: 92,
    },
  ],
};

export const userDetails = [
  { field: "First Name", value: "Eden" },
  { field: "Last Name", value: "Sitkovetsky" },
  { field: "Nationality", value: "Israeli" },
  { field: "Freelance", value: "Available" },
];

export const projectExperiences: ProjectExperiences[] = [
  {
    title: "Handled Projects",
    count: 30,
    postFix: true,
  },
  {
    title: "github repositories",
    count: 15,
    postFix: true,
  },
];

export const services: {
  servicesHeading: IconHeading;
  servicesData: Service[];
} = {
  servicesHeading: {
    icon: <FaBriefcase className="text-theme" />,
    title: "SERVICES",
    heading: "My",
    coloredHeading: "Services",
    description:
      "Professional services I offer across cloud engineering, web development, DevOps, and infrastructure management.",
  },
  servicesData: [
    {
      id: 1,
      number: "01",
      title: "CLOUD ENGINEERING",
      desc: "Designing and implementing scalable solutions on AWS, Azure, and GCP. Expertise in EC2, S3, Lambda, IAM, and cloud-native architectures.",
      icon: <SeoIcon />,
    },
    {
      id: 2,
      number: "02",
      title: "DEVOPS & CI/CD",
      desc: "Setting up automated pipelines with GitHub Actions, Azure DevOps, Jenkins. Containerization with Docker and orchestration with Kubernetes.",
      icon: <DevOpsIcon />,
    },
    {
      id: 3,
      number: "03",
      title: "WEB DEVELOPMENT",
      desc: "Full-stack development with JavaScript/TypeScript, React, Node.js, and modern frameworks. RESTful APIs and database integration.",
      icon: <WebDevIcon />,
    },
    {
      id: 4,
      number: "04",
      title: "INFRASTRUCTURE AS CODE",
      desc: "Automating infrastructure provisioning with Terraform, CloudFormation, and AWS CDK. Configuration management with Ansible.",
      icon: <AiIcon />,
    },
    {
      id: 5,
      number: "05",
      title: "DATABASE MANAGEMENT",
      desc: "Design and optimization of relational and NoSQL databases. Experience with MySQL, DynamoDB, Redshift, and data warehousing solutions.",
      icon: <BrandingIcon />,
    },
    {
      id: 6,
      number: "06",
      title: "SYSTEM ADMINISTRATION",
      desc: "Managing Windows and Linux servers, networking infrastructure, security implementations, and performance optimization.",
      icon: <UiUxIcon />,
    },
  ],
};

export const skills: {
  skillsHeading: IconHeading;
  skillsData: Skill[];
  skillCategories: SkillCategory[];
} = {
  skillsHeading: {
    icon: <FaLaptopCode className="text-theme" />,
    title: "SKILLS",
    heading: "Technical ",
    coloredHeading: "Expertise",
    description:
      "A comprehensive overview of my technical skills and proficiency levels across various domains.",
  },
  skillsData: [
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
      percent: 95,
      name: "Windows",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      percent: 90,
      name: "Linux",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
      percent: 85,
      name: "macOS",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      percent: 92,
      name: "VS Code",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      percent: 88,
      name: "GitHub",
    },
    {
      image: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/amazonwebservices.svg",
      percent: 90,
      name: "AWS",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      percent: 85,
      name: "Azure",
    },
  ],
  skillCategories: [
    {
      id: 1,
      name: "Operating Systems",
      skills: [
        { name: "Windows", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
        { name: "macOS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" },
        { name: "Linux", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      ],
    },
    {
      id: 2,
      name: "Software / Tools",
      skills: [
        { name: "Visual Studio Code", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "GitHub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Xcode", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg" },
        { name: "Terraform", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
        { name: "Ansible", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
        { name: "Jenkins", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
        { name: "Kubernetes ", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "VMware", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" },
        { name: "WordPress", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
        { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      ],
    },
    {
      id: 3,
      name: "Cloud and Database",
      skills: [
        { name: "AWS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Firebase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
        { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      ],
    },
    {
      id: 5,
      name: "Programming Languages",
      skills: [
        { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "NodeJS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "JavaScript ", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Bash Scripting", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
        { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "PHP", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Dart", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
        { name: "C ", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      ],
    },
    {
      id: 7,
      name: " Frameworks",
      skills: [
        { name: "Express.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Apache", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
        { name: "Flask", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Angular", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
        { name: "Flutter", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      ],
    },
    {
      id: 8,
      name: "Languages",
      skills: [
        { name: "English", image: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/gb.svg" },
        { name: "Russian", image: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ru.svg" },
        { name: "Hebrew", image: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/il.svg" },
      ],
    },
  ],
};

export const resume: Resume = {
  resumeHeading: {
    icon: <FaFolderOpen className="text-theme" />,
    title: "RESUME",
    heading: "Work",
    coloredHeading: "Experience",
    description:
      "My professional journey as a full-stack developer, with experience in web and mobile development across various projects and companies.",
  },
  resumeData: [
    {
      platform: "Election Committee",
      duration: "Mar 2024 - Present",
      position: "Technical Support Specialist",
      description:
        "Working on a new software project for the Election Committee. Providing technical support and troubleshooting for the election management system. Assisting with software implementation and user training.",
    },
    {
      platform: "morevision",
      duration: "Feb 2023 - Dec 2023",
      position: "Website Developer",
      description:
        "Built and maintained more than 100 websites for company clients using WordPress, HTML, CSS, PHP and JavaScript. Collaborated with the development team to create effective UI/UX designs. Optimized sites for speed and search engine optimization.",
    },
    {
      platform: "Freelance",
      duration: "Oct 2022 - Present",
      position: "Web & Mobile Developer",
      description:
        "Developing web and mobile applications for various clients and projects. Developed Motiv, a fitness app for teachers in the Ministry of Education, now available on the App Store and Google Play. Built custom websites using HTML, CSS, JavaScript, and WordPress. Implemented responsive designs and integrated third-party APIs for enhanced functionality.",
    },
  ],
};

export const educations: Educations = {
  educationsHeading: {
    icon: "",
    title: "",
    heading: "My",
    coloredHeading: "Education",
    description:
      "My educational background and professional training in software development and programming.",
  },
  educationsData: [
    {
      institution: "John Brice",
      duration: "Jan 2023 - Aug 2023",
      degree: "Full-Stack Web Development",
      description:
        "Completed a comprehensive Full-Stack Development course, covering front-end and back-end technologies. Gained hands-on experience with frameworks like React and Node.js, database management with MongoDB, and essential skills in API development, version control, and deployment. Developed proficiency in building, testing, and deploying dynamic web applications from scratch.",
    },
  ],
};

export const portfolio: Portfolio = {
  portfolioHeading: {
    icon: <GrTasks className="text-theme" />,
    title: "PORTFOLIO",
    heading: "Featured ",
    coloredHeading: "Projects",
    description:
      "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
  },
  projectsData: [
    {
      id: 1,
      image: {
        thumbnail: portfolioImage1ThumbPath,
        image: portfolioImage1Path,
        thumbnailText1: "Design",
        thumbnailText2: "Specialization",
      },
      type: "Branding",
      title: "Three wine glasses filled with candies",
      slug: "three-wine-glasses-filled-with-candies",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Project Details",
      },
      projectInfo: [
        {
          field: "CLIENT",
          value: "Envato Theme",
        },
        {
          field: "SERVICES:",
          value: "Tips & Tricks, Design",
        },
        {
          field: "DURATION",
          value: "108 hrs",
        },
      ],
      projectDescription: {
        descriptionTitle: "Project Description",
        description:
          "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
        descriptionLists: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
        ],
        projectImage: [projectInner1ImagePath, projectInner2ImagePath],
      },
    },
    {
      id: 2,
      image: {
        thumbnail: portfolioImage2ThumbPath,
        image: portfolioImage2Path,
        thumbnailText1: "Design",
        thumbnailText2: "Specialization",
      },
      type: "Branding",
      title: "Three wine glasses filled with candies",
      slug: "three-wine-glasses-filled-with-candies",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Project Details",
      },
      projectInfo: [
        {
          field: "CLIENT",
          value: "Envato Theme",
        },
        {
          field: "SERVICES",
          value: "Tips & Tricks, Design",
        },
        {
          field: "DURATION",
          value: "108 hrs",
        },
      ],
      projectDescription: {
        descriptionTitle: "Project Description",
        description:
          "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
        descriptionLists: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
        ],
        projectImage: [projectInner2ImagePath, projectInner1ImagePath],
      },
    },
    {
      id: 3,
      image: {
        thumbnail: portfolioImage3ThumbPath,
        image: portfolioImage3Path,
        thumbnailText1: "Design",
        thumbnailText2: "Specialization",
      },
      type: "Branding",
      title: "Three wine glasses filled with candies",
      slug: "three-wine-glasses-filled-with-candies",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Project Details",
      },
      projectInfo: [
        {
          field: "CLIENT",
          value: "Envato Theme",
        },
        {
          field: "SERVICES:",
          value: "Tips & Tricks, Design",
        },
        {
          field: "DURATION",
          value: "108 hrs",
        },
      ],
      projectDescription: {
        descriptionTitle: "Project Description",
        description:
          "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
        descriptionLists: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
        ],
        projectImage: [projectInner2ImagePath, projectInner1ImagePath],
      },
    },
    {
      id: 4,
      image: {
        thumbnail: portfolioImage4ThumbPath,
        image: portfolioImage4Path,
        thumbnailText1: "Design",
        thumbnailText2: "Specialization",
      },
      type: "Branding",
      title: "Three wine glasses filled with candies",
      slug: "three-wine-glasses-filled-with-candies",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Project Details",
      },
      projectInfo: [
        {
          field: "CLIENT",
          value: "Envato Theme",
        },
        {
          field: "SERVICES:",
          value: "Tips & Tricks, Design",
        },
        {
          field: "DURATION",
          value: "108 hrs",
        },
      ],
      projectDescription: {
        descriptionTitle: "Project Description",
        description:
          "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
        descriptionLists: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
        ],
        projectImage: [projectInner2ImagePath, projectInner1ImagePath],
      },
    },
  ],
};

export const blogs: Blogs = {
  blogsHeading: {
    icon: <FaBlog className="text-theme" />,
    title: "BLOG",
    heading: "Latest",
    coloredHeading: "Insights",
    description:
      "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
  },
  blogsData: [
    {
      image: {
        thumbnail: blog1ThumbnailPath,
        image: blog1ImagePath,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Elevate your mornings with perfectly brewed coffee",
      slug: "elevate-your-mornings-with-perfectly-brewed-coffee",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "November 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2ImagePath, projectInner1ImagePath],
        },
      },
    },
    {
      image: {
        thumbnail: blog2ThumbnailPath,
        image: blog2ImagePath,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Mastering the clock: A guide to time management",
      slug: "mastering-the-clock-a-guide-to-time-management",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "November 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2ImagePath, projectInner1ImagePath],
        },
      },
    },
    {
      image: {
        thumbnail: blog3ThumbnailPath,
        image: blog3ImagePath,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Homeward bound: Crafting a productive home office",
      slug: "homeward-bound-crafting-a-productive-home-office",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "November 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2ImagePath, projectInner1ImagePath],
        },
      },
    },
    {
      image: {
        thumbnail: blog1ThumbnailPath,
        image: blog1ImagePath,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Elevate your mornings with perfectly brewed coffee",
      slug: "elevate-your-mornings-with-perfectly-brewed-coffee",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "November 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2ImagePath, projectInner1ImagePath],
        },
      },
    },
    {
      image: {
        thumbnail: blog2ThumbnailPath,
        image: blog2ImagePath,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Mastering the clock: A guide to time management",
      slug: "mastering-the-clock-a-guide-to-time-management",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "November 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2ImagePath, projectInner1ImagePath],
        },
      },
    },
  ],
};

export const testimonials: Testimonials = {
  testimonialsHeading: {
    icon: <BiCommentCheck className="text-theme" />,
    title: "TESTIMONIAL",
    heading: "What",
    coloredHeading: "People Say",
    description:
      "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
  },
  testimonialsData: [
    {
      id: 1,
      image: author1Path,
      desc: (
        <div className="text-sm md:text-[15px] leading-loose content">
          Working with <span className="font-semibold text-theme">Reddick</span>{" "}
          is a game-changer. Their coding expertise and commitment to quality
          make every project a success.
        </div>
      ),
      name: "Alex Johnson",
      designation: "Developer",
      position: "Developer",
    },
    {
      id: 2,
      image: author2Path,
      desc: (
        <div className="text-sm md:text-[15px] leading-loose content">
          <span className="font-semibold text-theme">Reddick</span> exceeds
          expectations with top-tier coding skills. Reliable, collaborative, and
          a true asset to any project. Highly recommended
        </div>
      ),
      name: "Mily Martin",
      designation: "CEO @IT Theme",
      position: "CEO @IT Theme",
    },
    {
      id: 3,
      image: author1Path,
      desc: (
        <div className="text-sm md:text-[15px] leading-loose content">
          Working with <span className="font-semibold text-theme">Reddick</span>{" "}
          is a game-changer. Their coding expertise and commitment to quality
          make every project a success.
        </div>
      ),
      name: "Alex Johnson",
      designation: "Developer",
      position: "Developer",
    },
  ],
};

export const contactInfo: Contact = {
  contactInfoHeading: {
    icon: <FaRegEnvelopeOpen className="text-theme" />,
    title: "CONTACT",
    heading: "Contact",
    coloredHeading: "Me.",
    description:
      "Feel free to reach out for project inquiries, collaborations, or just to say hello. I'm always open to discussing new opportunities.",
  },
  contactInfoData: [
    {
      id: 1,
      field: "Location",
      data: "Tel Aviv, Israel",
      Icon: <LocationIcon />,
    },
    {
      id: 2,
      field: "E-mail",
      data: "edensit139@gmail.com",
      Icon: <EmailIcon />,
    },
    {
      id: 3,
      field: "Phone",
      data: "+972 58 588 7744",
      Icon: <PhoneIcon />,
      link: "tel:+972585887744",
    },
    {
      id: 4,
      field: "WhatsApp",
      data: "Message me on WhatsApp",
      Icon: <FaWhatsapp className="text-green-500" />,
      link: "https://wa.me/972585887744",
    },
  ],
};
