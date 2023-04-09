import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import { useContext } from "react";
import ThemeContext from "@/store/ThemeContext";
import Experience from "@/components/Experience";

export default function Home() {
  const themeContext: {
    colorPalette?: string;
  } = useContext(ThemeContext);
  const { colorPalette } = themeContext;

  let colorStyle = "";
  if (colorPalette === "beige") {
    colorStyle = "bg-beige text-darkbeige dark:text-beige";
  } else if (colorPalette === "peach") {
    colorStyle = "bg-peach text-darkpeach dark:text-peach";
  } else {
    colorStyle = "bg-matcha text-darkmatcha dark:text-matcha";
  }

  return (
    <div
      className={`flex flex-col min-h-screen items-stretch dark:bg-black ${colorStyle}`}
    >
      <Header />
      <Intro />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
