import Image from "next/image"
import { Button } from "../ui/Button"
import { Title } from "../ui/Title"

export const PowerAvailable = () => {
  return (
    <div className="text-center flex flex-col lg:items-center gap-16 bg-project-purple lg:bg-project-purple-light py-12">
      <div className="text-white flex flex-col lg:flex-row lg:items-center lg:gap-60">
        <Title subtitle="Get the Sun to power your home" subtitleColor="yellow" title="All the power that you need for your house is now available" />
        <Button color="yellow" subButton="Egestas fringilla aliquam leo" />
      </div>
      <Image className="lg:w-[63rem]" src="/Macbook.png" alt="Macbook" width={358} height={196} />
    </div>
  )
}