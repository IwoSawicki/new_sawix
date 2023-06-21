import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import { BsArrowUpRight } from "react-icons/bs";
import HeroPhone from "../../public/Hero-Phone.png";
import HeroMediceo from "../../public/Hero-Mediceo.png";
import HeroWeinbau from "../../public/Hero-Weinbau.png";
import HeroAcid from "../../public/Hero-AcidBerlin.png";
import textCircle from "@/public/text-circle.svg";

import lightheroDMK from "@/public/home/lighthero-dmkbau.png";
import lightheroWeinhaus from "@/public/home/lighthero-weinhaus.png";
import lightheroCDU from "@/public/home/lighthero-cdu.png";

export default function Hero() {
  return (
    <div className="pt-20 md:pt-32 max-w-[1450px] mx-auto px-3">
      <div>
        <h1 className="text-[26vw] leading-[0.9em] md:text-[12vw] font-bold font-kaneda md:leading-[0.8em] 2xl:text-[230px]">
          Digitale Erfahrungen <br /> die Bewegen
        </h1>
      </div>
      <div className="flex flex-col md:flex-row  mx-auto ">
        <div className=" md:w-2/5 pt-8 md:pt-12">
          <p className="font-IvyPresto text-2xl md:text-3xl font-normal">
            Bei Sawix gestalten wir wunderschöne Websites, erstellen auffällige
            Videos und liefern Designs, die dein Unternehmen{" "}
            <span className="inline-block">
              <Image
                src={textCircle}
                alt="Textverzierung Kreis SVG"
                className="absolute -mt-1 -ml-1 w-36 md:w-auto"
              />{" "}
              voranbringen
            </span>
            .
          </p>
          {/* <button className="relative flex group pt-12">
            <div className="absolute">
              <div className="px-9 py-3 bg-transparent text-transparent border-[1px] border-black rounded-full mt-[9px] z-0">
                UnsereProjekte
              </div>
            </div>
            <div className="bg-black rounded-full text-white px-9 py-4 group-hover:mt-1 duration-300 z-10">
              Unsere Projekte
            </div>
          </button> */}
          <Link href={"/projekte"}>
            <button className="buttonGradient p-[2px] mt-8 md:mt-12 text-white text-base lg:text-xl font-light rounded-full group bg-gradient-to-r from-[#9747FF] via-blue-700 to-[#9747FF]">
              <div className="bg-[#E8E5E3] pl-8 rounded-full flex items-center hover:bg-transparent duration-300 text-black group-hover:text-white font-IvyPresto">
                Zu unseren Projekten{" "}
                <span className="text-xs -mt-3 hidden">(06)</span>
                <span className="bg-[#9747FF] rounded-full p-3 m-[2px] ml-6 group-hover:bg-transparent duration-300">
                  <BsArrowUpRight className=" text-black rounded-full duration-300 group-hover:rotate-45 group-hover:text-white" />
                </span>
              </div>
            </button>
          </Link>
        </div>
        <div className="sm:flex sm:justify-center md:w-3/5 h-[600px] lg:h-[700px]">
          <div className="w-full  lg:max-h-screen flex relative sm:w-1/2 md:w-full mt-10 md:-mt-28">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-full z-30">
              <motion.div
                initial={{
                  opacity: 0,
                  translateY: 200,
                }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={lightheroDMK}
                  alt="Acid Berlin Startbild"
                  priority
                  className=" object-contain max-h-[600px] lg:max-h-screen lg:h-[900px]"
                />
              </motion.div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-full z-20">
              <motion.div
                initial={{
                  opacity: 0,
                  translateY: 200,
                }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.6,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={lightheroCDU}
                  alt="Weinbau Startbild"
                  priority
                  className=" object-contain max-h-[600px] lg:max-h-screen lg:h-[900px]"
                />
              </motion.div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-full z-10">
              <motion.div
                initial={{
                  opacity: 0,
                  translateY: 200,
                }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.9,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={lightheroWeinhaus}
                  alt="Mediceo Startbild"
                  priority
                  className="object-contain max-h-[600px] lg:max-h-screen lg:h-[900px]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
