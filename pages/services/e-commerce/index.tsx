import Header from "@/components/Header";
import Dienstleistungen from "@/components/Services/E-Commerce/Dienstleistungen";
import Hero from "@/components/Services/E-Commerce/Hero";
import Intro from "@/components/Services/E-Commerce/Intro";

export default function eCommerce() {
  return (
    <>
      <Header />
      <main>
        <section className=" overflow-hidden">
          <Hero />
        </section>
        <section>
          <Intro />
        </section>
        <section>
          <Dienstleistungen />
        </section>
      </main>
    </>
  );
}
