import React from 'react';
import '../styles/AboutUs.css';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import ifdsiang from "../assets/logo/ifdsiang.jpg";
import FadeSlideUp from "../components/animations/FadeSlideUp";

const AboutUs = () => {
  const teamMembers = [
    { name: 'Jasswant Anbumani', github: 'https://github.com/JasswantAnbumani', instagram: 'https://www.instagram.com/jassnotsillynomore/' },
    { name: 'Natanael Sibagariang', github: 'https://github.com/nael524', instagram: 'https://www.instagram.com/naellsbagrianggg/' },
    { name: 'Kidroni Harahap', github: 'https://github.com/Ronihrp', instagram: 'https://www.instagram.com/rhrhp_hrp/' },
    { name: 'Salma Monia', github: 'https://github.com/salmamonia', instagram: 'https://www.instagram.com/niania_1107/' },
    { name: 'Inggid Salfadia', github: 'https://github.com/Inggidsalfadia', instagram: 'https://www.instagram.com/slf_dya/' }
  ];

  return (
    <div className="container">
      <section className="about-section">
        <div className="about-text">
          <FadeSlideUp delay={0.1}>
          <h1>ABOUT US</h1></FadeSlideUp>
          <FadeSlideUp delay={0.9}>
          <p>
            Kami adalah mahasiswa Teknik Informatika Universitas Satya Terra Bhinneka – pembelajar, penjelajah teknologi, dan pencipta solusi digital masa depan.
            Di tengah pesatnya perkembangan teknologi informasi, kami hadir sebagai generasi yang siap menjawab tantangan era digital dengan kreativitas, inovasi, dan semangat kolaboratif.
            Dibekali kurikulum berbasis industri dan semangat “Unity in Diversity”, kami tidak hanya fokus pada teori, tapi juga aktif mengembangkan proyek nyata:
            dari pengembangan aplikasi, AI, keamanan siber, hingga startup berbasis teknologi. Di ruang kelas, laboratorium, dan dunia maya, kami terus belajar dan berkarya.
          </p></FadeSlideUp>
          
        </div>
      </section>
      <FadeSlideUp delay={1.5}>
        <div className="image-row">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="image-box">
            GAMBAR {num}
          </div>
        ))}
      </div></FadeSlideUp>

      <FadeSlideUp delay={1.999999999999999}><section className="team-section">
        <h2>Our Team Project</h2>
        <p>
          Halo dan selamat datang! Ini adalah ruang di mana kolaborasi bertemu dengan kreativitas.
          Bersama, tim kami telah bekerja keras untuk mengubah ide menjadi solusi yang berdampak.
          Setiap bagian dari proyek ini mencerminkan kerja sama tim, inovasi, dan visi yang kami bagikan bersama.
          Silakan jelajahi — dan lihat apa yang telah kami bangun bersama.
        </p>
      </section></FadeSlideUp>

      <FadeSlideUp delay={2.5}><div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="image-box">GAMBAR {index + 1}</div>
            <p className="tengah">{member.name}</p>
            <div className="icons">
              <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div></FadeSlideUp>
    </div>
  );
};

export default AboutUs;
