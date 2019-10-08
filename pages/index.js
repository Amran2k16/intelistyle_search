import Layout from "../components/layout";
import Search from "../components/search";
import { useState } from "react";
import { type } from "os";
const Index = () => {
  const [searchResults, setsearchResults] = useState({});

  const callbackfunction = childData => {
    setsearchResults(childData);
    // console.log(childData);
  };

  return (
    <Layout>
      <div>
        <Search parentCallback={callbackfunction} />
      </div>
      {console.log(searchResults)}

      {/* {searchResults.matches.map(item => {
        return <p>{item.brand}</p>;
      })} */}
    </Layout>
  );
};

// Index.getInitialProps = async function() {
//   const res = ()
//   const data = await res.json();

//   console.log(data);
// };

export default Index;
