import React, { useState } from "react";

export default function BelajarForm() {
  const [username, setUsername] = useState("");
  const [alamat, setAlamat] = useState("");
  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="Masukan Username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        name="alamat"
        placeholder="Masukan Alamat"
        value={alamat}
        onChange={(e) => {
          setAlamat(e.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={()=>console.log("nama:", username, "alamat:", alamat)} >Login</button>
    </div>
  );
}
