import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import "../../styles/educacion.css";

import cursoImg from "../../assets/utu.png";
import proyectoImg from "../../assets/ORT.jpg";
import escolaridad from "../../assets/escolaridadLucasRearden.pdf";

export const Educacion = () => {
  const { t } = useTranslation();

  // Textos traducidos
  const heading = t("education.heading");
  const languagesHeading = t("education.languagesHeading");
  const idiomas = t("education.languages", { returnObjects: true }) || [];
  const itemsText = t("education.items", { returnObjects: true }) || [];

  // Metadatos NO traducibles (imágenes, hrefs)
  const itemsMeta = useMemo(
    () => [
      {
        img: cursoImg,
        imgAlt: "UTU ESI",
        imgHref: "https://esi.edu.uy/",
        href: escolaridad
      },
      {
        img: proyectoImg,
        imgAlt: "OrtPagina",
        imgHref: "https://fi.ort.edu.uy/analista-en-tecnologias-de-la-informacion",
        href: escolaridad
      }
    ],
    []
  );

  // Mezclamos textos traducidos con los metadatos
  const items = itemsText.map((txt, idx) => ({
    ...txt,
    ...(itemsMeta[idx] || {})
  }));

  useEffect(() => {
    // animación títulos
    const titles = document.querySelectorAll(".fade-title");
    titles.forEach((t, i) => {
      setTimeout(() => t.classList.add("show"), 300 * i);
    });
  }, []);

  return (
    <div className="about-wrapper container-fluid">
      <h2 className="fade-title">{heading}</h2>

      {/* ===== Sección Idiomas ===== */}
      <section className="section-card">
        <h3 className="fade-title section-subtitle">{languagesHeading}</h3>

        <div className="container backk p-3 rounded-3">
          {idiomas.map((i) => (
            <div className="row align-items-center py-2" key={i.name}>
              <div className="col-3 text-start fw-semibold">{i.name}</div>

              <div className="col-7">
                <div className="progress-lng">
                  <div
                    className="progress-lng__bar"
                    style={{ width: `${i.value}%` }}
                  />
                </div>
              </div>

              <div className="col-2 text-end small">{i.level}</div>
            </div>
          ))}
        </div>
      </section>

      {/* === Render de cada institución === */}
      {items.map((it) => (
        <section className="section-card" key={it.title}>
          <h3 className="fade-title section-subtitle">{it.title}</h3>

          <div className="row g-3 align-items-center media-row">
            {/* Foto + caption + link  */}
            <div className="col-12 col-md-4">
              <figure className="media-figure">
                <a href={it.imgHref} target="_blank" rel="noreferrer">
                  <img
                    src={it.img}
                    alt={it.imgAlt}
                    className="img-fluid rounded-3 shadow-sm media-img"
                  />
                </a>
                <figcaption className="media-caption">
                  <span>{it.caption}</span>
                  <a
                    href={it.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-light btn-sm"
                  >
                    {it.hrefText}
                  </a>
                </figcaption>
              </figure>
            </div>

            <div className="col-12 col-md-8">
              <div className="media-desc-card">
                <p className="lead mb-0 media-desc">{it.description}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};
