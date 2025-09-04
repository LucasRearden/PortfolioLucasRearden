import React from 'react'
import '../styles/navBar.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export const NavBar = () => {
    const { t } = useTranslation();
    return (
        <>
            <nav className="navbar bg-light">
                <div className="container">
                    <div className="row w-100 align-items-center">

                        <div className="col-6 col-lg-3">
                            <NavLink to='/' className="navbar-brand" href="#">
                                <img
                                    src="../../L.ico"
                                    alt="Logo"
                                    className="d-inline-block align-text-top logo"
                                />
                            </NavLink>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center">
                            <ul className="navbar-nav flex-row gap-3">
                                <li className="nav-item"><NavLink to='/' className="nav-link" href="#">{t("navbar.general")}</NavLink></li>
                                <li className="nav-item"><NavLink to='/about-me' className="nav-link" href="#">{t("navbar.about")}</NavLink></li>
                            </ul>
                        </div>


                        <div className="col-6 col-lg-3 d-flex justify-content-end">
                            <NavLink to='contact' className="btn btn-primary">{t("navbar.contact")}</NavLink>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}
