import React, { useRef } from "react";
import "../styles/Profil.css";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import sekretaris from "/perangkat/meyzha.jpg"
import bendahara from "/perangkat/inggid.jpg"
import ketua from "/perangkat/jass.jpg"
import waketua from "/perangkat/nael.jpg"
const perangkatKelas = [
  { nama: "Komisaris", foto: ketua },
  { nama: "Wakil Komisaris", foto: waketua },
  { nama: "Sekretaris", foto: sekretaris },
  { nama: "Bendahara", foto: bendahara },
];

const anggotaKelas = Array.from({ length: 50 }, (_, i) => ({
  nama: `Anggota ${i + 1}`,
  foto: `/img/anggota/anggota(${i + 1}).jpg`,
}));

const Profil = () => {
  const anggotaRef = useRef(null);

  const scroll = (direction) => {
    const container = anggotaRef.current;
    const columnWidth =
      container.querySelector(".anggota-card")?.offsetWidth || 130;
    const gap = 16; // jarak antar kartu (gap grid)
    const scrollAmount = (columnWidth + gap) * 7;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="profil-container"
    >
      
        <h1 className="profil-title">PROFIL</h1>

        <h2 className="subheading">Perangkat Kelas</h2>
        <div className="perangkat-wrapper">
          {perangkatKelas.map((item, index) => (
            <div key={index} className="perangkat-card">
              <img src={item.foto} alt={item.nama} className="profil-img" />
              <p>{item.nama}</p>
            </div>
          ))}
        </div>

        <h2 className="subheading">Anggota Kelas</h2>
        <div className="anggota-section">
          <button className="scroll-btn left" onClick={() => scroll("left")}>
            <FaChevronCircleLeft size={32} />
          </button>

          <div
            className="anggota-wrapper-2baris scroll-container"
            ref={anggotaRef}
          >
            {anggotaKelas.map((item, index) => (
              <div key={index} className="anggota-card">
                <img src={item.foto} alt={item.nama} className="profil-img" />
                <p>{item.nama}</p>
              </div>
            ))}
          </div>

          <button className="scroll-btn right" onClick={() => scroll("right")}>
            <FaChevronCircleRight size={32} />
          </button>
        </div>
    </motion.div>
  );
};

export default Profil;
