import { IconType } from "react-icons"
import { BiLogoPostgresql } from "react-icons/bi"
import { BsFiletypeSql } from "react-icons/bs"
import { DiJavascript } from "react-icons/di"
import { FaDocker } from "react-icons/fa"
import { FaGitAlt, FaGithub, FaLinkedin, FaPython, FaTwitter } from "react-icons/fa6"
import { IoLogoNodejs } from "react-icons/io5"
import { RiJavaLine, RiNextjsLine, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri"
import {
  SiDjango,
  SiExpress,
  SiGreensock,
  SiMongodb,
  SiNumpy,
  SiPostman,
  SiPrisma,
  SiPytorch,
  SiRedis,
  SiShadcnui,
  SiTensorflow,
} from "react-icons/si"
import { TbBrandCpp, TbBrandFramerMotion, TbBrandTypescript, TbHexagonLetterC } from "react-icons/tb"
import { VscTerminalLinux } from "react-icons/vsc"

const creatorName: string = "Sujal Lokhande"
const title: string = "Engineer"

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
    link: "https://twitter.com/sujal-cs",
    icon: FaTwitter
  },
  {
    id: 3,
    name: "LinkedIn",
    link: "https://linkedin.com/in/sujal-cs",
    icon: FaLinkedin
  }
]

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Blogs", href: "/blogs" },
  { name: "Projects", href: "#projects" },
]

const about = `
  <p>
    Hi, I'm Sujal Lokhande, an engineering student with a focus on programming and technology. I enjoy exploring more technologies, creating practical solutions, and continuously expanding my technical knowledge.
  </p>
  <p>
    My interests span across software development, web technologies, and exploring the intersection of creativity and code. I also have a keen interest in Machine Learning, Deep Learning, and Artificial Intelligence. While I am not an expert, I have a good understanding of PyTorch and enjoy experimenting with it to build and train models.
  </p>
`

const achivements = [
  {
    title: "Smart India Hackaton (SIH'24)- ISRO",
    lines: "Ranked 4th in the grand finale out of 49 finalist teams\n Built a deep learning solution for SAR image colorization, addressing a real-world industry problem.\n Built a web interface along with greenery rate and chatbot"
  },
  {
    title: "CodeHunt Hackathon 2025",
    lines: "Secured **2nd place** for building a scalable, functional, and user-focused product under tight deadlines\n Developed **Invest Vault**, a web app connecting startups with potential investors, using **Next.js + TypeScript**\n Recognized for **UI/UX quality, technical execution, and business relevance"
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
  { id: 3, icon: SiDjango, text: "Django" },
  { id: 4, icon: DiJavascript, text: "JavaScript" },
  { id: 5, icon: TbBrandTypescript, text: "TypeScript" },
  { id: 6, icon: RiTailwindCssFill, text: "Tailwind" },
  { id: 7, icon: SiShadcnui, text: "shadcn" },
  { id: 8, icon: TbBrandFramerMotion, text: "Motion" },
  { id: 9, icon: SiGreensock, text: "GSAP" },
  { id: 10, icon: IoLogoNodejs, text: "NodeJS" },
  { id: 11, icon: SiExpress, text: "ExpressJS" },
  { id: 12, icon: BiLogoPostgresql, text: "PostgreSQL" },
  { id: 13, icon: SiMongodb, text: "MongoDB" },
  { id: 14, icon: SiRedis, text: "Redis" },
  { id: 15, icon: SiPrisma, text: "Prisma" },
  { id: 16, icon: SiPostman, text: "Postman" },
  { id: 17, icon: FaGitAlt, text: "Git" },
  { id: 18, icon: FaGithub, text: "GitHub" },
  { id: 19, icon: FaPython, text: "Python" },
  { id: 20, icon: RiJavaLine, text: "Java" },
  { id: 21, icon: TbHexagonLetterC, text: "C" },
  { id: 22, icon: TbBrandCpp, text: "C++" },
  { id: 23, icon: BsFiletypeSql, text: "SQL" },
  { id: 24, icon: FaDocker, text: "Docker" },
  { id: 25, icon: VscTerminalLinux, text: "Linux" },
  { id: 26, icon: SiPytorch, text: "PyTorch" },
  { id: 27, icon: SiTensorflow, text: "TensorFlow" },
  { id: 28, icon: SiNumpy, text: "NumPy" },
]

export {
  creatorName,
  title,
  socials,
  navLinks,
  about,
  achivements,
  skills
}
