import ExperienceItem from "./ExperienceItem";
import { motion } from "framer-motion";
import { container, item } from "../animations/animation";

export default function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      description:
        "Developed a merchant monitoring system integrated with natural language processing microservices to \
        identify early indicators of high-risk merchant activity and potential fraud.",
      company: "ADVANCE.AI - ADVANCE.BizQ",
      from: "Nov 2023",
      until: "Present",
      skills: [
        "Django",
        "ReactJS",
        "PostgreSQL",
        "Docker",
        "Kakfa",
        "Nginx",
        "Linux",
        "AWS",
      ],
    },
    {
      title: "Software Engineer (Python)",
      description:
        "Built API services and tools to provide DNS hosting and certificate manager services for over thousands of domains.",
      company: "Merquri Pte Ltd.",
      from: "Jul 2021",
      until: "Present",
      skills: [
        "Flask",
        "ReactJS",
        "MySQL",
        "Docker",
        "Kubernetes",
        "Gitlab CI",
        "AWS",
      ],
    },
    {
      title: "Software Engineer (Python)",
      description:
        "Built API services and tools to provide DNS hosting and certificate manager services for over thousands of domains.",
      company: "Merquri Pte Ltd.",
      from: "Jul 2021",
      until: "Present",
      skills: [
        "Flask",
        "ReactJS",
        "MySQL",
        "Docker",
        "Kubernetes",
        "Gitlab CI",
        "AWS",
      ],
    },
    {
      title: "Software Engineer",
      description:
        "Built and enhanced Django and PHP application that provides hard disk drive log parsing and analyzing service to internal customers. Built the frontend dashboard using HTML, CSS and JavaScript.",
      company: "Seagate",
      from: "Feb 2021",
      until: "Jul 2021",
      skills: ["Django", "Ajax", "HTML", "CSS", "JavaScript", "jQuery", "PHP"],
    },
  ];
  return (
    <div id="experience" className="m-auto w-[80%] mb-12">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-4">
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          className="flex flex-col items-center w-full"
        >
          <motion.li variants={item} className="mb-6 text-4xl lg:text-6xl">{`<Experience/>`}</motion.li>
          {experiences.map((item, id) => (
            <ExperienceItem
              key={id}
              title={item.title}
              description={item.description}
              company={item.company}
              from={item.from}
              until={item.until}
              skills={item.skills}
            />
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
