import { Container } from "@/components/Container"

export const Navbar = () => {

  const Links = [
    { name: "About", href: "/about" },
    { name: "Blogs", href: "/blogs" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <Container>
      <nav className="flex items-baseline justify-between">
        <span className="text-3xl">SL.</span>
        <div className="flex space-x-4">
          {Links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg hover:underline"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </Container>
  )
}
