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
            <div className="about-section">
              <h3>개인 정보</h3>
              <hr></hr>
            </div>
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
            <h3> Education</h3>
            <hr></hr>
            <p>대전대학교 컴퓨터공학과</p>
          </div>
          <div className="about-section">
            <h3>Projects</h3>
            <hr></hr>
            <p>
              <li>React Portfolio – 개인 웹사이트 제작</li>
            </p>
            <p>
              <li>Node.js API – REST API 서버 구현</li>
            </p>
            <p>
              <li>Unity Game – 2D 게임 개발</li>
            </p>
            <p>
              <li>AI Chatbot – OpenAI API 챗봇 제작</li>
            </p>
          </div>
          <div className="about-section">
            <h3>Skills</h3>
            <hr></hr>

            <div className="skill-icons">
              <div className="skill-item">
                <img
                  src="/icon/javascript-original.svg"
                  alt="JavaScript"
                  className="skill-icon"
                />
                <span>JavaScript</span>
              </div>
              <div className="skill-item">
                <img
                  src="/icon/typescript-original.svg"
                  alt="TypeScript"
                  className="skill-icon"
                />
                <span>TypeScript</span>
              </div>
              <div className="skill-item">
                <img
                  src="/icon/react-original.svg"
                  alt="React"
                  className="skill-icon"
                />
                <span>React</span>
              </div>
              <div className="skill-item">
                <img
                  src="/icon/nodejs-original.svg"
                  alt="Node.js"
                  className="skill-icon"
                />
                <span>Node.js</span>
              </div>
              <div className="skill-item">
                <img
                  src="/icon/unity-original.svg"
                  alt="Unity"
                  className="skill-icon"
                />
                <span>Unity</span>
              </div>
              <div className="skill-item">
                <img
                  src="/icon/html5-original.svg"
                  alt="HTML"
                  className="skill-icon"
                />
                <span>HTML</span>
              </div>
              <div className="skill-item">
                <img
                  src="/icon/css3-original.svg"
                  alt="CSS"
                  className="skill-icon"
                />
                <span>CSS</span>
              </div>
              <div className="skill-item">
                <img
                  src="/icon/csharp-original.svg"
                  alt="C#"
                  className="skill-icon"
                />
                <span>C#</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
