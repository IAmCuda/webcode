export default function Movie({ movieObj }) {
  return (
    <div className="col">
      {movieObj.is_active && (
        <div className="card movie position-relative">
          <img
            src={"/img/" + movieObj.imagee}
            alt=""
            className="card-img-top"
          />
          <div className="card-body ">
            <h3 className="h5 card-title">{movieObj.titlee} </h3>
            <p className="card-text mb-0">{movieObj.descriptionn}</p>
            {movieObj.is_new && (
              <span className="position-absolute top-0 end-0 badge bg-danger m-1">
                New
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
