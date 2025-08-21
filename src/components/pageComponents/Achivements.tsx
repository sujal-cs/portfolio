import { SectionTitle } from "@/components/SectionTitle";
import { achivements } from "@/data/data";

export const Achivements: React.FC = () => {
  return (
    <section className="flex flex-col gap-1 md:gap-2">
      <SectionTitle title="Achivements" />

      {achivements.map((achivement, index) => (
        <div key={index}>
          <h4 className="font-semibold">{achivement.title}</h4>
          <div>
            {achivement.lines.split("\n").map((line, idx) => (
              <div key={idx}>- {line}</div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};


