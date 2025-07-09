// src/components/Projects.jsx

import React from "react";
import "./css/Projects.css";

const projectList = [
  {
    title: "React Portfolio",
    description:
      "React와 CSS로 만든 개인 포트폴리오 웹앱. 반응형 지원 및 인터랙션 구현 포함.",
    image: "/images/react-portfolio.png", // 실제 경로로 변경
  },
  {
    title: "Node.js API",
    description:
      "RESTful API 서버 구현, 사용자 인증, Express 기반 백엔드 구조 설계.",
    image: "/images/node-api.png",
  },
  {
    title: "Unity Game",
    description:
      "Unity를 활용한 2D 게임 개발. 타일맵, 상호작용, 플레이어 이동 로직 구현.",
    image: "/images/unity-game.png",
  },
  {
    title: "AI Chatbot",
    description:
      "OpenAI API를 사용해 만든 자연어 기반 챗봇. 대화 흐름 처리 및 응답 구현.",
    image: "/images/ai-chatbot.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>

      <div className="project-card-container">
        {projectList.map((project, index) => (
          <div className="project-horizontal-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-text">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
