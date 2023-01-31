import HeroImg from "@/public/Services/social-media-management/Hero-Img.png";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="py-20 lg:py-0  bg-gradient-to-b from-[#452f00] to-[#452f0000] ">
      <div className="flex flex-col px-3 max-w-6xl mx-auto lg:flex-row lg:items-center">
        <div className="my-16  lg:w-1/2 lg:pr-20">
          <h1 className="text-4xl mb-4 lg:mb-6 lg:text-6xl">
            Skaliere dein Unternehmen über Social Media
          </h1>
          <p className="text-base lg:text-xl font-light">
            Nutze Instagram, Facebook & TikTok um mehr Neukunden zu gewinnen.
          </p>
        </div>
        <div className="lg:w-1/2 lg:h-screen flex items-center justify-center">
          <div className="">
            <Image
              src={HeroImg}
              alt="Sawix Social Media Marketing Referenz - DMK Bau"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
