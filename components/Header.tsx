import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Logo from "../public/Sawix-Logo.svg";
import MenuIcon from "../public/Menu-Icon.svg";
import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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

      <motion.div
        initial={{
          opacity: "0%",
          translateY: "20px",
          rotate: 180,
          scale: 0.5,
        }}
        animate={{
          opacity: "100%",
          translateY: "0px",
          rotate: 0,
          scale: 1,
        }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? "gap-0 bg-black" : "gap-[10px] bg-blue-700 "
        } flex flex-col items-center justify-center z-50 h-16 w-16 rounded-full fixed bottom-3 inset-x-0 mx-auto`}
      >
        <motion.div
          className={`${
            isOpen ? "-rotate-45" : " "
          } bg-white h-[2px] w-8 rounded-full duration-100`}
        ></motion.div>
        <motion.div
          className={`${
            isOpen ? "rotate-45" : ""
          } bg-white h-[2px] w-8 rounded-full duration-100`}
        ></motion.div>
      </motion.div>

      {/* ----------------------------------------------------------------------- */}

      <motion.div
        className={`${
          isOpen ? "block z-40 opacity-100" : "block -z-40 opacity-0 h-0 w-0"
        } fixed inset-x-0 mx-auto bottom-3 h-[50vh] w-[95%] bg-[#E8E5E3] rounded-xl text-black transition-all duration-300 p-4`}
      >
        <div className="">Menu coming soon</div>
      </motion.div>
    </div>
  );
}
