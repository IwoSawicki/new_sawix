import React from "react";

export default function Intro() {
  return (
    <div className="pt-10 lg:pt-0 border-t-2 border-black">
      <div className="px-3 max-w-5xl mx-auto lg:py-28">
        <h2 className="text-center text-5xl md:text-8xl font-kaneda font-medium pb-6">
          "Das kann Ich doch auch mit dem Handy machen.."
        </h2>
        <p className="font-IvyPresto text-xl md:text-2xl font-normal text-center">
          Natürlich kannst du das. Beachte dabei jedoch, dass Kunden die
          Qualität deines Auftritts direkt mit der Qualität deiner Arbeit oder
          Produkte asozzieren.
          <br /> <br />
          Deshalb stecken wir 110% in alles war wir machen, und scheuen dabei
          kein Blut, Schweiß und Tränen. Unser Job ist es deine Qualität und
          Werte rüberzubringen und Neukunden generieren. Das Unternehmen
          anschließend zu Skalieren ist dein Job.
        </p>
      </div>
      <hr className="border-t-px border-whitep my-10 lg:my-0" />
    </div>
  );
}
