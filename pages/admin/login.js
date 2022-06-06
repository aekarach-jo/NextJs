import axios from "axios";
import React, { useState } from "react";
import { removeCookies, setCookies } from "cookies-next";
import { adminService } from "../../services";
import { useRouter } from "next/router";
import Link from "next/link";


export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mainDivStyle = {
    padding: "1em",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "560px",
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const credentials = { email, password };
    console.log(credentials);

    adminService.login(credentials).then(res => {
      console.log(res);
      if (res.data.message == "ok") {
        router.push("/")
      }
    })
  };

  const handleGetAll = () => {


    adminService.getAdminAll()
      .then(res => {
        // console.log(res);
      })

  }

  return (


    <div className="card align-center d-block mx-auto" style={mainDivStyle} >
      <form style={formStyle} onSubmit={(e) => handleLogin(e)}>
        <label htmlFor="email"> Email </label>
        <input
          className="form-control"
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password"> Password </label>
        <input
          className="form-control"
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-info" type="submit"> Log in </button>

      </form>
      <button className="btn btn-outline-info m-2" type="button" onClick={() => handleGetAll()}>get data</button>
      <Link href="/admin/register"><button className="btn btn-outline-warning m-2" type="button" >Register</button></Link>

    </div>
  );
}
