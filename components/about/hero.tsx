import Image from "next/image";
import HeroImg from "@/public/about/hero-img.jpg";

export default function Hero() {
  return (
    <div className="pt-20 px-6 max-w-6xl mx-auto space-y-6 flex flex-col md:flex-row-reverse">
      <div className="space-y-3 md:w-3/5 flex flex-col justify-center md:pl-10">
        <h1 className="text-4xl lg:text-6xl">
          Wir unterscheiden uns durch unsere Arbeit
        </h1>
        <p className="text-base md:text-xl font-light">
          20% der Arbeit für 80% des Ergebnisses? Nicht bei uns! Wir stellen die
          Qualität unserer Arbeit und die Kundenzufriedenheit über alles andere.
          Wir investieren lieber 80% mehr und liefern zu 110% ab. Und das
          schätzen unsere Kunden am meisten Wert.
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
  );
}
