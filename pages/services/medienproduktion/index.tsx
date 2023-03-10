import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import Hero from "@/components/Services/medienproduktion/Hero";
import Intro from "@/components/Services/medienproduktion/Intro";
import Dienstleistungen from "@/components/Services/medienproduktion/Dienstleistungen";

export default function medienproduktion() {
  return (
    <>
      <Head>
        <title>Medienproduktion - Sawix Studio</title>
        <meta
          name="description"
          content="Professionelle Foto- und Videoproduktion. Schau dir jetzt unsere Services an."
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
    </>
  );
}
