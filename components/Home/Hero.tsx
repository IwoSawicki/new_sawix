import Image from "next/image";
import { motion } from "framer-motion";

import HeroPhone from "../../public/hero-phone-new.png";
import HeroMediceo from "../../public/Hero-Mediceo.png";
import HeroWeinbau from "../../public/Hero-Weinbau.png";
import HeroAcid from "../../public/Hero-AcidBerlin.png";

export default function Hero() {
  return (
    <div className="pt-16 lg:pt-28">
      <div className="flex flex-col md:flex-row px-3 max-w-7xl mx-auto lg:items-center">
        <div className="items-center justify-center md:w-3/5">
          <p className="mt-12 my-4 text-base text-slate-500 lg:pl-2">
            Sawix Studio.
          </p>
          <h1 className="text-[15vw] leading-[1em] my-4 md:text-[95px]">
            <span className="w-full">
              Grenzen? <br />
            </span>
            <span className="w-full">
              Gibt es bei <br />
              uns nicht!
            </span>
          </h1>
          <div className="md:w-4/6">
            <p className="text-base md:text-xl font-light my-4 md:pr-3 mb-12">
              Sawix ist eine Full-Service-Kreativagentur die wunderschöne
              Websites gestaltet und Kampagnen liefert, die herausstechen.
            </p>
          </div>
        </div>
        <div className="sm:flex sm:justify-center md:w-2/5">
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
                  src={HeroPhone}
                  alt="Acid Berlin Startbild"
                  priority
                  className=" object-contain max-h-[600px] lg:max-h-screen lg:h-[700px]"
                />
              </motion.div>
            </div>
            {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-full">
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
            </div> */}
            {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-full">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
