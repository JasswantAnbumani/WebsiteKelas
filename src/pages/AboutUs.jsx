import React from "react";
import "../styles/AboutUs.css";
import { FaGithub, FaInstagram } from "react-icons/fa";
import ifdsiang from "../assets/logo/ifdsiang.jpg";
import { motion } from "framer-motion";
import gambar1 from "/perangkat/jass.jpg";
import gambar2 from "/perangkat/nael.jpg";
import gambar3 from "/perangkat/roni.jpg";
import gambar4 from "/perangkat/salma.jpg";
import gambar5 from "/perangkat/inggid.jpg";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Jasswant",
      github: "https://github.com/JasswantAnbumani",
      instagram: "https://www.instagram.com/jassnotsillynomore/",
      image: gambar1,
    },
    {
      name: "Natanael",
      github: "https://github.com/nael524",
      instagram: "https://www.instagram.com/naellsbagrianggg/",
      image: gambar2,
    },
    {
      name: "Kidroni",
      github: "https://github.com/Ronihrp",
      instagram: "https://www.instagram.com/rhrhp_hrp/",
      image: gambar3,
    },
    {
      name: "Salma",
      github: "https://github.com/salmamonia",
      instagram: "https://www.instagram.com/niania_1107/",
      image: gambar4,
    },
    {
      name: "Inggid",
      github: "https://github.com/Inggidsalfadia",
      instagram: "https://www.instagram.com/slf_dya/",
      image: gambar5,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <section className="about-section">
          <div className="about-text">
            <h1>ABOUT US</h1>
            <p>
              Kami adalah mahasiswa Teknik Informatika Universitas Satya Terra
              Bhinneka – pembelajar, penjelajah teknologi, dan pencipta solusi
              digital masa depan. Di tengah pesatnya perkembangan teknologi
              informasi, kami hadir sebagai generasi yang siap menjawab
              tantangan era digital dengan kreativitas, inovasi, dan semangat
              kolaboratif. Dibekali kurikulum berbasis industri dan semangat
              “Unity in Diversity”, kami tidak hanya fokus pada teori, tapi juga
              aktif mengembangkan proyek nyata: dari pengembangan aplikasi, AI,
              keamanan siber, hingga startup berbasis teknologi. Di ruang kelas,
              laboratorium, dan dunia maya, kami terus belajar dan berkarya.
            </p>
          </div>
        </section>

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
            Halo dan selamat datang! Ini adalah ruang di mana kolaborasi bertemu
            dengan kreativitas. Bersama, tim kami telah bekerja keras untuk
            mengubah ide menjadi solusi yang berdampak. Setiap bagian dari
            proyek ini mencerminkan kerja sama tim, inovasi, dan visi yang kami
            bagikan bersama. Silakan jelajahi — dan lihat apa yang telah kami
            bangun bersama.
          </p>
        </section>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="image-box">
                <img
                  src={member.image}
                  alt={member.name}
                  className="profil-img"
                />
              </div>

              <p className="tengah">{member.name}</p>
              <div className="icons">
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
