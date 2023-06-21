import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { BsArrowUpRight } from "react-icons/bs";
import portolioDmkhaus from "@/public/portfolio/portfolio-dmkhaus.png";
import portfolioMediceo from "@/public/portfolio/portfolio-mediceo.png";
import portfolioWeinhaus from "@/public/portfolio/portfolio-weinhaus.png";

export default function () {
  return (
    <div>
      {/* Portfolio */}
      <div className="my-24 px-3 max-w-[1450px] mx-auto">
        <h2 className="text-5xl my-4 md:text-8xl font-kaneda font-semibold md:hidden">
          Abgeschlossene Projekte
        </h2>
        <div className="text-black pt-8 flex gap-12 flex-col">
          {/* DMK HAUS */}
          <div>
            <div className="bg-[#87AA85] rounded-xl lg:w-4/5 group hover:scale-[100.5%] duration-300">
              {/* <Link href={"/projekte/dmkhaus/"}> */}
              <div className="px-4 pt-4 md:px-7 md:pt-6">
                <p className="text-md md:text-xl font-light font-IvyPresto">
                  DMK-Haus
                </p>
                <h3 className="md:font-medium font-semibold text-4xl md:text-8xl relative font-kaneda">
                  Custom Shop für Modulhäußer und Möbel rund ums Haus
                  {/* <button className="bg-black border-black border-[1px] rounded-full mx-2 group-hover:rotate-45 duration-300 md:absolute md:mt-2">
                      <div className="h-5 w-5 md:h-8 md:w-8 flex items-center justify-center">
                        <BsArrowUpRight className="text-white text-sm" />
                      </div>
                    </button> */}
                </h3>
              </div>

              <div className="pt-6 md:flex md:justify-center">
                <Image
                  src={portolioDmkhaus}
                  alt="DMK Haus Mockup portfolio"
                  className=""
                />
              </div>
              {/* </Link> */}
            </div>
          </div>
          {/* ENDE DMK HAUS */}
          {/* MEDICEO */}
          <div className="lg:flex lg:justify-end">
            <div className="bg-[#FFF385] rounded-xl lg:w-4/5 group hover:scale-[100.5%] duration-300">
              {/* <Link href={"/projekte/dmkhaus/"}> */}
              <div className="px-4 pt-4 md:px-7 md:pt-6">
                <p className="text-md md:text-xl font-light font-IvyPresto">
                  Mediceo
                </p>
                <h3 className="md:font-medium font-semibold text-4xl md:text-8xl relative font-kaneda">
                  Website redesign für eine innovative Medizinapp
                  {/* <button className="bg-black border-black border-[1px] rounded-full mx-2 group-hover:rotate-45 duration-300 md:absolute md:mt-2">
                      <div className="h-5 w-5 md:h-8 md:w-8 flex items-center justify-center">
                        <BsArrowUpRight className="text-white text-sm" />
                      </div>
                    </button> */}
                </h3>
              </div>

              <div className="pt-6 md:flex md:justify-end">
                <Image
                  src={portfolioMediceo}
                  alt="DMK Haus Mockup portfolio"
                  className=""
                />
              </div>
              {/* </Link> */}
            </div>
          </div>
          {/* ENDE MEDICEO */}
          {/* WEINHAUS */}
          <div>
            <div className="bg-[#A282FF] rounded-xl lg:w-4/5 group hover:scale-[100.5%] duration-300">
              {/* <Link href={"/projekte/dmkhaus/"}> */}
              <div className="px-4 pt-4 md:px-7 md:pt-6">
                <p className="text-md md:text-xl font-light font-IvyPresto">
                  Wohlfühlerei Weinhaus
                </p>
                <h3 className="md:font-medium font-semibold text-4xl md:text-8xl relative font-kaneda">
                  Elegante Webseite für einen lokalen Weinanbau
                  {/* <button className="bg-black border-black border-[1px] rounded-full mx-2 group-hover:rotate-45 duration-300 md:absolute md:mt-2">
                      <div className="h-5 w-5 md:h-8 md:w-8 flex items-center justify-center">
                        <BsArrowUpRight className="text-white text-sm" />
                      </div>
                    </button> */}
                </h3>
              </div>

              <div className="pt-6 md:flex md:justify-start">
                <Image
                  src={portfolioWeinhaus}
                  alt="DMK Haus Mockup portfolio"
                />
              </div>
              {/* </Link> */}
            </div>
          </div>
          {/* ENDE WEINHAUS */}
        </div>
        <div className="flex justify-center pt-6">
          <Link href={"/projekte"}>
            <button className="buttonGradient p-[2px] mt-12 text-white text-base lg:text-xl font-light rounded-full group bg-gradient-to-r from-[#9747FF] via-blue-700 to-[#9747FF]">
              <div className="bg-[#E8E5E3] pl-8 rounded-full flex items-center hover:bg-transparent duration-300 text-black group-hover:text-white font-IvyPresto">
                Alle Projekte anschauen{" "}
                <span className="text-xs -mt-3 hidden">(06)</span>
                <span className="bg-[#9747FF] rounded-full p-3 m-[1px] ml-6 group-hover:bg-transparent duration-300">
                  <BsArrowUpRight className=" text-black rounded-full duration-300 group-hover:rotate-45 group-hover:text-white" />
                </span>
              </div>
            </button>
          </Link>
          {/* <button className="relative flex group pt-12">
            <div className="absolute">
              <div className="px-9 py-3 bg-transparent text-transparent border-[1px] border-black rounded-full mt-[9px] z-0">
                AlleProjekteansehen..
              </div>
            </div>
            <div className="bg-black rounded-full text-white px-9 py-4 group-hover:mt-1 mb-1 group-hover:mb-0 duration-300 z-10">
              Alle Projekte ansehen
            </div>
          </button> */}
        </div>
      </div>
      {/* <Portfolio /> */}
    </div>
  );
}
