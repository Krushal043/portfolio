import React from "react";
import { frontendTech } from "./data";
import { motion } from "framer-motion";

export default function Frontend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Technologies</h3>
      <div className="skills__box">
        <div className="skills__frontend">
          <ul className="skills__group">
            {frontendTech?.map((skill) => (
              <motion.li
                className="skills-tech"
                key={skill?.id}
                initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left
                  x: 50,
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
                <div className="skills__img-tech">
                  <img src={skill?.img} alt="" className="skills-logo" />
                </div>
                <h3 className="skills__title-tech">{skill?.name}</h3>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
