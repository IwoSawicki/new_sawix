import sliderImg1 from "public/Services/Webdesign/hero-slider-img-1.png";
import sliderImg2 from "public/Services/Webdesign/hero-slider-img-2.png";
import sliderImg3 from "public/Services/Webdesign/hero-slider-img-3.png";
import sliderImg4 from "public/Services/Webdesign/hero-slider-img-4.png";
import sliderImg5 from "public/Services/Webdesign/hero-slider-img-5.png";
import sliderImg6 from "public/Services/Webdesign/hero-slider-img-6.png";
import slider1 from "@/public/Services/medienproduktion/slider-1.webp";
import slider2 from "@/public/Services/medienproduktion/slider-2.webp";
import slider3 from "@/public/Services/medienproduktion/slider-3.webp";
import slider4 from "@/public/Services/medienproduktion/slider-4.webp";
import slider5 from "@/public/Services/medienproduktion/slider-5.webp";
import slider6 from "@/public/Services/medienproduktion/slider-6.webp";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="py-20 lg:py-0  bg-gradient-to-br from-[#271b37] to-[#231b2d00] ">
      <div className="flex flex-col max-w-screen-2xl mx-auto lg:flex-row lg:items-center ">
        <div className="my-16 px-3 lg:w-1/2 lg:pr-20">
          <h1 className="text-4xl mb-4 lg:mb-6 lg:text-6xl">
            Lass dein Unternehmen im Rampenlicht stehen.
          </h1>
          <p className="text-base lg:text-xl font-light">
            Wir Menschen arbeiten Visuell. Deshalb solltest du deinen Kunden
            zeigen, was du machst, anstatt nur auf Worte zu vertrauen. Bei Sawix
            kriegst du deshalb Foto und Video auf höchsten Niveau, um deine
            Vision klar rüber zu bringen
          </p>
        </div>
        <div className="lg:w-1/2 lg:h-screen">
          <div className="relative flex overflow-x-hidden lg:overflow-y-hidden duration-300">
            <div className="py-6 lg:py-0 animate-marquee lg:animate-marqueeVertical whitespace-nowrap flex lg:flex-col">
              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={slider1}
                  alt="Webdesign Slider Bild 1"
                  priority
                  className="min-w-[400px]"
                />
              </div>

              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={slider2}
                  alt="Webdesign Slider Bild 2"
                  priority
                  className="min-w-[400px]"
                />
              </div>
              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={slider3}
                  alt="Webdesign Slider Bild 3"
                  priority
                  className="min-w-[400px]"
                />
              </div>

              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={slider4}
                  alt="Webdesign Slider Bild 4"
                  priority
                  className="min-w-[400px]"
                />
              </div>

              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={slider5}
                  alt="Webdesign Slider Bild 5"
                  priority
                  className="min-w-[400px]"
                />
              </div>
              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={slider6}
                  alt="Webdesign Slider Bild 6"
                  priority
                  className="min-w-[400px]"
                />
              </div>
            </div>

            <div className="absolute top-0 py-6 lg:py-0 animate-marquee2 lg:animate-marqueeVertical2 whitespace-nowrap flex lg:flex-col ">
              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={slider1}
                  alt="Webdesign Slider Bild 1"
                  priority
                  className="min-w-[400px]"
                />
              </div>

              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={slider2}
                  alt="Webdesign Slider Bild 2"
                  priority
                  className="min-w-[400px]"
                />
              </div>
              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={slider3}
                  alt="Webdesign Slider Bild 3"
                  priority
                  className="min-w-[400px]"
                />
              </div>

              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={slider4}
                  alt="Webdesign Slider Bild 4"
                  priority
                  className="min-w-[400px]"
                />
              </div>

              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={slider5}
                  alt="Webdesign Slider Bild 5"
                  priority
                  className="min-w-[400px]"
                />
              </div>
              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={slider6}
                  alt="Webdesign Slider Bild 6"
                  priority
                  className="min-w-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
