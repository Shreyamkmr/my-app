import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "tpL0ni8-0kFjacVM7S_hvhbLKaDfayGR73wZ9bi_KhQ",
});
export default function SearchPhotos() {

  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);


  const searchPhotos = async (e) => {
    e.preventDefault();

    unsplash.search
      .photos(query)
      .then(toJson)
      .then((json) => {
        // console.log(json);
        setPics(json.results);
      });

  };

  return (
    <>
      <form className="form" onSubmit={searchPhotos}>
        {" "}
        <label className="label" htmlFor="query">
          {" "}
          
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Search for photos`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          🔍 
        </button>
      </form>

      <div className="card-list">
        {pics.map((pic) => (
          <div className="card" key={pic.id}>
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.full}
              width="50%"
              height="50%"
            ></img>
          </div>
        ))}{" "}
      </div>
    </>
  );
}
