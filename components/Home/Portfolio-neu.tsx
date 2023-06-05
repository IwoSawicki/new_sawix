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
      <div className="my-24 px-3 max-w-6xl mx-auto">
        <h2 className="text-4xl my-4 md:text-6xl">Abgeschlossene Projekte</h2>
        <div className="text-black pt-8 flex gap-12 flex-col">
          {/* DMK HAUS */}
          <div>
            <div className="bg-[#87AA85] rounded-xl lg:w-4/5 group hover:scale-[100.5%] duration-300">
              {/* <Link href={"/projekte/dmkhaus/"}> */}
              <div className="px-4 pt-4 md:px-7 md:pt-6">
                <p className="text-md md:text-xl font-light">DMK-Haus</p>
                <h3 className="font-medium text-2xl md:text-5xl relative">
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
                <p className="text-md md:text-xl font-light">Mediceo</p>
                <h3 className="font-medium text-2xl md:text-5xl relative">
                  Website redesign für eine innovative Medizinapp
                  {/* <button className="bg-black border-black border-[1px] rounded-full mx-2 group-hover:rotate-45 duration-300 md:absolute md:mt-2">
                      <div className="h-5 w-5 md:h-8 md:w-8 flex items-center justify-center">
                        <BsArrowUpRight className="text-white text-sm" />
                      </div>
                    </button> */}
                </h3>
              </div>

              <div className="pt-6 md:flex md:justify-center">
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
                <p className="text-md md:text-xl font-light">
                  Wohlfühlerei Weinhaus
                </p>
                <h3 className="font-medium text-2xl md:text-5xl relative">
                  Elegante Webseite für einen lokalen Weinanbau
                  {/* <button className="bg-black border-black border-[1px] rounded-full mx-2 group-hover:rotate-45 duration-300 md:absolute md:mt-2">
                      <div className="h-5 w-5 md:h-8 md:w-8 flex items-center justify-center">
                        <BsArrowUpRight className="text-white text-sm" />
                      </div>
                    </button> */}
                </h3>
              </div>

              <div className="pt-6 md:flex md:justify-center">
                <Image
                  src={portfolioWeinhaus}
                  alt="DMK Haus Mockup portfolio"
                  className="object-left-bottom"
                />
              </div>
              {/* </Link> */}
            </div>
          </div>
          {/* ENDE WEINHAUS */}
        </div>
      </div>
      {/* <Portfolio /> */}
    </div>
  );
}
