import Header from "@/components/Header";
import Head from "next/head";

import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
// import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import Confetti from "react-confetti";

import Image from "next/image";
import KontaktImg from "@/public/Home-Jobs.png";

export default function Kontakt() {
  //Router
  const router = useRouter();
  // secret: process.env.NEXT_PUBLIC_API_KEY as string;
  // const myVar: string = process.env.NEXT_PUBLIC_API_KEY;

  //ENV LOCAL

  //Button Text
  const [buttonText, setButtonText] = useState("Abschicken");
  const [pieces, setPieces] = useState(0);

  const setConfetti = () => {
    setPieces(200);
    setTimeout(() => {
      setPieces(0);
    }, 5000);
  };

  //Formik Logic
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      telefon: "",
      serviceWebseite: "",
      serviceShops: "",
      serviceProduktion: "",
      serviceSSM: "",
      budget: "Auswählen..",
      nachricht: "",
      datenschutz: "",
    },

    //Validation
    validationSchema: Yup.object({
      name: Yup.string()
        .max(40, "Name darf nicht länger als 40 Zeichen sein.")
        .required("Name ist notwendig."),
      email: Yup.string().required("Email ist notwendig."),
      nachricht: Yup.string().required("Bitte hinterlasse dein Anliegen."),
      datenschutz: Yup.array()
        .min(1, "Bitte akzeptiere den Datenschutz.")
        .required("Bitte akzeptiere den Datenschutz.."),
    }),

    //Senden
    onSubmit: (values) => {
      setButtonText("Wird versendet..");
      try {
        emailjs
          .send(
            "service_4eppd0i",
            "template_3hamqdy",
            values,
            process.env.NEXT_PUBLIC_USER_KEY
          )
          .then(() => {
            console.log("success");
            toast.success("Formular versendet 🤙", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 1500,
            });
            setButtonText("Versendet 🤙");
            setConfetti();
          });
      } catch {
        console.log("error");
        setButtonText("Fehler. Bitte nochmal versuchen.");
      }
    },
  });

  return (
    <>
      <Head>
        <title>Jetzt Kontaktieren - Sawix Studio</title>
        <meta
          name="description"
          content="Kontaktiere uns jederzeit per Telefon, Email oder Kontaktformular. Wir melden uns schnellmöglichst bei dir!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <main className="py-20 px-3 max-w-6xl mx-auto">
        {/* Heading */}
        <section>
          <h1 className="text-3xl my-4 md:text-5xl md:w-2/3">
            Lass uns dein Unternehmen zusammen voranbringen!
          </h1>
          <p className="md:w-1/2">
            Hinterlasse uns einfach eine Nachricht via Kontaktformular oder
            erreiche uns jederzeit über:
          </p>
          <a
            className="text-3xl mt-6 mb-5 lg:text-4xl block"
            href="mailto:info@sawix.de"
          >
            info@sawix.de
          </a>
          <a
            className="text-3xl mb-12 lg:text-4xl block"
            href="tel:+491734388519"
          >
            +49 176 7788 7216
          </a>
        </section>
        {/*  -------------------------------------------------------- */}
        <section className="flex flex-col md:flex-row gap-10 mt-10 md:mt-20">
          {/* Kontaktformular */}
          <div className="w-full rounded-2xl p-4 bg-white text-black relative">
            <div className="form-wrapper">
              <form onSubmit={formik.handleSubmit} className="relative">
                <div>
                  {/* Name */}
                  <div className="pb-6">
                    <label
                      htmlFor="name"
                      className={`block pb-2 ${
                        formik.touched.name && formik.errors.name
                          ? "text-red-400"
                          : ""
                      }`}
                    >
                      {formik.touched.name && formik.errors.name
                        ? formik.errors.name
                        : "Name*"}
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name Eingeben..."
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="rounded-full w-full border-slate-600 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  {/* Email */}
                  <div className="pb-6">
                    <label
                      htmlFor="email"
                      className={`block pb-2 ${
                        formik.touched.email && formik.errors.email
                          ? "text-red-400"
                          : ""
                      }`}
                    >
                      {formik.touched.email && formik.errors.email
                        ? formik.errors.email
                        : "Email*"}
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Eingeben..."
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="rounded-full w-full border-slate-600 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  {/* Telefonnummer */}
                  <div className="pb-6">
                    <label htmlFor="telefon" className="block pb-2">
                      Telefonnummer
                    </label>
                    <input
                      type="text"
                      name="telefon"
                      placeholder="Nummer Eingeben..."
                      value={formik.values.telefon}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="rounded-full w-full border-slate-600 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  {/* Services */}
                  <div className="flex gap-3 flex-col text-sm pb-6">
                    <h2 className="text-base">Dienstleistungen:</h2>
                    <div className="flex flex-col md:flex-row gap-3">
                      {/* Webseite */}
                      <div className="w-full">
                        <input
                          type="checkbox"
                          name="serviceWebseite"
                          value="Webseiten, "
                          id="webseite"
                          className="hidden peer"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <label
                          htmlFor="webseite"
                          className="w-full rounded-full flex py-2 justify-center cursor-pointer border-[1px] border-blue-600 bg-white peer-checked:bg-blue-600 peer-checked:text-white duration-300"
                        >
                          Webseiten
                        </label>
                      </div>
                      {/* Online Shop */}
                      <div className="w-full">
                        <input
                          type="checkbox"
                          name="serviceShops"
                          value="Online-Shops, "
                          id="online-shop"
                          className="hidden peer"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <label
                          htmlFor="online-shop"
                          className="w-full rounded-full flex py-2 justify-center cursor-pointer border-[1px] border-blue-600 bg-white peer-checked:bg-blue-600 peer-checked:text-white duration-300"
                        >
                          Online-Shops
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3">
                      {/* Medienproduktion */}
                      <div className="w-full">
                        <input
                          type="checkbox"
                          name="serviceProduktion"
                          value="Produktion, "
                          id="medienproduktion"
                          className="hidden peer"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <label
                          htmlFor="medienproduktion"
                          className="w-full rounded-full flex py-2 justify-center cursor-pointer border-[1px] border-blue-600 bg-white peer-checked:bg-blue-600 peer-checked:text-white duration-300"
                        >
                          Medienproduktion
                        </label>
                      </div>
                      {/* Social Media Marketing */}
                      <div className="w-full">
                        <input
                          type="checkbox"
                          name="serviceSSM"
                          value="Social Media Marketing, "
                          id="social-media-marketing"
                          className="hidden peer"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <label
                          htmlFor="social-media-marketing"
                          className="w-full rounded-full flex py-2 justify-center cursor-pointer border-[1px] border-blue-600 bg-white peer-checked:bg-blue-600 peer-checked:text-white duration-300"
                        >
                          Social Media Marketing
                        </label>
                      </div>
                      {/* Ende */}
                    </div>
                  </div>
                  {/* Service Ende */}
                  {/* Budget */}
                  <div className="pb-6">
                    <label htmlFor="budget" className="block pb-2">
                      Budget
                    </label>
                    <select
                      name="budget"
                      className="w-full rounded-full"
                      value={formik.values.budget}
                      onChange={formik.handleChange}
                    >
                      <option>Auswählen..</option>
                      <option>Unter 5.000€</option>
                      <option>5.000€ - 15.000€</option>
                      <option>15.000€ - 25.000€</option>
                      <option>25.000€+</option>
                    </select>
                  </div>
                  {/* Nachricht */}
                  <div className="pb-6">
                    <label
                      htmlFor="nachricht"
                      className={`block pb-2 ${
                        formik.touched.nachricht && formik.errors.nachricht
                          ? "text-red-400"
                          : ""
                      }`}
                    >
                      {formik.touched.nachricht && formik.errors.nachricht
                        ? formik.errors.nachricht
                        : "Deine Nachricht*"}
                    </label>
                    <textarea
                      name="nachricht"
                      className="w-full h-40 rounded-3xl"
                      placeholder="Hallo Team Sawix, .."
                      value={formik.values.nachricht}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {/* Datenschutz */}
                  <div>
                    <label
                      htmlFor="datenschutz"
                      className={`block pb-2 ${
                        formik.touched.datenschutz && formik.errors.datenschutz
                          ? "text-red-400"
                          : ""
                      }`}
                    >
                      {formik.touched.datenschutz && formik.errors.datenschutz
                        ? formik.errors.datenschutz
                        : "Datenschutz"}
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="checkbox"
                        name="datenschutz"
                        value="Datenschutz akzeptiert"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="h-5 w-5 text-blue-600 focus:border-blue-600 focus:ring-border-600"
                      />
                      <p>
                        Mit dem versenden des Formulares ekläre ich mich mit der{" "}
                        <a className="underline hover:text-blue-600" href="">
                          Datenschutzerklärung
                        </a>{" "}
                        einverstanden
                      </p>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="versendenButton bg-blue-600 text-white px-5 py-2 rounded-full w-full mt-6"
                  >
                    {buttonText}
                  </button>
                </div>
                <Confetti
                  numberOfPieces={pieces}
                  className="min-h-full absolute"
                />
              </form>
            </div>
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
