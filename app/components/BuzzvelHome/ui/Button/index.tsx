import { IoMdArrowForward } from "react-icons/io";

interface ButtonProp {
  label?: string;
  subButton?: string;
  color?: "purple" | "yellow";
}

export const Button = ({
  label = "Request a Quote",
  subButton,
  color = "purple",
}: ButtonProp) => {
  const hoverColors = {
    purple: "yellow",
    yellow: "purple",
  }
  return (
    <div className="flex flex-col items-center gap-4">
      <button
        type="button"
        className={`mt-4 flex items-center gap-6 border border-solid border-project-${color} text-project-${color} text-2xl font-bold rounded-[6.25rem] px-6 py-5 text-project-${color} hover:bg-project-${color} hover:text-project-${hoverColors[color]}`}
      >
        {label}
        <IoMdArrowForward />
      </button>
      {subButton && <span>{subButton}</span>}
    </div>
  );
};
