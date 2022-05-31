import { useRouter } from 'next/router'
import Layout from '../../components/Layout';
import axios from 'axios';


const Blog = (props) => {
    const router = useRouter();
    const query = router.query;
    console.log(query)
    const getPermission = (e) => {
        e.preventDefault()
        axios.get(`http://192.168.1.51:3000/api/admin/getpermission`)
            .then(res => {
                console.log(res.data.data.permission);
            })
            .catch(err => {
                console.log(err);
            })
    }

   
    return (
        <Layout>
            <h1>Blogs {query.name}</h1>
            <button onClick={getPermission}>get User</button>

        </Layout>
    );
}

export default Blog