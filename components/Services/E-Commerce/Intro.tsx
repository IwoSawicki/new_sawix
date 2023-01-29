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

        {/* <div className="my-4 flex gap-3">
          <div className="flex flex-col w-1/2 gap-3">
            <button className="w-full border-white border rounded-full py-1">
              Webdesign
            </button>
            <button className="w-full border-white border rounded-full py-1">
              Webentwicklung
            </button>
            <button className="w-full border-white border rounded-full py-1">
              SEO Optimierung
            </button>
            <button className="w-full border-white border rounded-full py-1">
              Web apps
            </button>
          </div>
          <div className="flex flex-col w-1/2 gap-3">
            <button className="w-full border-white border rounded-full py-1">
              Filmproduktion
            </button>
            <button className="w-full border-white border rounded-full py-1">
              Werbevideos
            </button>
            <button className="w-full border-white border rounded-full py-1">
              Produktfotografie
            </button>
            <button className="w-full border-white border rounded-full py-1">
              Social Media
            </button>
          </div>
        </div>
        <hr className="border-t-px border-whitep my-10" /> */}
      </div>
      <hr className="border-t-px border-whitep my-10 lg:my-0" />
    </div>
  );
}
