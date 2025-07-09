import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projectList = [
    "React Portfolio",
    "Node.js API",
    "Unity Game",
    "AI Chatbot",
  ];

  return (
    <section id="projects" className="projects-section">
      <div
        className="project-card-container"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {projectList.map((name, index) => (
          <div
            key={index}
            className={`project-card ${
              hoveredIndex !== null && hoveredIndex !== index ? "dimmed" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
          >
            {name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
