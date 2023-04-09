import { useContext } from "react";
import ThemeContext from "@/store/ThemeContext";

interface ExperienceItemProps {
  title: string;
  description: string;
  company: string;
  from: string;
  until: string;
  skills: string[];
}
const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  description,
  company,
  from,
  until,
  skills
}) => {
    const themeContext: {
        colorPalette?: string;
      } = useContext(ThemeContext);
      const {colorPalette
      } = themeContext;
    
      let colorStyle = "";
      if (colorPalette === "beige") {
        colorStyle = "text-darkbeige";
      } else if (colorPalette === "peach") {
        colorStyle = "text-darkpeach";
      } else {
        colorStyle = "text-darkmatcha";
      }
      return (
    <div className="flex flex-col w-full shadow-xl border-transparent rounded-md justify-center items-start bg-opacity-30 bg-white mb-4 cursor-pointer hover:opacity-80 text-black dark:text-white">
      <h1 className="p-2">{title}</h1>
      <div className={`flex flex-row w-full justify-between items-center px-2 font-semibold font-sans ${colorStyle}`}>
        <p>{company}</p>
        <p>
          {from} - {until}
        </p>
      </div>
      <p className="font-sans p-2">{description}</p>
      <div className="inline-flex flex-wrap bg-opacity-60 bg-white w-full p-2 rounded-b-md">
          <p className="mr-2">Tech stack</p>
          {skills.map((item, id) => (
            <span
              key={id}
              className="mr-2 font-sans font-semibold text-md underline"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
  );
};
export default ExperienceItem;
