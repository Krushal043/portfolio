import React from "react";
import { backendTech } from "./data";

export default function Backend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Technologies</h3>
      <div className="skills__box">
        <div className="skills__frontend">
          <div className="skills__group">
            {backendTech?.map((skill) => (
              <div key={skill?.id}>
                <div className="skills-tech">
                  <div className="skills__img-tech" key={skill?.id}>
                    <img src={skill?.img} alt="" className="skills-logo" />
                  </div>
                  <h3 className="skills__title-tech">{skill?.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
