import { useEffect, useState } from "react";
import { FaBrain, FaBullseye, FaTrophy, FaFire } from "react-icons/fa";
import PieChartSection from "../PieChartSection";
import "./index.css";

const USERNAME = "aadi_0407";

const apiStatusResponse = {
  initial: "INITIAL",
  in_progress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Dsajourney = () => {
  const [apiResponse, setApiResponse] = useState({
    status: apiStatusResponse.initial,
    data: null,
    error_msg: null,
  });

  const loadData = async () => {
    setApiResponse((prev) => ({
      ...prev,
      status: apiStatusResponse.in_progress,
    }));

    try {
      const response = await fetch("http://localhost:5000/api/dsa");

      const responseData = await response.json();

      if (response.ok) {
        setApiResponse((prev) => ({
          ...prev,
          status: apiStatusResponse.success,
          data: responseData.data,
        }));
      } else {
        setApiResponse((prev) => ({
          ...prev,
          status: apiStatusResponse.failure,
          error_msg: responseData.message,
        }));
      }
    } catch (error) {
      setApiResponse((prev) => ({
        ...prev,
        status: apiStatusResponse.failure,
        error_msg: error.message,
      }));
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadingView = () => (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Loading DSA Journey...</p>
    </div>
  );

  const failureView = () => (
    <div className="error-container">
      <div className="error-box">
        <h2>⚠️ Failed to Load DSA Data</h2>
        <p>{apiResponse.error_msg}</p>
        <button onClick={loadData} className="retry-btn">
          Retry
        </button>
      </div>
    </div>
  );

  const successView = () => {
    const data = apiResponse.data;
    const stats = data.stats;

    
    const pieChartData = [
      { name: "Easy", value: stats.easy },
      { name: "Medium", value: stats.medium },
      { name: "Hard", value: stats.hard },
    ];

    return (
      <div className="dsajourney">
        <h1 className="section-title">
              <span className="line"></span>
              LeetCode Stats
            </h1>

            <h1 className="section-heading">
              My <span className="highlight">Problem Solving</span> Growth
            </h1>
        
        <div className="dsa-header">
            
          <a
            href={data.leetcodeProfile}
            target="_blank"
            rel="noreferrer"
            className="leetcode-link"
          >
            View LeetCode →
          </a>
          
        </div>

        
        <div className="highlights">

            <div className="highlight-card">
                <FaBrain size={22} />
                <span>{stats.totalSolved}+ LeetCode Problems Solved</span>
            </div>

            <div className="highlight-card">
                <FaBullseye size={22} />
                <span>{data.progress}% Consistency Progress</span>
            </div>

            <div className="highlight-card">
                <FaTrophy size={22} />
                <span>Global Rank: {data.ranking}</span>
            </div>

            <div className="highlight-card">
                <FaFire size={22} />
                <span>{data.streak.activeDays} Day Active Streak</span>
            </div>

            <div className="highlight-card">
                <FaFire size={22} />
                <span>Max Streak: {data.streak.maxStreak} Days</span>
            </div>

            <div className="highlight-card">
            <FaBullseye size={22} />
            <span>Target: {data.target} Problems</span>
            </div>

            </div>
        <PieChartSection pieChartData={pieChartData} />

      </div>
    );
  };

  const render = () => {
    switch (apiResponse.status) {
      case apiStatusResponse.in_progress:
        return loadingView();
      case apiStatusResponse.failure:
        return failureView();
      case apiStatusResponse.success:
        return successView();
      default:
        return null;
    }
  };

  return render();
};

export default Dsajourney;