import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import HeroImg from "@/public/about/hero-img.jpg";
import Head from "next/head";
//import Hero from "@/components/about/hero";

export default function about() {
  return (
    <>
      <Head>
        <title>Über uns - Sawix Studio</title>
        <meta
          name="description"
          content="Lerne die kreativen Köpfe hinter Sawix kennen und schau dir unsere internen Prozesse an."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        {/* ENTFERNEN WENN FERTIG */}
        <meta name="robots" content="noindex"></meta>
        {/* ENTFERNEN WENN FERTIG */}
      </Head>
      <Header />
      <main className="pb-20">
        <section>
          <div className="pt-20 px-6 max-w-6xl mx-auto space-y-6 flex flex-col md:flex-row-reverse">
            <div className="space-y-3 md:w-3/5 flex flex-col justify-center md:pl-10">
              <h1 className="text-4xl lg:text-6xl">
                Wir unterscheiden uns durch unsere Arbeit
              </h1>
              <p className="text-base md:text-xl font-light">
                20% der Arbeit für 80% des Ergebnisses? Nicht bei uns! Wir
                stellen die Qualität unserer Arbeit und die Kundenzufriedenheit
                über alles andere. Wir investieren lieber 80% mehr und liefern
                zu 110% ab. Und das schätzen unsere Kunden am meisten Wert.
              </p>
            </div>
            <div className="md:w-2/5">
              <Image
                src={HeroImg}
                alt="Sawix internes Meeting"
                className=" h-[500px] md:h-[600px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </section>
        {/* -------------------------- Team Section -------------------------- */}
        <section>
          <div className="pt-20 px-6 max-w-6xl mx-auto space-y-6 flex flex-col md:flex-row">
            <div className="space-y-3 md:w-3/5 flex flex-col justify-center md:pr-10">
              <h1 className="text-4xl lg:text-6xl">
                Keine Familie, sondern ein High Performance Team
              </h1>
              <p className="text-base md:text-xl font-light">
                20% der Arbeit für 80% des Ergebnisses? Nicht bei uns! Wir
                stellen die Qualität unserer Arbeit und die Kundenzufriedenheit
                über alles andere. Wir investieren lieber 80% mehr und liefern
                zu 110% ab. Und das schätzen unsere Kunden am meisten Wert.
              </p>
            </div>
            <div className="md:w-2/5">
              <Image
                src={HeroImg}
                alt="Sawix internes Meeting"
                className=" h-[500px] md:h-[600px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
