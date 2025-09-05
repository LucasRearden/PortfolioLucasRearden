import React, { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import "../styles/contact.css";
import "../styles/educacion.css";

export const Contact = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState(null); // success | error | null

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "0267ec92-37f0-43be-a661-fef10ed1aecd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setStatus("success");
        event.target.reset(); // limpia el formulario
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="container py-4">
      <div className="contact-shell p-3 p-md-4">
        <header className="text-center mb-3 mb-md-4">
          <h2 className="contact-title m-0">
            {t("contact.title_left")}{" "}
            <span className="grad">{t("contact.title_right")}</span>
          </h2>
        </header>

        <div className="row g-4 align-items-start">
          {/* Izquierda */}
          <aside className="col-12 col-lg-5">
            <h3 className="side-tagline text-center">
              <Trans i18nKey="contact.tagline">
                Disponible para nuevos proyectos.
                <br className="d-none d-md-block" />
                Escribime y lo charlamos.
              </Trans>
            </h3>
            <div className="info-box">
              <ul className="info-list list-unstyled m-0 p-0">
                <li className="d-flex align-items-center gap-3">
                  <span className="info-icon"><i className="bi bi-envelope"></i></span>
                  <a className="link-light text-decoration-none" href={`mailto:${t("contact.email_value")}`}>
                    {t("contact.email_value")}
                  </a>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <span className="info-icon"><i className="bi bi-geo-alt"></i></span>
                  <span>{t("contact.location")}</span>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <span className="info-icon"><i className="bi bi-telephone"></i></span>
                  <a className="link-light text-decoration-none" href={`tel:${t("contact.phone_value_href")}`}>
                    {t("contact.phone_value_label")}
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          {/* Formulario */}
          <div className="col-12 col-lg-7">
            <form onSubmit={onSubmit} className="vstack gap-3">
              <div>
                <label className="lbl d-block mb-1">{t("contact.name")}</label>
                <input className="form-control contact-input" type="text" name="name" placeholder={t("contact.name_ph")} required />
              </div>
              <div>
                <label className="lbl d-block mb-1">{t("contact.email")}</label>
                <input className="form-control contact-input" type="email" name="email" placeholder={t("contact.email_ph")} required />
              </div>
              <div>
                <label className="lbl d-block mb-1">{t("contact.subject")}</label>
                <input className="form-control contact-input" type="text" name="subject" placeholder={t("contact.subject_ph")} required />
              </div>
              <div>
                <label className="lbl d-block mb-1">{t("contact.message")}</label>
                <textarea className="form-control contact-input" rows="5" name="message" placeholder={t("contact.message_ph")} required />
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-edu btn-sm">{t("contact.send")}</button>
              </div>
            </form>

            {/* Mensajes */}
            {status === "success" && (
              <div className="alert alert-success mt-3">
                ✅ {t("contact.success_msg", "Se envió correctamente.")}
              </div>
            )}
            {status === "error" && (
              <div className="alert alert-danger mt-3">
                ❌ {t("contact.error_msg", "Error, intente más tarde.")}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
