import Head from "next/head";
import Layout from "../../components/Layout";
import MainLayout from "../../components/MainLayout";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="Contact page" content="Contact page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <MainLayout>
          <h1>Contact</h1>
        </MainLayout>
      </Layout>
    </>
  );
};

export default Contact;
