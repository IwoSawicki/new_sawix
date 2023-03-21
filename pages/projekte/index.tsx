import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import Portfolio from "@/components/Home/Portfolio";

import { motion } from "framer-motion";

export default function portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Abgeschlossene Projekte - Sawix Studio</title>
        <meta
          name="description"
          content="Schau dir an, wie wir die Probleme von anderen Kunden lösen konnten."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div>
        {/* Hero */}
        <div className="pt-28 md:py-32 flex flex-col justify-center gap-6 items-start px-3 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl">
            Schau dir an, wie wir die Probleme von anderen Kunden lösen konnten.
          </h1>
          <p className="md:w-1/2">
            Sawix ist eine Full-Service-Kreativagentur, die auffällige Marken
            entwickelt, wunderschöne Websites gestaltet und Kampagnen liefert,
            die herausstechen.
          </p>
        </div>
        {/* Portfolio */}
        <Portfolio />

        <Footer />
      </div>
    </motion.div>
  );
}
