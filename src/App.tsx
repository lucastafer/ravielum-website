import React from "react";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import "./App.css";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Home />
      <AboutUs />
      <Footer />
    </div>
  );
}
