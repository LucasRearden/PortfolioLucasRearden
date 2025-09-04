import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import { NavBar } from './components/NavBar'
import { AboutMe } from './pages/AboutMe'
import { Contact } from './pages/Contact'
import { General } from './pages/General'

export const LucasPortfolio = () => {
    return (
        <>
            <NavBar></NavBar>
            <Routes>

                <Route path="/" element={<General />} />

                <Route path="/about-me" element={<AboutMe />} />

                <Route path="/contact" element={<Contact />} />

                <Route path="/*" element={<Navigate to='/' />} />

            </Routes >
        </>
    )
}
