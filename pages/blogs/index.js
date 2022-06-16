import { Fragment } from "react";
import { adminService } from "services";
import Layout from "components/Layout/Layout";
import AdminTable from "components/AdminComponent/table/AdminTable";
import Progress from "components/AdminComponent/progress/Progress";

const ShowAdminData = (props) => {
  const posts = props.data;
  return (
    <Fragment>
        <Progress />
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
