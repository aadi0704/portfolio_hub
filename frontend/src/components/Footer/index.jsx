import "./index.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h3>Aadi</h3>
          <p>Full Stack Developer • AI & LLM Enthusiast</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Aadi. All rights reserved.</p>
          <p className="footer-note">
            Built with React • Designed for performance & simplicity
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;