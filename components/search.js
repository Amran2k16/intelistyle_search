import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";

const Search = props => {
  const [search, setsearch] = useState("");
  const [message, setmessage] = useState("");
  // useEffect(() => {
  //   searchEvent();
  // }, []);

  const searchSubmit = async e => {
    if (e != null) {
      e.preventDefault();
    }
    if (search.trim().length == 0) {
      setmessage("Please fill in the field");
      window.setTimeout(() => {
        setmessage("");
      }, 1000);
    } else if (search.trim().length < 3) {
      setmessage("Please enter at least 3 characters");
      window.setTimeout(() => {
        setmessage("");
      }, 1000);
    } else {
      // show loading icon
      props.setLoading(true);
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
      props.setLoading(false);
      setsearch("");
    }
  };

  return (
    <form onSubmit={searchSubmit} className="my-lg-0 mt-2">
      <div className="form-group row p-2">
        <input
          className="form-control mr-sm-2 col-10"
          type="text"
          value={search}
          onChange={e => setsearch(e.target.value)}
          placeholder="Search"
        />
        <button
          className="btn btn-primary my-2 my-sm-0 float-right"
          type="submit"
        >
          Search
        </button>
        <p style={{ color: "red" }}>{message}</p>
      </div>
    </form>
  );
};

export default Search;
