import React, { useState } from "react";
import "./header.css";
import { headerTab } from "./data";

export default function Header() {
  window.addEventListener("scroll", function (e) {
    const header = document.querySelector(".header");
    if (window.scrollY > 80) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  });

  const [Toggle, setToggleMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  const handleToggleMenu = () => {
    setToggleMenu(!Toggle);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          Kushal
        </a>
        <div className={`nav__menu ${Toggle && "show-menu"}`}>
          <ul className="nav__list grid">
            {headerTab?.map((tab) => (
              <li key={tab?.id} className="nav__item">
                <a
                  href={tab?.href}
                  onClick={() => setActiveNav(tab?.href)}
                  className={`nav__link ${
                    activeNav === tab?.href && "active-link"
                  }`}
                >
                  <i className={`${tab?.icon} nav__icon`}></i> {tab?.name}
                </a>
              </li>
            ))}
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={handleToggleMenu}
          ></i>
        </div>

        <div className="nav__toggle" onClick={handleToggleMenu}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}
