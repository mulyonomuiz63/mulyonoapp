import React from "react";
import "./App.css";
import Halaman from "./components/Halaman";

const Tugasprops = (props) => {
  return (
    <div>
      <h1>Kendaraan : {props.kendaraan}</h1>
    </div>
  );
};

const Motor = () => {
  return (
    <div>
      <div>Motor Honda</div>
      <div>Motor Yamaha</div>
      <div>Motor Suzuki</div>
    </div>
  );
};

const Mobil = () => {
  return (
    <div>
      <div>Mobil Honda</div>
      <div>Mobil Mitsubishi</div>
      <div>Mobil Tesla</div>
    </div>
  );
};

function App() {
  return (
    <div className="">
      <h1>Form Registrasi</h1>
      <Halaman />
      
      <Tugasprops kendaraan="Motor"/>
      <Motor />
      <Tugasprops kendaraan="Mobil"/>
      <Mobil />
    </div>
  );
}

export default App;
