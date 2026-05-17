import { useNavigate, useParams, useOutletContext } from "react-router-dom";

export default function MovieForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { setDirectors } = useOutletContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      id: crypto.randomUUID(),
      title: e.target.title.value,
      time: 148,
      genres: ["Drama"],
    };

    setDirectors((prev) =>
      prev.map((d) =>
        d.id === id
          ? { ...d, movies: [...d.movies, newMovie] }
          : d
      )
    );

    navigate(`/directors/${id}/movies/${newMovie.id}`);
  };

  return (
    <div>
      <h1>Add New Movie</h1>

      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Movie title" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}