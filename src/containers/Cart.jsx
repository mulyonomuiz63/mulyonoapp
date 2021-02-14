import React, { useState } from "react";
import Detail from "../components/Detail";
import Header from "../components/Header";
export default function Cart() {
  const [cart, setCart] = useState(0);
  return (
    <div>
      <Header keranjang={cart} />
      <Detail tambahkeranjang={() => setCart((p) => p + 1)} />
    </div>
  );
}
