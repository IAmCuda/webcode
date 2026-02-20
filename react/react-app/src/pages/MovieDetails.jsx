import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import SimilarMovies from "./SimilarMovies";
import Actors from "../components/Actors";

const apiUrl = "https://api.themoviedb.org/3";
const api_key = "d49167f160dcc2217588a3d480b91965";
const language = "en-US";

export default function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetch(
          `${apiUrl}/movie/${id}?api_key=${api_key}&language=${language}&append_to_response=credits`,
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        setMovie(data);
        setError("");
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    }

    getMovie();
  }, [id]);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <div
        className="text-white position-relative rounded"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div className="img-overlay">
          <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <div className="row">
              <div className="col-md-3 d-none d-lg-block">
                <img
                  src={
                    "https://image.tmdb.org/t/p/original/" + movie.poster_path
                  }
                  alt={movie.title}
                  className="img-fluid rounded shadow img-thumbnail"
                />
              </div>
              <div className="col-md-9">
                <h1 className="display-4">{movie.title}</h1>
                <p>
                  {movie.release_date} <i className="bi bi-dot text-white"></i>
                  <span className="text-white">
                    {movie.genres.map((g) => g.name).join(", ")}
                  </span>
                  <i className="bi bi-dot text-white"></i>
                  {movie.runtime} minutes
                </p>
                <p>
                  <span className="badge bg-warning">
                    {movie.vote_average * 10}%
                  </span>
                </p>
                {movie.overview && (
                  <p className="lead">
                    <strong>Overview:</strong> {movie.overview}
                  </p>
                )}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
                  <p className="d-flex flex-column text-center">
                    <span>
                      {" "}
                      <strong>Production </strong>{" "}
                    </span>
                    {movie.production_companies[0]?.name || "N/A"}
                  </p>
                  <p className="d-flex flex-column text-center">
                    <span>
                      {" "}
                      <strong>Producer </strong>{" "}
                    </span>
                    {movie.credits.crew[1]?.name || "N/A"}{" "}
                  </p>
                  <p className="d-flex flex-column text-center">
                    <span>
                      {" "}
                      <strong>Director </strong>{" "}
                    </span>
                    {movie.credits.crew[0]?.name || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Actors actors={movie.credits.cast} />
      <SimilarMovies movieId={id} />
    </>
  );
}
