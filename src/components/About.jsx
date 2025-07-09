import React from "react";
import "./css/About.css";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        {/* 왼쪽 */}
        <div className="about-left">
          <img
            src="/images/profile.jpg"
            alt="내 사진"
            className="profile-img"
          />
          <ul className="person-info">
            <li>
              <strong>이름:</strong> 홍길동
            </li>
            <li>
              <strong>이메일:</strong> hong@example.com
            </li>
            <li>
              <strong>위치:</strong> 서울, 대한민국
            </li>
            <li>
              <strong>연락처:</strong> 010‑1234‑5678
            </li>
          </ul>
        </div>

        {/* 오른쪽 */}
        <div className="about-right">
          <div className="about-section">
            <h3>🎓 Education</h3>
            <p>OO대학교 컴퓨터공학과 (2019.03 – 2023.02)</p>
          </div>
          <div className="about-section">
            <h3>💼 Projects</h3>
            <ul>
              <li>React Portfolio – 개인 웹사이트 제작</li>
              <li>Node.js API – REST API 서버 구현</li>
              <li>Unity Game – 2D 게임 개발</li>
              <li>AI Chatbot – OpenAI API 챗봇 제작</li>
            </ul>
          </div>
          <div className="about-section">
            <h3>🛠 Skills</h3>
            <p>JavaScript, React, Node.js, Unity, C#, Tailwind, CSS, HTML 등</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
