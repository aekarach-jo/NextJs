import { adminService } from "services";
import Layout from "../components/Layout/Layout"
import React, { useState } from "react";
import { Table } from "reactstrap";





// const getAdminById = (id) => {
//     const [adminId, setIdAdmin] = useState("");
//     console.log(id);
//     return adminService.getAdminById(id).then(res => { console.log(res); })
//   }
async function showAdmin() {
  var [adminData, setAdminData] = useState(null);
  const ad = await adminService.getAdminAll().then(res => {
    adminData = res.data.user
    return adminData
  })
  console.log(ad);
  return (
    <Layout>
      <h1>About</h1>
      {/* <button onClick={() => getAll()} className="btn btn-info mb-3">Get admin data</button> <br />
      <input
        type="text"
        name="adminId"
        id="adminId"
        onChange={(e) => setIdAdmin(e.target.value)}
      />
      <button onClick={() => getAdminById(adminId)} className="btn btn-warning m-2">Get admin by Id</button> */}

      <Table
        hover
        responsive
      >
        {/* <ul>
          {ad.map((user) => (
            <li>{user.email}</li>
          ))}
        </ul> */}

      </Table>
    </Layout>
  )
}
export default showAdmin;