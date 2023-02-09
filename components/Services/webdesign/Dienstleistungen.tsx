import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
//import ImgWebdesign from "@/public/Services/webdesign/webdesign.jpg";
import webdesignImg from "public/Services/Webdesign/webdesign.jpg";
import ImgWebdev from "../../../public/Services/Webdesign/webdev.jpg";
import ImgMobileApp from "public/Services/Webdesign/mobileapps.jpg";
import ImgMedienproduktion from "public/Services/Webdesign/medienproduktion.jpg";
import ImgRework from "@/public/Services/Webdesign/ImgRework.jpeg";

export default function Dienstleistungen() {
  return (
    <div className="my-12 lg:my-28 px-3 max-w-6xl mx-auto">
      <h2 className="text-4xl mb-8 pt-4 lg:text-5xl lg:pt-0 lg:mb-12">
        Unsere Services
      </h2>
      <div className="space-y-40">
        {/* Dienstleistungskarte */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 p-[2px] rounded-2xl bg-gradient-to-r from-[#FFEE62] via-orange-600 to-[#FFEE62] buttonGradient">
            <Image
              src={webdesignImg}
              alt="Webdesign Dienste bei Sawix"
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 mt-5 lg:mt-0 justify-center lg:w-3/5 lg:pl-16 lg:gap-5">
            <h3 className="text-3xl lg:text-5xl">Webdesign</h3>
            <p className="text-base lg:text-xl font-light">
              Eine Webseite ist deine digitale Visitenkarte und oftmals das
              erste, was potentielle Kunden von deinem Unternehmen sehen. Seien
              es Speisekarte, Produktfotos oder interne Arbeitsprozesse. Wir
              sorgen dafür, dass diese Erfahrung unvergesslich bleibt, mehr
              Neukunden generiert und dein Wachstum beschleunight.
            </p>
            <ul className="text-base lg:text-xl font-light list-disc ml-5">
              <li>Designerstellung</li>
              <li>Überarbeitung</li>
              <li>Benutzererfahrung</li>
              <li>Mobile first</li>
            </ul>
          </div>
        </div>
        {/* Dienstleistungskarte */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 p-[2px] rounded-2xl bg-gradient-to-r from-[#FFEE62] via-orange-600 to-[#FFEE62] buttonGradient">
            <Image
              src={ImgWebdev}
              alt="Webdesign Dienste bei Sawix"
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 mt-5 lg:mt-0 justify-center lg:w-3/5 lg:pl-16 lg:gap-5">
            <h3 className="text-3xl lg:text-5xl">CMS Entwicklung</h3>
            <p className="text-base lg:text-xl font-light">
              Bei der heutzutage kurzen Aufmerksamkeitsdauer, müssen die
              Webseiten vorallem eins: Schnell und Interaktiv sein. Bei kleinen
              Projekte benutzen wir hierbei Wordpress, mit toller Preis/Leistung
              und einfach zu verstehender Bearbeitung, die jeder lernen kann.
              Bei großen Projekten greifen wir jedoch lieber auf eigene
              Programmierung zurück, um nie zuvor gesehe Interaktivität,
              Anpassfähigkeit und Schnelligkeit zu liefern.
            </p>
            <ul className="text-base lg:text-xl font-light list-disc ml-5">
              <li>Wordpress CMS</li>
              <li>React JS</li>
              <li>Schnelligkeit</li>
              <li>Sicherheit</li>
            </ul>
          </div>
        </div>
        {/* Dienstleistungskarte */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 p-[2px] rounded-2xl bg-gradient-to-r from-[#FFEE62] via-orange-600 to-[#FFEE62] buttonGradient">
            <Image
              src={ImgWebdev}
              alt="Webdesign Dienste bei Sawix"
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 mt-5 lg:mt-0 justify-center lg:w-3/5 lg:pl-16 lg:gap-5">
            <h3 className="text-3xl lg:text-5xl">Programmierung</h3>
            <p className="text-base lg:text-xl font-light">
              Bei der heutzutage kurzen Aufmerksamkeitsdauer, müssen die
              Webseiten vorallem eins: Schnell und Interaktiv sein. Bei kleinen
              Projekte benutzen wir hierbei Wordpress, mit toller Preis/Leistung
              und einfach zu verstehender Bearbeitung, die jeder lernen kann.
              Bei großen Projekten greifen wir jedoch lieber auf eigene
              Programmierung zurück, um nie zuvor gesehe Interaktivität,
              Anpassfähigkeit und Schnelligkeit zu liefern.
            </p>
            <ul className="text-base lg:text-xl font-light list-disc ml-5">
              <li>Wordpress CMS</li>
              <li>React JS</li>
              <li>Schnelligkeit</li>
              <li>Sicherheit</li>
            </ul>
          </div>
        </div>
        {/* Dienstleistungskarte */}
        {/* <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 p-[2px] rounded-2xl bg-gradient-to-r from-[#FFEE62] via-orange-600 to-[#FFEE62] buttonGradient">
            <Image
              src={ImgMobileApp}
              alt="Webdesign Dienste bei Sawix"
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 mt-5 lg:mt-0 justify-center lg:w-3/5 lg:pl-16 lg:gap-5">
            <h3 className="text-3xl lg:text-5xl">Mobile Apps</h3>
            <p className="text-base lg:text-xl font-light">
              Tatsächlich gibt es garnicht so ein großen Unterschied, zwischen
              Web- und Appentwicklung. Jedoch ist die Benutzererfahrung oftmals
              deutlich hochwertiger, schneller und Intuitiver. Apps machen
              hierbei meistens Sinn, wenn man Produkte oder Dienstleistungen
              verkauft. Und da wir uns in diesem Bereich spezialisieren, sind
              wir in der Lage hochwertige und schnelle Arbeit abzuliefern.
            </p>
            <ul className="text-base lg:text-xl font-light list-disc ml-5">
              <li>React Native</li>
              <li>Benutzererfahrung</li>
              <li>Shop-Systeme</li>
            </ul>
          </div>
        </div> */}
        {/* Dienstleistungskarte */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-gradient-to-r from-[#FFEE62] via-orange-600 to-[#FFEE62] buttonGradient p-[2px] rounded-2xl">
            <Image
              src={ImgRework}
              alt="Webdesign Dienste bei Sawix"
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 mt-5 lg:mt-0 justify-center lg:w-3/5 lg:pl-16 lg:gap-5">
            <h3 className="text-3xl lg:text-5xl">Überarbeitung</h3>
            <p className="text-base lg:text-xl font-light">
              Du hast schon eine Webseite und möchtest nur eine Auffrischung des
              Aussehens oder der Funktionen? Dafür sind wir natürlich auch zu
              haben!
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
        {/* Dienstleistungskarte */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 p-[2px] rounded-2xl bg-gradient-to-r from-[#FFEE62] via-orange-600 to-[#FFEE62] buttonGradient hover:scale-[1.01] duration-500">
            <Image
              src={ImgMedienproduktion}
              alt="Webdesign Dienste bei Sawix"
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 mt-5 lg:mt-0 justify-center lg:w-3/5 lg:pl-16 lg:gap-5">
            <h3 className="text-3xl lg:text-5xl">Fotos und Videos</h3>
            <p className="text-base lg:text-xl font-light">
              Menschen arbeiten Visuell. Wieso also nicht zeigen, was dein
              Unternehmen macht? Bei Sawix kriegst du deswegen, die Webseite,
              sowie den kompletten Inhalt aus einer Hand. Somit passt der Inhalt
              Perfekt zum Layout und es existiert ein roter Faden. Nicht wie bei
              anderen Agenturen, die für Fotos und Videos oftmals andere
              Freelancer beauftragen
            </p>

            <div className="flex flex-col gap-3 lg:gap-5 lg:flex-row">
              <ul className="text-base lg:text-xl font-light list-disc ml-5">
                <li>Produktfotos</li>
                <li>Imagefilm</li>
                <li>Immobilienvideo</li>
              </ul>
              <Link href={"/services/medienproduktion"}>
                <button className="bg-gradient-to-r from-[#FFEE62] via-orange-600 to-[#FFEE62] buttonGradient p-px text-white rounded-full group">
                  <div className="bg-[#0b0d0f] pl-8 rounded-full flex items-center hover:bg-transparent duration-300">
                    Zur Medienproduktion
                    <span className="bg-[#f7aa10] rounded-full p-3 m-[1px] ml-5 group-hover:bg-transparent duration-300">
                      <BsArrowUpRight className=" text-white rounded-full duration-300 group-hover:rotate-45" />
                    </span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
