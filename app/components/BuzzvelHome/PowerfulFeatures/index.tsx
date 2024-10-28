import { powerfulContent } from "@/app/utils/const"
import { Title } from "../ui/Title"
import Image from "next/image"

export const PowerfulFeatures = () => {
  return (
    <div className="flex flex-col px-4 py-12 gap-16">
    <Title
      subtitle="System features"
      title="Powerful features"
      description="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
    />
    <div className="grid grid-cols-2 gap-12">
      {
        powerfulContent.map(({id, icon, title, text}) => (
          <div key={id} className="flex flex-col items-center text-center">
            {icon}
            <h3 className="text-xl font-bold">{title}</h3>
            <p>{text}</p>
          </div>
        ))
      }
    </div>
    <div className="relative flex items-center justify-center">
        <Image
          src="/Mobile-App-Placeholder-2.png"
          width={228}
          height={491}
          alt="Mobile App"
        />
        <Image
          className="absolute -z-10 -right-10 -top-16"
          src="/Rectangle-15.png"
          width={300}
          height={523}
          alt="Mobile App"
        />
      </div>
    </div>
  )
}