import Head from "next/head";
import Header from "components/Header";
import Hero from "@/components/Services/webdesign/Hero";
import Intro from "@/components/Services/webdesign/Intro";
import Dienstleistungen from "@/components/Services/webdesign/Dienstleistungen";
import Footer from "@/components/Footer";

export default function webdesign() {
  return (
    <>
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
        <Header />
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
    </>
  );
}
