import React from "react";

export default function Intro() {
  return (
    <div className="bg-[#E8E5E3] pt-10 lg:pt-0 border-t-2 border-black">
      <div className="px-3 max-w-5xl mx-auto lg:py-28">
        <h2 className="text-center text-5xl md:text-8xl font-kaneda font-medium pb-6">
          Eine gute Online Präsenz ist ein strategisches Investment
        </h2>
        <p className="font-IvyPresto text-xl md:text-2xl font-normal text-center">
          Deine Website ist dein wichtigstes Marketing-Asset Nummer eins. Daher
          sollte diese modern, ästhetisch ansprechend und technisch einwandfrei
          für ein angenehmes Nutzererlebnis sein.
          <br /> <br />
          Bei Sawix bauen wir maßgeschneiderte Websites, die das Auge deiner
          Zielgruppe fangen und sie von Anfang bis Ende beeindrucken. Wir
          spezialisieren uns darauf, subtile Animationen und interaktive
          Elemente zu kombinieren, um deine Benutzer zu beeindrucken, ohne die
          Funktionalität zu beeinträchtigen.
        </p>
      </div>
      <hr className="border-t-px border-whitep my-10 lg:my-0" />
    </div>
  );
}
