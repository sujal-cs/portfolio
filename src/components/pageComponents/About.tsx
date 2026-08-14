import { SectionTitle } from "@/components/SectionTitle";
import { aboutParagraphs } from "@/data/data";

export const About: React.FC = () => {
  return (
    <section id="about" className="flex flex-col gap-1.5">
      <SectionTitle title="About Me" />
      <div className="flex flex-col gap-1 text-sm leading-5 text-muted md:text-base md:leading-6">
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};
