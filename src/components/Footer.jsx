import React from 'react';
import '../styles/Footer.css';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <span className="footer-logo">LOGO</span>
      </div>

      <div className="footer-center">
        <div className="footer-icons">
          <span><FaXTwitter /></span>
          <span><FaInstagram /></span>
          <span><FaWhatsapp /></span>
        </div>
        <p className="footer-text">2025© IF D Siang, All Rights Reserved ©</p>
      </div>
    </footer>
  );
};

export default Footer;
