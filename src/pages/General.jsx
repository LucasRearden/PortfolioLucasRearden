import React from "react";
import "../styles/general.css";
import foto from "../assets/bannerCard.gif";
import perfil from "../assets/YO.jpg";
import cvES from "../assets/LucasReardenCV.pdf";
import cvEN from "../assets/CVLucasRearden.pdf";
import { useTranslation } from "react-i18next";
export const General = () => {
  const { t } = useTranslation();
  return (
    <div className="fondo">
      <div className="container my-5" id="fondoCard">
        <div className="row gy-3">

          {/* Fila 1: fotogato */}
          <div className="col-12">
            <div className="fotogato bg-dark rounded-4 shadow overflow-hidden mb-4">
              <img src={foto} alt="banner gato" className="img-fluid cat-img d-block w-100" />
            </div>
          </div>

          {/* Fila 2: col izquierda (perfil) + col derecha (botones en columna) */}
          <div className="col-12">
            <div className="row g-3 align-items-center">

              {/* Izquierda: perfil */}
              <div className="col-12 col-md-6">
                <div className="info py-2">
                  <div className="d-flex align-items-center bg-dark rounded-3 shadow-sm py-3 px-4">
                    <img src={perfil} alt="perfil" className="rounded-circle me-3" width="56" height="56" />
                    <div>
                      <h6 className="mb-0 text-white">Lucas Rearden</h6>
                      <small className="text-secondary">{t("general.title")} ✨</small>
                    </div>
                    <div>
                    </div>

                  </div>
                </div>
              </div>


              <div className="col-12 col-md-6 d-flex flex-column align-items-end">
                <div className="icon-group d-flex flex-column align-items-end">


                  <div className="d-flex gap-3 mb-2">
                    <a
                      href="https://github.com/LucasRearden"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-circle"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        alt="GitHub"
                      />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/lucas-rearden-34b050349"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-circle"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                        alt="LinkedIn"
                      />
                    </a>
                  </div>


                  <div className="dropdown custom-btn w-100">
                    <button
                      className="btn btn-outline-light dropdown-toggle w-100 d-flex align-items-center justify-content-center gap-2"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/84/84380.png"
                        alt="CV icon"
                        className="icon-small"
                      />
                      {t("cv.label")}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark w-100 text-center">
                      <li>
                        <a className="dropdown-item" href={cvES} target="_blank" rel="noopener noreferrer">
                        {t("cv.es")}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href={cvEN} target="_blank" rel="noopener noreferrer">
                        {t("cv.en")}
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Texto debajo */}
                  <p className="text-white mt-2 mb-0 text-end">{t("general.location")}</p>
                </div>
              </div>






            </div>
          </div>

          {/* Fila 3: texto */}
          <div className="col-12">
            <div className="texto bg-dark rounded-4 shadow p-4">
              <p className="text-descripcion mb-0">{t("general.bio")}</p>
            </div>
          </div>

        </div>
      </div>
    </div >
  );
};
