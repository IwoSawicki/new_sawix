import Header from "@/components/Header";
import React from "react";
import Head from "next/head";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Kontakt() {
  //Router
  const router = useRouter();

  //Formik Logic
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "Germany",
      terms: "",
    },
    //Validate Form
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less.")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      terms: Yup.array()
        .min(1, "Terms of service must be checked")
        .required("Terms must be checked"),
    }),

    //Submit Form
    onSubmit: (values) => {
      console.log(values);
      router.push({ pathname: "/kontakt/danke", query: values });
    },
  });

  // console.log(formik.values);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Altes Kontaktieren - Sawix Studio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <main className="h-screen flex items-center justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className=" flex rounded-lg w-1/2 text-white border-2 border-gray-600"
        >
          <div className="flex-1 text-gray-700 p-20">
            <h1 className="text-3xl pb-2">Let's get started</h1>
            <p className="text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              placeat odio esse facere molestias mollitia sunt
            </p>
            <div className="mt-6">
              {/* Name input Field */}
              <div className="pb-4">
                <label
                  className={`block text-sm pb-2 ${
                    formik.touched.name && formik.errors.name
                      ? "text-red-400"
                      : ""
                  }`}
                  htmlFor="name"
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : "Name"}
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:ring-teal-500 focus:border-teal-500"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* Email input Field */}
              <div className="pb-4">
                <label
                  className={`block text-sm pb-2 ${
                    formik.touched.email && formik.errors.email
                      ? "text-red-400"
                      : ""
                  }`}
                  htmlFor="email"
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : "Email"}
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:ring-transparent focus:border-teal-500 duration-300"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* Service Auswahl */}
              {/* <div>
                <div role="group">
                  <label
                    htmlFor="Service-Webseite"
                    className=" px-6 py-2 rounded-full relative cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      name="Service-Webseite"
                      value="Service-Webseite"
                      className="peer sr-only"
                    ></input>
                    <div className="border-[1px] border-red-500 peer-checked:border-blue-700 bg-black text-white">
                      <span>Webseiten</span>
                    </div>
                  </label>
                </div>
              </div> */}
              {/* Service Auswahl */}
              <div>
                <ul className="grid w-full gap-6 md:grid-cols-3">
                  <li>
                    <input
                      type="checkbox"
                      id="react-option"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="react-option"
                      className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50"
                    >
                      <div>Webseiten</div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="medienproduktion"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="medienproduktion"
                      className="peer-checked:border-sky-500 border-2 p-5 border-white text-white bg-gray-800 w-full inline-flex cursor-pointer rounded-full"
                    >
                      <div>Medienproduktion</div>
                    </label>
                  </li>
                </ul>
              </div>
              {/* Service Auswahl */}
              <div>
                <ul className="grid grid-cols-3 gap-x-5 m-10 max-w-md mx-auto">
                  <li className="relative">
                    <input
                      className="sr-only peer"
                      type="radio"
                      value="yes"
                      name="answer"
                      id="answer_yes"
                    />
                    <label
                      className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent"
                      htmlFor="answer_yes"
                    >
                      Yes
                    </label>

                    <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                      👍
                    </div>
                  </li>
                  <li className="relative">
                    <input
                      className="sr-only peer"
                      type="radio"
                      value="no"
                      name="answer"
                      id="answer_no"
                    />
                    <label
                      className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent"
                      htmlFor="answer_no"
                    >
                      No
                    </label>

                    <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                      👎
                    </div>
                  </li>

                  <li className="relative">
                    <input
                      className="sr-only peer"
                      type="radio"
                      value="maybe"
                      name="answer"
                      id="answer_maybe"
                    />
                    <label
                      className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent"
                      htmlFor="answer_maybe"
                    >
                      Maybe
                    </label>

                    <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                      🤔
                    </div>
                  </li>
                </ul>
              </div>
              {/* Country input Field */}
              <div className="pb-4">
                <label
                  className="block font-bold text-sm pb-2"
                  htmlFor="country"
                >
                  Country
                </label>
                <select
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:ring-teal-500 focus:border-teal-500"
                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                >
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                </select>
              </div>
              {/* Terms of Service */}
              <div className="pb-4">
                <label
                  className={`block text-sm pb-2 ${
                    formik.touched.terms && formik.errors.terms
                      ? "text-red-400"
                      : ""
                  }`}
                  htmlFor="terms"
                >
                  {formik.touched.terms && formik.errors.terms
                    ? formik.errors.terms
                    : "Terms of service"}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    value="checked"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="h-5 w-5 text-teal-500 border-2 focus:border-teal-500 focus:ring-teal-500"
                  />
                  <p className="text-sm font-bold text-gray-500">
                    I agree to the Terms and Serice that my data will be taken
                    and sold.
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="bg-teal-500 font-bold text-sm text-white mt-6 py-3  rounded-lg w-full"
              >
                Start learning today
              </button>
            </div>
          </div>
        </form>
      </main>
    </motion.div>
  );
}

{
  /* Services Bunt */
}
{
  /* <div className="flex gap-3 flex-col text-sm pb-8">
<h2 className="">Dienstleistungen:</h2>
<div className="flex flex-col md:flex-row gap-3"> */
}
{
  /* Webseite */
}
{
  /* <div className="w-full p-[2px] rounded-full buttonGradient bg-gradient-to-r from-[#FFEE62] via-orange-600 to-[#FFEE62]">
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
  </div> */
}
{
  /* Online Shop */
}
{
  /* <div className="w-full p-[2px] rounded-full buttonGradient bg-gradient-to-r from-[#6EE863] via-emerald-500 to-[#6EE863]">
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
<div className="flex flex-col md:flex-row gap-3"> */
}
{
  /* Medienproduktion */
}
{
  /* <div className="w-full p-[2px] rounded-full buttonGradient bg-gradient-to-r from-[#9747FF] via-blue-700 to-[#9747FF]">
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
  </div> */
}
{
  /* Social Media Marketing */
}
{
  /* <div className="w-full p-[2px] rounded-full buttonGradient bg-gradient-to-r from-[#FF8540] via-red-600 to-[#FF8540]">
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
  </div> */
}
{
  /* Ende */
}
{
  /* </div>
</div> */
}
{
  /* Service Ende */
}
