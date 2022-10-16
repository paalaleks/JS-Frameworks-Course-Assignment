import Head from "next/head";
import Layout from "../../components/Layout";
import MainLayout from "../../components/MainLayout";
import Header from "../../components/Header";

const index = () => {
  return (
    <>
      <Head>
        <title>Favourites</title>
        <meta name="Favourites page" content="Favourites page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header header={"Favourites"} />
        <MainLayout>
          <h1>howdy</h1>
        </MainLayout>
      </Layout>
    </>
  );
};

export default index;
