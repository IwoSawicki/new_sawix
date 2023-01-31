import React from "react";

export default function Intro() {
  return (
    <div className="rounded-t-2xl pt-10 lg:pt-0">
      <div className="px-3 max-w-5xl mx-auto lg:py-28">
        <h2 className="text-4xl text-center my-4 lg:text-5xl lg:mb-10">
          Ab wann macht es Sinn einen Online Shop aufzumachen?
        </h2>
        <p className="text-base lg:text-xl font-light my-4 text-center">
          Das ist ja auch sehr viel Arbeit sowas zu Pflegen oder? Überhaupt
          nicht! Die Arbeit machen wir uns bei der Konzeption und Entwicklung.
          Den Shop danach zu Pflegen, aktuell zu halten und neue Produkte
          einzustellen, sind dann nurnoch ein paar wenige Mausklicks.
          <br /> <br />
          Ein reiner Online Shop macht hierbei für sehr viele Unternehmen Sinn.
          Hauptsächlich aber für Produkte und Dienstleistungen, die nicht stark
          personalisiert sind und immer wieder verkauft werden.
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
