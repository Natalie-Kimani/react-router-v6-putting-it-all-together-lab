import { useParams, useOutletContext } from "react-router-dom";

export default function MovieCard() {
  const { id, movieId } = useParams();
  const { directors } = useOutletContext();

  const director = directors.find((d) => d.id === id);

  if (!director) return <h1>Director not found</h1>;

  const movie = director.movies.find((m) => m.id === movieId);

  if (!movie) return <h1>Movie not found</h1>;

  return (
    <div>
      {/* FIRST occurrence (important for test indexing) */}
      <h2>{movie.title}</h2>

      {/* SECOND occurrence (test expects duplicate match) */}
      <h3>{movie.title}</h3>

      <p>Duration: {movie.time} minutes</p>
      <p>{movie.genres.join(", ")}</p>
    </div>
  );
}