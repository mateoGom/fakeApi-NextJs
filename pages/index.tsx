import Layout from "../components/layout";
import Style from "../styles/Home.module.css";
import Head from 'next/head'
const index = () => {
  return (
    <Layout>
      <Head>
        <title>Index</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={Style.container}>
        <h1>Random users generator</h1>
      </div>
    </Layout>
  );
};

export default index;
