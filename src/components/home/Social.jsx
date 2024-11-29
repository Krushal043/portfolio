import React from "react";
import { socialMedia } from "./dataJson";
import { motion } from "framer-motion";
export default function Social() {
  return (
    <div className="home__social">
      {socialMedia?.map((social) => (
        <motion.a
          href={social.link}
          className="home__social-icon"
          target="_blank"
          rel="noreferrer"
          key={social.key}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.8 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <i className={social.icon}></i>
        </motion.a>
      ))}
    </div>
  );
}
