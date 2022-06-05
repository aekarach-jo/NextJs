import axios from "axios";
import React, { useState } from "react";
import { adminService } from "../../services";


export default function Register() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");


    const handleRegister = async (e) => {
        e.preventDefault();

        const credentials = {firstname, lastname , email, password };
        console.log(credentials);

        adminService.register(credentials)

    }
    return (
        <div>
            <div className="container ">
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
                    <button className="btn btn-outline-success"> Register </button>
                </form>
            </div>
        </div>
    );
}
