import { useRouter } from 'next/router'
import Layout from '../components/Layout'

export async function getStaticProps() {
    const res = await fetch(`http://192.168.1.51:3000/api/admin/getpermission`)
    const posts = await res.json()
    console.log(res);
    return  {
        props : {
            
        }
    }
}

// const Hello = (props) => {
//     const router = useRouter();
//     const query = router.query;
//     console.log(query)
//     return (
//         <Layout>
//             <h1>หวักลี {query.name}</h1>
//         </Layout>
//     );
// }

export default getStaticProps;