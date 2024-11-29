import React, { useState } from "react";
import "./services.css";
import { services } from "./data";
import { motion } from "framer-motion";

export default function Services() {
  const [toggleState, setToggleState] = useState(null);

  const handleToggle = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <motion.h2
        className="section__title"
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
        Services
      </motion.h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        {services?.map((service, index) => (
          <div className="services__content" key={service.id}>
            <div>
              <i className={`${service.icon} services__icon`}></i>
              <h3
                className="services__title"
                dangerouslySetInnerHTML={{ __html: service.title }}
              />
            </div>
            <span
              className="services__button"
              onClick={() => handleToggle(index)}
            >
              View More{" "}
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div
              className={`${
                toggleState === index && "active-modal"
              } services__modal`}
            >
              <div className="services__modal-content">
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => setToggleState(null)}
                ></i>
                <h3 className="services__modal-title">{service.subtitle}</h3>
                <p className="services__modal-description">
                  Service with more than 3.5+ years of experience.Providing
                  quality work to clients and companies.
                </p>
                <ul className="services__modal-services grid">
                  {service?.info?.map((info) => (
                    <li key={info?.id} className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">{info.service}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
