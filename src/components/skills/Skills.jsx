import React from "react";
import "./skills.css";
import Design from "./Design";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Other from "./Other";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <motion.h2
        className="section__title"
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide in to its original position
          transition: {
            duration: 1, // Animation duration
          },
        }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <span className="section__subtitle">Technologies I Use</span>
      <div className="skills__container container grid">
        <Design />
        <Frontend />
        <Backend />
        <Other />
      </div>
    </section>
  );
}
