interface TitleProp {
  isMiddleText?: boolean;
  subtitle: string;
  subtitleColor?: "orange" | "yellow";
  title: string;
  description?: string;
}

export const Title = ({isMiddleText, subtitle, subtitleColor = "orange", title, description} : TitleProp) => {
  return (
    <div className={`text-center lg:w-[56.25rem] ${isMiddleText ? '' : 'lg:text-start'}`}>
      <p className={`${subtitleColor === "yellow" ? "text-project-yellow" : "text-project-orange"} lg:text-xl font-medium`}>{subtitle}</p>
      <h2 className="font-bold text-[2rem] lg:text-[3.5rem] mb-6">{title}</h2>
      <p className="lg:text-xl">{description}</p>
    </div>
  )
}