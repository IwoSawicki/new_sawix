import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";

export default function Datenschutz() {
  return (
    <>
      <div>
        <Head>
          <title>Impressum - Sawix Studio</title>
          <meta
            name="description"
            content="Schau dir hier unser Impressum an - Sawix"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.svg" />
          <meta name="robots" content="noindex"></meta>
        </Head>
        <div>
          <Header />
          <main className="px-3 max-w-6xl mx-auto">
            <section className="py-20 lg:py-32">
              <h1 className="text-4xl pb-4">Impressum</h1>

              <h2 className="text-2xl pb-6">
                Angaben gem&auml;&szlig; &sect; 5 TMG
              </h2>
              <div className="pb-6">
                <p>
                  Iwo Sawicki
                  <br />
                  Vogelsbergstr. 2
                  <br />
                  64646 Heppenheim
                </p>
              </div>

              <div className="pb-6">
                <h2 className="text-2xl">Kontakt</h2>
                <p>
                  Telefon: +49 (0) 176 7788 7216
                  <br />
                  E-Mail: info@sawix.de
                </p>
              </div>

              <div className="pb-6">
                <h2 className="text-2xl">Umsatzsteuer-ID</h2>
                <p>
                  Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27
                  a Umsatzsteuergesetz:
                  <br />
                  DE350093785
                </p>
              </div>

              <div className="pb-6">
                <h2 className="text-2xl">Redaktionell verantwortlich</h2>
                <p>
                  Iwo Sawicki
                  <br />
                  Vogelsbergstr. 2
                  <br />
                  64646 Heppenheim
                </p>
              </div>

              <div className="pb-6">
                <h2 className="text-2xl">EU-Streitschlichtung</h2>
                <p>
                  Die Europ&auml;ische Kommission stellt eine Plattform zur
                  Online-Streitbeilegung (OS) bereit:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                  .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </div>

              <div className="pb-6">
                <h2 className="text-2xl">
                  Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
                </h2>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
