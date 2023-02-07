import Header from "@/components/Header";
import React from "react";

export default function Kontakt() {
  return (
    <div>
      <Header />
      <main className="h-screen flex items-center justify-center">
        <form className="bg-white flex rounded-lg w-1/2 text-black">
          <div className="flex-1 text-gray-700 p-20">
            <h1 className="text-3xl pb-2">Let's get started</h1>
            <p className="text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              placeat odio esse facere molestias mollitia sunt
            </p>
            <div className="mt-6">
              {/* Name input Field */}
              <div className="pb-4">
                <label className="block font-bold text-sm pb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:ring-teal-500 focus:border-teal-500"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
              </div>
              {/* Email input Field */}
              <div className="pb-4">
                <label className="block font-bold text-sm pb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:ring-transparent focus:border-teal-500 duration-300"
                  type="email"
                  name="name"
                  placeholder="Enter your email"
                />
              </div>
              {/* Country input Field */}
              <div className="pb-4">
                <label className="block font-bold text-sm pb-2" htmlFor="email">
                  Country
                </label>
                <select
                  name=""
                  id=""
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="">United States</option>
                  <option value="">Germany</option>
                  <option value="">Spain</option>
                </select>
              </div>
              {/* Terms of Service */}
              <div className="pb-4">
                <label className="block font-bold text-sm pb-2" htmlFor="terms">
                  Terms of Service
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    value="checked"
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
    </div>
  );
}
