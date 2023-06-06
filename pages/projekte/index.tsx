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

export default function portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
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
        <div className="pt-28 md:py-32 md:pb-8 flex flex-col justify-center gap-6 items-start px-3 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl">
            Schau dir an, wie wir die Probleme von anderen Kunden lösen konnten.
          </h1>
          <p className="md:w-1/2">
            Wir glauben daran, dass unsere Industrie von Zahlen geblendet wird.
            <br /> Während Kaufentscheidungen auf Emotionen basieren!
          </p>
        </div>
        {/* Portfolio */}
        <div className="my-6 px-3 max-w-6xl mx-auto pb-16 md:pb-28">
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
            {/* CDUmuehltal */}
            <div className="lg:flex lg:justify-end">
              <div className="bg-[#93CDFF] rounded-xl lg:w-4/5 group hover:scale-[100.5%] duration-300">
                {/* <Link href={"/projekte/dmkhaus/"}> */}
                <div className="px-4 pt-4 md:px-7 md:pt-6">
                  <p className="text-md md:text-xl font-light">CDU Homepage</p>
                  <h3 className="font-medium text-2xl md:text-5xl relative">
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
                  <p className="text-md md:text-xl font-light">
                    Pilipp-Holzwerkstoffe
                  </p>
                  <h3 className="font-medium text-2xl md:text-5xl relative">
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
                  <p className="text-md md:text-xl font-light">SkyVision</p>
                  <h3 className="font-medium text-2xl md:text-5xl relative">
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
