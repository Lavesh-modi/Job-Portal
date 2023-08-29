import React, { useState } from "react";
import Modal from "react-modal";

import Axios from "axios";

// import React from "react";

function Modal2({ isOpen, toggleModal2, selectCardId, update, setUpdate ,updateapi,setUpdateapi}) {
  // const [update,setUpdate] = useState("isOpen")

  console.log("selectcard id ",selectCardId)  
  
  const handleDelete = (event) => {
    Axios.delete(`http://localhost:5000/api/v1/deleteCards/${selectCardId}`)
      .then((res) => {
        console.log(res.data);
        setUpdateapi(res.data);
      })

      .catch((error) => console.error(error));

    setUpdate(toggleModal2);
    // console.log("toggleMOdal2",toggleModal2)

    console.log("checkkkkkkkkk", event);

    // console.log("update ", update)
  };

  return (
    <div className="App">
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal2}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title"></h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={toggleModal2}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">
              <p>Are you sure ?</p>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                onClick={toggleModal2}
              >
                No
              </button>
              <button onClick={handleDelete} class="btn btn-danger">
                Yes
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Modal2;
