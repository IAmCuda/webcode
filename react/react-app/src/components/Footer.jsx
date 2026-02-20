import { use, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  const textColor = theme === "dark" ? "text-light" : "text-dark";

  return (
    <footer
      className={`bg-${theme} text-center ${textColor} border-top border-body`}
    >
      <div className="container p-2">
        <section className="mb-4">
          <a
            className={`btn btn-${theme} btn-floating m-2`}
            href="#!"
            role="button"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            className={`btn btn-${theme} btn-floating m-2`}
            href="#!"
            role="button"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            className={`btn btn-${theme} btn-floating m-2`}
            href="#!"
            role="button"
          >
            <i className="bi bi-google"></i>
          </a>
          <a
            className={`btn btn-${theme} btn-floating m-2`}
            href="#!"
            role="button"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            className={`btn btn-${theme} btn-floating m-2`}
            href="#!"
            role="button"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </section>
      </div>

      <div
        className={`text-center p-3 bg-${theme} border-top border-body ${theme === "light" ? "text-dark" : "text-white"}`}
      >
        © 2026 Copyright:
        <a
          className={`${theme === "light" ? "text-dark" : "text-white"}`}
          href="https://serhan.dev/"
        >
          serhan.dev
        </a>
      </div>
    </footer>
  );
}
