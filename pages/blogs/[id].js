import Layout from "components/Layout/Layout";
import { useState } from "react";
import { adminService } from "services";
import Swal from "sweetalert2";



const onUpdate = ({ adminData }) => {
  const admin = adminData.user
  // console.log(admin)
  
  
  const [id,setId] = useState(admin.id)
  const [firstname,setFirstname] = useState(admin.firstname)
  const [lastname,setLastname] = useState(admin.lastname)

  const credentials = {id, firstname, lastname}

  const onUpdate = async (e) => {
    e.preventDefault();
    console.log(credentials);
    await Swal.fire({
      title: 'ยืนยันการแก้ไข?', firstname,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'ยืนยัน',
      denyButtonText: `ยกเลิก`,
  }).then((result) => {
      if (result.isConfirmed) {
          adminService.update(credentials, admin.access_token).then(res => {
            Swal.fire({
              position : 'center',
              title: 'สำเร็จ',
              icon: 'success',
              showCloseButton: false,
              timer : 700
            })
          })
      } else if (result.isDenied) { }
  })
  }

  return (
    <Layout>
      <div className="container w-50 mt-5" >
        <h1>แก้ไขรายละเอียด</h1>
        <form onSubmit={(e) => onUpdate(e)}>
          <label htmlFor="firstname">Firstname</label>
          <input
            className="form-control"
            type="text"
            name="firstname"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <label htmlFor="lastname"> Lastname </label>
          <input
            className="form-control"
            type="text"
            name="lastname"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            value={admin.email}
            readOnly
          />
          <div className="row mt-3">
            <div className="col">
              <button type="button" className="btn btn-secondary d-block mx-auto" data-bs-dismiss="modal">ยกเลิก</button>
            </div>
            <div className="col">
              <button type="submit" className="btn btn-primary d-block mx-auto" >บันทึก</button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default onUpdate;


export async function getServerSideProps(context) {
  const cookie = context.req.headers.cookie
  const param = context.params.id
  const t = cookie.split(";", 1)
  const token = t[0].split("access_token=")
  console.log(token[1]);
  const adminData = await adminService.getAdminById(param, token[1])
  // const adminData = await adminById.json()
  // console.log(adminData);
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

