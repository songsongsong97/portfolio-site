import ThemeContext from "@/store/ThemeContext";
import { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface ButtonProps {
  label: string;
  href?: string;
  onClick?: ()=>void;
  large?: boolean;
  disabled?: boolean;
}
const Button: React.FC<ButtonProps> = ({ label, large, onClick, disabled,href }) => {
  const themeContext: {
    colorPalette?: string;
  } = useContext(ThemeContext);
  const {colorPalette
  } = themeContext;

  let colorStyle = "";
  if (colorPalette === "beige") {
    colorStyle = "border-darkbeige";
  } else if (colorPalette === "peach") {
    colorStyle = "border-darkpeach";
  } else {
    colorStyle = "border-darkmatcha";
  }

  return (
    <button
      disabled={disabled}
      className={`
          disabled:opacity-70
          disabled:cursor-not-allowed
          rounded-md
          hover:opacity-80
          hover:border-opacity-80
          transition
          border-2
          ${colorStyle}
          bg-transparent
          ${large ? "text-xl" : "text-md"}
          ${large ? "px-5" : "px-4"}
          ${large ? "py-3" : "py-2"}
      `}
    >
      <AnchorLink href={href}>
      {label}
      </AnchorLink>
    </button>
  );
};

export default Button;
