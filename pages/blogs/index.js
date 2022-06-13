import { Fragment } from "react";
import { adminService } from "services";
import Layout from "components/Layout/Layout";
import Link from "next/link";
import Styles from "../../styles/adminDetail.module.css"
import { getCookie } from "cookies-next";
import getConfig from "next/config";
import { render } from "react-dom";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;



const getIdEditAdmin = async (id) => {
  const getIdData = await adminService.getAdminById(id)
  console.log(getIdData);
  // const tokens = getCookie("access_token")
  // // console.log(tokens);
  // console.log(id);
  // const adminById = await fetch(`${baseUrl}/getById/${id}`, {
  //   method: 'GET',
  //   headers: { Authorization: `Bearer ${tokens}` },
  // })
  // const adminData = await adminById.json()
  // const data = adminData.data.user;
  // console.log(data);
  // return ( 
  //   <Fragment>
   
  //   </Fragment>
  // )
  
}

const ShowAdminData = (props) => {
  const posts = props.data;
  console.log(posts.user);
  if (!posts.user || posts.user.length == 0) {
    return (
      <h1>Error</h1>
    )
  }

  return (
    <Fragment>
      <Layout>

        <div className="container">
          <h1>Admin List</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" >ID</th>
                <th scope="col">Firstname</th>
                <th scope="col">Lastname</th>
                <th scope="col">Email</th>
                <th scope="col">option</th>
              </tr>
            </thead>
            {posts.user.map((admin) => (
              <tbody>
                <tr>
                  <td>{admin.id}</td>
                  <td>{admin.firstname}</td>
                  <td>{admin.lastname}</td>
                  <td>{admin.email}</td>
                  <td >
                    <Link href={{
                      pathname : "/blogs/[id]",
                      query : { id : admin.id}
                    }}>
                      <button className={Styles.btnEdit} onClick={() => getIdEditAdmin(admin.id)}  >แก้ไข</button>
                    </Link>
                    <button className={Styles.btnDel} >ลบ</button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          <div className="modal fade" id="modalEdit" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">แก้ไข</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <div className="card-body">
                    <form>
                      <label htmlFor="firstname">Firstname</label>
                      <input
                        className="form-control"
                        type="text"
                        name="firstname"
                        id="firstname"
                      />
                      <label htmlFor="lastname"> Lastname </label>
                      <input
                        className="form-control"
                        type="text"
                        name="lastname"
                        id="lastname"
                      />
                      <label htmlFor="email">Email</label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="email"
                      />
                      <label htmlFor="password"> Password </label>
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        id="password"
                      />
                    </form>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">ยกเลิก</button>
                  <button type="button" className="btn btn-primary" onClick={() => onSubmitEdit()}>บันทึก</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const data = await adminService.getAdminAll()
  console.log(data)
  return {
    props: { data: data.data }
  };
};

export default ShowAdminData;