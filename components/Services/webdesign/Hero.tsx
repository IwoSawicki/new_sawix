import sliderImg5 from "public/Services/Webdesign/hero-slider-img-1.png";
import sliderImg3 from "public/Services/Webdesign/hero-slider-img-2.png";
import sliderImg2 from "public/Services/Webdesign/hero-slider-img-3.png";
import sliderImg6 from "public/Services/Webdesign/hero-slider-img-4.png";
import sliderImg1 from "public/Services/Webdesign/hero-slider-img-5.png";
import sliderImg4 from "public/Services/Webdesign/hero-slider-img-6.png";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="py-8 md:py-20 lg:py-0 ">
      <div className="flex flex-col max-w-screen-2xl mx-auto lg:flex-row lg:items-center">
        <div className="my-16 px-3 lg:w-1/2 lg:pr-20">
          <h1 className="text-5xl md:text-8xl font-kaneda font-medium pb-5">
            Transformiere dein Unternehmen in einen Kunden-Magneten
          </h1>
          <p className="font-IvyPresto text-xl md:text-2xl font-normal">
            Content ist heutzutage immer Wichtiger. Wir helfen unternehmen aus
            der Masse abzuheben und neue Kunden generieren zu lassen
          </p>
        </div>
        <motion.div
          className="lg:w-1/2 lg:h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="relative flex overflow-x-hidden lg:overflow-y-hidden duration-300">
            <div className="py-6 lg:py-0 animate-marquee lg:animate-marqueeVertical whitespace-nowrap flex lg:flex-col">
              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={sliderImg1}
                  alt="Webdesign Slider Bild 1"
                  priority
                  className="min-w-[400px]"
                />
              </div>

              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={sliderImg2}
                  alt="Webdesign Slider Bild 2"
                  priority
                  className="min-w-[400px]"
                />
              </div>
              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={sliderImg3}
                  alt="Webdesign Slider Bild 3"
                  priority
                  className="min-w-[400px]"
                />
              </div>

              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={sliderImg4}
                  alt="Webdesign Slider Bild 4"
                  priority
                  className="min-w-[400px]"
                />
              </div>

              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={sliderImg5}
                  alt="Webdesign Slider Bild 5"
                  priority
                  className="min-w-[400px]"
                />
              </div>
              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={sliderImg6}
                  alt="Webdesign Slider Bild 6"
                  priority
                  className="min-w-[400px]"
                />
              </div>
            </div>

            <div className="absolute top-0 py-6 lg:py-0 animate-marquee2 lg:animate-marqueeVertical2 whitespace-nowrap flex lg:flex-col ">
              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={sliderImg1}
                  alt="Webdesign Slider Bild 1"
                  priority
                  className="min-w-[400px]"
                />
              </div>

              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={sliderImg2}
                  alt="Webdesign Slider Bild 2"
                  priority
                  className="min-w-[400px]"
                />
              </div>
              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={sliderImg3}
                  alt="Webdesign Slider Bild 3"
                  priority
                  className="min-w-[400px]"
                />
              </div>

              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={sliderImg4}
                  alt="Webdesign Slider Bild 4"
                  priority
                  className="min-w-[400px]"
                />
              </div>

              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={sliderImg5}
                  alt="Webdesign Slider Bild 5"
                  priority
                  className="min-w-[400px]"
                />
              </div>
              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={sliderImg6}
                  alt="Webdesign Slider Bild 6"
                  priority
                  className="min-w-[400px]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
