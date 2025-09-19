"use client";

import { useState } from "react";
import { Mail, User, MessageCircle, Loader2, CheckCircle, XCircle } from "lucide-react";
import { Lato, Allerta } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const allerta = Allerta({ subsets: ["latin"], weight: "400" });

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // success / error / ""
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
      console.error("Contact form error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 px-6 py-12">
      <div className="max-w-xl w-full bg-white shadow-xl rounded-3xl p-10">
        <h2 className="mozilla-headline text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-center mb-4">
          Get in Touch
        </h2>
        <p className={`${allerta.className} text-center text-gray-500 mb-8`}>
          {`We'd love to hear from you! Fill out the form below.`}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className={`${lato.className} peer w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none`}
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className={`${lato.className} peer w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none`}
            />
          </div>

          {/* Message */}
          <div className="relative">
            <MessageCircle className="absolute left-3 top-3 text-gray-400" size={20} />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows={5}
              required
              className={`${lato.className} peer w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none`}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`${allerta.className} bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl w-full flex items-center justify-center gap-2 transition transform hover:scale-[1.02] active:scale-[0.98]`}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} /> Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {/* Status Messages */}
        {status === "success" && (
          <div className="mt-6 flex items-center justify-center gap-2 text-green-600 font-medium">
            <CheckCircle size={20} /> Message sent successfully!
          </div>
        )}
        {status === "error" && (
          <div className="mt-6 flex items-center justify-center gap-2 text-red-600 font-medium">
            <XCircle size={20} /> Failed to send message. Please try again.
          </div>
        )}
      </div>
    </div>
  );
}
