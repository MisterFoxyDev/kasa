import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Footer from "./components/organisms/Footer/Footer";
import Banner from "./components/organisms/Banner/Banner";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import bodyAboutBanner from "./assets/images/body-about-banner-1920.webp";
import bodyHomeBanner from "./assets/images/body-home-banner-1920.webp";
import FicheLogement from "./components/pages/fiche-logement/FicheLogement";
import Error from "./components/pages/error/Error";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="site-container">
      <Router>
        <Banner />
        <Routes>
          <Route
            path="/"
            element={<Home banner={bodyHomeBanner} />}
          />
          <Route
            path="/about"
            element={<About banner={bodyAboutBanner} />}
          />
          <Route
            path="/fiche-logement/:idLogement"
            element={<FicheLogement />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
    <Footer />
  </React.StrictMode>,
);

// ajouter couleur principale au SASS ($)
