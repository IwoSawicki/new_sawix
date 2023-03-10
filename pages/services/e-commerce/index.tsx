import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import Hero from "@/components/Services/E-Commerce/Hero";
import Intro from "@/components/Services/E-Commerce/Intro";
import Dienstleistungen from "@/components/Services/E-Commerce/Dienstleistungen";

export default function eCommerce() {
  return (
    <>
      <Head>
        <title>Online Shops - Sawix Studio</title>
        <meta
          name="description"
          content="Premium Online Shops mit Wordpress, Shopify oder dem internen Shopsystem. Jetzt Kontaktieren und beraten lassen."
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
