import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Footer from "./components/organisms/Footer/Footer";
import Banner from "./components/organisms/Banner/Banner";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import bodyAboutBanner from "./assets/images/body-about-banner.webp";
import bodyHomeBanner from "./assets/images/body-home-banner.webp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="site-container">
      <Router>
        <Banner />
        <Routes>
          <Route path="/" element={<Home banner={bodyHomeBanner} />} />
          <Route path="/about" element={<About banner={bodyAboutBanner} />} />
        </Routes>
      </Router>
    </div>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
