import ThemeContext from "@/store/ThemeContext";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/image";
import { useContext, useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";

export default function Header() {
  const themeContext: {
    isDarkTheme?: boolean;
    toggleThemeHandler: () => void;
    colorPalette?: string;
    setColorPaletteHandler: (color: string) => void;
  } = useContext(ThemeContext);
  const {
    isDarkTheme,
    toggleThemeHandler,
    setColorPaletteHandler,
    colorPalette,
  } = themeContext;
  const toggleTheme = () => {
    toggleThemeHandler();
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavItems = (
    <>
      <AnchorLink className="hover:underline" href="#about">
        About
      </AnchorLink>
      <AnchorLink className="hover:underline" href="#experience">
        Experience
      </AnchorLink>
      <AnchorLink className="hover:underline" href="#project">
        Project
      </AnchorLink>
      <AnchorLink className="hover:underline" href="#contact">
        Contact
      </AnchorLink>
    </>
  );

  const ThemeIcons = isDarkTheme ? MdOutlineLightMode : MdOutlineDarkMode;

  const colorPalettes = (
    <div className="flex flex-row gap-2 justify-center items-center">
      <div
        onClick={() => setColorPaletteHandler("peach")}
        className="rounded-full bg-peach w-4 h-4 border-[2px] border-white cursor-pointer hover:opacity-80 hover:w-5 hover:h-5"
      ></div>
      <div
        onClick={() => setColorPaletteHandler("matcha")}
        className="rounded-full bg-matcha w-4 h-4 border-[2px] border-white cursor-pointer hover:opacity-80 hover:w-5 hover:h-5"
      ></div>
      <div
        onClick={() => setColorPaletteHandler("beige")}
        className="rounded-full bg-beige w-4 h-4 border-[2px] border-white cursor-pointer hover:opacity-80 hover:w-5 hover:h-5"
      ></div>
    </div>
  );
  return (
    <header className="text-black dark:text-white border-transparent sticky top-0 z-10 backdrop-filter backdrop-blur-lg dark:backdrop-blur-lg dark:bg-opacity-30 bg-opacity-30 p-4">
      <nav className="text-xl lg:flex flex-row items-center">
        <div className="hidden lg:flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <div className="border border-transparent rounded-full p-0.5 bg-white">
            <Image
              width="150"
              height="150"
              className="h-8 w-auto"
              src="/images/logo.png"
              alt=""
            />
            </div>
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-auto justify-end gap-8">
          {colorPalettes}
          <ThemeIcons
            className="cursor-pointer hover:opacity-80"
            onClick={toggleTheme}
            size={32}
          />
          {NavItems}
        </div>

        {/* mobile */}
        {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <AiOutlineMenu
              className="cursor-pointer"
              size={32}
              aria-hidden="true"
            />
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            className={`fixed lg:hidden w-full md:w-1/2 h-screen top-0 left-0 p-4 bg-${colorPalette} dark:bg-black dark:bg-opacity-80 dark:backdrop-blur-lg bg-opacity-80 backdrop-blur-lg`}
          >
            <div className="flex flex-col items-start gap-8 text-xl">
              <ImCross
                className="cursor-pointer text-gray-700 self-end"
                size={18}
                aria-hidden="true"
                onClick={() => setMobileMenuOpen(false)}
              />

              {NavItems}
              {isDarkTheme ? (
                <MdOutlineLightMode
                  className="cursor-pointer"
                  onClick={toggleTheme}
                  size={32}
                />
              ) : (
                <MdOutlineDarkMode
                  className="cursor-pointer"
                  onClick={toggleTheme}
                  size={32}
                />
              )}
              {colorPalettes}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
