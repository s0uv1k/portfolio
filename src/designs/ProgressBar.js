import React from "react";
import "./ProgressBar.css"; // CSS file where we define the styles for the progress bar

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
