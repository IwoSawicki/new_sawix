import Image from "next/image";
import { motion } from "framer-motion";

import HeroPhone from "../../public/Hero-Phone.png";
import HeroMediceo from "../../public/Hero-Mediceo.png";
import HeroWeinbau from "../../public/Hero-Weinbau.png";
import HeroAcid from "../../public/Hero-AcidBerlin.png";
import { Days_One } from "@next/font/google";

export default function Hero() {
  return (
    <div className="pt-32 max-w-[1450px] mx-auto">
      <div>
        <h1 className="text-[13vw] font-semibold font-kaneda leading-[0.8em]">
          Digitale Erfahrungen die Bewegen
        </h1>
      </div>
      <div className="flex flex-col md:flex-row px-3 max-w-7xl mx-auto lg:items-center">
        <div className="items-center justify-center md:w-1/2">
          <p>
            Bei Sawix gestalten wir wunderschöne Websites, erstellen auffällige
            Videos und liefern Designs, die dein Unternehmen voranbringen.
          </p>
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
