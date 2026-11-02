
import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import FeatureDock from "./FeatureDock.jsx";

import "./index.css";
import "./mobile.css";
import "./mobile-fix.css";
import "./feature-dock.css";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <FeatureDock />
  </>
);
