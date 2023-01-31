import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
//import ImgWebdesign from "@/public/Services/webdesign/webdesign.jpg";
import webdesignImg from "public/Services/Webdesign/webdesign.jpg";
import ImgWebdev from "../../../public/Services/Webdesign/webdev.jpg";
import ImgMobileApp from "public/Services/Webdesign/mobileapps.jpg";
import ImgMedienproduktion from "public/Services/Webdesign/medienproduktion.jpg";

export default function Dienstleistungen() {
  return (
    <div className="my-12 lg:my-28 px-3 max-w-6xl mx-auto">
      <h2 className="text-4xl mb-8 pt-4 lg:text-5xl lg:pt-0 lg:mb-12">
        Unsere Services
      </h2>
      <div className="space-y-20 lg:space-y-40">
        {/* Dienstleistungskarte */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-gradient-to-r from-[#FF8540] via-red-600 to-[#FF8540] buttonGradient p-[2px] rounded-2xl">
            <Image
              src={webdesignImg}
              alt="Webdesign Dienste bei Sawix"
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 mt-5 lg:mt-0 justify-center lg:w-3/5 lg:pl-16 lg:gap-5">
            <h3 className="text-3xl lg:text-5xl">Beitragserstellung</h3>
            <p className="text-base lg:text-xl font-light">
              Mit einem Hausinternem Medienproduktions Team sind wir in der Lage
              hochqualitative Fotos und Videos für dein Unternehmen
              aufzunehemen. Sei es in Form eines Beitrags, Storys oder Video für
              Instagram, Facebook, Tiktok und Youtube
            </p>
            <div className="flex flex-col gap-3 lg:gap-5 lg:flex-row">
              <ul className="text-base lg:text-xl font-light list-disc ml-5">
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
              src={ImgWebdev}
              alt="Webdesign Dienste bei Sawix"
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 mt-5 lg:mt-0 justify-center lg:w-3/5 lg:pl-16 lg:gap-5">
            <h3 className="text-3xl lg:text-5xl">
              Plannung & Veröffentlichung
            </h3>
            <p className="text-base lg:text-xl font-light">
              Egal ob wir die Beiträge erstellen oder du uns das Material
              zuschickst, können wir den Inhalt dann Bearbeiten, Gestalten und
              Plannen. Im Anschluss kann dieser dann strategisch Veröffentlicht
              werden, um mehr Aufmerksamkeit auf dein Inhalt zu ziehen.
            </p>
            <ul className="text-base lg:text-xl font-light list-disc ml-5">
              <li>Gestaltung</li>
              <li>Plannung</li>
              <li>Veröffentlichung</li>
            </ul>
          </div>
        </div>
        {/* Dienstleistungskarte */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-gradient-to-r from-[#FF8540] via-red-600 to-[#FF8540] buttonGradient p-[2px] rounded-2xl">
            <Image
              src={ImgWebdev}
              alt="Webdesign Dienste bei Sawix"
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 mt-5 lg:mt-0 justify-center lg:w-3/5 lg:pl-16 lg:gap-5">
            <h3 className="text-3xl lg:text-5xl">Analyze & Berichte</h3>
            <p className="text-base lg:text-xl font-light">
              Für die meisten Kunden führen wir Anfangs eine Konkurrenz, sowie
              Branchen- und Accountanalyze durch, um zu sehen was für dein
              Unternehmen Sinn macht, und was nicht. Dabei beachten wir zum
              Beispiel, wer die Zielgruppe ist, was für diese Interessant ist
              und wie man möglichst organischen Traffic auf deinen Account
              bekommt.
            </p>
            <ul className="text-base lg:text-xl font-light list-disc ml-5">
              <li>Ausführliche Analyze</li>
              <li>Monatliche Berichte</li>
            </ul>
          </div>
        </div>
        {/* Dienstleistungskarte */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-gradient-to-r from-[#FF8540] via-red-600 to-[#FF8540] buttonGradient p-[2px] rounded-2xl">
            <Image
              src={ImgMobileApp}
              alt="Webdesign Dienste bei Sawix"
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 mt-5 lg:mt-0 justify-center lg:w-3/5 lg:pl-16 lg:gap-5">
            <h3 className="text-3xl lg:text-5xl">Bezahlte Werbung</h3>
            <p className="text-base lg:text-xl font-light">Comming Soon</p>
            <ul className="text-base lg:text-xl font-light list-disc ml-5">
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
