// pages/[id].js
import axios from "axios";
import Axios from "axios";
import Layout from "components/Layout/Layout";
import getConfig from "next/config";
import { useRouter } from "next/router";
import { adminService } from "services";


const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
// router is required for fallback: true
const Post = ({ post }) => {
  console.log(post)
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <h1>Post page</h1>
      <h2>{post.email}</h2>
      <p>{post.firstname}</p>
    </Layout>
  );
};

export default Post;

export const getStaticProps = async ({ params }) => {
  const {response} = await axios({
    url: `${baseUrl}/getById/${params.id}`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${adminService.adminValue}`
    }
  })
  const post = response;
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await axios({
    url: `${baseUrl}/getall`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${adminService.adminValue}`
    }
  })
  const paths = response.data.data.user.map((post) => ({ params: { id: post.id.toString() } }));
  return {
    paths,
    fallback: true,
  };
};


// // pages/[id].js
// import Axios from "axios";
// import { useRouter } from "next/router";

// // router is required for fallback: true
// const Post = ({ post }) => {
//   const router = useRouter();

//   if (router.isFallback) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Post page</h1>
//       <h2>{post.title}</h2>
//       <p>{post.body}</p>
//     </div>
//   );
// };

// export default Post;

// export const getStaticProps = async ({ params }) => {
//   const { data } = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
//   const post = data;
//   return {
//     props: {
//       post,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const { data } = await Axios.get("https://jsonplaceholder.typicode.com/posts");
//   const posts = data.slice(0, 10);
//   const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));
//   return {
//     paths,
//     fallback: true,
//   };
// };