import React, { useState } from "react";
import "./qualification.css";
import { educations, experiences, tabs } from "./data";
import { motion } from "framer-motion";

export default function Qualification() {
  const [toggleState, setToggleState] = useState(0);

  const handleTabToggle = (index) => {
    setToggleState(index);
  };

  return (
    <section className="section qualification">
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
        Qualification
      </motion.h2>
      <span className="section__subtitle">My education and training</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          {tabs?.map((tab, index) => (
            <motion.div
              key={tab?.id}
              onClick={() => handleTabToggle(index)}
              className={`${
                toggleState === index
                  ? "button qualification__active button__grad"
                  : "qualification__button_hover"
              } qualification__button  button--flex`}
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: index % 2 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <i className={`${tab.icon} qualification__icon`}></i>
              {tab.title}
            </motion.div>
          ))}
        </div>

        <div className="qualification__sections">
          <div
            className={`qualification__content ${
              toggleState === 0 && "qualification__content-active"
            }`}
          >
            {educations?.map((education, index) => (
              <motion.div
                className="qualification__data"
                key={education?.id}
                initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left
                  x: index % 2 ? 50 : -50,
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
                {education?.id === 2 && (
                  <>
                    <div></div>
                    <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification__line"></span>
                    </div>
                  </>
                )}
                <div>
                  <h3 className="qualification__title">{education?.degree}</h3>
                  <span className="qualification__subtitle">
                    {education?.university}
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> {education?.date}
                  </div>
                </div>
                {education?.id === 1 && (
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div
            className={`qualification__content ${
              toggleState === 1 && "qualification__content-active"
            }`}
          >
            {experiences?.map((experience) => (
              <div className="qualification__data" key={experience?.id}>
                {experience?.id % 2 === 0 && (
                  <>
                    <div></div>
                    <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification__line"></span>
                    </div>
                  </>
                )}

                <div>
                  <h3 className="qualification__title">
                    {experience?.position}
                  </h3>
                  <span className="qualification__subtitle">
                    {experience?.company}
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> {experience?.date}
                  </div>
                </div>

                {experience?.id % 2 !== 0 && (
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
