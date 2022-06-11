import { Fragment } from "react";
import { adminService } from "services";
import Layout from "components/Layout/Layout";
import Link from "next/link";


const showAdmin = (props) => {
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
  const ad = await adminService.getAdminAll()
  // console.log(ad.data)
  console.log("-------------Get All--------------");
  return {
    props: { data: ad.data }
  };
};

export default showAdmin;