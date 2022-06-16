import React, { Fragment, useEffect, useState } from "react"
import Link from "next/link";
import Styles from "../../../styles/admin/admin.module.scss"
import { adminService } from "services";
import Modal from "../modal/Modal";
import { getCookie } from "cookies-next";
import Progress from "../progress/Progress";


const AdminTable = ({ adminObj }) => {
    const [openModal, setOpenModal] = useState(false);
    const [adminId, setAdminId] = useState(null);
    const posts = adminObj.user;

    useEffect(() => {
        if (openModal) {
            getAdminById()
        }
    }, [openModal])

    const getAdminById = async () => {
        const getAdminData = await adminService.getAdminById(adminId, getCookie("access_token"))
        let adminData = getAdminData.data.user
        setAdminId(adminData)
    }

    return (
        <Fragment>
            <div className="container-fluid">
                <h1>Admin List</h1>
                <table className={Styles.tableStyle}>
                    <thead className={Styles.table_header}>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Firstname</th>
                            <th scope="col">Lastname</th>
                            <th scope="col">Email</th>
                            <th scope="col">option</th>
                        </tr>
                    </thead>
                    <tbody className={Styles.table_body}>
                        {posts.map((admin, index) => (
                            <tr className={Styles.tr_body} key={`${index}`} >
                                <td>{admin.id}</td>
                                <td>{admin.firstname}</td>
                                <td>{admin.lastname}</td>
                                <td>{admin.email}</td>
                                <td className={Styles.group_}>
                                    {/* <Link href={{ pathname: "/blogs/[id]", query: { id: admin.id }, }}> */}
                                    {/* </Link> */}
                                    <button
                                        className={Styles.btn_edit}
                                        onClick={() => {
                                            setOpenModal(true)
                                            setAdminId(admin.id);
                                        }}>แก้ไข</button>
                                    <button className={Styles.btn_del}>ลบ</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {openModal && <Modal setOpenModal={setOpenModal} adminId={adminId} />}
        </Fragment>
    )
}



export default AdminTable;