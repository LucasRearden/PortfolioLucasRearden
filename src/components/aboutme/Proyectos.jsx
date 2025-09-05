import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import "../../styles/proyectos.css";
import "../../styles/educacion.css";
import clima from "../../assets/clima.png";

export const Proyectos = () => {
  const { t } = useTranslation();

  // animación de títulos (si usás .fade-title en otros lados)
  useEffect(() => {
    document.querySelectorAll(".fade-title").forEach((el, i) => {
      setTimeout(() => el.classList.add("show"), 200 * i);
    });
  }, []);

  const itemsText = t("projects.items", { returnObjects: true }) || [];
  const labels = {
    github: t("projects.buttons.github"),
    online: t("projects.buttons.online"),
  };

  const itemsMeta = useMemo(
    () => [
      {
        img: clima,
        githubLink: "https://github.com/LucasRearden/App-Clima-ReactJS",
        onlineLink: "https://app-clima-lucasrearden-reactjs.netlify.app/",
      },
    ],
    []
  );

  const items = itemsText.map((txt, i) => ({ ...txt, ...(itemsMeta[i] || {}) }));

  return (
    <section className="container proyectos-viewport">
      {/* Título estilo “Educación” */}
      <h2 className="fade-title projects-heading">Proyectos</h2>

      {items.map((p) => (
        <article className="project-card float-move" key={p.title}>
          <figure className="project-figure">
            <img src={p.img} alt={p.title} className="project-img" />
          </figure>

          <div className="project-body">
            <h3 className="project-title">{p.title}</h3>

            <div className="project-actions">
              <a
                className="btn btn-edu btn-sm"
                href={p.githubLink}
                target="_blank"
                rel="noreferrer"
                title={labels.github}
              >
                <i className="bi bi-github"></i>
                <span>{labels.github}</span>
              </a>

              <a
                className="btn btn-edu btn-sm"
                href={p.onlineLink}
                target="_blank"
                rel="noreferrer"
                title={labels.online}
              >
                <i className="bi bi-globe2"></i>
                <span>{labels.online}</span>
              </a>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};
