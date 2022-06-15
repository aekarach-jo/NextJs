import { Fragment, useState } from "react";
import { adminService } from "services";
import Layout from "components/Layout/Layout";
import Link from "next/link";
import Styles from "../../styles/adminDetail.module.css";
import { Modal } from "reactstrap";
import AdminTable from "components/AdminComponent/table/AdminTable";

const ShowAdminData = (props) => {
  const posts = props.data;

  return (
    <Fragment>
      <Layout>
        <AdminTable adminObj={posts}/>
      </Layout>
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const data = await adminService.getAdminAll();
  return {
    props: { data: data.data },
  };
};

export default ShowAdminData;
