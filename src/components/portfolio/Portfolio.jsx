import React, { useState } from "react";
import "./portfolio.css";
import { Tooltip } from "react-tooltip";
import { projects } from "./data";

export default function Portfolio() {
  const [toggleState, setToggleState] = useState(null);

  const handleToggle = (index) => {
    setToggleState(index);
  };

  return (
    <section className="section portfolio" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">I've worked on</span>
      <div className="portfolio__container container grid">
        {projects?.map((project, index) => (
          <div className="portfolio__content" key={project?.id}>
            <div className="portfolio__group">
              <img src={project?.img} alt="" className="portfolio__img-image" />
            </div>
            <div className="portfolio__content_group">
              <div className="portfolio__box">
                <div className="portfolio__box-info">
                  <div className="portfolio__box-title">
                    <h2 className="portfolio__title">{project?.name}</h2>
                    <a
                      href={project?.url}
                      className="portfolio_link"
                      data-tooltip-id="portfolio__link-tooltip"
                      data-tooltip-content={`Go To ${project?.name}`}
                      data-tooltip-place="bottom"
                    >
                      <i class="bx bx-link portfolio__box-link"></i>
                    </a>
                  </div>
                  <span
                    className="portfolio_link portfolio__button"
                    onClick={() => handleToggle(index)}
                    data-tooltip-id="role-tooltip"
                    data-tooltip-content="My role"
                    data-tooltip-place="bottom"
                  >
                    <i class="uil uil-info-circle portfolio__box-link"></i>
                  </span>

                  <div
                    className={`${
                      toggleState === index && "active-modal"
                    } porfolio__modal`}
                  >
                    <div className="porfolio__modal-content">
                      <i
                        className="uil uil-times porfolio__modal-close"
                        onClick={() => setToggleState(null)}
                      ></i>

                      <h3 className="porfolio__modal-title">{project.name}</h3>
                      <ul className="porfolio__modal-services grid">
                        {project?.role?.map((role) => (
                          <li
                            key={role?.id}
                            className="porfolio__modal-service"
                          >
                            <i className="uil uil-check-circle porfolio__modal-icon"></i>
                            <p className="porfolio__modal-info">{role.info}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <h3 className="portfolio__site-title">Worked on</h3>
                <div className="porfolio-site">
                  {project?.panel?.map((site) => (
                    <h3 className="portfolio__site-name" key={site?.id}>
                      {site?.name}
                    </h3>
                  ))}
                </div>
                <h3 className="portfolio__site-title">
                  Technologies I have used
                </h3>
              </div>
              <div className="portfolio__head-tech">
                {project?.technologies?.map((tech) => (
                  <div className="porfolio-tech" key={tech?.id}>
                    <div className="porfolio__img-tech">
                      <img src={tech?.img} alt="" className="portfolio-logo" />
                    </div>
                    <h3 className="portfolio__title-tech">{tech?.tech}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Tooltip id="role-tooltip" />
      <Tooltip id="portfolio__link-tooltip" />
    </section>
  );
}
