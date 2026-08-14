import { SectionTitle } from "@/components/SectionTitle";

export const Works: React.FC = () => {
  return (
    <section id="work" className="flex flex-col gap-1 md:gap-2">
      <SectionTitle title="Work" />
      <div className="text-sm text-muted md:text-base">
        Open to internships, hackathons, freelance projects, and more.
      </div>
    </section>
  );
};
