import { SectionTitle } from "@/components/SectionTitle";
import { achievements } from "@/data/data";

export const Achievements: React.FC = () => {
  return (
    <section className="flex flex-col gap-1.5">
      <SectionTitle title="Achievements" />

      <div className="flex flex-col gap-2">
        {achievements.map((achievement, index) => (
          <div key={index} className="space-y-0.5">
            <h4 className="text-sm font-semibold text-ink md:text-base">
              {achievement.title}
            </h4>
            <div className="text-sm leading-5 md:text-base md:leading-6">
              {achievement.lines.split("\n").map((line, idx) => (
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
