import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { BsArrowUpRight } from "react-icons/bs";
import portolioDmkhaus from "@/public/portfolio/portfolio-dmkhaus.png";
import portfolioMediceo from "@/public/portfolio/portfolio-mediceo.png";
import portfolioWeinhaus from "@/public/portfolio/portfolio-weinhaus.png";
import portfolioCDU from "@/public/portfolio/portfolio-cdu.png";
import portfolioPilipp from "@/public/portfolio/portfolio-pilipp.png";
import portfolioSkyvision from "@/public/portfolio/portfolio-skyvision.png";
import portfolioZehner from "@/public/portfolio/portfolio-zehnerimmo.png";
import portfolioHepa from "@/public/portfolio/portfolio-hepa.png";
import Loader from "@/components/Loader";

export default function portfolio() {
  return (
    <motion.div className="bg-white text-black">
      <Header />
      <Loader />
      <Head>
        <title>Abgeschlossene Projekte - Sawix Studio</title>
        <meta
          name="description"
          content="Schau dir an, wie wir die Probleme von anderen Kunden lösen konnten."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div>
        {/* Hero */}
        <div className="pt-28 md:py-32 md:pb-8 flex flex-col justify-center gap-6 items-start px-3 max-w-[1450px] mx-auto">
          <h1 className="text-5xl md:text-8xl font-kaneda font-medium">
            Schau dir an, wie wir die Probleme von anderen Kunden lösen konnten.
          </h1>
          <p className="font-IvyPresto text-xl md:text-2xl font-normal">
            Wir glauben daran, dass unsere Industrie von Zahlen geblendet wird.
            <br /> Während Kaufentscheidungen auf Emotionen basieren!
          </p>
        </div>
        {/* Portfolio */}
        <div className="my-6 px-3 max-w-[1450px] mx-auto pb-16 md:pb-28">
          <div className="text-black pt-8 flex gap-12 flex-col">
            {/* Zehner Immobilien */}
            <div>
              <div className="bg-[#82D3FF] rounded-xl lg:w-4/5 group hover:scale-[100.5%] duration-300 overflow-hidden">
                {/* <Link href={"/projekte/dmkhaus/"}> */}
                <div className="px-4 pt-4 md:px-7 md:pt-6">
                  <p className="text-md md:text-xl font-light font-IvyPresto">
                    Zehner Immobilien
                  </p>
                  <h3 className="md:font-medium font-semibold text-4xl md:text-8xl relative font-kaneda">
                    Immobilienmakler Webseite mit maßgeschneidertem Immo-System
                    {
                      <button className="bg-black border-black border-[1px] rounded-full mx-2 group-hover:rotate-45 duration-300 md:absolute md:mt-2">
                        <div className="h-5 w-5 md:h-8 md:w-8 flex items-center justify-center">
                          <BsArrowUpRight className="text-white text-sm" />
                        </div>
                      </button>
                    }
                  </h3>
                </div>

                <div className="pt-6 md:flex md:justify-center">
                  <Image
                    src={portfolioZehner}
                    alt="DMK Haus Mockup portfolio"
                    className=""
                  />
                </div>
                {/* </Link> */}
              </div>
            </div>
            {/* ENDE ZEHNER IMMOBILIEN */}
            {/* HEPA SOLAR */}
            <div className="lg:flex lg:justify-end">
              <div className="bg-[#6FDC6F] rounded-xl lg:w-4/5 group hover:scale-[100.5%] duration-300 overflow-hidden">
                {/* <Link href={"/projekte/dmkhaus/"}> */}
                <div className="px-4 pt-4 md:px-7 md:pt-6">
                  <p className="text-md md:text-xl font-light font-IvyPresto">
                    Hepa Solar
                  </p>
                  <h3 className="md:font-medium font-semibold text-4xl md:text-8xl relative font-kaneda">
                    Moderne Webseite für ein Photovoltaik-Unternehmen
                    <button className="bg-black border-black border-[1px] rounded-full mx-2 group-hover:rotate-45 duration-300 md:absolute md:mt-2">
                      <div className="h-5 w-5 md:h-8 md:w-8 flex items-center justify-center">
                        <BsArrowUpRight className="text-white text-sm" />
                      </div>
                    </button>
                  </h3>
                </div>

                <div className="pt-6 md:flex md:justify-end">
                  <Image
                    src={portfolioHepa}
                    alt="DMK Haus Mockup portfolio"
                    className=""
                  />
                </div>
                {/* </Link> */}
              </div>
            </div>
            {/* ENDE HEPA SOLAR */}
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
            {/* CDUmuehltal */}
            <div className="lg:flex lg:justify-end">
              <div className="bg-[#93CDFF] rounded-xl lg:w-4/5 group hover:scale-[100.5%] duration-300">
                {/* <Link href={"/projekte/dmkhaus/"}> */}
                <div className="px-4 pt-4 md:px-7 md:pt-6">
                  <p className="text-md md:text-xl font-light font-IvyPresto">
                    CDU
                  </p>
                  <h3 className="md:font-medium font-semibold text-4xl md:text-8xl relative font-kaneda">
                    Redesign einer CDU Homepage
                    {/* <button className="bg-black border-black border-[1px] rounded-full mx-2 group-hover:rotate-45 duration-300 md:absolute md:mt-2">
                      <div className="h-5 w-5 md:h-8 md:w-8 flex items-center justify-center">
                        <BsArrowUpRight className="text-white text-sm" />
                      </div>
                    </button> */}
                  </h3>
                </div>

                <div className="pt-6 md:flex md:justify-center">
                  <Image
                    src={portfolioCDU}
                    alt="DMK Haus Mockup portfolio"
                    className=""
                  />
                </div>
                {/* </Link> */}
              </div>
            </div>
            {/* ENDE CDUmuehltal */}
            {/* PilippHolzwerkstoffe */}
            <div>
              <div className="bg-[#FB8484] rounded-xl lg:w-4/5 group hover:scale-[100.5%] duration-300">
                {/* <Link href={"/projekte/dmkhaus/"}> */}
                <div className="px-4 pt-4 md:px-7 md:pt-6">
                  <p className="text-md md:text-xl font-light font-IvyPresto">
                    Pilipp-Holzwerkstoffe
                  </p>
                  <h3 className="md:font-medium font-semibold text-4xl md:text-8xl relative font-kaneda">
                    Custom B2B Shop mit 2000+ eingepflegten Artikeln
                    {/* <button className="bg-black border-black border-[1px] rounded-full mx-2 group-hover:rotate-45 duration-300 md:absolute md:mt-2">
                      <div className="h-5 w-5 md:h-8 md:w-8 flex items-center justify-center">
                        <BsArrowUpRight className="text-white text-sm" />
                      </div>
                    </button> */}
                  </h3>
                </div>

                <div className="pt-6 md:flex md:justify-center">
                  <Image
                    src={portfolioPilipp}
                    alt="DMK Haus Mockup portfolio"
                    className="object-left-bottom"
                  />
                </div>
                {/* </Link> */}
              </div>
            </div>
            {/* ENDE PilippHolzwerkstoffe */}
            {/* SkyVision */}
            <div className="lg:flex lg:justify-end">
              <div className="bg-[#C89DFF] rounded-xl lg:w-4/5 group hover:scale-[100.5%] duration-300">
                {/* <Link href={"/projekte/dmkhaus/"}> */}
                <div className="px-4 pt-4 md:px-7 md:pt-6">
                  <p className="text-md md:text-xl font-light font-IvyPresto">
                    SkyVision
                  </p>
                  <h3 className="md:font-medium font-semibold text-4xl md:text-8xl relative font-kaneda">
                    Visuelle Webseite für ein Drohnenunternehmen
                    {/* <button className="bg-black border-black border-[1px] rounded-full mx-2 group-hover:rotate-45 duration-300 md:absolute md:mt-2">
                      <div className="h-5 w-5 md:h-8 md:w-8 flex items-center justify-center">
                        <BsArrowUpRight className="text-white text-sm" />
                      </div>
                    </button> */}
                  </h3>
                </div>

                <div className="pt-6 md:flex md:justify-center">
                  <Image
                    src={portfolioSkyvision}
                    alt="DMK Haus Mockup portfolio"
                    className=""
                  />
                </div>
                {/* </Link> */}
              </div>
            </div>
            {/* ENDE SkyVision */}
          </div>
        </div>
        {/* <Portfolio /> */}

        <Footer />
      </div>
    </motion.div>
  );
}
