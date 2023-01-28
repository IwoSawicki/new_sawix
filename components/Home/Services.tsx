import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

export default function Services() {
  return (
    <div className="my-24 px-3  max-w-6xl mx-auto">
      <h2 className="text-4xl">
        Finde den Service, <br /> den du brauchst
      </h2>

      {/* ------------------------- ------------------------- ---------------------- */}
      <div className="my-12">
        <div className="rounded-2xl my-5 flex flex-col lg:flex-row">
          <div className="bg-[#E8E5E3] rounded-2xl h-60 lg:aspect-square lg:h-96 lg:mr-12">
            <iframe
              className="w-full h-full rounded-2xl"
              src="https://embed.lottiefiles.com/animation/17667"
            ></iframe>
          </div>
          <div className="p-4 mt-4 flex flex-col justify-center gap-3">
            <h3 className="text-3xl mb-3">Webdesign & Entwicklung</h3>
            <p>
              Wir spezialisieren uns auf interaktive, skalierbare und
              Maßgeschneiderte digitale Erfahrungen
            </p>
            <Link href={"/webdesign"}>
              <button className="buttonGradient p-px mt-4 text-white rounded-full group bg-gradient-to-r from-[#FFEE62] via-orange-600 to-[#FFEE62]">
                <div className="bg-[#0b0d0f] pl-8 rounded-full flex items-center hover:bg-transparent duration-300 ">
                  Erfahre mehr
                  <span className="bg-[#FFEE62] rounded-full p-3 m-[1px] ml-6 group-hover:bg-transparent duration-300">
                    <BsArrowUpRight className=" text-black rounded-full duration-300 group-hover:rotate-45" />
                  </span>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ------------------------- ------------------------- ---------------------- */}
      <div className="my-12">
        <div className="rounded-2xl my-5 flex flex-col lg:flex-row">
          <div className="bg-[#E8E5E3] rounded-2xl h-60 lg:aspect-square lg:h-96 lg:mr-12">
            <iframe
              className="w-full h-full rounded-2xl"
              src="https://embed.lottiefiles.com/animation/65730"
            ></iframe>
          </div>
          <div className="p-4 mt-4 flex flex-col justify-center gap-3">
            <h3 className="text-3xl mb-3">Online-Shops</h3>
            <p>
              Sicherheit, Skalierbarkeit und vorallem Kundenzufriedenheit.
              Darauf legen wir besonderen Wert bei der Erstellung von einem
              Online-Shop
            </p>
            <Link href={"/e-commerce"}>
              <button className="buttonGradient p-px mt-4 text-white rounded-full group bg-gradient-to-r from-[#6EE863] via-lime-800 to-[#6EE863]">
                <div className="bg-[#0b0d0f] pl-8 rounded-full flex items-center hover:bg-transparent duration-300 ">
                  Erfahre mehr
                  <span className="bg-[#6EE863] rounded-full p-3 m-[1px] ml-6 group-hover:bg-transparent duration-300">
                    <BsArrowUpRight className=" text-black rounded-full duration-300 group-hover:rotate-45" />
                  </span>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ------------------------- ------------------------- ---------------------- */}
      <div className="my-12">
        <div className="rounded-2xl my-5 flex flex-col lg:flex-row">
          <div className="bg-[#E8E5E3] rounded-2xl h-60 lg:aspect-square lg:h-96 lg:mr-12">
            <iframe
              className="w-full h-full rounded-2xl"
              src="https://embed.lottiefiles.com/animation/59621"
            ></iframe>
          </div>
          <div className="p-4 mt-4 flex flex-col justify-center gap-3">
            <h3 className="text-3xl mb-3">Foto- & Videoproduktion</h3>
            <p>
              Menschen arbeiten Visuell. Zeig deshalb deinen Kunden was du
              machst. Bilder sagen bekanntlich mehr als 1000 Worte.
            </p>

            <Link href={"/medienproduktion"}>
              <button className="buttonGradient p-px mt-4 text-white rounded-full group bg-gradient-to-r from-[#9747FF] via-blue-700 to-[#9747FF]">
                <div className="bg-[#0b0d0f] pl-8 rounded-full flex items-center hover:bg-transparent duration-300 ">
                  Erfahre mehr
                  <span className="bg-[#9747FF] rounded-full p-3 m-[1px] ml-6 group-hover:bg-transparent duration-300">
                    <BsArrowUpRight className=" text-black rounded-full duration-300 group-hover:rotate-45" />
                  </span>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ------------------------- ------------------------- ---------------------- */}
      <div className="my-12">
        <div className="rounded-2xl my-5 flex flex-col lg:flex-row">
          <div className="bg-[#E8E5E3] rounded-2xl h-60 lg:aspect-square lg:h-96 lg:mr-12">
            <iframe
              className="w-full h-full rounded-2xl"
              src="https://embed.lottiefiles.com/animation/52376"
            ></iframe>
          </div>
          <div className="p-4 mt-4 flex flex-col justify-center gap-3">
            <h3 className="text-3xl mb-3">Social Media Marketing</h3>
            <p>
              Egal ob Facebook, Instagram oder TikTok, mit uns erreichst du mehr
              Kunden mit deinem Unternehmen.
            </p>
            <Link href={"/social-media-marketing"}>
              <button className="buttonGradient p-px mt-4 text-white rounded-full group bg-gradient-to-r from-[#FF8540] via-red-600 to-[#FF8540]">
                <div className="bg-[#0b0d0f] pl-8 rounded-full flex items-center hover:bg-transparent duration-300 ">
                  Erfahre mehr
                  <span className="bg-[#FF8540] rounded-full p-3 m-[1px] ml-6 group-hover:bg-transparent duration-300">
                    <BsArrowUpRight className=" text-black rounded-full duration-300 group-hover:rotate-45" />
                  </span>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
