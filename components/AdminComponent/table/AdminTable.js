import React, { Fragment, useState } from "react"
import Link from "next/link";
import Styles from "../../../styles/admin/admin.module.scss"
import { adminService } from "services";
import Modal from "../modal/Modal";


const AdminTable = ({ adminObj }) => {
    const [openModal, setOpenModal] = useState(false);
    console.log(adminObj);
    const posts = adminObj;

    return (
        <Fragment>
            {openModal && <Modal data={posts} setOpenModal={setOpenModal} />}
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
                        {posts.user.map((admin, index) => (
                            <tr className={Styles.tr_body} key={`${index}`} >
                                <td>{admin.id}</td>
                                <td>{admin.firstname}</td>
                                <td>{admin.lastname}</td>
                                <td>{admin.email}</td>
                                <td className={Styles.group_}>
                                    <Link href={{
                                        pathname: "/blogs/[id]",
                                        query: { id: admin.id },
                                    }}>
                                        <button className={Styles.btn_edit}>แก้ไข</button>
                                    </Link>
                                    <button className={Styles.btn_del}>ลบ</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button
                    className="btn btn-success openModalBtn"
                    onClick={() => {
                        setOpenModal(true);
                    }}
                >Modal</button>
            </div>
        </Fragment>
    )
}



export default AdminTable;