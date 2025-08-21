import { SectionTitle } from "@/components/SectionTitle";
import { skills } from "@/data/data";

export const Skills: React.FC = () => {
  return (
    <section className="flex flex-col gap-1 md:gap-2">
      <SectionTitle title="Skills" />
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <a key={skill.id} className="btn flex items-center gap-1">
            <skill.icon />
            {skill.text}
          </a>
        ))}
      </div>
    </section>
  );
};
