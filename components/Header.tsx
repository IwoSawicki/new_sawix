import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, easeInOut, motion, spring } from "framer-motion";

import Logo from "../public/Sawix-Logo.svg";
import MenuIcon from "../public/Menu-Icon.svg";
import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function functiontest() {}

  return (
    <div>
      <div className="px-6  text-white py-4 fixed w-screen z-50 backdrop-blur ">
        <div className="flex justify-between w-full  max-w-6xl mx-auto">
          <div>
            <Link href="/">
              <Image src={Logo} alt="Seitenlogo"></Image>
            </Link>
          </div>
          <div className="flex">
            <Link href={"/kontakt"}>
              <button className="bg-white rounded-full text-black px-4 py-1 text-sm">
                Kontakt
              </button>
            </Link>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                isOpen ? " rotate-45" : ""
              } , rounded-full h-7 w-7 ml-3 duration-300 flex justify-center items-center bg-white text-black cursor-pointer`}
            >
              +
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------------- */}

      <motion.div
        initial={{
          //width: 300,
          //maxWidth: "80vw",
          scale: 2,
        }}
        animate={{
          //width: 64,
          scale: 1,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
          type: easeInOut,
        }}
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? "gap-0 bg-black" : "gap-[10px] bg-blue-700 shadow-2xl"
        } flex flex-col items-center justify-center z-50 h-16 w-16 rounded-full fixed bottom-6 inset-x-0 mx-auto cursor-pointer duration-0`}
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2.5,
            duration: 0.5,
          }}
          className={`${
            isOpen ? "absolute rotate-45" : ""
          } w-8 h-[2px] bg-white rounded-full duration-100`}
        ></motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2.5,
            duration: 0.5,
          }}
          className={`${
            isOpen ? "absolute -rotate-45" : ""
          } w-8 h-[2px] bg-white rounded-full duration-100`}
        ></motion.div>
      </motion.div>

      {/* ----------------------------------------------------- */}

      <motion.div
        initial={{
          scale: 1,
          opacity: 0.6,
        }}
        animate={{
          scale: 1.2,
          opacity: 0,
        }}
        transition={{
          delay: 4,
          duration: 1,
          repeat: Infinity,
          repeatDelay: 2,
        }}
        className="flex flex-col items-center justify-center z-40 h-16 w-16 rounded-full fixed bottom-6 inset-x-0 mx-auto cursor-pointer bg-blue-600"
      ></motion.div>
      <motion.div
        initial={{
          scale: 1,
          opacity: 0.7,
        }}
        animate={{
          scale: 1.3,
          opacity: 0,
        }}
        transition={{
          delay: 4.3,
          duration: 1,
          repeat: Infinity,
          repeatDelay: 2,
        }}
        className="flex flex-col items-center justify-center z-30 h-16 w-16 rounded-full fixed bottom-6 inset-x-0 mx-auto cursor-pointer bg-blue-600"
      ></motion.div>
      <motion.div
        initial={{
          scale: 1,
          opacity: 0.4,
        }}
        animate={{
          scale: 1.5,
          opacity: 0,
        }}
        transition={{
          delay: 4.6,
          duration: 0.8,
          repeat: Infinity,
          repeatDelay: 2.2,
        }}
        className="flex flex-col items-center justify-center z-30 h-16 w-16 rounded-full fixed bottom-6 inset-x-0 mx-auto cursor-pointer bg-blue-600"
      ></motion.div>
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

{
  /* <div className="bg-transparent  flex justify-between items-center duration-300 group">
          <div className="group relative flex overflow-x-hidden duration-300 max-w-[64px]">
            <div className={`${isOpen ? "hidden" : "block"}`}>
              <div className=" animate-marquee whitespace-nowrap flex">
                <span className="flex  mx-2">Menü</span>
                <span className="flex  mx-2">Menü</span>
                <span className="flex  mx-2">Menü</span>
                <span className="flex  mx-2">Menü</span>
                <span className="flex  mx-2">Menü</span>
                <span className="flex  mx-2">Menü</span>
                <span className="flex  mx-2">Menü</span>
              </div>

              <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex">
                <span className="flex  mx-2">Menü</span>
                <span className="flex  mx-2">Menü</span>
                <span className="flex  mx-2">Menü</span>
                <span className="flex  mx-2">Menü</span>
                <span className="flex  mx-2">Menü</span>
                <span className="flex  mx-2">Menü</span>
                <span className="flex  mx-2">Menü</span>
              </div>
            </div>
          </div>
          <div className="group relative flex overflow-x-hidden duration-300 max-w-[64px]">
            <div className={`${isOpen ? "block" : "hidden"} `}>
              <div className=" animate-marquee whitespace-nowrap flex">
                <span className="flex  mx-2">Schließen</span>
                <span className="flex  mx-2">Schließen</span>
                <span className="flex  mx-2">Schließen</span>
                <span className="flex  mx-2">Schließen</span>
                <span className="flex  mx-2">Schließen</span>
                <span className="flex  mx-2">Schließen</span>
              </div>

              <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex">
                <span className="flex  mx-2">Schließen</span>
                <span className="flex  mx-2">Schließen</span>
                <span className="flex  mx-2">Schließen</span>
                <span className="flex  mx-2">Schließen</span>
                <span className="flex  mx-2">Schließen</span>
                <span className="flex  mx-2">Schließen</span>
              </div>
            </div>
          </div>
        </div> */
}
