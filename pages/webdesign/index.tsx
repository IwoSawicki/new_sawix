import Header from "components/Header";
import Hero from "components/Services/webdesign/Hero";
import Intro from "@/components/Services/webdesign/Intro";

export default function webdesign() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <Intro />
        </section>
      </main>
    </div>
  );
}
