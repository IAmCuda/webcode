import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import MovieList from "../components/MovieList";

const apiUrl = "https://api.themoviedb.org/3";
const api_key = "d49167f160dcc2217588a3d480b91965";
const page = 1;
const language = "en-US";

export default function SimilarMovies({ movieId }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(" ");
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Yumuşak geçiş sağlar
    });
    async function getMovies() {
      try {
        const response = await fetch(
          `${apiUrl}/movie/${movieId}/similar?api_key=${api_key}&page=${page}&language=${language}`,
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (data.results) {
          setMovies(data.results);
        }
        setError("");
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    }

    getMovies();
  }, [movieId]);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return <MovieList movies={movies} title="Similar Movies" />;
}
