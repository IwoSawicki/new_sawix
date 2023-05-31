import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "@next/font/google";

import Header from "@/components/Header";
import Hero from "@/components/Home/Hero";
import Portfolio from "@/components/Home/Portfolio";
// import About from "@/components/Home/About";
import Services from "@/components/Home/Services";
// import Jobs from "@/components/Home/Jobs";
import Footer from "@/components/Footer";

import OGimage from "../public/Hero-Phone.png";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Home - Sawix Studio</title>
        <meta
          name="description"
          content="Sawix ist eine Full-Service-Kreativagentur, die auffällige Marken entwickelt, wunderschöne Websites gestaltet und Kampagnen liefert, die herausstechen."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content={"../public/Footer-Img.png"} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      {/* Header */}

      <main>
        {/* Hero */}
        <section>
          <Hero />
        </section>

        {/* Portfolio */}
        <section>
          <Portfolio />
        </section>

        {/* About */}
        {/* <section>
          <About />
        </section> */}

        {/* Services */}
        <section>
          <Services />
        </section>

        {/* Jobs */}
        {/* <section>
          <Jobs />
        </section> */}

        {/* Footer */}
      </main>
      <Footer />
    </motion.div>
  );
}
