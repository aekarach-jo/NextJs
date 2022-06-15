import Link from "next/link";
import { Fragment } from "react";
import Swal from 'sweetalert2'
import { adminService } from "../../services";

const style = {
    // backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '10px 10px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
}

const handleLogOut = async () => {
    await Swal.fire({
        title: 'ออกจากระบบหรือไม่?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'ยืนยัน',
        denyButtonText: `ยกเลิก`,
    }).then((result) => {
        if (result.isConfirmed) {
            adminService.signout()
        } else if (result.isDenied) { }
    })
};


export default function Header() {
    return (
        <>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark rounded-bottom" >
            <div className="container-fluid">
                <a className="navbar-brand" >Simddee</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link href="/">
                                <p style={style}>Home</p>
                            </Link>
                            {/* <Link href="/about">
                                <a style={style}>About</a>
                            </Link>
                            <Link href="/hello">
                                <a style={style}>Hello</a>
                            </Link> */}
                            <Link href="/blogs/">
                                <p style={style}>Blogs</p>
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <Link href="admin/register"><button className="btn btn-outline-secondary m-2" type="button" >Register</button></Link>
                        <Link href="admin/login"><button className="btn btn-outline-success m-2" type="button">Login</button></Link>
                        <button className="btn btn-outline-danger m-2" type="button" onClick={() => handleLogOut()}>Logout</button>
                    </form>
                </div>
            </div>
        </nav>
    </>
    )
}