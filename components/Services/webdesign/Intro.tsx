import React from "react";

export default function Intro() {
  return (
    <div className="bg-[#0B0D0F] rounded-t-2xl pt-10 lg:pt-0">
      <div className="px-3 max-w-5xl mx-auto lg:py-28">
        <h2 className="text-4xl text-center my-4 lg:text-5xl lg:mb-10">
          Eine gute Online Präsenz ist ein stategisches Investment
        </h2>
        <p className="text-base lg:text-xl font-light my-4 text-center">
          Ihre Website ist Ihr wichtigstes Marketing-Asset Nummer eins. Daher
          sollte Ihre Website modern, ästhetisch ansprechend und technisch
          einwandfrei für ein angenehmes Nutzererlebnis sein.
          <br /> <br />
          Bei Sawix bauen wir maßgeschneiderte Websites, die das Auge Ihrer
          Zielgruppe fangen und sie von Anfang bis Ende beeindrucken. Wir
          spezialisieren uns darauf, subtile Animationen und interaktive
          Elemente zu kombinieren, um Ihre Benutzer zu beeindrucken, ohne die
          Funktionalität zu beeinträchtigen.
        </p>
      </div>
      <hr className="border-t-px border-whitep my-10 lg:my-0" />
    </div>
  );
}
