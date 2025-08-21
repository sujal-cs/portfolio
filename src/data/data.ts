import { IconType } from "react-icons"
import { BiLogoPostgresql } from "react-icons/bi"
import { BsFiletypeSql } from "react-icons/bs"
import { DiJavascript } from "react-icons/di"
import { FaDocker } from "react-icons/fa"
import { FaGitAlt, FaGithub, FaLinkedin, FaPython, FaTwitter } from "react-icons/fa6"
import { IoLogoNodejs } from "react-icons/io5"
import { RiJavaLine, RiNextjsLine, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri"
import {
  SiExpress,
  SiMongodb,
  SiNumpy,
  SiPostman,
  SiPrisma,
  SiPytorch,
  SiTensorflow,
} from "react-icons/si"
import { TbBrandCpp, TbBrandTypescript, TbHexagonLetterC } from "react-icons/tb"
import { VscTerminalLinux } from "react-icons/vsc"

const creatorName: string = "Sujal Lokhande"

const title: string = "Engineer"

const images = ["monkey.png", "space-shuttle.png", "electronics.png", "camera.png"];

interface Social {
  id: number;
  name: string;
  link: string;
  icon?: IconType;
}

const socials: Social[] = [
  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/sujal-cs",
    icon: FaGithub
  },
  {
    id: 2,
    name: "Twitter",
    link: "https://x.com/SujalLokhande70",
    icon: FaTwitter
  },
  {
    id: 3,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sujal-lokhande-s70",
    icon: FaLinkedin
  }
]

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Blogs", href: "/blogs" },
  { name: "Projects", href: "#projects" },
]

const heroImg = "/images/sujal-computer.jpg"

const achivements = [
  {
    title: "Smart India Hackaton (SIH'24)- ISRO",
    lines: "Ranked 4th in the grand finale out of 49 finalist teams\n Built a deep learning solution for SAR image colorization, addressing a real-world industry problem.\n Built a web interface along with greenery rate and chatbot"
  },
  {
    title: "CodeHunt Hackathon 2025",
    lines: "Secured 2nd place for building a scalable, functional, and user-focused product under tight deadlines\n Developed Invest Vault, a web app connecting startups with potential investors, using Next.js + TypeScript\n Recognized for UI/UX quality, technical execution, and business relevance"
  },
  {
    title: "Synergy 2025- Technical poster presentation",
    lines: "3rd position for effictively simplifying complex concepts into engaging, understandable content\n Presented a research-backed technical project with clear visualization and structured flow\n Highlighted strengths in communication, technical storytelling, and design clarity"
  },
  {
    title: "HackHazards Hackathon 2025",
    lines: "Ranked in the top 100 teams among 2900+ teams and 5700+ solo participants\n Designed and developed a gamified habit tracker insipired by Solo Leveling\n Built a web based habit tracker using vite-react with UI inspired by Solo Leveling anime"
  }
]

const skills = [
  { id: 1, icon: RiReactjsLine, text: "ReactJs" },
  { id: 2, icon: RiNextjsLine, text: "NextJs" },
  { id: 3, icon: DiJavascript, text: "JavaScript" },
  { id: 4, icon: TbBrandTypescript, text: "TypeScript" },
  { id: 5, icon: RiTailwindCssFill, text: "Tailwind" },
  { id: 6, icon: IoLogoNodejs, text: "NodeJS" },
  { id: 7, icon: SiExpress, text: "ExpressJS" },
  { id: 8, icon: BiLogoPostgresql, text: "PostgreSQL" },
  { id: 9, icon: SiMongodb, text: "MongoDB" },
  { id: 10, icon: SiPrisma, text: "Prisma" },
  { id: 11, icon: SiPostman, text: "Postman" },
  { id: 12, icon: FaGitAlt, text: "Git" },
  { id: 13, icon: FaGithub, text: "GitHub" },
  { id: 14, icon: FaPython, text: "Python" },
  { id: 15, icon: RiJavaLine, text: "Java" },
  { id: 16, icon: TbHexagonLetterC, text: "C" },
  { id: 17, icon: TbBrandCpp, text: "C++" },
  { id: 18, icon: BsFiletypeSql, text: "SQL" },
  { id: 19, icon: FaDocker, text: "Docker" },
  { id: 20, icon: VscTerminalLinux, text: "Linux" },
  { id: 21, icon: SiPytorch, text: "PyTorch" },
  { id: 22, icon: SiTensorflow, text: "TensorFlow" },
  { id: 23, icon: SiNumpy, text: "NumPy" },
]


export {
  creatorName,
  title,
  images,
  socials,
  navLinks,
  heroImg,
  achivements,
  skills
}
