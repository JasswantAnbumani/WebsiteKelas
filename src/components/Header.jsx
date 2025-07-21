import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header-container">
      <div className="logo">LOGO</div>
      <nav className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/jadwal">Jadwal</Link>
        <Link to="/uangKas">Uang Kas</Link>
        <Link to="/profil">Profil</Link>
        <Link to="/album">Album</Link>
        <Link to="/aboutUs">About Us</Link>
      </nav>
    </header>
  );
}

export default Header;
