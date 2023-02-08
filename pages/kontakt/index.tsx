import Header from "@/components/Header";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import KontaktImg from "@/public/Home-Jobs.png";

import { BsArrowUpRight } from "react-icons/bs";

export default function Kontakt() {
  return (
    <>
      <Head>
        <title>Jetzt Kontaktieren - Sawix Studio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <main className="py-20 px-3 max-w-6xl mx-auto">
        {/* Heading */}
        <section>
          <h1 className="text-3xl my-4 md:text-5xl md:w-2/3">
            Wenn du Erfahren möchtest, wie wir deinem Unternehmen helfen können,
            kontaktiere uns!
          </h1>
        </section>
        {/*  -------------------------------------------------------- */}
        <section className="flex flex-col md:flex-row gap-10 mt-10">
          {/* Kontaktformular */}
          <div className="w-full rounded-2xl p-4 bg-white text-black">
            <form>
              <div>
                {/* Name */}
                <div className="pb-8">
                  <label htmlFor="name" className="block pb-2">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name Eingeben..."
                    className="rounded-full w-full border-slate-600 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                {/* Email */}
                <div className="pb-8">
                  <label htmlFor="email" className="block pb-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Name Eingeben..."
                    className="rounded-full w-full border-slate-600 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                {/* Services */}
                <div className="flex gap-3 flex-col text-sm">
                  <h2 className="font-bold">Dienstleistungen:</h2>
                  <div className="flex flex-col md:flex-row gap-3">
                    {/* Webseite */}
                    <div className="w-full p-[2px] rounded-full buttonGradient bg-gradient-to-r from-[#FFEE62] via-orange-600 to-[#FFEE62]">
                      <input
                        type="checkbox"
                        name="webseite"
                        id="webseite"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="webseite"
                        className="w-full rounded-full flex py-2 justify-center peer-checked:bg-transparent cursor-pointer bg-white peer-checked:text-white duration-300"
                      >
                        Webseites
                      </label>
                    </div>
                    {/* Online Shop */}
                    <div className="w-full p-[2px] rounded-full buttonGradient bg-gradient-to-r from-[#6EE863] via-emerald-500 to-[#6EE863]">
                      <input
                        type="checkbox"
                        name="online-shop"
                        id="online-shop"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="online-shop"
                        className="w-full rounded-full flex py-2 justify-center peer-checked:bg-transparent cursor-pointer bg-white peer-checked:text-white duration-300"
                      >
                        Online-Shops
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-3">
                    {/* Medienproduktion */}
                    <div className="w-full p-[2px] rounded-full buttonGradient bg-gradient-to-r from-[#9747FF] via-blue-700 to-[#9747FF]">
                      <input
                        type="checkbox"
                        name="medienproduktion"
                        id="medienproduktion"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="medienproduktion"
                        className="w-full rounded-full flex py-2 justify-center peer-checked:bg-transparent cursor-pointer bg-white peer-checked:text-white duration-300"
                      >
                        Medienproduktion
                      </label>
                    </div>
                    {/* Social Media Marketing */}
                    <div className="w-full p-[2px] rounded-full buttonGradient bg-gradient-to-r from-[#FF8540] via-red-600 to-[#FF8540]">
                      <input
                        type="checkbox"
                        name="Social-Media-Marketing"
                        id="social-media-marketing"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="social-media-marketing"
                        className="w-full rounded-full flex py-2 justify-center peer-checked:bg-transparent cursor-pointer bg-white peer-checked:text-white duration-300"
                      >
                        Social Media Marketing
                      </label>
                    </div>
                    {/* Ende */}
                  </div>
                </div>
                {/* Service Ende */}
              </div>
            </form>
          </div>
          {/* Bild */}
          <div className="w-full">
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
