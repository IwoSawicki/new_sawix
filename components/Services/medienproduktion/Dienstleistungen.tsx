import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

import ImgImagefilm from "@/public/Services/medienproduktion/ImgImagefilm.webp";
import ImgWerbevideo from "@/public/Services/medienproduktion/ImgWerbevideo.webp";
import ImgRecruiting from "@/public/Services/medienproduktion/ImgRecruiting.webp";
import ImgProdukte from "@/public/Services/medienproduktion/ImgProdukte.webp";
import ImgInterview from "@/public/Services/medienproduktion/ImgInterview.jpg";

export default function Dienstleistungen() {
  return (
    <div className="my-12 lg:my-28 px-3 max-w-6xl mx-auto">
      <h2 className="text-4xl mb-8 pt-4 lg:text-5xl lg:pt-0 lg:mb-12">
        Unsere Services
      </h2>
      <div className="space-y-40">
        {/* Dienstleistungskarte */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-gradient-to-r from-[#9747FF] via-blue-700 to-[#9747FF] buttonGradient p-[2px] rounded-2xl">
            <Image
              src={ImgImagefilm}
              alt="Webdesign Dienste bei Sawix"
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 mt-5 lg:mt-0 justify-center lg:w-3/5 lg:pl-16 lg:gap-5">
            <h3 className="text-3xl lg:text-5xl">Imagefilm</h3>
            <p className="text-base lg:text-xl font-light">
              {/* Als Imagefilm-Spezialisten bieten wir Ihnen hochwertige und
              ansprechende Filme, die Ihr Unternehmen und Ihre Produkte perfekt
              präsentieren. Wir verstehen uns als Partner für alle, die einen
              beeindruckenden Eindruck hinterlassen und ihre Marke stärken
              möchten. Unsere Erfahrung und unser Fachwissen in der Produktion
              von Imagefilmen garantieren ein Ergebnis, das Ihre Ziele und Ihre
              Vision widerspiegelt. */}
            </p>
            <ul className="text-base lg:text-xl font-light list-disc ml-5">
              <li>Unternehmenspräsentaiton</li>
              <li>Marketingfilm</li>
              <li>Branding</li>
            </ul>
          </div>
        </div>
        {/* Dienstleistungskarte */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-gradient-to-r from-[#9747FF] via-blue-700 to-[#9747FF] buttonGradient p-[2px] rounded-2xl">
            <Image
              src={ImgWerbevideo}
              alt="Webdesign Dienste bei Sawix"
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 mt-5 lg:mt-0 justify-center lg:w-3/5 lg:pl-16 lg:gap-5">
            <h3 className="text-3xl lg:text-5xl">Werbevideo</h3>
            <p className="text-base lg:text-xl font-light">
              {/* Wir sind eine Agentur, die sich auf die Produktion von Werbefilmen
              spezialisiert hat. Unser Ziel ist es, Ihnen zu helfen, Ihre Marke
              und Ihre Produkte erfolgreich zu bewerben und Ihre Zielgruppe zu
              erreichen. Mit unserer Erfahrung und unserem Fachwissen können wir
              Ihnen eine einzigartige und ansprechende visuelle Präsentation
              bieten, die Ihre Botschaft vermittelt und Ihre Ziele unterstützt.
              Ob Sie einen kurzen Werbefilm für soziale Medien oder einen
              längeren Imagefilm für Ihre Website benötigen, wir sind hier, um
              Ihnen zu helfen.{" "} */}
            </p>
            <div className="flex flex-col gap-3 lg:gap-5 lg:flex-row">
              <ul className="text-base lg:text-xl font-light list-disc ml-5">
                <li>Produktvorstellung</li>
                <li>Social Media Werbefilm</li>
                <li>Visuelle Präsentation</li>
              </ul>
              {/* <Link href={"/webdesign"}>
                <button className="buttonMainGradient  p-px text-white rounded-full group">
                  <div className="bg-[#0b0d0f] pl-8 rounded-full flex items-center hover:bg-transparent duration-300">
                    Zurück zu Design & Entwicklung
                    <span className="bg-blue-700 rounded-full p-3 m-[1px] ml-5 group-hover:bg-transparent duration-300">
                      <BsArrowUpRight className=" text-white rounded-full duration-300 group-hover:rotate-45" />
                    </span>
                  </div>
                </button>
              </Link> */}
            </div>
          </div>
        </div>
        {/* Dienstleistungskarte */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-gradient-to-r from-[#9747FF] via-blue-700 to-[#9747FF] buttonGradient p-[2px] rounded-2xl">
            <Image
              src={ImgProdukte}
              alt="Webdesign Dienste bei Sawix"
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 mt-5 lg:mt-0 justify-center lg:w-3/5 lg:pl-16 lg:gap-5">
            <h3 className="text-3xl lg:text-5xl">Fotoproduktion</h3>
            <p className="text-base lg:text-xl font-light">Coming Soon</p>
            <ul className="text-base lg:text-xl font-light list-disc ml-5">
              <li>Produktvorstellung</li>
              <li>Dienstleitungen</li>
              <li>Service</li>
            </ul>
          </div>
        </div>
        {/* Dienstleistungskarte */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-gradient-to-r from-[#9747FF] via-blue-700 to-[#9747FF] buttonGradient p-[2px] rounded-2xl">
            <Image
              src={ImgInterview}
              alt="Webdesign Dienste bei Sawix"
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 mt-5 lg:mt-0 justify-center lg:w-3/5 lg:pl-16 lg:gap-5">
            <h3 className="text-3xl lg:text-5xl">Interview</h3>
            <p className="text-base lg:text-xl font-light">Coming Soon</p>
            <ul className="text-base lg:text-xl font-light list-disc ml-5">
              <li>Produktvorstellung</li>
              <li>Dienstleitungen</li>
              <li>Service</li>
            </ul>
          </div>
        </div>
        {/* Dienstleistungskarte */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-gradient-to-r from-[#9747FF] via-blue-700 to-[#9747FF] buttonGradient p-[2px] rounded-2xl">
            <Image
              src={ImgRecruiting}
              alt="Webdesign Dienste bei Sawix"
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 mt-5 lg:mt-0 justify-center lg:w-3/5 lg:pl-16 lg:gap-5">
            <h3 className="text-3xl lg:text-5xl">Recruitingfilm</h3>
            <p className="text-base lg:text-xl font-light">
              Recruiting-Videos sind ein immer wichtigeres Element des Employer
              Brandings und dienen dazu, Mitarbeiter zu gewinnen. Unternehmen
              präsentieren sich als Arbeitgeber und geben einen echten Einblick
              hinter die Kulissen. Je nach Ausrichtung geht es in einem
              Recruiting-Video um die Vorstellung freier Stellen, die
              Arbeitsatmosphäre oder um das Unternehmen als Arbeitgeber im
              Allgemeinen.
            </p>
            <ul className="text-base lg:text-xl font-light list-disc ml-5">
              <li>Qualifizierte Mitarbeiter</li>
              <li>Reichweite</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
