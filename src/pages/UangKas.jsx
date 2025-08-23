import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/UangKas.css";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";


const API_URL = "https://websitekelas-server.onrender.com/api/uangkas";
const PENGELUARAN_URL = "https://websitekelas-server.onrender.com/api/pengeluaran";


const namaMahasiswa = [
  "Ade Mansyah Putra Tarigan",
  "Adinda Aulia",
  "Agnes Hagata Panjaitan",
  "Ahmad Fadhli",
  "Alfrido Cristian Sinaga",
  "Andrea Saputra Barus",
  "Anita Br Tarigan",
  "Aprilianti Br Surbakti",
  "Arif Riansyah Lubis",
  "Catur Riansyah Wicaksono",
  "Chrisna Rinjani Barus",
  "Christian Sembiring",
  "Citra Putri Barus",
  "Daffa Khairul Fadillah",
  "Denny Ricardo Manurung",
  "Dewa Kresna Tarigan",
  "Dila Safira",
  "Elisa Debora Br Ginting",
  "Febianus Ricky Surbakti",
  "Gavin Al Fatih",
  "Gilbert Pratama Purba",
  "Gloria Pasaribu",
  "Gusman Wijaya",
  "Hiskya B. Sinulingga",
  "Ismail Bakti Ginting",
  "Ivan Prayogi",
  "Jasswant Anbumani",
  "Jesika Sembiring Meliala",
  "Julianus Sipayung",
  "Kevin",
  "Kelvin",
  "Laura Kirana",
  "Lidia Pratiwi Ginting",
  "Lutfi Ramadhan Nasution",
  "Maria Nainggolan",
  "Maya Simanjuntak",
  "Michael Sihombing",
  "Monica Sihite",
  "Muhammad Rizki Ramadhan",
  "Muhammad Rizky Alamsyah",
  "Natanael H. Sibagariang",
  "Novita Br Tarigan",
  "Poda Theo Hamonangan Perangin-angin",
  "Putri Arista Lubis",
  "Rafi Darmawan",
  "Rani Wahyuni",
  "Reinhard Ginting",
  "Rio",
  "Rizky Prayoga",
  "Sandy Pranata",
  "Sarah Purba",
  "Tri Aditya Pramudigta",
  "Vicky Juniandra",
  "Yogi Anugrah Sembiring",
];

const daftarBulan = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MEI",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OKT",
  "NOV",
  "DEC",
];

function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num.toString();
}

