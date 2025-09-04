import { useEffect, useRef } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import "../../styles/tecnologias.css";
import { skills } from "./skills.js";
export const Tecnologias = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {

      scrollRef.current.scrollLeft = 5;
    }
  }, []);

  return (
    <div className="container-fluid">
      <div className="scroll-container tecnologias d-flex justify-content-center align-items-center pt-5">
        <div className="track">
          {[...skills, ...skills].map((skill, i) => (
            <div className="card-item" key={`${skill.nombre}-${i}`}>
              <h3>{skill.nombre}</h3>
              <Rating value={skill.rating} precision={0.5} readOnly />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
