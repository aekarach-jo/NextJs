import React from "react"
import Styles from "../../../styles/admin/modaleEdit.module.scss"
function Modal({ data , setOpenModal }) {

    console.log(data);
    console.log('openModal',setOpenModal);
    return (
        <div className={Styles.modalBackgound}>
          <div className={Styles.modalContainer}>
            <div className={Styles.titleCloseBtn}>
              <button className={Styles.Button}
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                X
              </button>
            </div>
            <div className={Styles.title}>
              <h1>Are You Sure You Want to Continue?</h1>
            </div>
            <div className={Styles.body}>
              <p>The next page looks amazing. Hope you want to go there!</p>
            </div>
            <div className={Styles.footer}>
              <button className={Styles.cancelBtn}
                onClick={() => { 
                  setOpenModal(false);
                }}
                id="cancelBtn"
              >
                Cancel
              </button>
              <button>Continue</button>
            </div>
          </div>
        </div>
      );
}

export default Modal;