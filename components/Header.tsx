import Image from "next/image";
import Link from "next/link";

import Logo from "../public/Sawix-Logo.svg";
import MenuIcon from "../public/Menu-Icon.svg";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="px-6 flex text-white justify-between py-4">
        <div>
          <Link href="/">
            <Image src={Logo} alt="Seitenlogo"></Image>
          </Link>
        </div>
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-4"
          >
            <div
              className={`${
                isOpen
                  ? "bg-white -rotate-45 origin-right h-1 w-8 rounded-full duration-500"
                  : "bg-white h-1 w-16 rounded-full duration-500"
              }`}
            >
              <div className="bg-red-700 w-1/2 h-1/2"></div>
            </div>
            <div
              className={`${
                isOpen
                  ? "bg-white rotate-45 origin-right h-1 w-8 rounded-full duration-500"
                  : "bg-white h-1 w-16 rounded-full duration-500"
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
