import React from "react";

export default function Intro() {
  return (
    <div className="bg-[#0B0D0F] rounded-t-2xl pt-10 lg:pt-0">
      <div className="px-3 max-w-5xl mx-auto lg:py-28">
        <h2 className="text-4xl text-center my-4 lg:text-5xl lg:mb-10">
          "Das kann dich doch auch mit dem Handy machen.."
        </h2>
        <p className="text-base lg:text-xl font-light my-4 text-center">
          Natürlich kannst du das. Beachte dabei jedoch, dass Kunden die
          Qualität deines Auftritts direkt mit der Qualität deiner Arbeit oder
          Produkte asozzieren.
          <br /> <br />
          Deshalb stecken wir 110% in alles war wir machen, und scheuen dabei
          kein Blut, Schweiß und Tränen. Unser Job ist es deine Qualität und
          Werte rüberbringen und Neukunden generieren. Das Unternehmen
          anschließend zu Skalieren ist dein Job.
        </p>
      </div>
      <hr className="border-t-px border-whitep my-10 lg:my-0" />
    </div>
  );
}
