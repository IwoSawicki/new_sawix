import Image from "next/image";
import Link from "next/link";
import React from "react";

import JobsImg from "../public/Home-Jobs.png";

import { BsArrowUpRight } from "react-icons/bs";

export default function Jobs() {
  return (
    <div className="my-36 px-3">
      <div>
        <h2 className="text-4xl my-4">Wir stellen ein</h2>
        <p className="my-4">
          Als eine schnellwachsende Agentur sind wir auf der ständigen Suche
          nach talentierten Menschen, die sich für digitale Erfahrungen
          begeistern. Schau dir doch mal an was für offene Stellen wir zur
          vergeben haben und bewirb dich gerne jederzeit.
        </p>
        <Link href={"/jobs"}>
          <button className="bg-transparent border-white border-[1px] rounded-full pl-8 mb-2 mr-2 flex justify-between items-center hover:bg-blue-700 hover:border-blue-700 duration-300 group">
            Zu den Jobs
            <span className="bg-blue-700 rounded-full p-3 m-[1px] ml-6 group-hover:bg-white duration-300">
              <BsArrowUpRight className=" text-white rounded-full group-hover:text-black duration-300 group-hover:rotate-45" />
            </span>
          </button>
        </Link>
      </div>
      <div>
        <Image
          className="rounded-2xl my-6"
          src={JobsImg}
          alt="Sawix Internes Meeting"
        />
      </div>
    </div>
  );
}
