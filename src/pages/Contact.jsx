import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "animate.css";

function Contact({ theme }) {
  return (
    <>
      <Navbar
        theme={theme}
        url1={"/"}
        text1={"home"}
        url2={"/blogs"}
        text2={"blogs"}
        url3={"/projects"}
        text3={"projects"}
        url4={"/achievements"}
        text4={"achievements"}
      />
      <section className="text-gray-600 body-font relative" id="contact">
        <div className="container px-5 py-24 mx-auto animate__animated animate__bounceInDown">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl font-zen text-3xl bold text-black dark:text-white">
              CONTACT ME :
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-slate-300">
              Thank you for visiting my website! If you have any questions,
              comments, or just want to say hello, please don't hesitate to
              contact me. I'd love to hear from you and will get back to you as
              soon as possible.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form
              className="flex flex-wrap -m-2"
              name="contact"
              method="POST"
              netlify
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600 dark:text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600 dark:text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600 dark:text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  className="flex mx-auto px-6 py-1 hover:bg-transparent border-2 border-gray-900 hover:text-gray-900 text-lg rounded-lg transition-colors duration-300 transform bg-gray-900 text-gray-100 focus:border-4 focus:border-black dark:border-[#50DBB4] dark:hover:bg-cyan-300 dark:hover:border-cyan-300 font-bold dark:bg-[#50DBB4] dark:text-gray-900"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer theme={theme} />
    </>
  );
}

export default Contact;
