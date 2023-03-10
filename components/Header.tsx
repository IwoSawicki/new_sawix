import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// import Logo from "../public/Sawix-Logo.svg";
import SawixIcon from "@/public/sawix-icon.svg";
import ImgTemp from "@/public/Footer-Img.png";

export default function Header() {
  //Menu Popup State
  const [isOpen, setIsOpen] = useState(false);

  //Cookie Popup State
  const [showCookie, setShowCookie] = useState(true);

  useEffect(() => {
    // const data = window.localStorage.getItem("SWX_COOdwKIE_CONSENT");
    // console.log("data", data);
    // if (data !== null) setShowCookie(JSON.parse(data));
    if (window.localStorage.getItem("SWX_COOKIE_CONSENT")) {
      setShowCookie(false);
    }
  }, []);

  useEffect(() => {
    if (!showCookie) {
      window.localStorage.setItem(
        "SWX_COOKIE_CONSENT",
        JSON.stringify(showCookie)
      );
    }
    // console.log("Cookie Hidden");
  }, [showCookie]);

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
                  +49 176 7788 7216
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
      <div className="fixed bottom-5 w-screen flex justify-center z-30">
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

      {/* COOKIE POPUP */}
      {showCookie && (
        <motion.div
          className="z-40 fixed bottom-0 w-full bg-black border-t-[1px] border-white text-sm px-3"
          initial={{
            opacity: 0,
            bottom: -100,
          }}
          animate={{
            opacity: 1,
            bottom: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 2,
          }}
        >
          <div className="md:flex md:justify-between md:items-center max-w-6xl mx-auto">
            <div className="px-3 py-5 text-center ">
              <p>
                Durch die Benutzung der Seite stimmst du unserer{" "}
                <a className="underline" href="/datenschutz">
                  Datenschutzerkl??rung
                </a>{" "}
                zu.
              </p>
            </div>
            <div>
              <button
                onClick={() => setShowCookie(false)}
                className="w-full bg-black border-t-[1px] border-white/20 py-3 md:border-[1px] md:border-white md:rounded-full md:py-1 md:px-3 "
              >
                Verstanden
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
