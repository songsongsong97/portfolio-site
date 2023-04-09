interface ButtonProps {
  label: string;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  label,
  large,
  onClick,
  disabled,
}) => {

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
          border-zinc-300
          bg-transparent
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
