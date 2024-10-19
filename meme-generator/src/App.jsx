import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import MemeForm from "./Components/MemeForm";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <MemeForm />
      <Footer />
    </>
  );
}

export default App;
