import Image from "next/image";
import HeroPhone from "../public/Hero-Phone.png";

export default function Hero() {
  return (
    <div className="pt-20 flex flex-col bg-gradient-to-br from-[#22282E] to-[#0B0D0F00] xl:flex-row">
      <div className="px-3 xl:w-2/3">
        <p className="mt-12 my-4 text-base text-slate-500">Sawix Studio</p>
        <h1 className="text-5xl my-4">Grenzen? Gibt es bei uns nicht!</h1>
        <p className="my-4 mb-12">
          Wir glauben daran, dass unsere Industrie von Zahlen geblendet
          wird.Während Kaufentscheidungen auf Emotionen basieren
        </p>
      </div>
      <div className="px-3 h-screen xl:w-1/3">
        <Image src={HeroPhone} alt="Handy mit Portfolio" />
      </div>
    </div>
  );
}
