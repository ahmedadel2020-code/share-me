import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
      <App />
    </GoogleOAuthProvider>
  </Router>
);
