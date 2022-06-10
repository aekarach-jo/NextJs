import { adminService } from "services";
import Layout from "../components/Layout/Layout"
import React, { useState } from "react";
import { Table } from "reactstrap";

const showAdmin = (props) => {

  console.log(props.data.user);
  const adminObj = props.data.user;
  return (
    <Layout>
      <h1>About</h1>

      <Table
        hover
        responsive
      >
        <ul>
          {adminObj.map((user) => (
            <li>{user.email}</li>
          ))}
        </ul>

      </Table>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const ad = await adminService.getAdminAll()
  // console.log(ad.data)

  return {
    props: { data: ad.data }
  };
};

export default showAdmin;