import React from "react";
import "./CircularProgressBar.css";

const CircularProgressBar = ({ progress, text }) => {
  const strokeDashoffset = 283 - (283 * progress) / 100;
  return (
    <div className="circular-progress-bar">
      <svg className="progress-ring">
        <circle
          className="progress-ring-circle"
          stroke="#F44336"
          strokeWidth="4"
          fill="transparent"
          r="42"
          cx="50"
          cy="50"
        />
        <circle
          className="progress-ring-circle progress-ring-circle--background"
          stroke="#2196F3"
          strokeWidth="4"
          fill="transparent"
          r="42"
          cx="50"
          cy="50"
        />
        <text className="progress-text" x="50%" y="50%">
          {text}
        </text>
        <text className="progress-percent" x="50%" y="50%">
          {progress}%
        </text>
        <circle
          className="progress-ring-circle progress-ring-circle--progress"
          stroke="#F44336"
          strokeWidth="4"
          fill="transparent"
          r="42"
          cx="50"
          cy="50"
          style={{ strokeDashoffset }}
        />
      </svg>
    </div>
  );
};

export default CircularProgressBar;