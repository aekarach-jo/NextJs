import axios from "axios";
import Layout from "components/Layout/Layout";
import { getCookie } from "cookies-next";
import getConfig from "next/config";
import { useRouter } from "next/router";
import { adminService } from "services";
const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
// const access_token = getCookie("access_token");
// console.log(access_token);
const Post = ({ adminData }) => {
  console.log(adminData)
  const router = useRouter();
  
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  
  return (
    <Layout>
      <h1>Post page</h1>
      <h2>{adminData.data.user.email}</h2>
      <p>{adminData.data.user.firstname}</p>
    </Layout>
  );
};

export default Post;


export async function getServerSideProps(context) {
  // console.log("------------------------",context.req.headers.cookie);
  const cookie = context.req.headers.cookie
  const token = cookie.split("access_token=",1)
  console.log(token);
  
  // console.log('access-token    : ', access_token)
  return {
    props : { }
  }
}
// export const getStaticProps = async ({ params } ) => {
//   console.log('-------------------------------------props---------------------------------------');
//   // console.log('props', params.id);
//   console.log('access-token    : ', access_token)
//   // console.log("admin-token -------", adminService.adminValue.token);
//   const adminById = await fetch( `${baseUrl}/getById/${params.id}`, {
//     method : 'GET',
//     // headers: { Authorization: `Bearer ${getCookie('access_token')}` }
//     headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImF0IjoxNjU0OTM1MzUzODM2LCJpYXQiOjE2NTQ5MzUzNTMsImV4cCI6MTY1NTAyMTc1M30.tLRUAQRYe9U4Cnh2we-SW1FUWB2RxgeN8RdYzkHPuWU` }
// })
//   console.log("adminId",adminById)
//   const adminData = await adminById.json()
  
//   return {
//     props: { adminData, }
//   };
// }

// export const getStaticPaths = async () => {
//   console.log('-------------------------------------path---------------------------------------');

//   const adminData = await adminService.getAdminAll()
//   // console.log(adminData.data.user)
//   const posts = adminData.data.user.slice(0, 10);
//   const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));
//   // console.log(paths);
//   return {
//     paths,
//     fallback: true,
//   };
// };


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