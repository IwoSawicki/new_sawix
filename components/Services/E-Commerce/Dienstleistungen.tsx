import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

import ImgCMS from "@/public/Services/e-com/ImgCMS.jpg";
import ImgIntern from "@/public/Services/e-com/ImgIntern3.png";
import ImgMobile from "@/public/Services/e-com/ImgMobile.jpg";
import ImgSEO from "@/public/Services/e-com/ImgSEO.jpg";
import ImgRework from "@/public/Services/e-com/ImgRework.jpeg";

export default function Dienstleistungen() {
  return (
    <div className="my-12 lg:my-28 px-3 max-w-6xl mx-auto">
      <h2 className="text-4xl mb-8 pt-4 lg:text-5xl lg:pt-0 lg:mb-12">
        Unsere Services
      </h2>
      <div className="space-y-40">
        {/* Dienstleistungskarte */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-gradient-to-r from-[#6EE863] via-emerald-500 to-[#6EE863] buttonGradient p-[2px] rounded-2xl">
            <Image
              src={ImgCMS}
              alt="Webdesign Dienste bei Sawix"
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 mt-5 lg:mt-0 justify-center lg:w-3/5 lg:pl-16 lg:gap-5">
            <h3 className="text-3xl lg:text-5xl">CMS Shopsystem</h3>
            <p className="text-base lg:text-xl font-light">
              Für knapp 80% der Aufträge greifen wir auf eine CMS Lösung wie
              Wordpress oder Shopify zurück. Hierbei nehmen wir uns immer Zeit
              um die verschiendenen Vor- und Nachteile zu besprechen und
              zusammen mit dir die beste Auswahl zu treffen. Davor kommt auch
              eine Brainstorming runde, in der wir über das gesamte Konzept von
              deinem Shop durchgehen und dir gerne nochmals Hilfestellung und
              Ratschläge geben. <br />
              <br />
              Alles andere, wie Artikel einpflegen, Bilder austauschen, Texte
              ändern, und, und, und .. ist nach der Fertigstellung ein
              Kinderspiel und kann innerhalb von 30 Minuten jedem beigebracht
              werden.
            </p>
            <ul className="text-base lg:text-xl font-light list-disc ml-5">
              <li>Wordpress</li>
              <li>Shopify</li>
            </ul>
          </div>
        </div>
        {/* Dienstleistungskarte */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-gradient-to-r from-[#6EE863] via-emerald-500 to-[#6EE863] buttonGradient p-[2px] rounded-2xl">
            <Image
              src={ImgIntern}
              alt="Webdesign Dienste bei Sawix"
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 mt-5 lg:mt-0 justify-center lg:w-3/5 lg:pl-16 lg:gap-5">
            <h3 className="text-3xl lg:text-5xl">Internes Shopsystem</h3>
            <p className="text-base lg:text-xl font-light">
              Ist deine Vision etwas größer? Etwas personalisierter? Oder
              möchtest du einen Shop haben, der alle anderen aus den Socken haut
              und jeden Besucher begeistert? Genau dafür ist unser Hauseigenes
              Shop System da.
              <br /> <br /> Eine noch leichtere Bedienung und Pflege. Nie zuvor
              gesehen Geschwindigkeit und Sicherheit. Und vorallem{" "}
              <span className="font-semibold">
                Personalisierung auf einem anderen LEVEL!
              </span>
              <br />
              Damit du deine Vision und Produkt noch bessern an deine Kunden
              bringen kannst, und mehr Besucher in Kundschaft umwandelst.
            </p>
            <ul className="text-base lg:text-xl font-light list-disc ml-5">
              <li>Anpassungsfähigkeit</li>
              <li>Personalisierung</li>
              <li>Sicherheit</li>
              <li>Schnelligkeit</li>
            </ul>
          </div>
        </div>
        {/* Dienstleistungskarte */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 p-[2px] rounded-2xl bg-gradient-to-r from-[#FFEE62] via-orange-600 to-[#FFEE62] buttonGradient">
            <Image
              src={ImgMobile}
              alt="Webdesign Dienste bei Sawix"
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 mt-5 lg:mt-0 justify-center lg:w-3/5 lg:pl-16 lg:gap-5">
            <h3 className="text-3xl lg:text-5xl">Mobile Apps</h3>
            <p className="text-base lg:text-xl font-light">
              Tatsächlich gibt es garnicht so ein großen Unterschied, zwischen
              Web- und Appentwicklung. Jedoch ist die Benutzererfahrung oftmals
              deutlich hochwertiger, schneller und Intuitiver. Und da wir uns in
              diesem Bereich spezialisieren, sind wir in der Lage hochwertige
              und schnelle Arbeit abzuliefern.
            </p>
            <ul className="text-base lg:text-xl font-light list-disc ml-5">
              <li>React Native</li>
              <li>Benutzererfahrung</li>
              <li>Shop-Systeme</li>
            </ul>
          </div>
        </div>
        {/* Dienstleistungskarte */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-gradient-to-r from-[#6EE863] via-emerald-500 to-[#6EE863] buttonGradient p-[2px] rounded-2xl">
            <Image
              src={ImgSEO}
              alt="Webdesign Dienste bei Sawix"
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 mt-5 lg:mt-0 justify-center lg:w-3/5 lg:pl-16 lg:gap-5">
            <h3 className="text-3xl lg:text-5xl">SEO & bezahlte Werbung</h3>
            <p className="text-base lg:text-xl font-light">
              Eine geile Webseite ist ein wichtiger Aspekt, wenn deine Kunden
              dich jedoch nicht finden können, bringt diese auch nichts. Damit
              das aber kein Problem wird, führen wir vor abschluss jeder
              Webseite eine ausführliche Suchmaschinenoptimierung durch. Somit
              wirst du bei Google weiter oben angezeigt und mehr Menschen sehen
              dich.
              <br /> <br />
              Wenn man dann noch bezahlte Werbung schalten möchte, kann man sein
              Unternehmen noch schneller skalieren und Kunden gewinnen.{" "}
            </p>
            <ul className="text-base lg:text-xl font-light list-disc ml-5">
              <li>Suchmaschinen Optimierung</li>
              <li>Mehr Reichweite</li>
              <li>Schneller Skalieren</li>
            </ul>
          </div>
        </div>
        {/* Dienstleistungskarte */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-gradient-to-r from-[#6EE863] via-emerald-500 to-[#6EE863] buttonGradient p-[2px] rounded-2xl">
            <Image
              src={ImgRework}
              alt="Webdesign Dienste bei Sawix"
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 mt-5 lg:mt-0 justify-center lg:w-3/5 lg:pl-16 lg:gap-5">
            <h3 className="text-3xl lg:text-5xl">Überarbeitung</h3>
            <p className="text-base lg:text-xl font-light">
              Du hast schon einen Online Shop und möchtest nur eine Auffrischung
              des Aussehens oder der Funktionen? Dafür sind wir natürlich auch
              zu haben!
              <br />
              <br /> Schreib uns dazu gerne eine kurze E-Mail, mit verlinkung zu
              deiner Seite. Dazu was du gerne gemacht haben möchtest und ,falls
              du es weißt, am besten auch mit was Sie umgesetzt wurde.
            </p>
            <ul className="text-base lg:text-xl font-light list-disc ml-5">
              <li>Neues Design</li>
              <li>Konzeption</li>
              <li>Funktionserweiterung</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
