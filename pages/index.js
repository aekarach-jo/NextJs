import Router from "next/router";
import Header from "../components/Header";
import Layout from "../components/Layout";

const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    Router.push({
        pathname : '/hello',
        query: { name : name}
    })
}

const handleSubBlogs = (e) => {
    e.preventDefault();
    const name = e.target.name.value
    Router.push({
        pathname: 'blogs/',
        query: {name : name}
    })
}




const Index = () => (
    <Layout>
        <h1>Index</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            <span>ชื่อ :</span>
            <input type="text" name="name"/>
            <button type="submit">ลุย</button>
        </form>

        <h1>blogs</h1>
        <form onSubmit={(e) => handleSubBlogs(e)}>
            <span>ชื่อ :</span>
            <input type="text" name="name" />
            <button type="submit">จ้วด</button>
        </form>
    </Layout>
)

export default Index