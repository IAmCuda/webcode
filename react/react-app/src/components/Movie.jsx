import { Link } from "react-router";

export default function Movie({ movieObj }) {
  return (
    <div className="col">
      <div className="card movie position-relative h-100">
        <Link to={"/movies/" + movieObj.id}>
          <img
            src={"https://image.tmdb.org/t/p/original/" + movieObj.poster_path}
            alt=""
            className="card-img-top"
          />
        </Link>
        <div className="card-body ">
          <h3 className="h6 card-title">{movieObj.title} </h3>
        </div>
      </div>
    </div>
  );
}
