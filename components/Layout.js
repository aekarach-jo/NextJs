import { useRouter } from "next/router";
import { useEffect } from "react";
import { adminService } from "../services";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
    const router = useRouter();

    useEffect(() => {
        if (adminService.adminValue) {
            router.push('/')
        }
    }, [])
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>)
}

export default Layout