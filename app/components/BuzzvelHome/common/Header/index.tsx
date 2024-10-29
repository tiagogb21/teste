import { headerLinks, phone } from "@/app/utils/const";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../ui/Button";

export const Header = () => {
  return (
    <header className="px-4 py-3 h-72 lg:px-20">
      <div className="flex justify-between relative">
        <div className="flex items-center gap-9">
          <Link href="/" className="font-bold text-[2rem]">
            {process.env.APP_NAME}
          </Link>
          <ul className="hidden lg:flex gap-4">
            {headerLinks.map(({ id, label, href }) => (
              <li key={id}>
                <Link className="py-3 px-2 relative group" href={href}>
                  {label}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
            <div className="hidden lg:flex gap-4">
              <a href={`tel:+55${phone}`} className="text-project-blue flex items-center px-2 py-3 gap-4">
                <Image src="/headset.svg" alt="headset" width={24} height={24} />
                {phone}
              </a>
              <Button />
            </div>
            <Image
              src="/worker.png"
              width={307}
              height={333}
              alt="/worker.png"
              className="absolute -z-10 -top-4 -right-8 lg:-right-20 lg:-top-20 lg:w-[42rem] lg:h-[43rem]"
              priority
            />
        </div>
      </div>
    </header>
  );
};
