import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/navBar.css";
import "../styles/educacion.css"; // para usar .btn-edu
import loguito from "../assets/L.png"
export const NavBar = () => {
    const { t } = useTranslation();

    return (
        <nav className="nav-slim">
            <div className="container nav-row">
                {/* Izquierda: logo */}
                <NavLink to="/" className="brand">
                    <img src={loguito} alt="Logo" className="logo-shine" />
                </NavLink>


                {/* Centro: links */}
                <div className="links">
                    <NavLink to="/" className={({ isActive }) => "link" + (isActive ? " active" : "")}>
                        {t("navbar.general")}
                    </NavLink>
                    <NavLink to="/about-me" className={({ isActive }) => "link" + (isActive ? " active" : "")}>
                        {t("navbar.about")}
                    </NavLink>
                </div>

                {/* Derecha: CTA */}
                <NavLink to="/contact" className="btn btn-edu btn-sm">
                    {t("navbar.contact")}
                </NavLink>
            </div>
        </nav>
    );
};
