import { useNavigate, useOutletContext } from "react-router-dom";

export default function DirectorForm() {
  const navigate = useNavigate();
  const { setDirectors } = useOutletContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDirector = {
      id: crypto.randomUUID(),
      name: e.target.name.value,
      bio: "Director added",
      movies: [],
    };

    setDirectors((prev) => [...prev, newDirector]);

    navigate(`/directors/${newDirector.id}`);
  };

  return (
    <div>
      <h1>Add New Director</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Director name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}