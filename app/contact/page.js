"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    });

    if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
    } else {
        setStatus("Error sending message.");
    }
};

  
  return (
    <div id="contact" className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h2 className="text-4xl font-bold text-teal-400 mt-15 mb-3">Contact Me</h2>

      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg border-1 border-blue-400 duration-300 hover:shadow-[0px_0px_10px_3px_rgba(135,206,250,0.6)] shadow-lg w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-teal-400"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-teal-400"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-teal-400"
            placeholder="Write your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-teal-500 hover:bg-teal-600 transition text-white font-semibold rounded"
        >
          Send Message
        </button>

        {status && <p className="text-center text-gray-300 mt-4">{status}</p>}
      </form>

      <div className="mt-6 flex gap-6">
        <a href="https://github.com/sindhuja15673/" target="_blank" className="text-gray-300 hover:text-teal-400 text-2xl">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/sindhuja-krishnamoorthy-9b0712223/" target="_blank" className="text-gray-300 hover:text-teal-400 text-2xl">
          <FaLinkedin />
        </a>
        <a href="mailto:ssindhujak69@gmail.com" target="_blank" className="text-gray-300 hover:text-teal-400 text-2xl">
          <MdEmail />
        </a>
      </div>
    </div>
  );
}
