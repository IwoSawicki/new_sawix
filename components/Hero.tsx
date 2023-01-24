import Image from "next/image";
import { motion } from "framer-motion";

import HeroPhone from "../public/Hero-Phone.png";
import HeroMediceo from "../public/Hero-Mediceo.png";
import HeroWeinbau from "../public/Hero-Weinbau.png";
import HeroAcid from "../public/Hero-AcidBerlin.png";

export default function Hero() {
  return (
    <div className="pt-20  bg-gradient-to-b from-[#22282E] to-[#0B0D0F00] ">
      <div className="flex flex-col lg:flex-row px-3 max-w-6xl mx-auto">
        <div className="items-center justify-center md:w-2/3">
          <p className="mt-12 my-4 text-base text-slate-500">Sawix Studio</p>
          <h1 className="text-5xl my-4">
            <span className="w-full">
              Grenzen? <br />
            </span>
            <span className="w-full">Gibt es bei uns nicht!</span>
          </h1>
          <div className="w-4/5">
            <p className="my-4 pr-3 mb-12">
              Wir glauben daran, dass unsere Industrie von Zahlen geblendet
              wird.
              <br /> Während Kaufentscheidungen auf Emotionen basieren
            </p>
          </div>
        </div>
        <div>
          <div className="w-full lg:w-1/3 h-[850px] flex items-start justify-center relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-full">
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
                  src={HeroAcid}
                  alt="Acid Berlin Startbild"
                  priority
                  className=" object-contain"
                />
              </motion.div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-full">
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
                  src={HeroWeinbau}
                  alt="Weinbau Startbild"
                  priority
                  className=" object-contain"
                />
              </motion.div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-full">
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
                  src={HeroMediceo}
                  alt="Mediceo Startbild"
                  priority
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
