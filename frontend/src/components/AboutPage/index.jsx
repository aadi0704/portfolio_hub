import "./index.css";
import profileImage from "../../assets/profile.jpg";
import {
  CircleCheckBig,
  FolderCode,
  Code2,
  Bot,
  Rocket,
} from "lucide-react";
const AboutPage = () => {
  return (
    <div className="about">
      <h1 className="section-title">
        <span className="line"></span>About Me
      </h1>

      <h1 className="section-heading">
        Get to know me <span className="highlight">better!</span>
      </h1>

      <div className="about-container">

        {/* Photo + About */}
        <div className="intro-section">
          <img
            src={profileImage}
            alt="Profile"
            className="profile-img"
          />

          <div className="intro-content">
            <p className="text">
              <span className="highlight-text">
                AI & Data Science Student
              </span>{" "}
              |{" "}
              <span className="highlight-text">
                Software Engineer
              </span>{" "}
              |{" "}
              <span className="highlight-text">
                AI Builder
              </span>
            </p>

            <p className="about-intro">
              AI & Data Science undergraduate passionate about software
              engineering, intelligent systems, and problem-solving.
              Experienced in building full-stack web applications,
              AI-powered solutions, RAG pipelines, AI agents, workflow
              automations, and LLM-integrated projects. Built 10+
              projects and solved 200+ LeetCode problems in Java while
              continuously exploring emerging technologies to create
              practical and scalable software solutions.
            </p>
          </div>
        </div>

        
        <div className="highlights">

          <div className="highlight-card">
            <Bot size={22} />
            <span>AI Agents, RAG & LLM Applications</span>
          </div>

          <div className="highlight-card">
            <Code2 size={22} />
            <span>MERN Stack Development</span>
          </div>

          <div className="highlight-card">
            <CircleCheckBig size={22} />
            <span>200+ LeetCode Problems</span>
          </div>

          <div className="highlight-card">
            <FolderCode size={22} />
            <span>10+ Projects Built</span>
          </div>

          <div className="highlight-card">
            <Rocket size={22} />
            <span>Learning Spring Boot</span>
          </div>

        </div>

        <div className="education-section">
          <h1 className="education-heading">Education</h1>
          <div className="education-card">
            <p className="year">2023 - Present</p>
            <h3 className="branch">
              B.Tech in Artificial Intelligence & Data Science
            </h3>
            <p className="college">
              SRKR Engineering College, Bhimavaram
            </p>
            <p className="grade">
              <strong>CGPA:</strong> 8.45 / 10
            </p>
          </div>
        </div>
  
      </div>
    </div>
  );
};

export default AboutPage;