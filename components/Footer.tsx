import { animate, easeIn } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

export default function Footer() {
  return (
    <div>
      Footer
      <div className="relative flex overflow-x-hidden border-y-[1px] border-white">
        <Link href={"/kontakt"}>
          <div className="py-6 animate-marquee whitespace-nowrap flex">
            <button className="flex text-4xl mx-4">
              Kontaktieren
              <BsArrowUpRight className="ml-6" />
            </button>
            <button className="flex text-4xl mx-4">
              Kontaktieren
              <BsArrowUpRight className="ml-6" />
            </button>
            <button className="flex text-4xl mx-4">
              Kontaktieren
              <BsArrowUpRight className="ml-6" />
            </button>
            <button className="flex text-4xl mx-4">
              Kontaktieren
              <BsArrowUpRight className="ml-6" />
            </button>
            <button className="flex text-4xl mx-4">
              Kontaktieren
              <BsArrowUpRight className="ml-6" />
            </button>
          </div>

          <div className="absolute top-0 py-6 animate-marquee2 whitespace-nowrap flex">
            <button className="flex text-4xl mx-4">
              Kontaktieren
              <BsArrowUpRight className="ml-6" />
            </button>
            <button className="flex text-4xl mx-4">
              Kontaktieren
              <BsArrowUpRight className="ml-6" />
            </button>
            <button className="flex text-4xl mx-4">
              Kontaktieren
              <BsArrowUpRight className="ml-6" />
            </button>
            <button className="flex text-4xl mx-4">
              Kontaktieren
              <BsArrowUpRight className="ml-6" />
            </button>
            <button className="flex text-4xl mx-4">
              Kontaktieren
              <BsArrowUpRight className="ml-6" />
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
