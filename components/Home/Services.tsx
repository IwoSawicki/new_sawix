import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import AnimationWebdesign from "@/public/Services/AnimationWebdesign.json";
import AnimationShops from "@/public/Services/AnimationShops.json";
import AnimationMedien from "@/public/Services/AnimationMedien.json";
import AnimationSSM from "@/public/Services/AnimationSSM.json";

export default function Services() {
  return (
    <div className="my-36 px-3  max-w-6xl mx-auto">
      <h2 className="text-4xl">
        Finde den Service, <br /> den du brauchst
      </h2>

      {/* ------------------------- ------------------------- ---------------------- */}
      <div className="my-12">
        <div className="rounded-2xl my-5 flex flex-col lg:flex-row">
          <div className="bg-white rounded-2xl h-60 lg:aspect-square lg:h-96 lg:mr-12 flex items-center justify-center">
            {/* bg-[#E8E5E3] */}
            <Player
              autoplay
              loop
              src={AnimationWebdesign}
              className="h-80 lg:h-96"
            ></Player>
          </div>
          <div className="p-4 mt-4 flex flex-col justify-center gap-3">
            <h3 className="text-3xl mb-3 lg:text-4xl">
              Webdesign & Entwicklung
            </h3>
            <p className="text-base lg:text-xl font-light">
              Wir spezialisieren uns auf interaktive, skalierbare und
              Maßgeschneiderte digitale Erfahrungen
            </p>
            <Link href={"services/webdesign"}>
              <button className="buttonGradient p-px mt-4 text-white text-base lg:text-xl font-light rounded-full group bg-gradient-to-r from-[#FFEE62] via-orange-600 to-[#FFEE62]">
                <div className="bg-[#0b0d0f] pl-8 rounded-full flex items-center hover:bg-transparent duration-300 ">
                  Erfahre mehr
                  <span className="bg-[#FFEE62] rounded-full p-3 m-[1px] ml-6 group-hover:bg-transparent duration-300">
                    <BsArrowUpRight className=" text-black rounded-full duration-300 group-hover:rotate-45 group-hover:text-white" />
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
          <div className="bg-white rounded-2xl h-60 lg:aspect-square lg:h-96 lg:mr-12 flex items-center justify-center">
            <Player
              autoplay
              loop
              src={AnimationShops}
              className="h-80 lg:h-96"
            ></Player>
          </div>
          <div className="p-4 mt-4 flex flex-col justify-center gap-3">
            <h3 className="text-3xl mb-3 lg:text-4xl">Online-Shops</h3>
            <p className="text-base lg:text-xl font-light">
              Sicherheit, Skalierbarkeit und vorallem Kundenzufriedenheit.
              Darauf legen wir besonderen Wert bei der Erstellung von einem
              Online-Shop
            </p>
            <Link href={"services/e-commerce"}>
              <button className="buttonGradient p-px mt-4 text-white text-base lg:text-xl font-light rounded-full group bg-gradient-to-r from-[#6EE863] via-emerald-500 to-[#6EE863]">
                <div className="bg-[#0b0d0f] pl-8 rounded-full flex items-center hover:bg-transparent duration-300 ">
                  Erfahre mehr
                  <span className="bg-[#6EE863] rounded-full p-3 m-[1px] ml-6 group-hover:bg-transparent duration-300">
                    <BsArrowUpRight className=" text-black rounded-full duration-300 group-hover:rotate-45 group-hover:text-white" />
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
          <div className="bg-white rounded-2xl h-60 lg:aspect-square lg:h-96 lg:mr-12 flex items-center justify-center">
            <Player
              autoplay
              loop
              src={AnimationMedien}
              className="h-80 lg:h-96"
            ></Player>
          </div>
          <div className="p-4 mt-4 flex flex-col justify-center gap-3">
            <h3 className="text-3xl mb-3 lg:text-4xl">
              Foto- & Videoproduktion
            </h3>
            <p className="text-base lg:text-xl font-light">
              Menschen arbeiten Visuell. Zeig deshalb deinen Kunden was du
              machst. Bilder sagen bekanntlich mehr als 1000 Worte.
            </p>

            <Link href={"services/medienproduktion"}>
              <button className="buttonGradient p-px mt-4 text-white text-base lg:text-xl font-light rounded-full group bg-gradient-to-r from-[#9747FF] via-blue-700 to-[#9747FF]">
                <div className="bg-[#0b0d0f] pl-8 rounded-full flex items-center hover:bg-transparent duration-300 ">
                  Erfahre mehr
                  <span className="bg-[#9747FF] rounded-full p-3 m-[1px] ml-6 group-hover:bg-transparent duration-300">
                    <BsArrowUpRight className=" text-black rounded-full duration-300 group-hover:rotate-45 group-hover:text-white" />
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
          <div className="bg-white rounded-2xl h-60 lg:aspect-square lg:h-96 lg:mr-12 flex items-center justify-center">
            <Player
              autoplay
              loop
              src={AnimationSSM}
              className="h-80 lg:h-96"
            ></Player>
          </div>
          <div className="p-4 mt-4 flex flex-col justify-center gap-3">
            <h3 className="text-3xl mb-3 xl:text-4xl">
              Social Media Marketing
            </h3>
            <p className="text-base lg:text-xl font-light">
              Egal ob Facebook, Instagram oder TikTok, mit uns erreichst du mehr
              Kunden mit deinem Unternehmen.
            </p>
            <Link href={"services/social-media-marketing"}>
              <button className="buttonGradient p-px mt-4 text-white text-base lg:text-xl font-light rounded-full group bg-gradient-to-r from-[#FF8540] via-red-600 to-[#FF8540]">
                <div className="bg-[#0b0d0f] pl-8 rounded-full flex items-center hover:bg-transparent duration-300 ">
                  Erfahre mehr
                  <span className="bg-[#FF8540] rounded-full p-3 m-[1px] ml-6 group-hover:bg-transparent duration-300">
                    <BsArrowUpRight className=" text-black rounded-full duration-300 group-hover:rotate-45 group-hover:text-white" />
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
