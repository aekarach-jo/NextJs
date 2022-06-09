import axios from "axios"; 
import getConfig from "next/config"; 
import { Fragment } from "react";
import { adminService } from "services";
import Layout from "components/Layout/Layout";
import Link from "next/link";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;


const Index = (props) => {
  const posts = props.data;
  console.log(posts.user);
  if(!posts.user || posts.user.length == 0) {
    return (
      <h1>Error</h1>
    )
  }
  return (
    <Fragment>
          <Layout>
          <h1>Home</h1>
          <ol>
            {posts.user.map((post) => (
              <li key={post.id}>
                <Link href={{
                        pathname: "blogs/[id]",
                        query: { id: post.id },
                      }}>    
                      <a>{post.email}</a>
                </Link>
              </li>
            ))}
          </ol>
        </Layout> 
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const response = await axios({
      url:  `${baseUrl}/getall`,
      method: 'GET',
      headers: {
        Authorization : `Bearer ${adminService.adminValue}`
      }
   
  })
  return {
    props: { data: response.data.data }
  };
  // console.log(baseUrl);
  // console.log('ok');
  // const data = await adminService.getAdminAll();
  // return {
  //   props: { data : data.data},
  // };

  // console.log(data);
  // console.log('ok');
  // const res = await Axios.get("https://jsonplaceholder.typicode.com/posts");
  // console.log(res)
  // return {
  //   props: { data: res.data.slice(0, 10) },
  // };
};

export default Index;