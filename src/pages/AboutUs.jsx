import React from 'react';
import '../styles/AboutUs.css';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const AboutUs = () => {
  const teamMembers = [
    { name: 'Jasswant Anbumani' },
    { name: 'Natanael Sibagariang' },
    { name: 'Kidroni Harahap' },
    { name: 'Salma Monia' },
    { name: 'Inggid Salfadia' }
  ];

  return (
    <div className="container">
      {/* ABOUT US */}
      <section className="about-section">
        <div className="about-text">
          <h1>ABOUT US</h1>
          <p>
            Kami adalah mahasiswa Teknik Informatika Universitas Satya Terra Bhinneka – pembelajar, penjelajah teknologi, dan pencipta solusi digital masa depan.
            Di tengah pesatnya perkembangan teknologi informasi, kami hadir sebagai generasi yang siap menjawab tantangan era digital dengan kreativitas, inovasi, dan semangat kolaboratif.
            Dibekali kurikulum berbasis industri dan semangat “Unity in Diversity”, kami tidak hanya fokus pada teori, tapi juga aktif mengembangkan proyek nyata:
            dari pengembangan aplikasi, AI, keamanan siber, hingga startup berbasis teknologi. Di ruang kelas, laboratorium, dan dunia maya, kami terus belajar dan berkarya.
          </p>
        </div>
        <img
          src="https://img.freepik.com/free-photo/happy-young-man-standing-isolated_171337-21060.jpg"
          alt="Mahasiswa"
          className="about-image"
        />
      </section>

      {/* GAMBAR 1 - 4 */}
      <div className="image-row">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="image-box">
            GAMBAR {num}
          </div>
        ))}
      </div>

      <section className="team-section">
        <h2>Our Team Project</h2>
        <p>
          Halo dan selamat datang! Ini adalah ruang di mana kolaborasi bertemu dengan kreativitas.
          Bersama, tim kami telah bekerja keras untuk mengubah ide menjadi solusi yang berdampak.
          Setiap bagian dari proyek ini mencerminkan kerja sama tim, inovasi, dan visi yang kami bagikan bersama.
          Silakan jelajahi — dan lihat apa yang telah kami bangun bersama.
        </p>
      </section>

      {/* TIM */}
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="image-box">GAMBAR {index + 1}</div>
            <p className='tengah'>{member.name}</p>
            <div className="icons">
              <i className="fab fa-instagram"><FaInstagram /></i>
              <i className="fab fa-github"><FaGithub /></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
