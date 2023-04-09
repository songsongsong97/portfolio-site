import Image from "next/image";
import { useContext } from "react";
import ThemeContext from "@/store/ThemeContext";

export default function About() {
  const themeContext: {
    colorPalette?: string;
  } = useContext(ThemeContext);
  const { colorPalette } = themeContext;
  return (
    <div id="about" className="m-auto w-[80%] mb-12">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-4">
        <div className="flex flex-col items-start w-full lg:w-1/2">
          <h1
            className={`text-6xl mb-2 dark:text-${colorPalette} text-dark${colorPalette}`}
          >{`<About/>`}</h1>
          <p className="font-sans text-xl mt-2 mb-4">
            {`Hello, I'm Song Lee Yee (韩丽仪), a software engineer based in
            Singapore. I have a passion for technology and a constant desire to
            learn and grow my skills. I enjoy the process of building aesthetic
            web appliciations, and my goal is to become a better developer.`}
          </p>
          <p className="font-sans text-xl mt-2 mb-4">
            {`I was born in Kluang, Malaysia, a small town famous for its "tau sha
            piah" (a Chinese pastry) and coffee powder. During my leisure time,
            I enjoy working out and hanging out with friends, but most of the
            time, I prefer to chill at home!`}
          </p>
        </div>
        <Image width="300" height="300" alt="profile" src="/images/pic.jpg" />
      </div>
    </div>
  );
}