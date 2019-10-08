import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";

const Search = props => {
  const [search, setsearch] = useState("");

  useEffect(() => {
    searchEvent();
  });

  const searchEvent = async e => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        search
      })
    })
      .then(console.log("Post request sent succesfully"))
      .catch(err =>
        console.log("Error has occured in the post function: " + err)
      );

    const matches = await response.json();
    props.parentCallback(matches);
  };

  return (
    <form onSubmit={searchEvent} className="my-lg-0 mt-2">
      <div className="form-group row p-2">
        <input
          className="form-control mr-sm-2 col-10"
          type="text"
          value={search}
          onChange={e => setsearch(e.target.value)}
          placeholder="Search"
        />
        <button
          className="btn btn-secondary my-2 my-sm-0 float-right"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
