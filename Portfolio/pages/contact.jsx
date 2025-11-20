import React from 'react'

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact(){

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_jnd5j99";
    const templateID = "template_abvthgr";
    const publicKey = "HHePpcopFL0-GqV0m";

    emailjs
      .sendForm(serviceID, templateID, e.target, publicKey)
      .then(() => {
        setLoading(false);
        setSent(true);
        e.target.reset();
      })
      .catch((error) => {
        setLoading(false);
        console.error("Email Error:", error);
      });
  };

    return(
    <section className="w-full flex flex-col items-center py-16 px-4">
      <div className="max-w-lg w-full bg-[#0a0f1f]/50 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/10">
        
        {/* Título */}
        <h2 className="text-3xl font-bold text-center text-white mb-2">
          Contact Me
        </h2>
        <p className="text-center text-gray-300 text-sm mb-8">
          Send me a message and I'll get back to you as soon as possible.
        </p>

        {/* Form */}
        <form className="space-y-6" onSubmit={sendEmail}>

          {/* Name */}
          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Name</label>
            <input
              type="text"
              className="bg-[#0d1226] border border-white/10 text-white p-3 rounded-lg
               focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Email</label>
            <input
              type="email"
              className="bg-[#0d1226] border border-white/10 text-white p-3 rounded-lg
               focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Message</label>
            <textarea
              className="bg-[#0d1226] border border-white/10 text-white p-3 rounded-lg h-32 resize-none focus:outline-none 
              focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>

          {/* Botón */}
          <div className="flex justify-center">
            <button type="submit"
              className="w-40 py-3 rounded-md bg-blue-600 hover:bg-blue-700 
              transition font-semibold text-white text-lg shadow-white/20"
            >
              {loading ? "Sending..." : sent ? "Sent!" : "Send Message"}
            </button>
                {sent && <p className="text-center text-gray-400 mt-8">
                Thank you for your message! I'll get back to you soon.</p>}
          </div>
        </form>
      </div>
    </section>
    )
}