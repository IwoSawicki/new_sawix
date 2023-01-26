import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

export default function Services() {
  return (
    <div className="my-24 px-3">
      <h2 className="text-4xl">
        Finde den Service, <br /> den du brauchst
      </h2>

      {/* ------------------------- ------------------------- ---------------------- */}
      <div className="my-12">
        <div className="rounded-2xl my-5">
          <div className="bg-[#E8E5E3] rounded-2xl h-60">
            <iframe
              className="w-full h-full rounded-2xl"
              src="https://embed.lottiefiles.com/animation/17667"
            ></iframe>
          </div>
          <div className="p-4 mt-4">
            <h3 className="text-3xl mb-3">Webdesign & Entwicklung</h3>
            <p>
              Wir spezialisieren uns auf interaktive, skalierbare und
              Maßgeschneiderte digitale Erfahrungen
            </p>
            <Link href={"/webdesign"}>
              <button className="bg-transparent border-white border-[1px] rounded-full pl-8 mb-2 mr-2 flex justify-between items-center hover:text-black hover:bg-[#FFEE62] hover:border-[#FFEE62] duration-300 group mt-4">
                Erfahre mehr
                <span className="bg-[#FFEE62] rounded-full p-3 m-[1px] ml-6 group-hover:bg-white duration-300">
                  <BsArrowUpRight className=" text-black rounded-full group-hover:text-black duration-300 group-hover:rotate-45" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ------------------------- ------------------------- ---------------------- */}
      <div className="my-12">
        <div className="rounded-2xl my-5">
          <div className="bg-[#E8E5E3] rounded-2xl h-60">
            <iframe
              className="w-full h-full rounded-2xl"
              src="https://embed.lottiefiles.com/animation/65730"
            ></iframe>
          </div>
          <div className="p-4 mt-4">
            <h3 className="text-3xl mb-3">Online-Shops</h3>
            <p>
              Sicherheit, Skalierbarkeit und vorallem Kundenzufriedenheit.
              Darauf legen wir besonderen Wert bei der Erstellung von einem
              Online-Shop
            </p>
            <Link href={"/webdesign"}>
              <button className="bg-transparent border-white border-[1px] rounded-full pl-8 mb-2 mr-2 flex justify-between items-center hover:text-black hover:bg-[#6EE863] hover:border-[#6EE863] duration-300 group mt-4">
                Erfahre mehr
                <span className="bg-[#6EE863] rounded-full p-3 m-[1px] ml-6 group-hover:bg-white duration-300">
                  <BsArrowUpRight className=" text-black rounded-full group-hover:text-black duration-300 group-hover:rotate-45" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ------------------------- ------------------------- ---------------------- */}
      <div className="my-12">
        <div className="rounded-2xl my-5">
          <div className="bg-[#E8E5E3] rounded-2xl h-60">
            <iframe
              className="w-full h-full rounded-2xl"
              src="https://embed.lottiefiles.com/animation/59621"
            ></iframe>
          </div>
          <div className="p-4 mt-4">
            <h3 className="text-3xl mb-3">Foto- & Videoproduktion</h3>
            <p>
              Menschen arbeiten Visuell. Zeig deshalb deinen Kunden was du
              machst. Bilder sagen bekanntlich mehr als 1000 Worte.
            </p>
            <Link href={"/webdesign"}>
              <button className="bg-transparent border-white border-[1px] rounded-full pl-8 mb-2 mr-2 flex justify-between items-center hover:text-black hover:bg-[#9747FF] hover:border-[#9747FF] duration-300 group mt-4">
                Erfahre mehr
                <span className="bg-[#9747FF] rounded-full p-3 m-[1px] ml-6 group-hover:bg-white duration-300">
                  <BsArrowUpRight className=" text-black rounded-full group-hover:text-black duration-300 group-hover:rotate-45" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ------------------------- ------------------------- ---------------------- */}
      <div className="my-12">
        <div className="rounded-2xl my-5">
          <div className="bg-[#E8E5E3] rounded-2xl h-60">
            <iframe
              className="w-full h-full rounded-2xl"
              src="https://embed.lottiefiles.com/animation/52376"
            ></iframe>
          </div>
          <div className="p-4 mt-4">
            <h3 className="text-3xl mb-3">Social Media Marketing</h3>
            <p>
              Egal ob Facebook, Instagram oder TikTok, mit uns erreichst du mehr
              Kunden mit deinem Unternehmen.
            </p>
            <Link href={"/webdesign"}>
              <button className="bg-transparent border-white border-[1px] rounded-full pl-8 mb-2 mr-2 flex justify-between items-center hover:text-black hover:bg-[#FF8540] hover:border-[#FF8540] duration-300 group mt-4">
                Erfahre mehr
                <span className="bg-[#FF8540] rounded-full p-3 m-[1px] ml-6 group-hover:bg-white duration-300">
                  <BsArrowUpRight className=" text-black rounded-full group-hover:text-black duration-300 group-hover:rotate-45" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
