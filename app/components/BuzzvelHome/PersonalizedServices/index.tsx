import { personalizedServices } from "@/app/utils/const";
import { Title } from "../ui/Title";
import Image from "next/image";

export const PersonalizedServices = () => {
  return (
    <div className="flex flex-col px-4 py-12 gap-16">
      <Title
        subtitle="Services"
        title="Personalized services"
        description="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
      />
      <div className="grid grid-cols-2 gap-12">
        {personalizedServices.map(({ id, icon, title, text }) => (
          <div key={id} className="flex flex-col items-center text-center">
            {icon}
            <h3 className="text-xl font-bold">{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <div className="relative flex items-center justify-center">
        <Image
          className="absolute -z-10 -left-10 -top-6"
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
        />
        <Image
          className="absolute top-30 -right-4"
          src="/Frame-4.png"
          width={142}
          height={206}
          alt="Frame"
        />
      </div>
    </div>
  );
};
