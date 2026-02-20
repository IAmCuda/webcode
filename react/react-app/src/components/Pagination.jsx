import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Pagination({
  page,
  totalPages,
  setSearchParams,
  query,
}) {
  const { theme } = useContext(ThemeContext);
  const textColor = theme === "dark" ? "light" : "dark";

  return (
    <div className="container py-3">
      <div className="border border-body rounded p-3">
        <div className="d-flex justify-content-between align-items-center ">
          <button
            onClick={() => setSearchParams({ query, page: Number(page) - 1 })}
            disabled={page <= 1}
            className={`btn btn-outline-${textColor}`}
          >
            Previous Page
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setSearchParams({ query, page: Number(page) + 1 })}
            disabled={page >= totalPages}
            className={`btn btn-outline-${textColor}`}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
}
