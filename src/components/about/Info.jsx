import React from "react";
import { aboutInfo } from "./data";

export default function Info() {
  return (
    <div className="about__info grid">
      {aboutInfo?.map((info) => (
        <div key={info?.id} className="about__box">
          <i className={`${info?.icon} about__icon`}></i>
          <h3 className="about__title">{info?.title}</h3>
          <span className="about__subtitle">{info?.subtitle}</span>
        </div>
      ))}
    </div>
  );
}
