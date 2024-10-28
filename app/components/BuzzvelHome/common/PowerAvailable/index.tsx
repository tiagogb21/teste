import Image from "next/image"
import { Button } from "../../ui/Button"
import { Title } from "../../ui/Title"

export const PowerAvailable = () => {
  return (
    <div className="text-center flex flex-col gap-16 bg-project-purple py-12">
      <div className="text-white">
        <Title subtitle="Get the Sun to power your home" subtitleColor="yellow" title="All the power that you need for your house is now available" />
        <Button color="yellow" subButton="Egestas fringilla aliquam leo" />
      </div>
      <Image src="/Macbook.png" alt="Macbook" width={358} height={196} />
    </div>
  )
}