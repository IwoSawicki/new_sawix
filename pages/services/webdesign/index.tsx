import Head from "next/head";
import Header from "components/Header";
import Hero from "@/components/Services/webdesign/Hero";
import Intro from "@/components/Services/webdesign/Intro";
import Dienstleistungen from "@/components/Services/webdesign/Dienstleistungen";
import Footer from "@/components/Footer";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";

export default function webdesign() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Webdesign - Sawix Studio</title>
        <meta
          name="description"
          content="Wir spezalisieren uns nicht nur auf Webseiten, sondern auf Digitale Erfahrungen. Schau dir an, wie wir deinem Unternehmen helfen können."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div>
        <main>
          <section className="overflow-y-hidden">
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
        <Link href={"e-commerce"}>
          <button className="bg-blue-700 text-white rounded-full group text-sm md:text-base font-light">
            <div className="px-6 rounded-full flex items-center hover:bg-transparent duration-300">
              Weiter zu Online-Shops
              <span className="rounded-full py-3 pl-2 m-[1px] group-hover:bg-transparent duration-300">
                <BsArrowUpRight className=" text-white rounded-full duration-300 group-hover:rotate-45" />
              </span>
            </div>
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
