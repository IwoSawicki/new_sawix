import Image from "next/image";
import { motion } from "framer-motion";

import HeroPhone from "../../public/Hero-Phone.png";
import HeroMediceo from "../../public/Hero-Mediceo.png";
import HeroWeinbau from "../../public/Hero-Weinbau.png";
import HeroAcid from "../../public/Hero-AcidBerlin.png";

export default function Hero() {
  return (
    <div className="pt-16  bg-gradient-to-b from-[#1d344d] to-[#0B0D0F00] lg:pt-28">
      <div className="flex flex-col md:flex-row px-3 max-w-6xl mx-auto lg:items-center">
        <div className="items-center justify-center md:w-1/2">
          <p className="mt-12 my-4 text-base text-slate-500 lg:pl-2">
            Sawix Studio
          </p>
          <h1 className="text-5xl my-4 md:text-6xl">
            <span className="w-full">
              Grenzen? <br />
            </span>
            <span className="w-full">Gibt es bei uns nicht!</span>
          </h1>
          <div className="md:w-4/5">
            <p className="text-base md:text-xl font-light my-4 md:pr-3 mb-12">
              Sawix ist eine Full-Service-Kreativagentur die wunderschöne
              Websites gestaltet & Kampagnen liefert, die herausstechen.
            </p>
          </div>
        </div>
        <div className="sm:flex sm:justify-center md:w-1/2">
          <div className="w-full h-[600px] lg:h-[700px] lg:max-h-screen flex items-start justify-center relative sm:w-1/2 md:w-full">
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
                  className=" object-contain max-h-[600px] lg:max-h-screen lg:h-[700px]"
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
                  className=" object-contain max-h-[600px] lg:max-h-screen lg:h-[700px]"
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
                  className="object-contain max-h-[600px] lg:max-h-screen lg:h-[700px]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
