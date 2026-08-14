import { SectionTitle } from "../SectionTitle";
import { education } from "@/data/data";

export const Education: React.FC = () => {
  return (
    <section className="flex flex-col gap-1.5">
      <SectionTitle title="Education" />
      <div className="flex flex-col gap-2">
        {education.map((edu) => (
          <div key={edu.id} className="space-y-0.5">
            <div className="flex justify-between gap-3">
              <h4 className="text-sm font-semibold md:text-base">
                {edu.title}
              </h4>
              {edu.duration && (
                <p className="text-sm font-light text-muted italic md:text-base">
                  {edu.duration}
                </p>
              )}
            </div>
            {edu.location && (
              <p className="text-sm leading-5 text-muted md:text-base md:leading-6">
                - {edu.location}
              </p>
            )}
            {edu.grade && (
              <p className="text-sm leading-5 text-muted md:text-base md:leading-6">
                - {edu.grade}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
