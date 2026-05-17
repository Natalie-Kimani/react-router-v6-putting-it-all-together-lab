import { useParams, Link, useOutletContext } from "react-router-dom";

export default function DirectorCard() {
  const { id } = useParams();
  const { directors } = useOutletContext();

  const director = directors.find((d) => d.id === id);

  if (!director) return <h1>Director not found</h1>;

  return (
    <div>
      <h2>{director.bio}</h2>

      {director.movies.map((movie) => (
        <Link
          key={movie.id}
          to={`/directors/${id}/movies/${movie.id}`}
        >
          {movie.title}
        </Link>
      ))}
    </div>
  );
}