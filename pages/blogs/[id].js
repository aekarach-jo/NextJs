import Layout from "components/Layout/Layout";
import { useRouter } from "next/router";
import { adminService } from "services";

const Post = ({ adminData }) => {
  console.log(adminData)
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <h1>Post page</h1>
      <h2>{adminData.email}</h2>
      <p>{adminData.firstname}</p>
    </Layout>
  );
};

export default Post;

export const getStaticProps = async ({ params }) => {
  console.log('-------------------------------------props---------------------------------------');

  console.log('props', params.id);
  const adminById = await adminService.getAdminById(params.id)
  console.log("adminId",adminById)
  const adminData = adminById
  console.log(adminData); 
  
  return {
    props: {
      adminData,
    },
  };
}

export const getStaticPaths = async () => {
  console.log('-------------------------------------path---------------------------------------');

  const adminData = await adminService.getAdminAll()
  // console.log(adminData.data.user)
  const posts = adminData.data.user.slice(0, 10);
  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));
  console.log(paths);
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
  // const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));
//   return {
//     paths,
//     fallback: true,
//   };
// };