import Head from "next/head";
import Layout from "../../components/Layout";
import MainLayout from "../../components/MainLayout";
import Header from "../../components/Header";
import { unsetToken } from "../../library/auth";
import Router from "next/router";

const Admin = () => {
  const logout = () => {
    unsetToken();
    Router.push("/");
  };

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="Admin page" content="Admin page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header header={"Admin"} />
        <MainLayout>
          <button onClick={logout} className="btn btn-wide">
            Logout
          </button>
        </MainLayout>
      </Layout>
    </>
  );
};
export default Admin;
