import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

export default function Intro() {
  return (
    <div className="bg-[#0B0D0F] rounded-t-2xl pt-10 lg:pt-0">
      <div className="px-3 max-w-5xl mx-auto lg:py-28 flex flex-col items-center">
        <h2 className="text-4xl text-center my-4 lg:text-5xl lg:mb-10">
          Ab wann macht es Sinn einen Online Shop aufzumachen?
        </h2>
        <p className="text-base lg:text-xl font-light my-4 text-center">
          Das ist ja auch sehr viel Arbeit sowas zu Pflegen oder? Überhaupt
          nicht! Die Arbeit machen wir uns bei der Konzeption und Entwicklung.
          Den Shop danach zu Pflegen, aktuell zu halten und neue Produkte
          einzustellen, sind dann nurnoch ein paar wenige Mausklicks.
          <br /> <br />
          Ein reiner Online Shop macht hierbei für sehr viele Unternehmen Sinn.
          Hauptsächlich aber für Produkte und Dienstleistungen, die nicht stark
          personalisiert sind und immer wieder verkauft werden.
          {/* <br />
          <br />
          Lerne mehr dazu in unserem{" "}
          <a href="">
            {" "}
            <span className="underline cursor-pointer text-blue-500">
              Blog.
            </span>
          </a> */}
        </p>
        {/* <Link href={"/webdesign"}>
          <button className="bg-gradient-to-r from-[#6EE863] via-emerald-500 to-[#6EE863] buttonGradient  p-px text-white rounded-full group">
            <div className="bg-[#0b0d0f] pl-8 rounded-full flex items-center group-hover:bg-transparent duration-300">
              E-Commerce. Wie, Wann, Warum?
              <span className="bg-[#16a00c] rounded-full p-3 m-[1px] ml-5 group-hover:bg-transparent duration-300">
                <BsArrowUpRight className=" text-white rounded-full duration-300 group-hover:rotate-45" />
              </span>
            </div>
          </button>
        </Link> */}
      </div>
      <hr className="border-t-px border-whitep my-10 lg:my-0" />
    </div>
  );
}
