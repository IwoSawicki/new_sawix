import { animate, easeIn } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import FooterImg from "../public/Footer-Img.png";

export default function Footer() {
  return (
    <div>
      <div className="group relative flex overflow-x-hidden border-y-[1px] border-white hover:bg-white hover:text-black duration-300">
        <Link className="FooterMarqueeLink" href={"/kontakt"}>
          <div className="py-6 animate-marquee whitespace-nowrap flex">
            <button className="flex text-4xl mx-4">
              Kontaktieren
              <BsArrowUpRight className="footerArrow ml-6 group-hover:rotate-45 duration-300" />
            </button>
            <button className="flex text-4xl mx-4">
              Kontaktieren
              <BsArrowUpRight className="footerArrow ml-6 group-hover:rotate-45 duration-300" />
            </button>
            <button className="flex text-4xl mx-4">
              Kontaktieren
              <BsArrowUpRight className="footerArrow ml-6 group-hover:rotate-45 duration-300" />
            </button>
            <button className="flex text-4xl mx-4">
              Kontaktieren
              <BsArrowUpRight className="footerArrow ml-6 group-hover:rotate-45 duration-300" />
            </button>
            <button className="flex text-4xl mx-4">
              Kontaktieren
              <BsArrowUpRight className="footerArrow ml-6 group-hover:rotate-45 duration-300" />
            </button>
          </div>

          <div className="absolute top-0 py-6 animate-marquee2 whitespace-nowrap flex">
            <button className="flex text-4xl mx-4">
              Kontaktieren
              <BsArrowUpRight className="footerArrow ml-6 group-hover:rotate-45 duration-300" />
            </button>
            <button className="flex text-4xl mx-4">
              Kontaktieren
              <BsArrowUpRight className="footerArrow ml-6 group-hover:rotate-45 duration-300" />
            </button>
            <button className="flex text-4xl mx-4">
              Kontaktieren
              <BsArrowUpRight className="footerArrow ml-6 group-hover:rotate-45 duration-300" />
            </button>
            <button className="flex text-4xl mx-4">
              Kontaktieren
              <BsArrowUpRight className="footerArrow ml-6 group-hover:rotate-45 duration-300" />
            </button>
            <button className="flex text-4xl mx-4">
              Kontaktieren
              <BsArrowUpRight className="footerArrow ml-6 group-hover:rotate-45 duration-300" />
            </button>
          </div>
        </Link>
      </div>
      <div className="mt-12 flex flex-col px-3">
        <div>
          {/* ---------- Buttons ---------- */}
          <div className="mb-12 flex flex-col gap-4">
            <div className="flex gap-4">
              <a href="https://wa.me/message/JHZA2OLHWQGGI1">
                <button className="bg-transparent border-[1px] border-white rounded-full px-5 py-3 w-36 hover:bg-white hover:text-black duration-300">
                  Whatsapp
                </button>
              </a>
              <a href="https://www.instagram.com/iwo_swx/">
                <button className="bg-transparent border-[1px] border-white rounded-full px-5 py-3 w-36 hover:bg-white hover:text-black duration-300">
                  Instagram
                </button>
              </a>
            </div>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/@iwo_swx">
                <button className="bg-transparent border-[1px] border-white rounded-full px-5 py-3 w-36 hover:bg-white hover:text-black duration-300">
                  Youtube
                </button>
              </a>
              {/* <button className="bg-transparent border-[1px] border-white rounded-full px-5 py-3 w-36">
                Facebook
              </button> */}
            </div>
          </div>

          {/* ---------- Links ---------- */}
          <div className="flex flex-col">
            <p>Wir sind jederzeit erreichbar!</p>
            <a className="text-3xl mt-6 mb-5" href="mailto:info@sawix.de">
              hello@sawix.de
            </a>
            <a className="text-3xl mb-12" href="tel:+491734388519">
              +49 173 4388519
            </a>
          </div>
        </div>
        <div>
          <Image src={FooterImg} alt="Sawix Internes Meeting - Bild Footer" />
        </div>
      </div>
    </div>
  );
}
