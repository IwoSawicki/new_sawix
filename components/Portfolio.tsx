import Image from "next/image";
import React from "react";

import PortfolioMediceo from "../public/Portfolio-Mediceo.png";

export default function () {
  return (
    <div className="pt-24 px-3">
      <h2 className="text-4xl">Portfolio</h2>
      <div className="text-black pt-8 flex gap-12 flex-col">
        {/* ----------------------------- */}

        {/* Row 1 */}
        <div className=" bg-[#FFEE62] px-4 pt-4 rounded-2xl">
          <h3 className="text-3xl mb-3">Mediceo </h3>
          <button className=" bg-transparent border-black border-[1px] rounded-full px-3 py-1 mb-4">
            Design & Entwicklung
          </button>
          <Image
            src={PortfolioMediceo}
            alt="Medi.ceo Portfolio Vorstellung"
            className=" rounded-t-2xl"
          />
        </div>
        <div className=" bg-green-600 p-3">
          <p>Section 2</p>
        </div>

        {/* Row 2 */}
        <div className=" bg-purple-600 p-3">
          <p>Section 3</p>
        </div>
        <div className=" bg-orange-500 p-3">
          <p>Section 4</p>
        </div>

        {/* ----------------------------- */}
      </div>
    </div>
  );
}
