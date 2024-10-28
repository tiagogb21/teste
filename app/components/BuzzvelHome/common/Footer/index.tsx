import { footerItems } from "@/app/utils/const";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="container items-center flex-col lg:flex-row flex justify-between mx-auto py-6 gap-6">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="flex items-center gap-2">
            <Image
              src="/footer-logo.png"
              alt="wave"
              width={56}
              height={32}
              className="bottom-0 left-0"
            />
            <p className="font-bold text-2xl">Soller</p>
          </div>
          <p className="text-project-title">@ {new Date().getFullYear()} Soller, Inc. All rights reserved.</p>
        </div>
        <ul className="flex gap-6">
          {footerItems.map(({ id, label, href }) => (
            <li key={id}>
              <Link href={href} className="py-3 first-letter:uppercase">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
