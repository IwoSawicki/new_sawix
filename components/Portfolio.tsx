import Image from "next/image";
import React from "react";

import PortfolioMediceo from "../public/Portfolio-Mediceo.png";
import PortfolioDMK from "../public/Portfolio-DMK.png";
import PortfolioWeinhaus from "../public/Portfolio-Weinhaus.png";
import PortfolioCDU from "../public/Portfolio-CDU.png";

export default function () {
  return (
    <div className="pt-24 px-3">
      <h2 className="text-4xl">Portfolio</h2>
      <div className="text-black pt-8 flex gap-12 flex-col">
        {/* ----------------------------- */}

        {/* Row 1 */}
        <div className=" bg-[#FFEE62] px-4 pt-4 rounded-2xl">
          <h3 className="text-3xl mb-3">Mediceo </h3>
          <div className="mb-4">
            <button className=" bg-transparent border-black border-[1px] rounded-full px-3 py-1 mb-2 mr-2">
              Design & Entwicklung
            </button>
          </div>
          <Image
            src={PortfolioMediceo}
            alt="Medi.ceo Portfolio Vorstellung"
            className=" rounded-t-2xl"
          />
        </div>
        <div className=" bg-[#6EE863] px-4 pt-4 rounded-2xl">
          <h3 className="text-3xl mb-3">DMK-Haus </h3>
          <div className="mb-4">
            <button className=" bg-transparent border-black border-[1px] rounded-full px-3 py-1 mb-2 mr-2">
              Design & Entwicklung
            </button>
            <button className=" bg-transparent border-black border-[1px] rounded-full px-3 py-1 mb-2 mr-2">
              Online-Shop
            </button>
            <button className=" bg-transparent border-black border-[1px] rounded-full px-3 py-1 mb-2 mr-2">
              Branding
            </button>
          </div>
          <Image
            src={PortfolioDMK}
            alt="DMK-Haus Portfolio Vorstellung"
            className=" rounded-t-2xl"
          />
        </div>

        {/* Row 2 */}
        <div className=" bg-[#9747FF] px-4 pt-4 rounded-2xl">
          <h3 className="text-3xl mb-3">Wohlfühlerei Weinhaus</h3>
          <div className="mb-4">
            <button className=" bg-transparent border-black border-[1px] rounded-full px-3 py-1 mb-2 mr-2">
              Design & Entwicklung
            </button>
            <button className=" bg-transparent border-black border-[1px] rounded-full px-3 py-1 mb-2 mr-2">
              Online-Shop
            </button>
          </div>
          <Image
            src={PortfolioWeinhaus}
            alt="DMK-Haus Portfolio Vorstellung"
            className=" rounded-t-2xl"
          />
        </div>
        <div className=" bg-[#FF8540] px-4 pt-4 rounded-2xl">
          <h3 className="text-3xl mb-3">CDU Mühltal</h3>
          <div className="mb-4">
            <button className=" bg-transparent border-black border-[1px] rounded-full px-3 py-1 mb-2 mr-2">
              Design & Entwicklung
            </button>
          </div>
          <Image
            src={PortfolioCDU}
            alt="DMK-Haus Portfolio Vorstellung"
            className=" rounded-t-2xl"
          />
        </div>

        {/* ----------------------------- */}
      </div>
    </div>
  );
}
