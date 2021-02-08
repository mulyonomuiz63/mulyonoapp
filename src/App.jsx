import React,  {useState} from "react";
import "./App.css";
import PapanNilai from "./state/PapanNilai";
import Daytree from "./state/State";
import Coba from "./state/Coba";

function App() {
  const [tampil, setTampil] = useState(false);
  return (
    <div className="">
      <h2>State 1</h2>
      <Daytree />
      <h2>State 2 menggunakan useEffect monting</h2>
      <PapanNilai />

      {tampil && <Coba />}
      <button onClick={() => setTampil(true)}>Tampil</button>
      <button onClick={() => setTampil(false)}>Hidden</button>
    </div>
  );
}

export default App;
