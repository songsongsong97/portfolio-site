import { ThemeContextProvider } from "@/store/ThemeContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Saira, Anton } from "next/font/google";

const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <main
        className={`${saira.variable} font-sans ${anton.variable} font-serif`}
      >
        <Component {...pageProps} />
      </main>
    </ThemeContextProvider>
  );
}
