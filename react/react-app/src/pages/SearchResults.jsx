import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import MovieList from "../components/MovieList";
import { useSearchParams } from "react-router";
import Pagination from "../components/Pagination";

const apiUrl = "https://api.themoviedb.org/3";
const api_key = "d49167f160dcc2217588a3d480b91965";
const language = "en-US";

export default function SearchResults() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(" ");
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(0);

  const query = searchParams.get("query");
  const page = searchParams.get("page") || 1;

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${apiUrl}/search/movie?api_key=${api_key}&query=${query}&page=${page}&language=${language}`,
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (data.results) {
          setMovies(data.results);
          setTotalPages(data.total_pages);
        }
        setError("");
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    }

    getMovies();
  }, [searchParams]);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <MovieList movies={movies} title={`Search Results for "${query}"`} />
      <Pagination
        page={page}
        totalPages={totalPages}
        setSearchParams={setSearchParams}
        query={query}
      />
    </>
  );
}
