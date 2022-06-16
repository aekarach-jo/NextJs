import axios from "axios";
import React, { useState } from "react";
import { removeCookies, setCookies } from "cookies-next";
import { useRouter } from "next/router";
import Link from "next/link";
import { adminService } from "services";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleLogin = (e) => {
    e.preventDefault();
    const credentials = { email, password };
    console.log(credentials);

    return adminService.login(credentials).then((res) => {
      location.href = '/'
    })
  };


  return (
    <div className="col-md-6 offset-md-3 mt-5">
      <div className="card col-md-6 offset-md-3 mt-5">
        <h4 className="card-header">Login</h4>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email"> Email </label>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                // value="admin@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password"> Password </label>
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                // value="admin"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="row mt-3">
              <div className="col-6">
                <Link href="/admin/register">
                  <button type="button" className="btn btn-outline-warning d-block mx-auto">Register</button>
                </Link>
              </div>
              <div className="col-6">
                <button type="submit" className="btn btn-outline-success d-block mx-auto">Login</button>
              </div>
            </div>
          </form>
          {/* <button className="btn btn-outline-info m-2" type="button" onClick={() => handleGetAll()}>get data</button> */}
        </div>
      </div>
    </div>
  );
}
