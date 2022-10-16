import Head from "next/head";
import Layout from "../components/Layout";
import MainLayout from "../components/MainLayout";
import Header from "../components/Header";
import Card from "../components/Card";
import { useContext, useState, useEffect } from "react";
import PaginationContext from "../contexts/PaginationContext";
import { BASE_URL } from "../constants/api";
import { useRouter } from "next/router";

export default function Home() {
  const { loadmore, listOfPosts } = useContext(PaginationContext);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  /** Have some extra loading time to show spinner! Very fancy , I know. */

  const extraLoadmoreTime = () => {
    setLoading(true);
    setTimeout(() => {
      loadmore();
      setLoading(false);
    }, 1000);
  };

  /** Workaround if the page has been reloaded. The user then need to fetch data again at page load. */

  if (!listOfPosts) router.reload();
  if (!listOfPosts) return <button className="btn btn-square loading"></button>;

  /** Map items from localstorage and pass props to card component */

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="Homepage" content="Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header header={"Home"} />
        <MainLayout>
          {listOfPosts.map((post, index) => {
            return <Card post={post} key={index} />;
          })}
        </MainLayout>
        <div className="mx-auto flex justify-center item-center">
          {loading ? (
            <button className="btn loading btn-wide my-8 ">Load more</button>
          ) : (
            <button onClick={extraLoadmoreTime} className="btn btn-wide my-8 ">
              Load more
            </button>
          )}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${BASE_URL}/posts?_page=1&_limit=10`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
