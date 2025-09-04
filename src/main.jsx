import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "/src/styles/general.css";
import {LucasPortfolio} from "./LucasPortfolio.jsx";    

import "./i18n";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <LucasPortfolio />
    </StrictMode>,
  </BrowserRouter>
)
