import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header-container">
      <div className="logo">LOGO</div>
      <nav className="nav-menu">
        <a href="#home">Home</a>
        <a href="#jadwal">Jadwal</a>
        <a href="#uang-cash">Uang Cash</a>
        <a href="#profil">Profil</a>
        <a href="#album">Album</a>
        <a href="#about">About Us</a>
      </nav>
    </header>
  );
}

export default Header;
