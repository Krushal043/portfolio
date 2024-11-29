import React from "react";
import { socialMedia } from "./dataJson";
export default function Social() {
  return (
    <div className="home__social">
      {socialMedia?.map((social) => (
        <a
          href={social.link}
          className="home__social-icon"
          target="_blank"
          rel="noreferrer"
          key={social.key}
        >
          <i className={social.icon}></i>
        </a>
      ))}
    </div>
  );
}
