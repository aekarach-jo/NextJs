import axios from "axios";
import Layout from "components/Layout/Layout";
import { getCookie } from "cookies-next";
import getConfig from "next/config";
import { useRouter } from "next/router";
import { adminService } from "services";
const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;

const Post = ({ adminData }) => {
  const admin = adminData.user
  console.log(admin)
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <h1>Post page</h1>
      <div className="container w-25" >
        <form>
          <label htmlFor="firstname">Firstname</label>
          <input
            className="form-control"
            type="text"
            name="firstname"
            id="firstname"
            value={admin.firstname}
          />
          <label htmlFor="lastname"> Lastname </label>
          <input
            className="form-control"
            type="text"
            name="lastname"
            id="lastname"
            value={admin.lastname}
          />
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            value={admin.email}
          />
          <label htmlFor="password"> Password </label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
          />
          <div className="row mt-3">
            <div className="col">
              <button type="button" className="btn btn-secondary d-block mx-auto" data-bs-dismiss="modal">ยกเลิก</button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-primary d-block mx-auto" onClick={() => onSubmitEdit()}>บันทึก</button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const cookie = context.req.headers.cookie
  const param = context.params.id
  const t = cookie.split(";", 1)
  const token = t[0].split("access_token=")
  console.log(token[1]);
  const adminData = await adminService.getAdminById(param,token[1])
  // const adminData = await adminById.json()
  console.log(adminData);
  return {
    props: { adminData: adminData.data, }
  }
}

// export async function getStaticProps(params) {
//   console.log(params);
//   const getIdData = await adminService.getAdminById(params)
//   console.log(getIdData);
//   return {
//     props: { adminData: adminData.data, }
//   }
// }

// export async function getStaticPaths() {
//   const data = await adminService.getAdminAll()
//   console.log(data)
//   return {
//     path: [
//       { params: data.data }
//     ],
//     fallback: true
//   };
// };


// export async function getServerSideProps(context) {
//   // console.log("------------------------",context.req.headers.cookie);
//   const cookie = context.req.headers.cookie
//   const param = context.params.id
//   const t = cookie.split(";", 1)
//   const token = t[0].split("access_token=")
//   const adminById = await fetch(`${baseUrl}/getById/${param}`, {
//     method: 'GET',
//     headers: { Authorization: `Bearer ${token[1]}` },
//   })
//   const adminData = await adminById.json()
//   return {
//     props: { adminData: adminData.data, }
//   }
// }

