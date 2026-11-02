
import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import ConflictCinema from "./ConflictCinema.jsx";
import JourneyStudio from "./JourneyStudio.jsx";
import AtlasAI from "./AtlasAI.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <ConflictCinema />
    <JourneyStudio />
    <AtlasAI />
  </>
);
