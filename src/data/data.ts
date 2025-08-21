const thankMSG = "more curious and want to know more about me -- just scroll. Thanks for reaching out!!"

const intro = "Hi, I'm Sujal Lokhande, an engineering student exploring the world of ML, DL, AI, and web development. I'm currently honing my skills in Next.js, PyTorch, and Linux."

const creatorName: string = "Sujal Lokhande"
const title: string = "Engineer"

interface Social {
  id: number;
  name: string;
  link: string;
  icon: string;
}

const socials: Social[] = [
  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/sujal-cs",
    icon: "icons/github.svg"
  },
  {
    id: 2,
    name: "Twitter",
    link: "https://twitter.com/sujal-cs",
    icon: "icons/twitter.svg"
  },
  {
    id: 3,
    name: "LinkedIn",
    link: "https://linkedin.com/in/sujal-cs",
    icon: "icons/linkedin.svg"
  }
];

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Blogs", href: "/blogs" },
    { name: "Projects", href: "/projects" },
  ]

export {
  creatorName,
  title,
  socials,
  navLinks  
}