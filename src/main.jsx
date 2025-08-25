import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App.jsx";
import SplashScreen from "./pages/SplashScreen.jsx";
import Home from "./pages/Home.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate to="/splash" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
