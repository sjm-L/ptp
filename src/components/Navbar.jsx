// src/components/css/Navbar.jsx

import React, { useState } from "react";
import "./css/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const sections = ["Home", "About", , "Projects"];

  return (
    <nav className="navbar">
      <ul className={`nav-links ${open ? "active" : ""}`}>
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
