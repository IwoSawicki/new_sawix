import Head from "next/head";
import { motion } from "framer-motion";
// import Image from "next/image";

import Header from "@/components/Header";
import Hero from "@/components/Home/Hero";
// import Portfolio from "@/components/Home/Portfolio";
import PortfolioNeu from "@/components/Home/Portfolio-neu";
// import About from "@/components/Home/About";
import Services from "@/components/Home/Services";
// import Jobs from "@/components/Home/Jobs";
import Footer from "@/components/Footer";
import Prozess from "@/components/Home/Prozess";
import Loader from "@/components/Loader";

import OGimage from "../public/Hero-Phone.png";

export default function Home() {
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#E8E5E3] text-black"
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
      <Header />

      <Loader />

      <main>
        {/* Hero */}
        <section>
          <Hero />
        </section>

        {/* Portfolio */}
        <section>
          <PortfolioNeu />
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

        {/* <section>
          <Prozess />
        </section> */}

        {/* Footer */}
      </main>
      <Footer />
    </motion.div>
  );
}
