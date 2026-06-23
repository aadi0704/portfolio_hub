import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import { FaGithub} from "react-icons/fa";
import "./index.css";

const Projects = () => {
const { categoryId } = useParams();
const navigate = useNavigate();

const [projects, setProjects] = useState([]);
const [expandedId, setExpandedId] = useState(null);

useEffect(() => {
const fetchProjects = async () => {
try {
const response = await fetch(
`http://localhost:5000/projects/${categoryId}`
);


    const data = await response.json();
    setProjects(data);
  } catch (error) {
    console.log(error);
  }
};

fetchProjects();


}, [categoryId]);

const toggleProject = (id) => {
setExpandedId(expandedId === id ? null : id);
};

return ( <div className="projects-page">
<button className="back-btn" onClick={() => navigate("/")}> <ArrowLeft size={18} />
Back to Portfolio </button>


  <h1 className="page-title">
    {categoryId.replace("-", " ").toUpperCase()}
  </h1>

  <div className="projects-list">
    {projects.map((project) => (
      <div className="project-card" key={project._id}>
        <img
          src={project.imageUrl}
          alt={project.title}
          className="project-image"
        />

        <div className="project-content">
          <h2>{project.title}</h2>

          <p className="short-description">
            {project.shortDescription}
          </p>

          <div className="tech-preview">
            {project.techStack?.slice(0, 5).map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <div className="project-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={18} />
                GitHub
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>

          <button
            className="read-more-btn"
            onClick={() => toggleProject(project._id)}
          >
            {expandedId === project._id ? (
              <>
                Show Less <ChevronUp size={18} />
              </>
            ) : (
              <>
                Read More <ChevronDown size={18} />
              </>
            )}
          </button>

          {expandedId === project._id && (
            <div className="project-details">
              <h3>Description</h3>
              <p>{project.description}</p>

              <h3>Features</h3>
              <ul>
                {project.features?.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <h3>Tech Stack</h3>

              <div className="tech-stack">
                {project.techStack?.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-meta">
                <span>
                  <strong>Status:</strong> {project.status}
                </span>

                <span>
                  <strong>Role:</strong> {project.role}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</div>

);
};

export default Projects;
