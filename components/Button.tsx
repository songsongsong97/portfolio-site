import { useContext } from "react";
import ThemeContext from "@/store/ThemeContext";

interface ButtonProps {
  label: string;
  secondary?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  large,
  onClick,
  disabled,
}) => {
  const themeContext: {
    colorPalette?: string;
  } = useContext(ThemeContext);
  const { colorPalette } = themeContext;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
          disabled:opacity-70
          disabled:cursor-not-allowed
          rounded-md
          hover:opacity-80
          hover:border-opacity-80
          transition
          border-2
          bg-transparent
          ${
            secondary
              ? "text-white dark:text-white"
              : `text-black dark:text-${colorPalette}`
          }}
          ${
            secondary
              ? "border-white"
              : `border-black dark:border-${colorPalette}`
          }}
          ${large ? "text-xl" : "text-md"}
          ${large ? "px-5" : "px-4"}
          ${large ? "py-3" : "py-2"}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
