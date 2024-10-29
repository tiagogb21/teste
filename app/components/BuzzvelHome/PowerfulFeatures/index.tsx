import { powerfulContent } from "@/app/utils/const";
import { Title } from "../ui/Title";
import Image from "next/image";

export const PowerfulFeatures = () => {
  return (
    <div className="flex flex-col lg:flex-row px-4 py-12 gap-16 lg:p-20">
      <div className="flex flex-col gap-12">
        <Title
          subtitle="System features"
          title="Powerful features"
          description="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
        />
        <div className="grid grid-cols-2 gap-12">
          {powerfulContent.map(({ id, title, text }) => (
            <div key={id} className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold">{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <Image
          src="/Mobile-App-Placeholder-2.png"
          width={228}
          height={491}
          alt="Mobile App"
          className="lg:w-[26.25rem]"
        />
        <Image
          className="absolute -z-10 -right-10 -top-16 lg:-top-24 lg:-right-20 lg:min-w-[22rem]"
          src="/Rectangle-15.png"
          width={300}
          height={523}
          alt="Mobile App"
        />
      </div>
    </div>
  );
};
