import { personalizedServices } from "@/app/utils/const";
import { Title } from "../ui/Title";
import Image from "next/image";

export const PersonalizedServices = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse px-4 py-12 gap-16 lg:px-20">
      <div className="lg:flex lg:flex-col lg:gap-12">
        <Title
          subtitle="Services"
          title="Personalized services"
          description="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
        />
        <div className="grid grid-cols-2 mt-12 gap-12">
          {personalizedServices.map(({ id, title, text }) => (
            <div key={id} className="flex flex-col items-center text-center lg:items-start lg:gap-4">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="lg:text-start">{text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <Image
          className="absolute -z-10 -left-10 -top-6 lg:-left-32 lg:min-w-[30rem]"
          src="/Rectangle-15-2.png"
          width={599}
          height={523}
          alt="Mobile App"
        />
        <Image
          src="/Mobile-App-Placeholder-1.png"
          width={220}
          height={471}
          alt="Mobile App"
          className="lg:w-[26.25rem]"
        />
        <Image
          className="absolute top-30 -right-4 lg:min-w-48 lg:-right-20"
          src="/Frame-4.png"
          width={142}
          height={206}
          alt="Frame"
        />
      </div>
    </div>
  );
};
