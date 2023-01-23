import Image from "next/image";
import Link from "next/link";

import Logo from "../public/Sawix-Logo.svg";
import MenuIcon from "../public/Menu-Icon.svg";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="px-6 flex text-white justify-between py-4 items-center">
        <div>
          <Link href="/">
            <Image src={Logo} alt="Seitenlogo"></Image>
          </Link>
        </div>
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${
              isOpen ? "flex flex-col gap-[20px]" : "flex flex-col gap-[10px]"
            }`}
          >
            <div
              className={`${
                isOpen
                  ? "bg-white -rotate-45 origin-right h-[2px] w-8 rounded-full duration-100"
                  : "bg-white h-[2px] w-8 rounded-full duration-100"
              }`}
            ></div>
            <div
              className={`${
                isOpen
                  ? "bg-white rotate-45 origin-right h-[2px] w-8 rounded-full duration-100"
                  : "bg-white h-[2px] w-8 rounded-full duration-100"
              }`}
            ></div>
          </button>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"}`}>
        <div className="bg-black/80 h-screen absolute w-screen">
          <h1>test</h1>
        </div>
      </div>
    </div>
  );
}
