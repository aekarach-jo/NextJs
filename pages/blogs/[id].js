import { userRouter } from 'next/router'
import Layout from '../../components/Layout/Layout';

function Post({ post }) {
    // Render post...
  }
  
  export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
  
    const paths = posts.map((post) => ({
      params: { id: post.id },
    }))
  
    return { paths, fallback: false }
  }
  
  export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts${params.id}`)
    const post = await res.json()
      return { props: { post } }
  }
  
  export default Post

// const blog = (props) => {
//     const router = userRouter();
//     const query = router.query;
//     console.log(query);
//     return (
//         <Layout>
//             <h1>ขอไอดีโหน่ยยยย {query.name}</h1>
//         </Layout>
//     )
// }

// export async function getStaticProps() {
//     return getSearchStaticProps(context)
//   }
  

// export async function getStaticPaths() {
//     return {
//         paths: [
//             { params: {id: '1'}}
//         ],
//         fallback: true
//     }
// }