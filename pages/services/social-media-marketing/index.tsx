import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import Hero from "@/components/Services/social-media-marketing/Hero";
import Intro from "@/components/Services/social-media-marketing/Intro";
import Dienstleistungen from "@/components/Services/social-media-marketing/Dienstleistungen";

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
    </>
  );
}
