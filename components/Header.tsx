import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Logo from "../public/Sawix-Logo.svg";
import MenuIcon from "../public/Menu-Icon.svg";
import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const shiftBody = () => {
    useEffect(() => {
      document.querySelector(".test-idk")?.classList.add("shiftUp");
    });
  };

  return (
    <div className="test-idk">
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
          isOpen ? "gap-0" : "gap-[10px]"
        } flex flex-col items-center justify-center z-50 h-16 w-16 rounded-full bg-[#E8E5E3] fixed bottom-3 inset-x-0 mx-auto`}
      >
        <div
          className={`${
            isOpen ? "-rotate-45" : " "
          } bg-black h-[2px] w-8 rounded-full duration-100`}
        ></div>
        <div
          className={`${
            isOpen ? "rotate-45" : ""
          } bg-black h-[2px] w-8 rounded-full duration-100`}
        ></div>
      </div>

      {/* ----------------------------------------------------------------------- */}

      <div
        className={`${
          isOpen ? "block z-40 opacity-100" : "block -z-40 opacity-0 h-0 w-0"
        } fixed inset-x-0 mx-auto bottom-3 h-[50vh] w-[95%] bg-[#E8E5E3] rounded-xl text-black transition-all duration-300 p-4`}
      >
        <div className="">Menu coming soon</div>
        <button onClick={shiftBody}>Shift Up!!</button>
      </div>
    </div>
  );
}
