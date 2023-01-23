import Image from "next/image";
import Link from "next/link";

import Logo from "../public/Sawix-Logo.svg";
import MenuIcon from "../public/Menu-Icon.svg";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${isOpen ? "overflow-y-hidden" : ""}`}>
      <div className="px-6 flex text-white justify-between py-4 items-center fixed w-screen z-50">
        <div>
          <Link href="/">
            <Image src={Logo} alt="Seitenlogo"></Image>
          </Link>
        </div>
        <div>
          <Link href={"/kontakt"}>
            <button className="bg-white rounded-full text-black px-4 py-1">
              Kontakt
            </button>
          </Link>
        </div>
      </div>

      {/* ----------------------------------------------------------------------- */}

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen
            ? "flex flex-col gap-0 items-center justify-center z-50 h-16 w-16 rounded-full bg-[#E8E5E3] fixed bottom-3 inset-x-0 mx-auto"
            : "flex flex-col gap-[10px] items-center justify-center z-50 h-16 w-16 rounded-full bg-[#E8E5E3] fixed bottom-3 inset-x-0 mx-auto"
        }`}
      >
        <div
          className={`${
            isOpen
              ? "bg-black -rotate-45 h-[2px] w-8 rounded-full duration-100"
              : "bg-black h-[2px] w-8 rounded-full duration-100"
          }`}
        ></div>
        <div
          className={`${
            isOpen
              ? "bg-black rotate-45 h-[2px] w-8 rounded-full duration-100"
              : "bg-black h-[2px] w-8 rounded-full duration-100"
          }`}
        ></div>
      </div>

      {/* ----------------------------------------------------------------------- */}

      <div className={`${isOpen ? "block z-40" : "hidden"}`}>
        <div className="bg-black/80 h-screen fixed w-screen backdrop-blur-sm">
          <nav className="flex gap-4 flex-col pt-24 text-center">
            <Link href={"/"}>
              <button>Home</button>
            </Link>
            <Link href={"/About"}>
              <button>About</button>
            </Link>
            <Link href={"Webdesign"}>
              <button>Webdesign- und Entwicklung</button>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
