
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { RevealOnScroll } from "../RevealOnScroll";

const SERVICE_ID = "service_w50q3wb";
const TEMPLATE_ID = "template_r48hc86"; // REPLACE with your actual EmailJS template ID (e.g., template_1a2b3c4)
const PUBLIC_KEY = "nUFU1tUSZ05M4k1Dn";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    // Initialize EmailJS with the public key
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(
        (result) => {
          console.log("EmailJS Success:", result.text);
          alert("Message Sent!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          alert("Failed to send email. Please check the console for details.");
        }
      );
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2
            id="contact-heading"
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
          >
            Get in Touch
          </h2>
          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-300 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-neutral-800 text-gray-300 border border-white/10 focus:outline-none focus:border-blue-500 transition-all"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-300 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-neutral-800 text-gray-300 border border-white/10 focus:outline-none focus:border-blue-500 transition-all"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-300 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 rounded-lg bg-neutral-800 text-gray-300 border border-white/10 focus:outline-none focus:border-blue-500 transition-all"
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;