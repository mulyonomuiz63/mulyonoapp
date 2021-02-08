import { useEffect } from "react";

export default function Coba() {
  useEffect(() => {
    document.title = "Ini Mounting";
    return () => {
      document.title = "Udah di Mounting";
    };
  }, []);
  return <div> Ini adalah coba</div>;
}
