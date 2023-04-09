import { createContext, ReactElement, useEffect, useState } from "react";
const ThemeContext = createContext({
  isDarkTheme: true,
  toggleThemeHandler: () => {},
  colorPalette: "default",
  setColorPaletteHandler: (color: string) => {},
});

interface ThemePropsInterface {
  children?: JSX.Element | Array<JSX.Element>;
}

export function ThemeContextProvider(props: ThemePropsInterface): ReactElement {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [colorPalette, setColorPalette] = useState("default");
  useEffect(() => initialThemeHandler());

  function isLocalStorageEmpty(): boolean {
    return !localStorage.getItem("isDarkTheme");
  }

  function initialThemeHandler(): void {
    if (isLocalStorageEmpty()) {
      localStorage.setItem("isDarkTheme", `true`);
      document!.querySelector("body")!.classList.add("dark");
      setIsDarkTheme(true);
    } else {
      const isDarkTheme: boolean = JSON.parse(
        localStorage.getItem("isDarkTheme")!
      );
      isDarkTheme && document!.querySelector("body")!.classList.add("dark");
      setIsDarkTheme(() => {
        return isDarkTheme;
      });
    }
  }

  function toggleThemeHandler(): void {
    const isDarkTheme: boolean = JSON.parse(
      localStorage.getItem("isDarkTheme")!
    );
    setIsDarkTheme(!isDarkTheme);
    toggleDarkClassToBody();
    setValueToLocalStorage();
  }

  function toggleDarkClassToBody(): void {
    document!.querySelector("body")!.classList.toggle("dark");
  }

  function setValueToLocalStorage(): void {
    localStorage.setItem("isDarkTheme", `${!isDarkTheme}`);
  }

  function setColorPaletteHandler(color: string): void {
    setColorPalette(color);
  }
  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        toggleThemeHandler,
        colorPalette,
        setColorPaletteHandler,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
