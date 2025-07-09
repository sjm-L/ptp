// src/components/css/Navbar.jsx

import "./css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        {["Home", "About", "Skills", "Projects"].map((section) => (
          <li key={section}>
            <a href={`#${section.toLowerCase()}`}>{section}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
