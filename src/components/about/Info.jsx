import React from "react";
import { aboutInfo } from "./data";
import { motion } from "framer-motion";

export default function Info() {
  return (
    <div className="about__info grid">
      {aboutInfo?.map((info, index) => (
        <motion.div
          key={info?.id}
          className="about__box"
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
          <i className={`${info?.icon} about__icon`}></i>
          <h3 className="about__title">{info?.title}</h3>
          <span className="about__subtitle">{info?.subtitle}</span>
        </motion.div>
      ))}
    </div>
  );
}
