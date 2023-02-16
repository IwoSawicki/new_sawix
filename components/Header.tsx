import Image from "next/image";
import Link from "next/link";
//import { AnimatePresence, easeInOut, motion, spring } from "framer-motion";
// import cookieCutter from "cookie-cutter";
// import Cookies from "./Cookies";
import { getCookie, setCookie } from "cookies-next";

import Logo from "../public/Sawix-Logo.svg";
import SawixIcon from "@/public/sawix-icon.svg";
import { useState } from "react";
import ImgTemp from "@/public/Footer-Img.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // const cookies = new Cookies(req, res);
  const cookieConsent = () => {
    getCookie("cookies", "idk");
  };

  return (
    <div>
      <div className="px-6 py-4 fixed w-screen z-50 backdrop-blur ">
        <div className="flex justify-between w-full  max-w-6xl mx-auto">
          <div className="z-20">
            <Link href="/" className="flex gap-3 items-center">
              <Image
                src={SawixIcon}
                alt="Seitenlogo"
                className="h-6 w-6"
              ></Image>
              <span
                className={`${
                  isOpen ? "text-black" : ""
                } , text-xl duration-500`}
              >
                Sawix
              </span>
            </Link>
          </div>
          <div className="flex z-10">
            {/* <Link className="z-20" href={"/kontakt"}>
              <button
                className={`${
                  isOpen
                    ? "bg-black text-white"
                    : "bg-white text-black delay-500"
                } ,  rounded-full  px-4 py-1 text-sm z-20 duration-500`}
              >
                Kontakt
              </button>
            </Link> */}
            <div className="relative flex justify-end z-10">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className={`${
                  isOpen
                    ? " rotate-45 bg-black text-white"
                    : "bg-white text-black"
                } , relative z-10 rounded-full h-7 w-7 ml-3 duration-500 flex justify-center items-center cursor-pointer`}
              >
                +
              </div>
              <div
                className={`${
                  isOpen ? "scale-[80] md:scale-[200]" : ""
                } , absolute z-0 bg-white h-7 w-7 rounded-full duration-1000`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen
            ? "z-50 bg-red-700/0 delay-150 flex flex-col justify-between mt-12 pb-12"
            : "-z-50 delay-300"
        } , fixed duration-300 px-6 w-full h-screen text-black`}
      >
        <div
          className={`${
            isOpen
              ? "opacity-100 delay-500 duration-500"
              : "opacity-0 duration-200"
          } ,  w-full max-w-6xl mx-auto flex flex-col justify-between h-full`}
        >
          <div className="bg-yellow-600/0 w-full max-w-6xl mx-auto h-2"></div>
          <div className="flex">
            <div className="bg-blue-600/0 md:w-3/5 flex flex-col justify-center">
              <div className="flex flex-col gap-3 text-2xl md:gap-3 md:text-4xl font-normal">
                <Link href={"/"}>Home</Link>
                {/* <Link href={"/about"}>About</Link> */}
                <Link href={"/services"}>Services</Link>
                <Link href={"/services/webdesign/"}>Design & Entwicklung</Link>
                <Link href={"/services/e-commerce/"}>Online-Shops</Link>
                <Link href={"/services/medienproduktion"}>
                  Medienproduktion
                </Link>
                <Link href={"/services/social-media-marketing"}>
                  Social Media Marketing
                </Link>
                {/* <div className="">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <Link href={"/services/webdesign"}>
                        Webdesign & Entwicklung
                      </Link>
                    </li>
                    <li>
                      <Link href={"/services/webdesign"}>Online-Shops</Link>
                    </li>
                    <li>
                      <Link href={"/services/webdesign"}>Medienproduktion</Link>
                    </li>
                    <li>
                      <Link href={"/services/webdesign"}>
                        Social Media Marketing
                      </Link>
                    </li>
                  </ul>
                </div> */}
                <Link href={"/kontakt"}>Kontakt</Link>
              </div>
            </div>
            <div className="hidden md:block md:w-2/5">
              <Image
                src={ImgTemp}
                alt="Sawix Header Bild"
                className="h-[500px] object-cover rounded-2xl"
              ></Image>
            </div>
          </div>
          <div>
            <div className="bg-green-700/0 w-full max-w-6xl mx-auto pb-6 flex flex-col md:flex-row">
              <div className="md:w-1/2 flex flex-col">
                <p className="text-base lg:text-xl font-light">
                  Erreiche uns jederzeit:
                </p>
                <a
                  className="text-3xl my-3 md:mt-6 md:mb-5 lg:text-4xl"
                  href="mailto:info@sawix.de"
                >
                  hello@sawix.de
                </a>
                <a className="text-3xl lg:text-4xl" href="tel:+491734388519">
                  +49 173 4388519
                </a>
              </div>
              <div className="md:w-1/2 flex items-end md:justify-end bg-yellow-400/0 mt-6">
                <Link href={"/kontakt"}>
                  <button className="bg-black py-4 px-9 rounded-full text-white">
                    Jetzt Projekt Starten!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------------- */}
      <div className="fixed bottom-5 w-screen flex justify-center z-40">
        <div className=" bg-blue-700 py-1 px-[6px] rounded-full flex gap-2  text-sm font-light  justify-center items-center md:text-lg ">
          <Link
            href={"/"}
            className="bg-transparent text-white py-1 px-3 rounded-full"
          >
            Home
          </Link>
          {/* <Link href={"/about"} className="text-white py-1 px-3 rounded-full ">
            About
          </Link> */}
          <Link
            href={"/services"}
            className="text-white py-1 px-3 rounded-full "
          >
            Services
          </Link>
          {/* <Link href={"/about"}>About</Link> */}
          <Link href={"/kontakt"} className="text-white py-1 px-3 rounded-full">
            Kontakt
          </Link>
        </div>
      </div>

      <div className="z-50 fixed bottom-0 w-full bg-black border-t-[1px] border-white hidden">
        <div className="px-3 py-5 text-center">
          <p>
            Durch die Benutzung der Seite stimmst du unserer{" "}
            <a className="underline" href="/datenschutz">
              Datenschutzerklärung
            </a>{" "}
            zu.
          </p>
        </div>
        <div>
          <button className="w-full bg-black border-t-[1px] border-white/20 py-3">
            Verstanden
          </button>
        </div>
      </div>

      {/* <motion.div
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

      {/*
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
      {/*<motion.div
        className={`${
          isOpen
            ? "block z-40 opacity-100 h-[50vh] w-[95%]"
            : "block -z-40 opacity-0 h-0 w-0"
        } fixed inset-x-0 mx-auto bottom-3 bg-[#E8E5E3] rounded-xl text-black transition-all duration-300 p-4`}
      >
        <div className="">Menu coming soon</div>
      </motion.div> */}
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
