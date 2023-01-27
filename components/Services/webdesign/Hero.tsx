import sliderImg1 from "public/webdesign-slider-img-1.png";
import sliderImg2 from "public/webdesign-slider-img-2.png";
import sliderImg3 from "public/webdesign-slider-img-3.png";
import sliderImg4 from "public/webdesign-slider-img-4.png";
import sliderImg5 from "public/webdesign-slider-img-5.png";
import sliderImg6 from "public/webdesign-slider-img-6.png";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="pt-20  bg-gradient-to-b from-[#1e252d] to-[#1b1d1f] ">
      <div className="flex flex-col max-w-6xl mx-auto">
        <div className="my-16 px-3">
          <h1 className="text-4xl mb-4">
            Transformiere dein Unternehmen in einen Kunden-Magneten
          </h1>
          <p>
            Content ist heutzutage immer Wichtiger. Ich helfe unternehmen aus
            der Masse abzuheben und neue Kunden generieren zu lassen
          </p>
        </div>
        <div>
          <div className="group relative flex overflow-x-hidden duration-300">
            <div className="py-6 animate-marquee whitespace-nowrap flex">
              <div className="mx-4 bg-red-500 w-full">
                <Image
                  src={sliderImg1}
                  alt="Webdesign Slider Bild 1"
                  className="min-w-[400px]"
                />
              </div>

              <div className="mx-4 bg-red-500 w-full">
                <Image
                  src={sliderImg2}
                  alt="Webdesign Slider Bild 2"
                  className="min-w-[400px]"
                />
              </div>
              <div className="mx-4 bg-red-500">
                <Image
                  src={sliderImg3}
                  alt="Webdesign Slider Bild 3"
                  className="min-w-[400px]"
                />
              </div>

              <div className="mx-4 bg-red-500">
                <Image
                  src={sliderImg4}
                  alt="Webdesign Slider Bild 4"
                  className="min-w-[400px]"
                />
              </div>

              <div className="mx-4 bg-red-500">
                <Image
                  src={sliderImg5}
                  alt="Webdesign Slider Bild 5"
                  className="min-w-[400px]"
                />
              </div>
              <div className="mx-4 bg-red-500">
                <Image
                  src={sliderImg6}
                  alt="Webdesign Slider Bild 6"
                  className="min-w-[400px]"
                />
              </div>
            </div>

            <div className="absolute top-0 py-6 animate-marquee2 whitespace-nowrap flex">
              {/* <span>
                <Image src={sliderImg1} alt="Webdesign Slider Bild 1" />
              </span>

              <span className="mx-4 h-screen w-screen bg-red-500">
                <Image
                  src={sliderImg2}
                  alt="Webdesign Slider Bild 2"
                  className=" h-96 "
                />
              </span>
              <span className="mx-4">
                <Image src={sliderImg3} alt="Webdesign Slider Bild 3" />
              </span>
              <span className="mx-4">
                <Image src={sliderImg4} alt="Webdesign Slider Bild 4" />
              </span>
              <span className="mx-4">
                <Image src={sliderImg5} alt="Webdesign Slider Bild 5" />
              </span>
              <span className="mx-4">
                <Image src={sliderImg6} alt="Webdesign Slider Bild 6" />
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
