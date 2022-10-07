import Head from "next/head";
import Layout from "../components/Layout";
import MainLayout from "../components/MainLayout";
import Card from "../components/Card";
import { BASE_URL } from "../constants/api";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home(props) {
  const items = props.posts;
  const [listOfPosts, setListOfPosts] = useState(items);
  const router = useRouter();

  const loadmore = async () => {
    const res = await fetch(`${BASE_URL}/posts?_limit=10&&_start=10`);
    const posts = await res.json();
    setListOfPosts((value) => [...value, ...posts]);
  };

  const makeHash = () => {
    console.log();
    router.push({
      hash: "loaded",
    });
  };

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="Homepage" content="Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <MainLayout>
          {listOfPosts.map((post) => {
            return <Card post={post} key={post.id} />;
          })}
          <button
            onClick={`${loadmore} ${makeHash}`}
            className="btn btn-wide mt-8"
          >
            Load more
          </button>
        </MainLayout>
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
