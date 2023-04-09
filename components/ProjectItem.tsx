import Image from "next/image";

interface ProjectItemProps {
  title: string;
  description: string;
  link: string;
  techstack: string[];
  imageUrl?: string;
}
const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  link,
  techstack,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col w-full lg:w-[30%] shadow-xl border-transparent rounded-md justify-center items-center bg-opacity-30 bg-white mb-4 cursor-pointer hover:opacity-80">
      <a href={link} target="_blank">
        <div className="p-4">
          <Image
            className="m-auto"
            width="800"
            height="800"
            alt="project image"
            src={`/images/${imageUrl}`}
          />
          <p className="mt-2 self-start text-xl">{title}</p>
          <p className="font-sans text-lg">{description}</p>{" "}
        </div>

        <div className="inline-flex flex-wrap bg-opacity-60 bg-white w-full p-2 rounded-b-md">
          <p className="mr-2">Tech stack</p>
          {techstack.map((item, id) => (
            <span
              key={id}
              className="mr-2 font-sans font-semibold text-md underline"
            >
              {item}
            </span>
          ))}
        </div>
      </a>
    </div>
  );
};
export default ProjectItem;
