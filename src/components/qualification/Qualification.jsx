import React, { useState } from "react";
import "./qualification.css";
import { educations, experiences, tabs } from "./data";

export default function Qualification() {
  const [toggleState, setToggleState] = useState(0);

  const handleTabToggle = (index) => {
    setToggleState(index);
  };

  return (
    <section className="section qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My education and training</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          {tabs?.map((tab, index) => (
            <div
              key={tab?.id}
              onClick={() => handleTabToggle(index)}
              className={`${
                toggleState === index
                  ? "button qualification__active button__grad"
                  : "qualification__button_hover"
              } qualification__button  button--flex`}
            >
              <i className={`${tab.icon} qualification__icon`}></i>
              {tab.title}
            </div>
          ))}
        </div>

        <div className="qualification__sections">
          <div
            className={`qualification__content ${
              toggleState === 0 && "qualification__content-active"
            }`}
          >
            {educations?.map((education) => (
              <div className="qualification__data" key={education?.id}>
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
              </div>
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
