"use client";

import React, { useState } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Message sent successfully!");

        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="pt-16 pb-16">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text content */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            Schedule a call with me to see if I can help
          </h1>

          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Reach out to me today and let’s discuss how I can help you achieve
            your goals.
          </p>

          <div className="mt-7">
            <div className="flex items-center space-x-3 mb-4">
              <BiPhone className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">
                01063928293
              </p>
            </div>

            <div className="flex items-center space-x-3 mb-4">
              <BiEnvelope className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">
                elsawyabdalluh@gmail.com
              </p>
            </div>

            <div className="flex items-center space-x-3 mb-4">
              <BiMap className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">
                Sohag, Egypt
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center mt-8 space-x-3">

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
            >
              <FaFacebook className="text-white w-6 h-6" />
            </a>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-red-700 transition-all duration-300"
            >
              <FaYoutube className="text-white w-6 h-6" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-sky-500 transition-all duration-300"
            >
              <FaTwitter className="text-white w-6 h-6" />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-pink-500 transition-all duration-300"
            >
              <FaInstagram className="text-white w-6 h-6" />
            </a>

          </div>
        </div>

        {/* Form */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          className="md:p-10 p-5 bg-[#131332] rounded-lg"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />

          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Mobile Number"
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 text-white rounded-full disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;