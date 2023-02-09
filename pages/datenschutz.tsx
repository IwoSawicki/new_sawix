import Header from "@/components/Header";
import Head from "next/head";

export default function Datenschutz() {
  return (
    <>
      <div>
        <Head>
          <title>Datenschutzerklärung - Sawix Studio</title>
          <meta
            name="description"
            content="Schau dir hier unsere Datenschutzerklärung an. Mit der Benutzung der Webseite erklärst du dich mit der Datenschutzerklärung einverstanden."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <div>
          <Header />
          <main className="px-3 max-w-6xl mx-auto"></main>
        </div>
      </div>
    </>
  );
}
