import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dbnzv5c",
        "template_pl9u98b",
        form.current,
        "JsiDaW9vSIHDEdEWf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <header>
        <Header />
        <Nav />
      </header>

      <main className="media-main container mx-auto">
        <h2 className="text-2xl text-center mt-10 mb-10 font-bold text-slate-700 border-b-8 border-amber-400 w-1/6 mx-auto">
          CONTACT
        </h2>
        <section className="contact-section w-1/2 max-x-xs mx-auto">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
                <p className="text-red-500 inline pl-2">*</p>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="name"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
                <p className="text-red-500 inline pl-2">*</p>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Subject
                <p className="text-red-500 inline pl-2">*</p>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="subject"
                type="text"
                placeholder="Subject"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number
                <p className="text-red-500 inline pl-2">*</p>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="number"
                type="number"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Comment or Message
                <p className="text-red-500 inline pl-2">*</p>
              </label>
              <textarea
                className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y"
                name="message"
                required
              />
            </div>
            <button
              type="submit"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white text-lg font-bold bg-blue-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
