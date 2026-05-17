import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function DirectorContainer() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("/directors")
      .then((res) => res.json())
      .then(setDirectors);
  }, []);

  return (
    <Outlet context={{ directors, setDirectors }} />
  );
}