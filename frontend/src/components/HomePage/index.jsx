import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

import "./index.css";

const HomePage = () => {
  return (
    <div className="home">
      <p className="greeting">
        <span className="line"></span> Hello, I'm Aadi
      </p>

      <h1 className="heading">
        Aspiring <span className="highlight">Software Engineer</span> & <br />
        <span>Full Stack</span> Developer
      </h1>

      <p className="description">
        AI & Data Science undergraduate at SRKR Engineering College. Passionate
        about building scalable full-stack web applications and solving complex
        problems using robust Data Structures & Algorithms.
      </p>

      <div className="buttons">
        <a href="#projects" className="button btn-primary">
          View Projects
        </a>

        <a
          href="/Medicharla_Adi_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="button btn-secondary"
        >
          View Resume
        </a>
      </div>

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
          href="https://leetcode.com/u/aadi_0407_"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon leetcode"
        >
          <SiLeetcode />
        </a>

        <a
          href="https://x.com/aadi__0704"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon twitter"
        >
          <FaXTwitter />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
