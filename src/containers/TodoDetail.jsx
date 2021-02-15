import { Link, useHistory, useParams } from "react-router-dom";

export default function TodoDetail() {
  const params = useParams();
  const history = useHistory();
  window.document.title = "Todo Detail";

  return (
    <div>
      Ini adalah halaman detail id {params.id}{" "}
      <Link to={`/todolist`}>Back</Link>
      <button onClick={() => history.push(`/todolist`)}>Pindah Halaman</button>
    </div>
  );
}
