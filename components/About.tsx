import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

export default function About() {
  return (
    <div className="my-36 px-3 max-w-6xl mx-auto">
      <div className="lg:max-w-[60%]">
        <h2 className="text-4xl my-4">
          Weil eine gute Online Präsenz ein strategisches Investment ist
        </h2>
        <p className="my-4">
          Wir sind eine Full-Service-Design-Agentur bestehend aus vielfältigen
          Köpfen, die eine Leidenschaft für die Erstellung digitaler Erfahrungen
          haben.
        </p>
        <Link href={"/about"}>
          <button className="buttonMainGradient  p-px text-white rounded-full group">
            <div className="bg-black pl-8 rounded-full flex items-center hover:bg-transparent duration-300">
              Wer wir sind{" "}
              <span className="bg-blue-700 rounded-full p-3 m-[1px] ml-6 group-hover:bg-transparent duration-300">
                <BsArrowUpRight className=" text-white rounded-full duration-300 group-hover:rotate-45" />
              </span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
