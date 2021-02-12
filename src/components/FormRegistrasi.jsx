import React, { useState } from "react";
import "./BelajarForm.style.css";

export default function FormRegistrasi() {
  const [alamat, setAlamat] = useState("Ini ALamat");
  const [jeniskelamin, setJeniskelamin] = useState("l");
  const [resolusi, setResolusi] = useState("");

  return (
    <div className="belajar-form">
      <h1>Form Registrasi</h1>
      <div className="biodata">
        <div>Biodata</div>

        <div className="biodata-wrap">
          <div className="biodata-title">Nama:</div>
          <input type="text" name="nama" />
        </div>

        <div className="biodata-wrap">
          <div className="biodata-title">NIM:</div>
          <input type="text" name="nim" />
        </div>

        <div className="biodata-wrap">
          <div className="biodata-title">Tanggal:</div>
          <input type="date" name="tanggalLahir" />
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

      <div className="resolusi">
        <div>Resolusi Tahun Ini</div>
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
    </div>
  );
}
