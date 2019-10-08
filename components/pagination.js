import React from "react";
import Router from "next/router";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  console.log("Posts per page: " + postsPerPage);
  console.log("Total posts: " + totalPosts);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
    if (pageNumbers.length == 25) {
      break;
    }
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a
              onClick={e => {
                Router.push("/").then(() => window.scrollTo(0, 0));
                paginate(number);
              }}
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