function UangKas({ isBendahara, setIsBendahara }) {
  const [kasData, setKasData] = useState({});
  const [pengeluaran, setPengeluaran] = useState([]);
  const [password, setPassword] = useState("");
  const [pendingBayar, setPendingBayar] = useState(null);
  const [animateTotal, setAnimateTotal] = useState(false);
  const [formPengeluaran, setFormPengeluaran] = useState({
    nama: "",
    jumlah: "",
  });

  useEffect(() => {
    fetchKas();
    fetchPengeluaran();
  }, []);

  const fetchKas = async () => {
    try {
      const res = await axios.get(API_URL);
      const formatted = {};
      res.data.forEach((item) => {
        if (!formatted[item.nama]) formatted[item.nama] = {};
        formatted[item.nama][item.bulan] = {
          jumlah: item.jumlah,
          tanggal: item.tanggal,
        };
      });
      setKasData(formatted);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchPengeluaran = async () => {
    try {
      const res = await axios.get(PENGELUARAN_URL);
      setPengeluaran(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogin = () => {
    if (password === "bendahara123") {
      setIsBendahara(true);
    } else {
      alert("Password salah!");
    }
    setPassword("");
  };

  const toggleBayar = async (nama, bulan, sudahBayar) => {
    if (!isBendahara) return;

    const konfirmasi = window.confirm(
      sudahBayar
        ? `Batalkan pembayaran ${nama} untuk bulan ${bulan}?`
        : `Konfirmasi ${nama} sudah bayar bulan ${bulan}?`
    );
    if (!konfirmasi) return;

    try {
      await axios.post(`${API_URL}/toggle`, { nama, bulan });
      await fetchKas();
      setAnimateTotal(true);
      setTimeout(() => setAnimateTotal(false), 500);
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  const handleTambahPengeluaran = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(PENGELUARAN_URL, formPengeluaran);
      setPengeluaran([...pengeluaran, res.data]);
      setFormPengeluaran({ nama: "", jumlah: "" });
    } catch (err) {
      alert("Gagal menambah pengeluaran");
    }
  };

  const totalPerBulan = (bulan) => {
    let total = 0;
    Object.values(kasData).forEach((bulanData) => {
      if (bulanData[bulan]) total += bulanData[bulan].jumlah;
    });
    return total;
  };

  const totalKeseluruhan = () => {
    let total = 0;
    Object.values(kasData).forEach((bulanData) => {
      Object.values(bulanData).forEach((entry) => {
        total += entry.jumlah;
      });
    });
    return total - pengeluaran.reduce((sum, p) => sum + p.jumlah, 0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="uang-kas-container" style={{marginTop:"50px"}}>
        <h1 className="judul">📊 Uang Kas - IF D Siang</h1>

        {/* Login */}
        {!isBendahara && (
          <div className="login-bendahara">
            <p>Masukkan password bendahara:</p>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        )}

        {/* Rekap */}
        <div className="rekap-table-container">
          <div className={`total-keseluruhan ${animateTotal ? "pulse" : ""}`}>
            💰 Total Uang Kas Keseluruhan:{" "}
            <b>Rp {totalKeseluruhan().toLocaleString()}</b>
          </div>

          <table className="tabel-rekap">
            <thead>
              <tr>
                <th>Nama</th>
                {daftarBulan.map((b, i) => (
                  <th key={i} style={{textAlign:"center"}}>{b}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {namaMahasiswa.map((nama, i) => (
                <tr key={i}>
                  <td>{nama}</td>
                  {daftarBulan.map((bulan, j) => {
                    const sudahBayar = kasData[nama]?.[bulan];
                    return (
                      <td
                        key={j}
                        className={`cell ${sudahBayar ? "sudah" : "belum"}`}
                        onClick={() => toggleBayar(nama, bulan, sudahBayar)}
                      >
                        {sudahBayar ? <FaCheck className="icon"/> : <IoClose className="icon"/>}
                      </td>
                    );
                  })}
                </tr>
              ))}
              <tr className="total-row">
                <td>
                  <b>Total</b>
                </td>
                {daftarBulan.map((bulan, i) => (
                  <td key={i} style={{textAlign:"center"}}>
                    <b>{formatNumber(totalPerBulan(bulan))}</b>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Form Pengeluaran */}
        {isBendahara && (
          <div className="pengeluaran-form">
            <h2>Tambah Pengeluaran</h2>
            <form onSubmit={handleTambahPengeluaran}>
              <input
                type="text"
                placeholder="Nama Pengeluaran"
                value={formPengeluaran.nama}
                onChange={(e) =>
                  setFormPengeluaran({
                    ...formPengeluaran,
                    nama: e.target.value,
                  })
                }
              />
              <input
                type="number"
                placeholder="Jumlah"
                value={formPengeluaran.jumlah}
                onChange={(e) =>
                  setFormPengeluaran({
                    ...formPengeluaran,
                    jumlah: Number(e.target.value),
                  })
                }
              />
              <button type="submit">Tambah</button>
            </form>
          </div>
        )}

        {/* List Pengeluaran */}
        <div className="pengeluaran-list">
          <h2>📉 Daftar Pengeluaran</h2>
          <ul>
            {pengeluaran.map((p, i) => (
              <li key={i}>
                {p.nama} - Rp {p.jumlah.toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default UangKas;

