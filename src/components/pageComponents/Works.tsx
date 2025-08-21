import { SectionTitle } from "@/components/SectionTitle";

export const Works: React.FC = () => {
  return (
    <section className="flex flex-col gap-1 md:gap-2">
      <SectionTitle title="Work" />
      <div className="">
        Open to internships, hackathons, freelance projects, and more.
      </div>
    </section>
  );
};
