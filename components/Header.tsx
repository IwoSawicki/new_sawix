import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, spring } from "framer-motion";

import Logo from "../public/Sawix-Logo.svg";
import MenuIcon from "../public/Menu-Icon.svg";
import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function functiontest() {}

  return (
    <div>
      <div className="px-6 flex text-white justify-between py-4 items-center fixed w-screen z-50 backdrop-blur ">
        <div>
          <Link href="/">
            <Image src={Logo} alt="Seitenlogo"></Image>
          </Link>
        </div>
        <div className="flex">
          <Link href={"/kontakt"}>
            <button className="bg-white rounded-full text-black px-4 py-1">
              Kontakt
            </button>
          </Link>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={`${
              isOpen ? " rotate-45" : ""
            } , rounded-full h-8 w-8 ml-3 duration-300 flex justify-center items-center bg-white text-black`}
          >
            +
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------------- */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? "gap-0 bg-black" : "gap-[10px] bg-blue-700"
        } flex flex-col items-center justify-center z-50 h-16 w-16 rounded-full fixed bottom-5 inset-x-0 mx-auto`}
      >
        <div className="bg-transparent  flex justify-between items-center duration-300 group">
          <div className="group relative flex overflow-x-hidden duration-300 max-w-[64px]">
            <div className={`${isOpen ? "hidden" : "block"}`}>
              <div className=" animate-marquee whitespace-nowrap flex">
                <span className="flex  mx-3">Menü</span>
                <span className="flex  mx-3">Menü</span>
                <span className="flex  mx-3">Menü</span>
                <span className="flex  mx-3">Menü</span>
                <span className="flex  mx-3">Menü</span>
                <span className="flex  mx-3">Menü</span>
                <span className="flex  mx-3">Menü</span>
              </div>

              <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex">
                <span className="flex  mx-3">Menü</span>
                <span className="flex  mx-3">Menü</span>
                <span className="flex  mx-3">Menü</span>
                <span className="flex  mx-3">Menü</span>
                <span className="flex  mx-3">Menü</span>
                <span className="flex  mx-3">Menü</span>
                <span className="flex  mx-3">Menü</span>
              </div>
            </div>
          </div>
          <div className="group relative flex overflow-x-hidden duration-300 max-w-[64px]">
            <div className={`${isOpen ? "block" : "hidden"} `}>
              <div className=" animate-marquee whitespace-nowrap flex">
                <span className="flex  mx-3">Schließen</span>
                <span className="flex  mx-3">Schließen</span>
                <span className="flex  mx-3">Schließen</span>
                <span className="flex  mx-3">Schließen</span>
                <span className="flex  mx-3">Schließen</span>
              </div>

              <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex">
                <span className="flex  mx-3">Schließen</span>
                <span className="flex  mx-3">Schließen</span>
                <span className="flex  mx-3">Schließen</span>
                <span className="flex  mx-3">Schließen</span>
                <span className="flex  mx-3">Schließen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------------- */}

      {/* <AnimatePresence>
        isOpen && ( */}
      <motion.div
        className={`${
          isOpen
            ? "block z-40 opacity-100 h-[50vh] w-[95%]"
            : "block -z-40 opacity-0 h-0 w-0"
        } fixed inset-x-0 mx-auto bottom-3 bg-[#E8E5E3] rounded-xl text-black transition-all duration-300 p-4`}
      >
        <div className="">Menu coming soon</div>
      </motion.div>
      {/* )
      </AnimatePresence> */}
    </div>
  );
}
