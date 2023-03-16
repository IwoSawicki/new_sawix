import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import Hero from "@/components/Services/social-media-marketing/Hero";
import Intro from "@/components/Services/social-media-marketing/Intro";
import Dienstleistungen from "@/components/Services/social-media-marketing/Dienstleistungen";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

export default function socialMediaMarketing() {
  return (
    <>
      <div className="">
        <Head>
          <title>Social Media Marketing - Sawix Studio</title>
          <meta
            name="description"
            content="Professionelles Social Media Management für ihr Unternehmen."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <Header />
        <main>
          <section className="overflow-hidden">
            <Hero />
          </section>
          <section>
            <Intro />
          </section>
          <section>
            <Dienstleistungen />
          </section>
        </main>
        <Footer />
      </div>
      {/* Weiterleitung */}
      <div className="fixed bottom-5 w-screen flex justify-center z-30">
        <Link href={"/kontakt"}>
          <button className="bg-blue-700 text-white rounded-full group text-sm md:text-base font-light">
            <div className="px-6 rounded-full flex items-center hover:bg-transparent duration-300">
              Weiter zu Kontakt
              <span className="rounded-full py-3 pl-2 m-[1px] group-hover:bg-transparent duration-300">
                <BsArrowUpRight className=" text-white rounded-full duration-300 group-hover:rotate-45" />
              </span>
            </div>
          </button>
        </Link>
      </div>
    </>
  );
}
