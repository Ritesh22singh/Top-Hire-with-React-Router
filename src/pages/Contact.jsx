import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qfd62hq", // Replace with your actual service ID
        "template_6wp6kuv", // Replace with your actual template ID
        form.current,
        "E-wBRZUClzucN7et2" // Replace with your actual public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded px-4 py-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded px-4 py-2"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="w-full border border-gray-300 rounded px-4 py-2"
          required
        />
        <button
          type="submit"
          className="bg-yellow-300 text-black px-6 py-2 rounded"
        >
          Send Message
        </button>
      </form>

      {success && (
        <p className="text-green-600 mt-4">
          ✅ Your message has been sent successfully!
        </p>
      )}
    </div>
  );
};

export default Contact;
