import React from "react";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import "./App.css";
import StickyFooter from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";

export default function App() {
  return (
    <div className="App">
      <Home />
      <AboutUs />
      <StickyFooter />
    </div>
  );
}
