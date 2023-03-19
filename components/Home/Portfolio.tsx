import Image from "next/image";
import React from "react";

import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

import PortfolioMediceo from "../../public/Portfolio-Mediceo.png";
import PortfolioDMK from "../../public/Portfolio-DMK.png";
import PortfolioWeinhaus from "../../public/Portfolio-Weinhaus.png";
import PortfolioCDU from "../../public/Portfolio-CDU.png";
import PortfolioFreidenker from "@/public/Portfolio-Freidenker.png";
import PortfolioPilipp from "@/public/Portfolio-Pilipp.png";

export default function () {
  return (
    <div className="my-24 px-3 max-w-6xl mx-auto">
      <h2 className="text-4xl lg:text-5xl">Abgeschlossene Projekte</h2>
      <div className="text-black pt-8 flex gap-12 flex-col">
        {/* ----------------------------- Row 1  -----------------------------*/}
        <div className="flex gap-12 flex-col md:flex-row">
          {/* <Link href={"/projekte/mediceo"} className="w-full md:w-1/2"> */}
          <div className=" bg-[#FFEE62] px-4 pt-4 rounded-2xl relative w-full group hover:scale-[100.5%] hover:shadow-lg hover:shadow-white/5 duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl mb-3">Mediceo </h3>
              <div className="mb-4 flex flex-wrap">
                <button className=" bg-transparent border-black border-[1px] rounded-full px-3 py-1 mb-2 mr-2 text-xs md:text-sm font-light">
                  Design & Entwicklung
                </button>
                {/* <button className="bg-black border-black border-[1px] rounded-full mb-2 mr-2 group-hover:rotate-45 duration-300">
                  <div className="h-6 w-6 md:h-7 md:w-7 flex items-center justify-center">
                  <BsArrowUpRight className="text-white" />
                  </div>
                </button> */}
              </div>
            </div>
            <div>
              <Image
                src={PortfolioMediceo}
                alt="Medi.ceo Portfolio Vorstellung"
                className="rounded-t-2xl object-bottom"
              />
            </div>
          </div>
          {/* </Link> */}
          {/* ----------------------------- ----------------------------- */}
          {/* <Link href={"/portfolio/dmk-haus"} className="w-full md:w-1/2"> */}
          <div className=" bg-[#6EE863] px-4 pt-4 rounded-2xl w-full group hover:scale-[100.5%] hover:shadow-lg hover:shadow-white/5 duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl mb-3">DMK-Haus </h3>
              <div className="mb-4 flex flex-wrap">
                <button className=" bg-transparent border-black border-[1px] rounded-full px-3 py-1 mb-2 mr-2 text-xs md:text-sm font-light">
                  Design & Entwicklung
                </button>
                <button className=" bg-transparent border-black border-[1px] rounded-full px-3 py-1 mb-2 mr-2 text-xs md:text-sm font-light">
                  Custom-Shop
                </button>
                <button className=" bg-transparent border-black border-[1px] rounded-full px-3 py-1 mb-2 mr-2 text-xs md:text-sm font-light">
                  Branding
                </button>
                {/* <button className="bg-black border-black border-[1px] rounded-full mb-2 mr-2 group-hover:rotate-45 duration-300">
                  <div className="h-6 w-6 md:h-7 md:w-7 flex items-center justify-center">
                  <BsArrowUpRight className="text-white" />
                  </div>
                </button> */}
              </div>
            </div>
            <Image
              src={PortfolioDMK}
              alt="DMK-Haus Portfolio Vorstellung"
              className=" rounded-t-2xl"
            />
          </div>
          {/* </Link> */}
        </div>

        {/* ----------------------------- Row 2 -----------------------------*/}
        <div className="flex gap-12 flex-col md:flex-row">
          {/* <Link href={"/portfolio/weinhaus"} className="w-full md:w-1/2"> */}
          <div className=" bg-[#9747FF] px-4 pt-4 rounded-2xl w-full group hover:scale-[100.5%] hover:shadow-lg hover:shadow-white/5 duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl mb-3">Wohlfühlerei Weinhaus</h3>
              <div className="mb-4 flex flex-wrap">
                <button className=" bg-transparent border-black border-[1px] rounded-full px-3 py-1 mb-2 mr-2 text-xs md:text-sm font-light">
                  Design & Entwicklung
                </button>
                <button className=" bg-transparent border-black border-[1px] rounded-full px-3 py-1 mb-2 mr-2 text-xs md:text-sm font-light">
                  Online-Shop
                </button>
                {/* <button className="bg-black border-black border-[1px] rounded-full mb-2 mr-2 group-hover:rotate-45 duration-300">
                  <div className="h-6 w-6 md:h-7 md:w-7 flex items-center justify-center">
                  <BsArrowUpRight className="text-white" />
                  </div>
                </button> */}
              </div>
            </div>
            <Image
              src={PortfolioWeinhaus}
              alt="DMK-Haus Portfolio Vorstellung"
              className="rounded-t-2xl"
            />
          </div>
          {/* </Link> */}
          {/* ----------------------------- ----------------------------- */}
          {/* <Link href={"/portfolio/cdu-muehltal"} className="w-full md:w-1/2"> */}
          <div className=" bg-[#FF8540] px-4 pt-4 rounded-2xl w-full group hover:scale-[100.5%] hover:shadow-lg hover:shadow-white/5 duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl mb-3">CDU Mühltal</h3>
              <div className="mb-4 flex flex-wrap">
                <button className=" bg-transparent border-black border-[1px] rounded-full px-3 py-1 mb-2 mr-2 text-xs md:text-sm font-light">
                  Design & Entwicklung
                </button>
                {/* <button className="bg-black border-black border-[1px] rounded-full mb-2 mr-2 group-hover:rotate-45 duration-300">
                  <div className="h-6 w-6 md:h-7 md:w-7 flex items-center justify-center">
                    <BsArrowUpRight className="text-white" />
                    </div>
                  </button> */}
              </div>
            </div>
            <Image
              src={PortfolioCDU}
              alt="DMK-Haus Portfolio Vorstellung"
              className=" rounded-t-2xl"
            />
          </div>
          {/* </Link> */}
        </div>

        {/* ----------------------------- Row 3  -----------------------------*/}
        <div className="flex gap-12 flex-col md:flex-row">
          {/* <Link
            href={"/portfolio/freidenker-campus"}
            className="w-full md:w-1/2"
          > */}
          <div className=" bg-[#62B2FB] px-4 pt-4 rounded-2xl relative block w-full group hover:scale-[100.5%] hover:shadow-lg hover:shadow-white/5 duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl mb-3">Freidenker-Campus </h3>
              <div className="mb-4 flex flex-wrap">
                <button className=" bg-transparent border-black border-[1px] rounded-full px-3 py-1 mb-2 mr-2 text-xs md:text-sm font-light">
                  Entwicklung
                </button>
                <button className=" bg-transparent border-black border-[1px] rounded-full px-3 py-1 mb-2 mr-2 text-xs md:text-sm font-light">
                  Online-Shop
                </button>
                {/* <button className="bg-black  border-black border-[1px] rounded-full mb-2 mr-2 group-hover:rotate-45 duration-300">
                  <div className="h-6 w-6 md:h-7 md:w-7 flex items-center justify-center">
                  <BsArrowUpRight className="text-white" />
                  </div>
                </button> */}
              </div>
            </div>
            <Image
              src={PortfolioFreidenker}
              alt="Medi.ceo Portfolio Vorstellung"
              className=" rounded-t-2xl object-bottom"
            />
          </div>
          {/* </Link> */}
          {/* ----------------------------- ----------------------------- */}
          {/* <Link href={"/portfolio/pilipp"} className="w-full md:w-1/2"> */}
          <div className=" bg-[#FB4B4B] px-4 pt-4 rounded-2xl w-full group hover:scale-[100.5%] hover:shadow-lg hover:shadow-white/5 duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl mb-3">Pilipp-Holzwerkstoffe</h3>
              <div className="mb-4 flex flex-wrap">
                <button className=" bg-transparent border-black border-[1px] rounded-full px-3 py-1 mb-2 mr-2 text-xs md:text-sm font-light">
                  Entwicklung
                </button>
                <button className=" bg-transparent border-black border-[1px] rounded-full px-3 py-1 mb-2 mr-2 text-xs md:text-sm font-light">
                  Custom-Shop
                </button>
                {/* <button className="bg-black border-black border-[1px] rounded-full mb-2 mr-2 group-hover:rotate-45 duration-300">
                  <div className="h-6 w-6 md:h-7 md:w-7 flex items-center justify-center">
                  <BsArrowUpRight className="text-white" />
                  </div>
                </button> */}
              </div>
            </div>

            <Image
              src={PortfolioPilipp}
              alt="DMK-Haus Portfolio Vorstellung"
              className=" rounded-t-2xl"
            />
          </div>
          {/* </Link> */}
        </div>

        {/* ----------------------------- ----------------------------- */}
      </div>
    </div>
  );
}
