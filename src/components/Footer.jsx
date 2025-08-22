import React from "react";
import "../styles/Footer.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logoFooter from "../assets/logo/logoFooter.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="footer-container"
    >
      <div className="footer-left">
        <span className="footer-logo">
          <img src={logoFooter} alt="Footer Logo" className="footer-logo-img" />
        </span>
      </div>

      <div className="footer-center">
        <div className="footer-icons">
          <a
            href="https://x.com/IF_D_SG_STB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://instagram.com/the_first_d_2024"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/6283878594030"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
        <p className="footer-text">2025© IF D Siang, All Rights Reserved ©</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
