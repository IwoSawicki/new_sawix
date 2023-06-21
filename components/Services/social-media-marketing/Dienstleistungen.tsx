import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

import ImgErstellung from "@/public/Services/social-media-management/ImgErstellung.jpg";
import ImgPlanung from "@/public/Services/social-media-management/ImgPlanung.jpg";
import ImgAnalyse from "@/public/Services/social-media-management/ImgAnalyse.jpg";
import ImgAds from "@/public/Services/social-media-management/ImgAds.jpg";

export default function Dienstleistungen() {
  return (
    <div className="my-12 lg:my-28 px-3 max-w-6xl mx-auto">
      <h2 className="text-6xl md:text-8xl font-kaneda font-medium mb-8">
        Unsere Services
      </h2>
      <div className="space-y-20 lg:space-y-40">
        {/* Dienstleistungskarte */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-gradient-to-r from-[#FF8540] via-red-600 to-[#FF8540] buttonGradient p-[2px] rounded-2xl">
            <Image
              src={ImgErstellung}
              alt="Webdesign Dienste bei Sawix"
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 mt-5 lg:mt-0 justify-center lg:w-3/5 lg:pl-16 lg:gap-5">
            <h3 className="text-5xl md:text-7xl font-kaneda font-medium">
              Beitragserstellung
            </h3>
            <p className="font-IvyPresto text-xl md:text-2xl font-normal">
              Mit einem Hausinternem Medienproduktions Team sind wir in der Lage
              hochqualitative Fotos und Videos für dein Unternehmen
              aufzunehemen. Sei es in Form eines Beitrags, Storys oder Video für
              Instagram, Facebook, Tiktok und Youtube
            </p>
            <div className="flex flex-col gap-3 lg:gap-5 lg:flex-row">
              <ul className="text-base lg:text-xl font-light list-disc ml-5 font-IvyPrestoText">
                <li>Foto & Video</li>
                <li>Storys & Reels</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Dienstleistungskarte */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-gradient-to-r from-[#FF8540] via-red-600 to-[#FF8540] buttonGradient p-[2px] rounded-2xl">
            <Image
              src={ImgPlanung}
              alt="Webdesign Dienste bei Sawix"
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 mt-5 lg:mt-0 justify-center lg:w-3/5 lg:pl-16 lg:gap-5">
            <h3 className="text-5xl md:text-7xl font-kaneda font-medium">
              Planung & Veröffentlichung
            </h3>
            <p className="font-IvyPresto text-xl md:text-2xl font-normal">
              Unabhängig ob wir die Beiträge erstellen oder du uns das Material
              zuschickst. Wir können anschließend den Inhalt Bearbeiten,
              Gestalten und Planen. Im Anschluss kann dieser dann strategisch
              Veröffentlicht werden, um mehr Aufmerksamkeit auf deinen Inhalt zu
              ziehen.
            </p>
            <ul className="text-base lg:text-xl font-light list-disc ml-5 font-IvyPrestoText">
              <li>Gestaltung</li>
              <li>Planung</li>
              <li>Veröffentlichung</li>
            </ul>
          </div>
        </div>
        {/* Dienstleistungskarte */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-gradient-to-r from-[#FF8540] via-red-600 to-[#FF8540] buttonGradient p-[2px] rounded-2xl">
            <Image
              src={ImgAnalyse}
              alt="Webdesign Dienste bei Sawix"
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 mt-5 lg:mt-0 justify-center lg:w-3/5 lg:pl-16 lg:gap-5">
            <h3 className="text-5xl md:text-7xl font-kaneda font-medium">
              Analyse & Berichte
            </h3>
            <p className="font-IvyPresto text-xl md:text-2xl font-normal">
              Für die meisten Kunden führen wir Anfangs eine Konkurrenz, sowie
              Branchen- und Accountanalyse durch, um zu sehen was für dein
              Unternehmen Sinn macht, und was nicht. Dabei beachten wir zum
              Beispiel, wer die Zielgruppe ist, was für diese Interessant ist
              und wie man möglichst organischen Traffic auf deinen Account
              bekommt.
            </p>
            <ul className="text-base lg:text-xl font-light list-disc ml-5 font-IvyPrestoText">
              <li>Ausführliche Analyse</li>
              <li>Monatliche Berichte</li>
            </ul>
          </div>
        </div>
        {/* Dienstleistungskarte */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-gradient-to-r from-[#FF8540] via-red-600 to-[#FF8540] buttonGradient p-[2px] rounded-2xl">
            <Image
              src={ImgAds}
              alt="Webdesign Dienste bei Sawix"
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 mt-5 lg:mt-0 justify-center lg:w-3/5 lg:pl-16 lg:gap-5">
            <h3 className="text-5xl md:text-7xl font-kaneda font-medium">
              Bezahlte Werbung
            </h3>
            <p className="font-IvyPresto text-xl md:text-2xl font-normal">
              Wir nutzen Anzeigen auf Facebook, Instagram, Linkedin und anderen
              Communities zum Boosten von Reichweite und Interaktion von Posts,
              Videos, Stories oder Reels, zur Bewerbung einer Landingpage bzw.
              eines Shops, zum Aufbau eines CRM oder zum Push für App
              Installationen – um nur einige Ziele zu nennen, die uns die
              Werbeanzeigenmanager der verschiedenen Communities anbieten.
            </p>
            <ul className="text-base lg:text-xl font-light list-disc ml-5 font-IvyPrestoText">
              <li>React Native</li>
              <li>Benutzererfahrung</li>
              <li>Shop-Systeme</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
