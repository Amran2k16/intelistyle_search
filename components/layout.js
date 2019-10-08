import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

const Layout = props => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/lux/bootstrap.min.css"
        />
      </Head>
      <Header />
      <div className="container">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
