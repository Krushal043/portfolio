import React from "react";
import "./skills.css";
import Design from "./Design";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Other from "./Other";

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Technologies I Use</span>
      <div className="skills__container container grid">
        <Design />
        <Frontend />
      </div>
      <div className="skills__container_two container grid">
        <Backend />
        <Other />
      </div>
    </section>
  );
}
