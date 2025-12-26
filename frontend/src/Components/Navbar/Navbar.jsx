import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import "./NavBar.css";

const menuItems = [
  { path: "/", label: "홈" },
  { path: "/about", label: "회사 정보" },
  { path: "/leadership", label: "임원 소개" },
  { path: "/board", label: "업무 게시판" },
  { path: "/our-services", label: "제공 기술" },
  { path: "/contact", label: "문의하기" }
];

const MenuItem = ({ path, label, onClick }) => (
  <li className="menu-item">
    <Link to={path} onClick={onClick}>
      {label}
    </Link>
  </li>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("ko");

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <h1 className="logo">
          <Link to="/">응안이안 Company</Link>
        </h1>

        <ul className="menu desktop-menu">
          {menuItems.map(item => (
            <MenuItem key={item.path} {...item} />
          ))}
        </ul>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="language-select desktop-only"
        >
          <option value="ko">한국어</option>
          <option value="en">English</option>
        </select>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          <HiX />
        </button>

        <ul className="mobile-menu-list">
          {menuItems.map(item => (
            <MenuItem
              key={item.path}
              {...item}
              onClick={() => {
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          ))}
        </ul>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="language-select"
        >
          <option value="ko">한국어</option>
          <option value="en">English</option>
        </select>
      </div>
    </nav>
  );
};

export default NavBar;