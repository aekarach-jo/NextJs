import React, { useState } from "react"
import { adminService } from "services";
import Swal from "sweetalert2";
import Styles from "../../../styles/admin/modaleEdit.module.scss"

const Modal = ({ setOpenModal, adminId }) =>{
  console.log(adminId)
  const admin = adminId
  
  
  const [id,setId] = useState(admin.id)
  const [firstname,setFirstname] = useState(admin.firstname)
  const [lastname,setLastname] = useState(admin.lastname)
  const [email,setEmail] = useState(admin.email)

  const credentials = { id, firstname, lastname }
  const onUpdate = async (e) => {
    e.preventDefault();
    await Swal.fire({
      title: 'ยืนยันการแก้ไข?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'ยืนยัน',
      denyButtonText: `ยกเลิก`,
    }).then((result) => {
      if (result.isConfirmed) {
        adminService.update(credentials, admin.access_token).then(res => {
          Swal.fire({
            position: 'center',
            title: 'สำเร็จ',
            icon: 'success',
            showCloseButton: false,
            timer: 700
          })
        })
      } else if (result.isDenied) { }
    })
  }

  return (
    <div className={Styles.modalBackgound}>
      <div className={Styles.modalContainer}>
        <div className={Styles.titleCloseBtn}>
        </div>
        <div className={Styles.title}>
          <h1>แก้ไขรายละเอียด</h1>
        </div>
        <div className={Styles.body}>
          <div className="container w-100 m-1" >
            <form onSubmit={(e) => onUpdate(e)}>
              <label className={Styles.txt_label} htmlFor="firstname">Firstname</label>
              <input
                className="form-control"
                type="text"
                name="firstname"
                id="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <label className={Styles.txt_label} htmlFor="lastname"> Lastname </label>
              <input
                className="form-control"
                type="text"
                name="lastname"
                id="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              <label className={Styles.txt_label} htmlFor="email">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                value={email}
                readOnly
              />
              <div className={Styles.footer}>
                <button className={Styles.cancelBtn}
                  onClick={() => {
                    setOpenModal(false);
                  }}
                  id="cancelBtn"
                >
                  Cancel
                </button>
                <button className={Styles.confirmBtn}
                  id="confirmBtn"
                  type="submit"
                >
                  Save</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Modal;