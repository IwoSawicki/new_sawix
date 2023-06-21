import React from "react";

export default function Intro() {
  return (
    <div className="pt-10 lg:pt-0 border-t-2 border-black">
      <div className="px-3 max-w-5xl mx-auto lg:py-28">
        <h2 className="text-center text-5xl md:text-8xl font-kaneda font-medium pb-6">
          Für wen lohnt sicht Social Media Marketing?
        </h2>
        <p className="font-IvyPresto text-xl md:text-2xl font-normal text-center">
          Social Media Marketing lohnt sich für alle Unternehmen, die ihre Marke
          bekannt machen, mehr Menschen erreichen und ihre Verkäufe steigern
          möchten. Man kann durch Soziale Netzwerke seine Zielgruppe direkt
          erreichen und oftmals Interaktionen mit potenziellen Kunden aufbauen.
          Sowie auch seine Produkte, Leistungen und Werte in visueller Form
          übermitteln.
          <br /> <br />
          Außerdem kann man Daten und Insights sammeln, um seine
          Marketingstrategie zu verbessern und seine ROI (Return on Investment)
          zu maximieren.
          <br /> <br />
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
