import { userRouter } from 'next/router'
import Layout from '../../components/Layout';

const blog = (props) => {
    const router = userRouter();
    const query = router.query;
    console.log(query);
    return (
        <Layout>
            <h1>ขอไอดีโหน่ยยยย {query.name}</h1>
        </Layout>
    )
}