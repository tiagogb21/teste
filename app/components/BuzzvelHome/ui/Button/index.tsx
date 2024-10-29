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
  const colors = color === "purple" ? `border-project-purple text-project-purple hover:text-project-yellow hover:bg-project-purple` : `border-project-yellow text-project-yellow hover:text-project-purple hover:bg-project-yellow`;

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        type="button"
        className={`mt-4 lg:mt-0 flex items-center gap-6 border border-solid  text-2xl font-bold rounded-[6.25rem] px-6 py-5 ${colors}`}
      >
        <span className="pl-6">
        {label}
        </span>
        <IoMdArrowForward />
      </button>
      {subButton && <span>{subButton}</span>}
    </div>
  );
};
