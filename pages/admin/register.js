import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { adminService } from "../../services";


export default function Register() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");


    const handleRegister = async (e) => {
        e.preventDefault();

        const credentials = { firstname, lastname, email, password };
        console.log(credentials);
        await Swal.fire({
            title: 'ยืนยันการสมัคร?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'ยืนยัน',
            denyButtonText: `ยกเลิก`,
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('ok');
                adminService.create(credentials)
            } else if (result.isDenied) { }
        })


    }
    return (
        <div className="col-md-6 offset-md-3 mt-5">
            <div className="card col-md-6 offset-md-3 mt-5">
                <h4 className="card-header">Regsiter</h4>
                <div className="card-body">
                    <form onSubmit={(e) => handleRegister(e)}>
                        <label htmlFor="firstname">Firstname</label>
                        <input
                            className="form-control"
                            type="text"
                            name="firstname"
                            id="firstname"
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                        <label htmlFor="lastname"> Lastname </label>
                        <input
                            className="form-control"
                            type="text"
                            name="lastname"
                            id="lastname"
                            onChange={(e) => setLastname(e.target.value)}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            className="form-control"
                            type="text"
                            name="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="password"> Password </label>
                        <input
                            className="form-control"
                            type="text"
                            name="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="row">
                            <div className="col-6">
                                <Link href="/admin/login">
                                    <button className="offset-md-1 mt-3 btn btn-outline-danger"> back to login </button>
                                </Link>
                            </div>
                            <div className="col-6">
                                <button className="offset-md-6 mt-3 btn btn-outline-success"> Register </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
