import Image from "next/image";
import Button from "./Button";
import Typewriter from "typewriter-effect";
import { useContext } from "react";
import ThemeContext from "@/store/ThemeContext";

export default function Intro() {
  const themeContext: {
    colorPalette?: string;
  } = useContext(ThemeContext);
  const { colorPalette } = themeContext;
  return (
    <div className="w-full xl:w-3/4 m-auto">
    <div className="flex flex-row items-center justify-center h-screen gap-4 mb-6">
      <div className="flex flex-col items-start w-1/2 lg:w-[40%]">
        <h1 className={`flex-auto font-serif text-6xl dark:text-${colorPalette} text-dark${colorPalette}`}>
          <Typewriter
            options={{
              strings: [
                "Hi! I am Lee Yee",
                "A Software Engineer",
                "A Food Lover",
                "A Traveller",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className="font-sans text-xl mt-2 mb-4">
          Want to know more about me?
        </p>
        <Button large label="Let's go!" onClick={() => {}} />
      </div>
      <Image
        className="hidden lg:block"
        width="200"
        height="200"
        alt="profile"
        src="/images/pic.png"
      />
    </div>
    </div>
  );
}
