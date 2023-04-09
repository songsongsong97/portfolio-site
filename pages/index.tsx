import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import { useContext } from "react";
import ThemeContext from "@/store/ThemeContext";

export default function Home() {
  const themeContext: {
    colorPalette?: string;
  } = useContext(ThemeContext);
  const { colorPalette } = themeContext;

  return (
    <div
      className={`flex flex-col min-h-screen items-stretch dark:text-white dark:bg-black bg-${colorPalette} text-black`}
    >
      <Header />
      <Intro />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
