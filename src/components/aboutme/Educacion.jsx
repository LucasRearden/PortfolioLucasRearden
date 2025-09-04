import React, { useEffect } from "react";
import "../../styles/educacion.css";

import cursoImg from "../../assets/utu.png";
import proyectoImg from "../../assets/ORT.jpg";
import escolaridad from "../../assets/escolaridadLucasRearden.pdf";

const items = [
  {
    title: "UTU - Dirección General de Educación Técnico - Profesional",
    img: cursoImg,
    imgAlt: "UTU ESI",
    caption: "Bachillerato Tecnológico en Informática",
    href: escolaridad,
    hrefText: "Ver certificado",
    imgHref: "https://esi.edu.uy/",
    description:
      "Instituto de formación en informática y tecnología ubicado en Montevideo. Ofrece cursos y carreras técnicas en programación, redes, diseño web y soporte, con un enfoque práctico y orientado al mercado laboral."
  },
  {
    title: "Universidad ORT Uruguay",
    img: proyectoImg,
    imgAlt: "OrtPagina",
    caption: "Analista TI",
    href: escolaridad,
    hrefText: "Abrir certificado",
    imgHref: "https://fi.ort.edu.uy/analista-en-tecnologias-de-la-informacion",
    description:
      "Carrera terciaria orientada a formar profesionales capaces de diseñar, programar, implementar y mantener sistemas de software. Combina teoría y práctica en programación, bases de datos, redes y gestión de proyectos, preparando para roles de desarrollo y soporte tecnológico en empresas."
  },
];

const idiomas = [
  { nombre: "Español", nivelTexto: "Nativo", valor: 100 },
  { nombre: "Inglés", nivelTexto: "B2 Avanzado", valor: 80 },
];

export const Educacion = () => {
  useEffect(() => {
    // animación de las barras
    const fills = document.querySelectorAll(".lang-fill");
    fills.forEach((bar) => {
      const finalWidth = bar.getAttribute("data-width");
      bar.style.width = "0%";
      setTimeout(() => {
        bar.style.width = finalWidth;
      }, 300);
    });

    // animación títulos
    const titles = document.querySelectorAll(".fade-title");
    titles.forEach((t, i) => {
      setTimeout(() => t.classList.add("show"), 300 * i);
    });
  }, []);

  return (
    <div className="about-wrapper container-fluid">
      <h2 className="fade-title">Educación</h2>

      {/* ===== Sección Idiomas ===== */}
      <section className="section-card">
        <h3 className="fade-title section-subtitle">Idiomas</h3>

        <div className="container backk p-3 rounded-3">
          {idiomas.map((i) => (
            <div className="row align-items-center py-2" key={i.nombre}>
              {/* Nombre */}
              <div className="col-3 text-start fw-semibold">{i.nombre}</div>

              {/* Barra */}
              <div className="col-7">
                <div className="progress-lng">
                  <div
                    className="progress-lng__bar"
                    style={{ width: `${i.valor}%` }}
                  ></div>
                </div>
              </div>

              {/* Nivel + % */}
              <div className="col-2 text-end small">
                {i.nivelTexto}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === Render de las 3 secciones con layout foto + texto === */}
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
