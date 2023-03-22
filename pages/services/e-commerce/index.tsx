import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import Hero from "@/components/Services/E-Commerce/Hero";
import Intro from "@/components/Services/E-Commerce/Intro";
import Dienstleistungen from "@/components/Services/E-Commerce/Dienstleistungen";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";

export default function eCommerce() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Online Shops - Sawix Studio</title>
        <meta
          name="description"
          content="Premium Online Shops mit Wordpress, Shopify oder dem internen Shopsystem. Jetzt Kontaktieren und beraten lassen."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
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
      {/* Weiterleitung */}
      <div className="fixed bottom-5 w-screen flex justify-center z-30">
        <Link href={"medienproduktion"}>
          <button className="bg-blue-700 text-white rounded-full group text-sm md:text-base font-light">
            <div className="px-6 rounded-full flex items-center hover:bg-transparent duration-300">
              Weiter zu Medienproduktion
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
