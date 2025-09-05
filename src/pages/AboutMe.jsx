import React from 'react'
import "../styles/aboutme.css";
import { Tecnologias } from '../components/aboutme/Tecnologias';
import { Proyectos } from '../components/aboutme/Proyectos';
import { Educacion } from '../components/aboutme/Educacion';


export const AboutMe = () => {
  return (
    <>
      <div className='fondoabout'>
        <Tecnologias></Tecnologias>
        <Educacion></Educacion>
        <Proyectos></Proyectos>
      </div>
      
    </>
  )
}
