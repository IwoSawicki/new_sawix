import { animate, easeIn } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import FooterImg from "../public/Footer-Img.png";

export default function Footer() {
  return (
    <div className="font-IvyPrestoText">
      <div className="group relative flex overflow-x-hidden border-y-[1px] border-black hover:bg-black hover:text-white duration-300">
        <Link className="FooterMarqueeLink" href={"/kontakt"}>
          <div className="py-6 animate-marquee whitespace-nowrap flex">
            <button className="flex text-4xl mx-4 lg:text-5xl">
              Kontaktieren
              <BsArrowUpRight className="footerArrow ml-6 group-hover:rotate-45 duration-300" />
            </button>
            <button className="flex text-4xl mx-4 lg:text-5xl">
              Kontaktieren
              <BsArrowUpRight className="footerArrow ml-6 group-hover:rotate-45 duration-300" />
            </button>
            <button className="flex text-4xl mx-4 lg:text-5xl">
              Kontaktieren
              <BsArrowUpRight className="footerArrow ml-6 group-hover:rotate-45 duration-300" />
            </button>
            <button className="flex text-4xl mx-4 lg:text-5xl">
              Kontaktieren
              <BsArrowUpRight className="footerArrow ml-6 group-hover:rotate-45 duration-300" />
            </button>
            <button className="flex text-4xl mx-4 lg:text-5xl">
              Kontaktieren
              <BsArrowUpRight className="footerArrow ml-6 group-hover:rotate-45 duration-300" />
            </button>
          </div>

          <div className="absolute top-0 py-6 animate-marquee2 whitespace-nowrap flex">
            <button className="flex text-4xl mx-4 lg:text-5xl">
              Kontaktieren
              <BsArrowUpRight className="footerArrow ml-6 group-hover:rotate-45 duration-300" />
            </button>
            <button className="flex text-4xl mx-4 lg:text-5xl">
              Kontaktieren
              <BsArrowUpRight className="footerArrow ml-6 group-hover:rotate-45 duration-300" />
            </button>
            <button className="flex text-4xl mx-4 lg:text-5xl">
              Kontaktieren
              <BsArrowUpRight className="footerArrow ml-6 group-hover:rotate-45 duration-300" />
            </button>
            <button className="flex text-4xl mx-4 lg:text-5xl">
              Kontaktieren
              <BsArrowUpRight className="footerArrow ml-6 group-hover:rotate-45 duration-300" />
            </button>
            <button className="flex text-4xl mx-4 lg:text-5xl">
              Kontaktieren
              <BsArrowUpRight className="footerArrow ml-6 group-hover:rotate-45 duration-300" />
            </button>
          </div>
        </Link>
      </div>
      <div className="mt-12 flex flex-col px-3 max-w-6xl mx-auto lg:flex-row">
        <div className="lg:w-1/2">
          {/* ---------- Buttons ---------- */}
          <div className="mb-12 flex flex-col gap-4">
            <div className="flex gap-4">
              <a href="https://wa.me/message/JHZA2OLHWQGGI1">
                <button className="bg-transparent border-[1px] border-black rounded-full px-5 py-3 w-36 hover:bg-black hover:text-white duration-300">
                  Whatsapp
                </button>
              </a>
              <a href="https://www.instagram.com/its_iwo/">
                <button className="bg-transparent border-[1px] border-black rounded-full px-5 py-3 w-36 hover:bg-black hover:text-white duration-300">
                  Instagram
                </button>
              </a>
              <div>
                <button className="bg-black text-white rounded-2xl "></button>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/@itsiwo">
                <button className="bg-transparent border-[1px] border-black rounded-full px-5 py-3 w-36 hover:bg-black hover:text-white duration-300">
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
            <p className="text-base lg:text-xl font-light">
              Wir sind jederzeit erreichbar!
            </p>
            <a
              className="text-3xl mt-6 mb-5 lg:text-4xl"
              href="mailto:info@sawix.de"
            >
              info@sawix.de
            </a>
            <a className="text-3xl mb-12 lg:text-4xl" href="tel:+4917677887216">
              +49 176 7788 7216
            </a>
          </div>
          {/* Rechtliches */}
          <div className="flex gap-6 pb-5">
            <Link href="/impressum" className="text-base font-light">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-base font-light">
              Datenschutz
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-12">
          <Image src={FooterImg} alt="Sawix Internes Meeting - Bild Footer" />
        </div>
      </div>
    </div>
  );
}
