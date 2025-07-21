import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Album from "./pages/Album";
import UangKas from "./pages/UangKas";
import Jadwal from "./pages/Jadwal";
import Profil from "./pages/Profil";
import Background from "./components/Background";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/uangKas" element={<UangKas />} />
          <Route path="/album" element={<Album />} />
          <Route path="/jadwal" element={<Jadwal />} />
        </Routes>
      </Router>
      <div
        style={{
          width: "50%",
          height: "600px",
          marginTop: "-300px",
          position: "absolute",
        }}
      >
        // <Background amplitude={3} distance={0} enableMouseInteraction={true} /> 
      </div>
      <Header />
      <Footer />
    </>
  );
}

export default App;
