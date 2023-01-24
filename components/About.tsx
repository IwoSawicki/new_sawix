import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

export default function About() {
  return (
    <div className="my-36 px-3 ">
      <h2 className="text-4xl my-4">
        Weil eine gute Online Präsenz ein strategisches Investment ist
      </h2>
      <p className="my-4">
        Wir sind eine Full-Service-Design-Agentur bestehend aus vielfältigen
        Köpfen, die eine Leidenschaft für die Erstellung digitaler Erfahrungen
        haben.
      </p>
      <Link href={"/about"}>
        <button className="bg-transparent border-white border-[1px] rounded-full pl-8 mb-2 mr-2 flex justify-between items-center hover:bg-blue-700 hover:border-blue-700 duration-300 group">
          Wer wir sind
          <span className="bg-blue-700 rounded-full p-3 m-[1px] ml-6 group-hover:bg-white duration-300">
            <BsArrowUpRight className=" text-white rounded-full group-hover:text-black duration-300 group-hover:rotate-45" />
          </span>
        </button>
      </Link>
    </div>
  );
}
