import Image from "next/image";
import Link from "next/link";
import React from "react";

import JobsImg from "../public/Home-Jobs.png";

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
          <button className=" bg-transparent border-blue-700 border-[1px] rounded-full px-6 py-2 mb-2 mr-2">
            Zu den Jobs
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
