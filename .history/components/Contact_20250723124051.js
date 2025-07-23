"use client";

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",    // 🛠️ lowercase to match backend
    email: "",
    phone: "",
    message: "",
  });

  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("📝 Field changed:", e.target.name, e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("🚀 Sending form data:", formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("📡 Response status:", res.status, res.statusText);

      const data = await res.json();
      console.log("📦 Response body:", data);

      if (!res.ok) throw new Error(data.error || "Something went wrong 😬");

      setResponseMsg("✅ Message sent!");
      setFormData({ name: "", email: "", phone: "", message: "" });

      setTimeout(() => setResponseMsg(""), 3000);
    } catch (error) {
      console.error("❌ Error submitting form:", error.message || error);
      alert(error.message || "Failed to send message.");
    }
  };

  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-8">
          Contact Me
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            value={formData.name}
            required
            className="w-full border-b-2 border-gray-300 focus:border-blue-500 px-2 py-2 outline-none transition duration-200"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            onChange={handleChange}
            value={formData.email}
            required
            className="w-full border-b-2 border-gray-300 focus:border-blue-500 px-2 py-2 outline-none transition duration-200"
          />

          <input
            name="phone"
            placeholder="Your Phone"
            onChange={handleChange}
            value={formData.phone}
            required
            className="w-full border-b-2 border-gray-300 focus:border-blue-500 px-2 py-2 outline-none transition duration-200"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
            value={formData.message}
            required
            rows="4"
            className="w-full border-b-2 border-gray-300 focus:border-blue-500 px-2 py-2 outline-none transition duration-200 resize-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Send Message
          </button>
        </form>

        {responseMsg && (
          <p className="mt-6 text-center text-sm text-green-600 font-medium">
            {responseMsg}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
