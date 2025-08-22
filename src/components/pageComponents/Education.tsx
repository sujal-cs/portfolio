import { SectionTitle } from "../SectionTitle";

export const Education: React.FC = () => {
  const education = [
    {
      title: "10th SSC Maharasthra Board",
      duration: "2021-22",
      location: "S.V.M Motala",
      grade: "92.60%"
    },
    {
      title: "Diploma In Information Technology",
      duration: "2022-25",
      location: "Government Polytechnic, Nagpur",
      grade: "85.25%"
    }
  ]

  return (
    <section className="flex flex-col gap-1 md:gap-2">
      <SectionTitle title="Education" />
      {education.map((edu, index) => (
        <div key={index}>
          <div className="flex justify-between">
            <h4 className="font-semibold">{edu.title}</h4>
            {edu.duration && <p className="italic font-light">{edu.duration}</p>}
          </div>
          {edu.location && <p className="text-gray-700 dark:text-gray-400">- {edu.location}</p>}
          {edu.grade && <p className="text-gray-700 dark:text-gray-400">- {edu.grade}</p>}
        </div>
      ))}
    </section>
  );
}