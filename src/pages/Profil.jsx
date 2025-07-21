import React, { useRef } from 'react';
import '../styles/Profil.css';
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';

const perangkatKelas = [
  { nama: 'Ketua', foto: '/img/perangkat/ketua.jpg' },
  { nama: 'Wakil Ketua', foto: '/img/perangkat/wakil.jpg' },
  { nama: 'Sekretaris', foto: '/img/perangkat/sekretaris.jpg' },
  { nama: 'Bendahara', foto: '/img/perangkat/bendahara.jpg' },
];

const anggotaKelas = Array.from({ length: 50 }, (_, i) => ({
  nama: `Anggota ${i + 1}`,
  foto: `/img/anggota/anggota${i + 1}.jpg`,
}));

const Profil = () => {
  const anggotaRef = useRef(null);

    const scroll = (direction) => {
    const container = anggotaRef.current;
    const columnWidth = container.querySelector('.anggota-card')?.offsetWidth || 130;
    const gap = 16; // jarak antar kartu (gap grid)
    const scrollAmount = (columnWidth + gap) * 7;

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };


  return (
    <div className="profil-container">
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
        <button className="scroll-btn left" onClick={() => scroll('left')}>
          <FaChevronCircleLeft size={32} />
        </button>

        <div className="anggota-wrapper-2baris" ref={anggotaRef}>
          {anggotaKelas.map((item, index) => (
            <div key={index} className="anggota-card">
              <img src={item.foto} alt={item.nama} className="profil-img" />
              <p>{item.nama}</p>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => scroll('right')}>
          <FaChevronCircleRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default Profil;
