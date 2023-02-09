import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import Header from "@/components/Header";
import Hero from "@/components/Home/Hero";
import Portfolio from "@/components/Home/Portfolio";
import About from "@/components/Home/About";
import Services from "@/components/Home/Services";
import Jobs from "@/components/Home/Jobs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Sawix Studio</title>
        <meta
          name="description"
          content="Eine Full-Service digitale Agentur, mit spezalisierung auf Webseiten und Medienproduktion."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      {/* Header */}
      <Header />

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
        <Footer />
      </main>
    </>
  );
}
