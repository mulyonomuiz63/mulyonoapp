import { useEffect, useState } from "react";
const PapanNilai = () => {
  const [skor, setSkor] = useState(100);
  useEffect(() => {
    //MONTING
    setSkor(100);
    //UNMONTING
    return () => {
      console.log('Halo Dunia')
    }
  }, []);
  return (
    <div>
      <div>Skor {skor}</div>
      <button
        onClick={() => {
          setSkor(skor + 1);
        }}
      >
        Tambah
      </button>
      <button>Kurang</button>
      <button onClick={() => setSkor(0)}>Inisialisasi</button>
    </div>
  );
};
export default PapanNilai;
