import Layout from "../components/layout";
import Search from "../components/search";
import { useState } from "react";

const Index = () => {
  const [searchResults, setsearchResults] = useState({});

  const callbackfunction = childData => {
    setsearchResults(childData);
  };

  return (
    // everything above happens before render / return is called...
    <Layout>
      <div>
        <Search parentCallback={callbackfunction} />
      </div>
      <p>
        {searchResults.length > 1
          ? `There were ${searchResults.length} results`
          : null}
      </p>
      {searchResults.length > 1 ? (
        searchResults.matches.map(item => <p>{item.product_title}</p>)
      ) : (
        <p>There were no results matching this</p>
      )}
    </Layout>
  );
};

// Index.getInitialProps = async function() {
//   const res = ()
//   const data = await res.json();

//   console.log(data);
// };

export default Index;
