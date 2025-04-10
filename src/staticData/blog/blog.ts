import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { IconType } from "react-icons";

// Using string paths instead of direct imports for images
const comment1ImagePath = "/assets/img/blog/comment-author.png";
const comment2ImagePath = "/assets/img/blog/comment-author2.png";

interface SocialLink {
  icon: IconType;
  link: string;
}

interface Tag {
  title: string;
  link: string;
}

interface CommentAuthor {
  name: string;
  imageSrc: string;
}

interface Comment {
  id: number;
  author: CommentAuthor;
  date: string;
  text: string;
  reply: string;
}

export const blogSocials: SocialLink[] = [
  {
    icon: FaInstagram,
    link: "#",
  },
  {
    icon: FaTwitter,
    link: "#",
  },
  {
    icon: BiWorld,
    link: "#",
  },
  {
    icon: FaGithub,
    link: "#",
  },
];

export const tags: Tag[] = [
  {
    title: "HTML5",
    link: "#",
  },
  {
    title: "CSS3",
    link: "#",
  },
  {
    title: "JavaScript",
    link: "#",
  },
  {
    title: "React",
    link: "#",
  },
  {
    title: "Next.js",
    link: "#",
  },
  {
    title: "Tailwind",
    link: "#",
  },
];

export const comments: Comment[] = [
  {
    id: 1,
    author: {
      name: "Kristin Watson",
      imageSrc: comment1ImagePath,
    },
    date: "Feb 28, 2023 at 10:15 am",
    text: "Etiam vitae leo et diam pellentesque porta. Sed eleifend ultricies risus, vel rutrum erat commodo ut. Praesent finibus congue euismod. Nullam scelerisque massa vel augue placerat, a tempor sem egestas. Curabitur placerat finibus lacus.",
    reply: "",
  },
  {
    id: 2,
    author: {
      name: "Jane Cooper",
      imageSrc: comment2ImagePath,
    },
    date: "Feb 28, 2023 at 10:15 am",
    text: "Etiam vitae leo et diam pellentesque porta. Sed eleifend ultricies risus, vel rutrum erat commodo ut. Praesent finibus congue euismod. Nullam scelerisque massa vel augue placerat, a tempor sem egestas. Curabitur placerat finibus lacus.",
    reply: "",
  },
  {
    id: 3,
    author: {
      name: "Kristin Watson",
      imageSrc: comment1ImagePath,
    },
    date: "Feb 28, 2023 at 10:15 am",
    text: "Etiam vitae leo et diam pellentesque porta. Sed eleifend ultricies risus, vel rutrum erat commodo ut. Praesent finibus congue euismod. Nullam scelerisque massa vel augue placerat, a tempor sem egestas. Curabitur placerat finibus lacus.",
    reply: "",
  },
];
