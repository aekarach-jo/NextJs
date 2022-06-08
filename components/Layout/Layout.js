import { useRouter } from "next/router";
import { useEffect } from "react";
import { adminService } from "services";
import Footer from "./Footer";
import Header from "./Header";
// import Sidebar from "./Layout/Sidebar";



function Layout(props) {
    const router = useRouter();

    useEffect(() => {
        // redirect to home if already logged in
        if (adminService.userValue) {
            router.push('/');
        }
    }, []);

    return (
        <div>
            {/* <Sidebar /> */}
            <Header />
            {props.children}
            <Footer />
        </div>)
}

export default Layout