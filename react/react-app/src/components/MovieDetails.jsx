import { use, useEffect, useState } from "react";
import Loading from "./Loading";

const api_key = "d49167f160dcc2217588a3d480b91965";
const page = 1;
const query = "avengers";
const language = "en-US";

export default function MovieDetails({ movieObj, onClose }) {
  const [loadedMovie, setLoadedMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovieDetails() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieObj.id}?api_key=${api_key}&language=${language}&append_to_response=credits`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (data) {
          setLoadedMovie(data);
        }
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    getMovieDetails();
  }, [movieObj.id]);

  return (
    <div className="container my-3">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h2 className="title h5 mb-0">Movie Details</h2>
          <button className="btn btn-danger btn-sm" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="card-body">
          <div className="row">
            <img
              src={
                "https://image.tmdb.org/t/p/original/" + movieObj.backdrop_path
              }
              alt=""
              className="img-fluid rounded"
            />
            <h3 className="display-6 fw-bold">{movieObj.title}</h3>
            <p className="card-text fs-5">{movieObj.overview}</p>
            <p>
              <strong>Release Date:</strong> {movieObj.release_date}
            </p>
            <p>
              {" "}
              <strong>Rating:</strong> {movieObj.vote_average}
            </p>
            {loading && <Loading />}
            {loadedMovie && (
              <>
                <p>
                  <strong>Runtime:</strong> {loadedMovie.runtime} minutes
                </p>
                <p>
                  <strong>Country:</strong>{" "}
                  {loadedMovie.production_countries[0]?.name || "N/A"}
                </p>
                <p>
                  <strong>Production:</strong>{" "}
                  {loadedMovie.production_companies
                    .map((c) => c.name)
                    .join(", ")}
                </p>
                <p>
                  {" "}
                  <strong>Genres:</strong>{" "}
                  <ul className="list-unstyled d-flex flex-wrap">
                    {loadedMovie.genres.map((genre) => (
                      <li key={genre.id} className="badge bg-primary m-1 p-2">
                        {genre.name}
                      </li>
                    ))}
                  </ul>
                </p>
                <p>
                  <strong>Director:</strong>{" "}
                  {loadedMovie.credits.crew[0]?.name || "N/A"}
                </p>
                <div className="card card-body">
                  <p>
                    {" "}
                    <strong>Cast:</strong>{" "}
                    <div className="row g-3">
                      {loadedMovie.credits.cast.slice(0, 6).map((actor) => (
                        <div className="col-md-2" key={actor.id}>
                          <img
                            src={
                              "https://image.tmdb.org/t/p/original/" +
                              actor.profile_path
                            }
                            alt={actor.name}
                            className="img-fluid rounded"
                          />
                          <p className="text-center">{actor.name}</p>
                        </div>
                      ))}
                    </div>
                  </p>
                  <p>
                    <strong>Producer:</strong>{" "}
                    {loadedMovie.credits.crew
                      .filter((c) => c.job === "Producer")
                      .map((p) => p.name)
                      .join(", ") || "N/A"}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
