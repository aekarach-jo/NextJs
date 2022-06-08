import { useRouter } from 'next/router'
import Layout from '../components/Layout/Layout'

function Permission({ users }) {
    // console.log(users);
    return (
        <Layout>
            <ul>
                {users.map((user) => (
                    <li>{user.username}</li>
                ))}
            </ul>
        </Layout>
    )
}

export async function getStaticProps() {
    console.log("getStaticProps Hello")
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await res.json()
    return {
        props: {
            users,
        },
        revalidate : 60
    }
}

//  Permission.getInitialProps  = async function (context) {
//     const res = await fetch(`http://192.168.1.51:3000/api/admin/getpermission`)
//     const show = await res.json()
//     console.log(show.data);
//     return {show}
//   }



export default Permission;