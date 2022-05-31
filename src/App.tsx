import React from "react";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import "./App.css";
import Footer from "./components/Footer";
import Services from "./components/Services/Services";
import Contacts from "./components/Contacts/Contacts";

export default function App() {
  return (
    <div className="App">
      <Home />
      <AboutUs />
      <Services />
      <Contacts />
      <Footer />
    </div>
  );
}
