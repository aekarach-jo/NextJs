


import Layout from "components/Layout/Layout";
import { fetchWrapper } from "helpers";
import Router from "next/router";
import { useEffect } from "react";
import { adminService } from "services";


const Index = () => (

    // useEffect(() => {
    //     if (adminService.userValue) {
    //         adminService.getpermission().then(res => { 
    //             console.log(res);})
    //     }
    //     }, []),
    
    <Layout>
        <h1>HOME</h1>
    </Layout>
)

export default Index