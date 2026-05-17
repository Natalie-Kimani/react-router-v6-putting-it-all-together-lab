import { useOutletContext, Link } from "react-router-dom";

export default function DirectorList() {
  const { directors } = useOutletContext();

  return (
    <div>
      {directors.map((d) => (
        <div key={d.id}>
          <Link to={`/directors/${d.id}`}>{d.name}</Link>
        </div>
      ))}
    </div>
  );
}