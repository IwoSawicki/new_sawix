import Link from "next/link";
import React from "react";

export default function Services() {
  return (
    <div className="my-24 px-3">
      <h2 className="text-4xl">
        Finde den Service, <br /> den du brauchst
      </h2>

      {/* ------------------------- ------------------------- ---------------------- */}
      <div className="my-16">
        <div className="rounded-2xl my-5">
          <div className="bg-[#E8E5E3] rounded-2xl h-60">
            <iframe
              className="w-full h-full rounded-2xl"
              src="https://embed.lottiefiles.com/animation/26925"
            ></iframe>
          </div>
          <div className="p-4 mt-4">
            <h3 className="text-3xl mb-3">Webdesign & Entwicklung</h3>
            <p>
              Wir spezialisieren uns auf interaktive, skalierbare und
              Maßgeschneiderte digitale Erfahrungen
            </p>
            <Link href={"/webdesign"}>
              <button className=" bg-transparent border-[#FFEE62] border-[1px] rounded-full px-6 py-2 mt-4">
                Erfahre mehr
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ------------------------- ------------------------- ---------------------- */}
      <div className="my-16">
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
              <button className=" bg-transparent border-[#6EE863] border-[1px] rounded-full px-6 py-2 mt-4">
                Erfahre mehr
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ------------------------- ------------------------- ---------------------- */}
      <div className="my-16">
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
              <button className=" bg-transparent border-[#9747FF] border-[1px] rounded-full px-6 py-2 mt-4">
                Erfahre mehr
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ------------------------- ------------------------- ---------------------- */}
      <div className="my-16">
        <div className="rounded-2xl my-5">
          <div className="bg-[#E8E5E3] rounded-2xl h-60">
            <iframe
              className="w-full h-full rounded-2xl"
              src="https://embed.lottiefiles.com/animation/38274"
            ></iframe>
          </div>
          <div className="p-4 mt-4">
            <h3 className="text-3xl mb-3">Social Media Marketing</h3>
            <p>
              Egal ob Facebook, Instagram oder TikTok, mit uns erreichst du mehr
              Kunden mit deinem Unternehmen.
            </p>
            <Link href={"/webdesign"}>
              <button className=" bg-transparent border-[#FF8540] border-[1px] rounded-full px-6 py-2 mt-4">
                Erfahre mehr
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
