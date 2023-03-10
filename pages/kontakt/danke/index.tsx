import Header from "@/components/Header";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

export default function Danke() {
  const router = useRouter();
  const [pieces, setPieces] = useState(200);
  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 3000);
  };
  useEffect(() => {
    stopConfetti();
  }, []);

  useEffect(() => {
    if (!router.query.name) {
      router.push("/kontakt");
      return;
    }
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Head>
          <title>Vielen Dank - Sawix Studio</title>
          <meta
            name="description"
            content="Vielen dank für das Kontaktieren. Wir melden uns schnellmöglichst bei dir!"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="noindex"></meta>
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <Header />
        <main>
          <h1 className="text-3xl pb-4 pt-20">
            Danke für die Email, {router.query.name}
          </h1>
        </main>
        <Confetti numberOfPieces={pieces} />
      </motion.div>
    </>
  );
}
