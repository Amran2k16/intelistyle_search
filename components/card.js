import React from "react";
import isEmpty from "./isempty";

const Card = props => {
  return (
    <div className="card col-12 col-sm-6 col-md-3">
      <div className="card-header">
        <h5>{props.title}</h5>
      </div>
      <img
        src={props.src}
        style={{ display: "block", maxWidth: "100%", height: "auto" }}
      ></img>
    </div>
  );
};

export default function CardDisplay({ data, loading }) {
  if (loading) {
    return <h2>Loading....</h2>;
  }

  console.log(data);

  return (
    <div className="mb-3 row">
      {!isEmpty(data)
        ? data.map(data => (
            <Card title={data.product_title} src={data.image_urls[0]} />
          ))
        : null}
    </div>
  );
}
