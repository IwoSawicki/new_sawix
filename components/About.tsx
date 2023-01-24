import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="my-24 px-3 ">
      <h2 className="text-4xl my-4">
        Weil eine gute Online Präsenz ein strategisches Investment ist
      </h2>
      <p className="my-4">
        Wir sind eine Full-Service-Design-Agentur bestehend aus vielfältigen
        Köpfen, die eine Leidenschaft für die Erstellung digitaler Erfahrungen
        haben.
      </p>
      <Link href={"/about"}>
        <button className=" bg-transparent border-blue-700 border-[1px] rounded-full px-6 py-2 mb-2 mr-2">
          Wer wir sind
        </button>
      </Link>
    </div>
  );
}
