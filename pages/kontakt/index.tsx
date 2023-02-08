import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import KontaktImg from "@/public/Home-Jobs.png";

export default function Kontakt() {
  return (
    <>
      <Header />
      <main className="pt-20 px-3 max-w-6xl mx-auto">
        {/* Heading */}
        <section>
          <h1 className="text-3xl my-4 md:text-5xl md:w-2/3">
            Wenn du Erfahren möchtest, wie wir deinem Unternehmen helfen können,
            kontaktiere uns!
          </h1>
        </section>
        {/*  -------------------------------------------------------- */}
        <section className="flex flex-col md:flex-row gap-10">
          {/* Kontaktformular */}
          <div className="w-full border-2 border-slate-600 rounded-2xl p-4">
            <form>form</form>
          </div>
          {/* Bild */}
          <div className="w-full border-2 border-gray-900 rounded 2xl ">
            <Image
              src={KontaktImg}
              alt="Kontaktformular Bild"
              className="rounded-2xl object-cover w-full h-full"
            ></Image>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
      {/* <div>Hello</div> */}
    </>
  );
}
