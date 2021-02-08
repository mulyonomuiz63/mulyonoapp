import React, { useState } from "react";
const Daytree = () => {
  const [skor, setSkor] = useState(0);
  return (
    <div>
      <div>Skor {skor}</div>
      <button onClick={() => setSkor(skor + 1)}>Tambah Skor</button>
      <button onClick={() => setSkor(skor - 1)}>Kurang Skor</button>
      <button onClick={() => setSkor(100)}>Selesai</button>
    </div>
  );
};
export default Daytree;
