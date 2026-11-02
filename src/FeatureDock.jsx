
import React from "react";

import AtlasAI from "./AtlasAI.jsx";
import ConflictCinema from "./ConflictCinema.jsx";
import JourneyStudio from "./JourneyStudio.jsx";

import "./feature-dock.css";

export default function FeatureDock() {
  return (
    <div
      className="gastronomics-feature-dock"
      aria-label="Gastronomics feature tools"
    >
      <div className="feature-dock-label">
        EXPLORE MORE
      </div>

      <div className="feature-dock-actions">
        <AtlasAI />
        <ConflictCinema />
        <JourneyStudio />
      </div>
    </div>
  );
}
