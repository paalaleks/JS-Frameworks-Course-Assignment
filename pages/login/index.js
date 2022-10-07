import Head from "next/head";
import Layout from "../../components/Layout";
import MainLayout from "../../components/MainLayout";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="Login page" content="Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <MainLayout>
          <h1>login</h1>
        </MainLayout>
      </Layout>
    </>
  );
};

export default Login;
