import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import logoHeader from "../assets/logo/logoHeader.png";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="header-container"
    >
        <div className="logo">
          <img src={logoHeader} alt="Logo" className="logo-img" />
        </div>

        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/jadwal">Jadwal</Link>
          <Link to="/uangKas">Uang Kas</Link>
          <Link to="/profil">Profil</Link>
          <Link to="/album">Album</Link>
          <Link to="/aboutUs">About Us</Link>
        </nav>
  
    </motion.header>
  );
}

export default Header;
