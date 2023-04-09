import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { useContext } from "react";
import ThemeContext from "@/store/ThemeContext";

export default function Contact() {
  const themeContext: {
    colorPalette?: string;
  } = useContext(ThemeContext);
  const { colorPalette } = themeContext;
  return (
    <div id="contact" className="m-auto w-[80%] xl:w-1/2 mb-12">
      <div className="flex flex-col items-center justify-center gap-4 mb-4">
        <h1
          className={`text-6xl mb-2 dark:text-${colorPalette} text-dark${colorPalette}`}
        >{`<Contact/>`}</h1>
        <p className="font-sans text-xl mt-2 mb-4 text-left">
          Feel free to reach out to me at{" "}
          <span className="underline">
            <a href="mailto:songleeyee97@gmail.com">songleeyee97@gmail.com</a>
          </span>
          . You could also follow me on{" "}
          <span className="underline">
            <a
              href="https://www.linkedin.com/in/song-lee-yee-7205b0139/"
              target="_blank"
            >
              LinkedIn
            </a>
          </span>{" "}
          and{" "}
          <span className="underline">
            <a href="https://github.com/songsongsong97" target="_blank">
              Github
            </a>
          </span>{" "}
          .
        </p>
        <div className="flex flex-row gap-8 justify-center items-center m-4">
          <a
            className="font-sans"
            href="https://www.linkedin.com/in/song-lee-yee-7205b0139/"
            target="_blank"
          >
            <AiFillLinkedin size={48} />
          </a>
          <a
            className="font-sans"
            href="https://github.com/songsongsong97"
            target="_blank"
          >
            <AiFillGithub size={48} />
          </a>
          <a className="font-sans" href="mailto:songleeyee97@gmail.com">
            <AiOutlineMail size={48} />
          </a>
        </div>
      </div>
    </div>
  );
}
