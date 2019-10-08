import Layout from "../components/layout";
import Search from "../components/search";
import { useState } from "react";

const Index = () => {
  const [searchResults, setsearchResults] = useState({});

  const callbackfunction = async childData => {
    await setsearchResults(childData);
  };

  return (
    <Layout>
      <div>
        <Search parentCallback={callbackfunction} />
      </div>
      <p>{searchResults.length} results</p>
      {searchResults.matches !== undefined
        ? searchResults.matches.map(item, index => {
            <p>{item.product_title}</p>;
          })
        : null}
    </Layout>
  );
};

// Index.getInitialProps = async function() {
//   const res = ()
//   const data = await res.json();

//   console.log(data);
// };

export default Index;
