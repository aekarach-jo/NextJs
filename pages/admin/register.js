import Link from "next/link";
import React, { useState } from "react";
import { adminService, alertService } from "services";
import Swal from "sweetalert2";


export default function Register() {
    // const [firstname, setFirstname] = useState("");
    // const [lastname, setLastname] = useState("");
    // const [password, setPassword] = useState("");
    // const [email, setEmail] = useState("");
    // const credentials = { firstname, lastname, email, password };

    const handleRegister = async (e) => {
        let data = {
            firstname: document.querySelector('#firstname').value,
            lastname: document.querySelector('#lastname').value,
            password: document.querySelector('#password').value,
            email: document.querySelector('#email').value,
        }
        console.log(data);
        e.preventDefault();
        await Swal.fire({
            title: 'ยืนยันการสมัคร?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'ยืนยัน',
            denyButtonText: `ยกเลิก`,
        }).then((result) => {
            if (result.isConfirmed) {
                adminService.create(data).then(res => {
                    // alertService.error
                })
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
                        // onChange={(e) => setFirstname(e.target.value)}
                        />
                        <label htmlFor="lastname"> Lastname </label>
                        <input
                            className="form-control"
                            type="text"
                            name="lastname"
                            id="lastname"
                        // onChange={(e) => setLastname(e.target.value)}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            id="email"
                        // onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="password"> Password </label>
                        <input
                            className="form-control"
                            type="password"
                            name="password"
                            id="password"
                        // onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="row">
                            <div className="col-6">
                                <Link href="/admin/login">
                                    <button className="offset-md-1 mt-3 btn btn-outline-secondary"> back </button>
                                </Link>
                            </div>
                            <div className="col-6">
                                <button className="offset-md-3 mt-3 btn btn-outline-success"> Register </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
