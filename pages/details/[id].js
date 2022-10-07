import Head from "next/head";
import Layout from "../../components/Layout";
import MainLayout from "../../components/MainLayout";
import { BASE_URL } from "../../constants/api";

const Post = ({ post }) => {
  if (!post) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <Head>
        <title>Results</title>
        <meta name="Details page" content="Details page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <MainLayout>
          <div>{post.body}</div>
        </MainLayout>
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${BASE_URL}/posts?_page=1&_limit=10`);
  const posts = await res.json();
  const paths = posts.map((post) => {
    return { params: { id: post.id.toString() } };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const res = await fetch(`${BASE_URL}/posts/${context.params.id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default Post;
