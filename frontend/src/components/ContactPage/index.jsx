import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./index.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("⚠ Please fill all fields");
      return;
    }

    setLoading(true);
    setStatus("");

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("❌ Failed to send message. Try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="contact-section">
      <h1 className="section-title">
        <span className="line"></span>
        Contact
        </h1>

        <h1 className="section-heading">
        Get in <span className="highlight">Touch</span>
        </h1>

        <p className="skills-description">
        Let’s collaborate on full-stack, AI, or automation projects. I’m open to internships, freelance work, and tech discussions.
        </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && <p className="status">{status}</p>}
      </form>

      <div className="social-icons">
        <a
            href="https://github.com/aadi0704"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon github"
        >
            <FaGithub />
        </a>

        <a
            href="https://www.linkedin.com/in/adi-medicharla/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin"
        >
            <FaLinkedin />
        </a>

        <a
            href="mailto:aadimedicharla44@gmail.com"
            className="social-icon email"
        >
            <FaEnvelope />
        </a>
        </div>
    </div>
  );
};

export default Contact;