import Image from "next/image"
import { Button } from "../ui/Button"

export const SunPower = () => {
  return (
    <div className="flex flex-col gap-16 px-4 py-12 lg:px-20 lg:gap-32">
      <div className="text-center flex flex-col lg:w-[37.5rem] gap-6 lg:-mt-56 lg:items-start">
        <h1 className="font-bold text-[2.5rem] lg:text-start lg:text-[4.5rem]">Get the Sun to Power Your Home</h1>
        <h2 className="text-lg lg:text-2xl lg:text-start">Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.</h2>
        <Button />
      </div>
      <div className="flex flex-col gap-4">
        <p className="lg:text-lg">“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”</p>
        <div className="flex gap-4 items-center">
          <Image src="/User1.png" alt="user" width={64} height={64} />
          <div className="flex flex-col">
            <h3 className="text-lg">Rwanda Melflor</h3>
            <p className="text-project-light-gray">zerowaste.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}