import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Services from "@/components/Home/Services";

export default function services() {
  return (
    <>
      <Header />
      <main>
        <section>
          {/* Hero */}
          <div className="pt-20 px-3  max-w-6xl mx-auto">
            <h1 className="text-5xl my-4 md:text-6xl">
              Design, Entwicklung und Befüllung von digitalen Erfahrungen, die
              bewegen.
            </h1>
          </div>
        </section>
        <section>
          {/* Services */}
          <Services />
        </section>
      </main>
      <Footer />
    </>
  );
}
