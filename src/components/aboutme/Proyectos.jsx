import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import "../../styles/proyectos.css";   // layout/animación de proyectos
import "../../styles/educacion.css";   // trae .btn-edu reutilizable
import clima from "../../assets/clima.png";

export const Proyectos = () => {
  const { t } = useTranslation();

  // Textos traducidos
  const itemsText = t("projects.items", { returnObjects: true }) || [];
  const labels = {
    github: t("projects.buttons.github"),
    online: t("projects.buttons.online"),
  };

  // Metadatos NO traducibles (imagen y links)
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

  // Mezclar textos con metadatos
  const items = itemsText.map((txt, i) => ({ ...txt, ...(itemsMeta[i] || {}) }));

  return (
    <section className="container proyectos-viewport">
      {items.map((p) => (
        <article className="project-card float-move" key={p.title}>
          {/* Imagen arriba */}
          <figure className="project-figure">
            <img src={p.img} alt={p.title} className="project-img" />
          </figure>

          {/* Título izq + botones der */}
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
