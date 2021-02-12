import React, { useState } from "react";
import "./BelajarForm.style.css";

const Halaman = () => {
  const [nama, setNama] = useState("nama");
  const [nim, setNim] = useState("nim");
  const [tanggal, setTanggal] = useState("");
  const [alamat, setAlamat] = useState("Alamat");
  const [jeniskelamin, setJeniskelamin] = useState("");

  const [username, setUsername] = useState("username");
  const [email, setEmail] = useState("Email");
  const [password, setPassword] = useState("Password");
  const [ulangipassword, setUlangiPassword] = useState("Ulangi Password");

  const [resolusi, setResolusi] = useState("");

  return (
    <div className="belajar-form">
      <h1>Form Registrasi</h1>
      <div className="biodata">
        <div className="biodata-header">Biodata</div>

        <div className="biodata-wrap">
          <div className="biodata-title">Nama:</div>
          <input
            type="text"
            name="nama"
            value={nama}
            onChange={(e) => {
              setNama(e.target.value);
            }}
          />
        </div>

        <div className="biodata-wrap">
          <div className="biodata-title">NIM:</div>
          <input
            type="text"
            name="nim"
            value={nim}
            onChange={(e) => {
              setNim(e.target.value);
            }}
          />
        </div>

        <div className="biodata-wrap">
          <div className="biodata-title">Tanggal:</div>
          <input
            type="date"
            name="tanggalLahir"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
          />
        </div>
        <div className="biodata-wrap">
          <div className="biodata-title">Alamat:</div>
          <textarea
            name="alamat"
            id=""
            cols="30"
            rows="10"
            value={alamat}
            onChange={(e) => {
              setAlamat(e.target.value);
            }}
          ></textarea>
        </div>

        <div className="biodata-wrap">
          <div className="biodata-title">Jenis Kelamin:</div>
          <input
            type="radio"
            name="sex"
            value="l"
            checked={jeniskelamin === "l"}
            onChange={(e) => {
              setJeniskelamin(e.target.value);
            }}
          />
          <div>Laki-laki</div>
          <input
            type="radio"
            name="sex"
            value="p"
            checked={jeniskelamin === "p"}
            onChange={(e) => {
              setJeniskelamin(e.target.value);
            }}
          />
          <div>Perempuan</div>
        </div>
      </div>

      <div className="biodata">
        <div className="biodata-header">User Account</div>

        <div className="biodata-wrap">
          <div className="biodata-title">Username:</div>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div className="biodata-wrap">
          <div className="biodata-title">Email:</div>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="biodata-wrap">
          <div className="biodata-title">Password:</div>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="biodata-wrap">
          <div className="biodata-title">Ulangi Password:</div>
          <input
            type="password"
            name="ulangipassword"
            value={ulangipassword}
            onChange={(e) => {
              setUlangiPassword(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="resolusi">
        <div className="biodata-header">Resolusi Tahun Ini</div>
        <div className="resolusi-wrap">
          <input
            type="checkbox"
            name="html"
            value="html"
            checked={resolusi === "html"}
            onChange={(e) => {
              setResolusi(e.target.value);
            }}
          />
          <span>Menguasai HTML</span>
        </div>
        <div className="resolusi-wrap">
          <input
            type="checkbox"
            name="css"
            value="css"
            checked={resolusi === "css"}
            onChange={(e) => setResolusi(e.target.value)}
          />
          <span>Paham CSS</span>
        </div>
        <div className="resolusi-wrap">
          <input
            type="checkbox"
            name="reactjs"
            value="reactjs"
            checked={resolusi === "reactjs"}
            onChange={(e) => setResolusi(e.target.value)}
          />
          <span>Mastering Reactjs</span>
        </div>
      </div>
      <button style={{ margin: 20 }}>Kirim Data</button>
    </div>
  );
};

export default Halaman;
