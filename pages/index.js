import Layout from "../components/layout";
import Search from "../components/search";
import isEmpty from "../components/isempty";
import { useState } from "react";
import Card from "../components/card";
import CardDisplay from "../components/card";
import Pagination from "../components/pagination";
// import Spinner from "../components/spinner";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: {},
      searched: false,
      isLoading: false,
      postsPerPage: 20,
      currentPage: 1
    };
  }

  callbackfunction(childData) {
    this.setState({ searchResults: {} });
    this.setState({ searchResults: childData, searched: true });
    this.setState({ currentPage: 1 });
  }

  setLoading(childData) {
    this.setState({ isLoading: childData });
  }

  render() {
    const {
      searched,
      searchResults,
      isLoading,
      currentPage,
      postsPerPage
    } = this.state;

    let numberOfResults;

    console.log(searchResults);
    console.log(!isEmpty(searchResults));

    if (searched && !isLoading) {
      if (!isEmpty(searchResults)) {
        if (searchResults.length < postsPerPage) {
          numberOfResults = (
            <p>
              Displaying {Math.min(searchResults.length, postsPerPage)} of{" "}
              {searchResults.length} results found
            </p>
          );
        } else {
          numberOfResults = (
            // <p>
            //   Displaying {Math.min(searchResults.length, postsPerPage)} of{" "}
            //   {searchResults.length} results found
            // </p>
            <p>
              Displaying items {currentPage * postsPerPage - postsPerPage} -{" "}
              {currentPage * postsPerPage} of {searchResults.length} results
              found
            </p>
          );
        }
      }
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    let currentPosts;
    if (!isEmpty(searchResults)) {
      currentPosts = searchResults.matches.slice(
        indexOfFirstPost,
        indexOfLastPost
      );
    }

    // Change page
    const paginate = pageNumber => {
      this.setState({ currentPage: pageNumber });
    };

    return (
      <Layout>
        <div>
          <Search
            setLoading={this.setLoading.bind(this)}
            parentCallback={this.callbackfunction.bind(this)}
          />
        </div>
        {numberOfResults}
        {/* {console.log("current posts " + currentPosts)} */}
        <CardDisplay data={currentPosts} loading={isLoading} />
        {!isLoading ? (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={searchResults.length}
            paginate={paginate}
          />
        ) : null}

        {/* {this.state.isLoading ? <h1>Loading!</h1> : null} */}

        {/* <div className="row justify-content-between"></div> */}
      </Layout>
    );
  }
}

export default Index;
