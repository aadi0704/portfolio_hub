import "./index.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const ProjectPage = () => {
  const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstants.initial,
    data: null,
    errorMsg: null,
  });

  const fetchCategories = async () => {
    try {
      setApiResponse((prev) => ({
        ...prev,
        status: apiStatusConstants.inProgress,
      }));

      const response = await fetch(
        "https://portfolio-backend-gken.onrender.com/categories"
      );

      if (!response.ok) {
        throw new Error("Failed to load data");
      }

      const data = await response.json();

      setApiResponse((prev) => ({
        ...prev,
        status: apiStatusConstants.success,
        data: data,
      }));
    } catch (err) {
      setApiResponse((prev) => ({
        ...prev,
        status: apiStatusConstants.failure,
        errorMsg: err,
      }));
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const renderLoadingView = () => (
    <div className="grid">
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className="skeleton-card"></div>
      ))}
    </div>
  );

  const renderFailureView = () => (
    <div className="error-box">
      <h3>⚠️ {apiResponse.errorMsg?.message}</h3>
      <p>Something went wrong while fetching categories.</p>
      <button onClick={fetchCategories}>Retry</button>
    </div>
  );

  const renderSuccessView = () => (
  <div className="grid">
    {apiResponse.data.map((cat) => (
      <Link
        key={cat._id}
        to={`/projects/${cat._id}`}
        className="card-link"
      >
        <div className="card">
          <h3>
            {cat.icon} {cat.name}
          </h3>

          <p>{cat.description}</p>

          <div className="card-footer">
            <span>🧩 {cat.projectsCount} Projects</span>
            <span>🛠 {cat.tools.length} Tools</span>
          </div>
        </div>
      </Link>
    ))}
  </div>
);

  const renderView = () => {
    switch (apiResponse.status) {
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      case apiStatusConstants.failure:
        return renderFailureView();
      case apiStatusConstants.success:
        return renderSuccessView();
      default:
        return null;
    }
  };

  return (
    <div className="project">
      <h1 className="section-title">
        <span className="line"></span>
        Projects
      </h1>

      <h1 className="section-heading">
        My <span className="highlight">Work & Creations</span>
      </h1>

      <p className="project-card-description">
        A collection of real-world applications built using full-stack development,
        AI integrations, and automation tools.
      </p>

      {renderView()}
    </div>
  );
};

export default ProjectPage;