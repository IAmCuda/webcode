import Movie from "./Movie";

export default function MovieList({ movies, title }) {
  return (
    <div className="container py-3">
      <h2 className="mb-3 h4">{title}</h2>
      {movies.length == 0 ? (
        <div>Film Not Found</div>
      ) : (
        <div
          id="movie-list"
          className="row row-cols-3 row-cols-md-4 row-cols-lg-5 g-2"
        >
          {movies.map((m, index) => (
            <Movie key={index} movieObj={m} />
          ))}
        </div>
      )}
    </div>
  );
}
