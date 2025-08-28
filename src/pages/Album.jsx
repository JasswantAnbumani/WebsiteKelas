import "../styles/Album.css";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Album = () => {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [preview, setPreview] = useState(null);

  // ✅ Login state
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const fetchAlbums = async () => {
    const res = await axios.get("https://websitekelas-server.onrender.com/albums");
    setAlbums(res.data);
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  const deleteAlbum = async (id) => {
    if (!loggedIn) {
      alert("⚠️ Harus login untuk hapus album!");
      return;
    }
    if (!window.confirm("Yakin mau hapus album ini?")) return;

    await axios.delete(`https://websitekelas-server.onrender.com/albums/${id}`);
    fetchAlbums();
    if (selectedAlbum && selectedAlbum._id === id) {
      setSelectedAlbum(null);
      setPreview(null);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!loggedIn) {
      alert("⚠️ Harus login dulu untuk upload album!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    if (cover) formData.append("cover", cover);
    for (let i = 0; i < photos.length; i++) {
      formData.append("photos", photos[i]);
    }

    await axios.post("https://websitekelas-server.onrender.com/upload-album", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setTitle("");
    setCover(null);
    setPhotos([]);
    fetchAlbums();
  };

  // ✅ Converter buffer ke base64
  const toBase64 = (bufferObj, type) => {
    if (!bufferObj || !bufferObj.data) return null;
    const bytes = new Uint8Array(bufferObj.data.data);
    let binary = "";
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return `data:${type};base64,${btoa(binary)}`;
  };

  const openAlbum = (album) => {
    setSelectedAlbum(album);
    setPreview(
      album.cover ? toBase64(album.cover, album.cover.contentType) : null
    );
  };

  const closeAlbum = () => {
    setSelectedAlbum(null);
    setPreview(null);
  };

  // ✅ Login handler
  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = loginData;
    if (username === "admin" && password === "12345") {
      setLoggedIn(true);
      alert("✅ Login sukses, sekarang bisa upload!");
    } else {
      alert("❌ Username atau password salah");
    }
  };

  return (
    <div className="album-container">
      {/* Upload form hanya tampil kalau login */}
      {loggedIn && (
        <form onSubmit={handleUpload} className="upload-form">
          <input
            type="text"
            placeholder="Album Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label>Cover:</label>
          <input type="file" onChange={(e) => setCover(e.target.files[0])} />
          <label>Photos:</label>
          <input
            type="file"
            multiple
            onChange={(e) => setPhotos(Array.from(e.target.files))}
          />
          <button type="submit">Upload Album</button>
        </form>
      )}

      <h3
        style={{
          backgroundColor: "#222222",
          borderRadius: "20px",
          padding: "10px 20px 10px 20px",
        }}
      >
        📸 Albums
      </h3>
      <div className="albums">
        {albums.map((album, i) => (
          <div key={i} className="album-card">
            <div onClick={() => openAlbum(album)}>
              {album.cover ? (
                <img
                  src={toBase64(album.cover, album.cover.contentType)}
                  alt="cover"
                />
              ) : (
                <div className="no-cover">No Cover</div>
              )}
              <p>{album.title}</p>
            </div>

            {/* Tombol hapus hanya muncul kalau login */}
            {loggedIn && (
              <button
                className="delete-btn"
                onClick={() => deleteAlbum(album._id)}
              >
                ❌
              </button>
            )}
          </div>
        ))}
      </div>

      {selectedAlbum && (
        <div className="album-fullscreen">
          <button className="close-btn" onClick={closeAlbum}>
            ✖
          </button>
          <div className="album-left">
            {preview && (
              <img src={preview} alt="preview" className="album-preview" />
            )}
          </div>
          <div className="album-right">
            <h3>{selectedAlbum.title}</h3>
            <div className="thumbnails">
              {selectedAlbum.photos.map((photo, i) => (
                <img
                  key={i}
                  src={toBase64(photo, photo.contentType)}
                  alt={`thumb-${i}`}
                  className={`thumb ${
                    preview === toBase64(photo, photo.contentType)
                      ? "active"
                      : ""
                  }`}
                  onClick={() => setPreview(toBase64(photo, photo.contentType))}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Login form selalu di bawah */}
      {!loggedIn && (
        <form onSubmit={handleLogin} className="login-form">
          <h3>🔐 Login untuk upload</h3>
          
          <input
            type="text"
            placeholder="Username"
            value={loginData.username}
            onChange={(e) =>
              setLoginData({ ...loginData, username: e.target.value })
            }
          />  
          <input
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Album;
