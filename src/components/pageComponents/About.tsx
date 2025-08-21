import { SectionTitle } from "@/components/SectionTitle";

export const About: React.FC = () => {
  return (
    <section id="#about" className="flex flex-col gap-1 md:gap-2">
      <SectionTitle title="About Me" />
      <div className="flex flex-col text-base gap-0.5" >
        <p>
          Hi, I'm Sujal Lokhande, an engineering student with a focus on programming and technology. I enjoy exploring more technologies, creating practical solutions, and continuously expanding my technical knowledge.
        </p>
        <p>
          My interests span across software development, web technologies, and exploring the intersection of creativity and code. I also have a keen interest in Machine Learning, Deep Learning, and Artificial Intelligence. While I am not an expert, I have a good understanding of PyTorch and enjoy experimenting with it to build and train models.
        </p>
      </div>
    </section>
  );
};