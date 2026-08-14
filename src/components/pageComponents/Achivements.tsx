import { SectionTitle } from "@/components/SectionTitle";
import { achivements } from "@/data/data";

export const Achivements: React.FC = () => {
  return (
    <section className="flex flex-col gap-1.5">
      <SectionTitle title="Achivements" />

      <div className="flex flex-col gap-2">
        {achivements.map((achivement, index) => (
          <div key={index} className="space-y-0.5">
            <h4 className="text-sm font-semibold text-ink md:text-base">
              {achivement.title}
            </h4>
            <div className="text-sm leading-5 md:text-base md:leading-6">
              {achivement.lines.split("\n").map((line, idx) => (
                <div key={idx} className="text-muted">
                  - {line}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
