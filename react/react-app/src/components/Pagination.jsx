export default function Pagination({
  page,
  totalPages,
  setSearchParams,
  query,
}) {
  return (
    <div className="container my-3">
      <div className="card card-body">
        <div className="d-flex justify-content-between align-items-center">
          <button
            onClick={() => setSearchParams({ query, page: Number(page) - 1 })}
            disabled={page <= 1}
            className="btn btn-warning"
          >
            Previous Page
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setSearchParams({ query, page: Number(page) + 1 })}
            disabled={page >= totalPages}
            className="btn btn-warning"
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
}
