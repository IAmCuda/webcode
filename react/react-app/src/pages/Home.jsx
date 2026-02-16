import React from "react";
import SearchForm from "../components/SearchForm";
import Movies from "./Movies";

export default function Home() {
  return (
    <>
      <div id="home">
        <div className="img-overlay">
          <div className="container pt-5">
            <div className="row">
              <div className="col-12 col-lg-7 mx-auto text-center text-white">
                <h1 className="display-2">Welcome</h1>
                <p className="lead">
                  Discover and explore movies with our React application
                </p>
                <SearchForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Movies />
    </>
  );
}
