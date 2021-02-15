import { useLocation } from "react-router-dom";

export default function TodoDetail() {
  const location = useLocation();
  window.document.title = "Todo Detail State";
  return <div>Ini adalah halaman detail id {location.state.id}</div>;
}
