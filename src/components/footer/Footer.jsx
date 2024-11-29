import React from "react";
import "./footer.css";
import { footerLinks, footerSocialMedia } from "./data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Kushal</h1>
        <ul className="footer__list">
          {footerLinks?.map((footerLink) => (
            <li key={footerLink?.id}>
              <a href={footerLink?.href} className="footer__link">
                {footerLink?.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="footer__social">
          {footerSocialMedia?.map((social) => (
            <a
              href={social.link}
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
              key={social.key}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>

        <span className="footer__copy">&#169; Kushal. All rigths reserved</span>
      </div>
    </footer>
  );
}
