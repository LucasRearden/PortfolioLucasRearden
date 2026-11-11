import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import "../../styles/proyectos.css";
import "../../styles/educacion.css";
import clima from "../../assets/clima.png";
// TODO: agregá las capturas en src/assets con estos nombres (o cambiá los imports)
import libreria from "../../assets/libreria.png";
import batallaNaval from "../../assets/batallaNaval.png";

export const Proyectos = () => {
  const { t } = useTranslation();

  // animación de títulos
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

  // Metadatos NO traducibles. El orden tiene que coincidir con projects.items del JSON.
  // Si un proyecto no tiene versión online, dejá onlineLink sin poner y el botón no aparece.
  const itemsMeta = useMemo(
    () => [
      {
        img: clima,
        githubLink: "https://github.com/LucasRearden/App-Clima-ReactJS",
        onlineLink: "https://app-clima-lucasrearden-reactjs.netlify.app/",
      },
      {
        img: libreria,
        githubLink: "https://github.com/LucasRearden/frontendLib",
        onlineLink: "https://frontendlibreria.vercel.app/login",
      },
      {
        img: batallaNaval,
        githubLink: "https://github.com/LucasRearden/DA-2026Agosto-N4C-362596",
      },
    ],
    []
  );

  const items = itemsText.map((txt, i) => ({ ...txt, ...(itemsMeta[i] || {}) }));

  return (
    <section className="container proyectos-viewport">
      <h2 className="fade-title projects-heading">{t("projects.heading")}</h2>

      {items.map((p, i) => (
        <article className="project-card float-move" key={p.githubLink || i}>
          {p.img && (
            <figure className="project-figure">
              <img src={p.img} alt={p.title} className="project-img" />
            </figure>
          )}

          <div className="project-body">
            <h3 className="project-title">{p.title}</h3>
            {p.description && <p className="project-desc">{p.description}</p>}

            {Array.isArray(p.tech) && p.tech.length > 0 && (
              <ul className="project-tech">
                {p.tech.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            )}

            <div className="project-actions">
              {p.githubLink && (
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
              )}

              {p.onlineLink && (
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
              )}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};
