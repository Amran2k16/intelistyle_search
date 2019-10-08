import Layout from "../components/layout";
// import Search from "../components/search";
// import data from "../test.json";

const data = JSON.parse()

function data_loader() {}

const Index = () => {
  console.log(data[0]);

  return (
    <Layout>
      <div>This is the content. It comes from the children</div>
      {/* {data.map(item => {
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
