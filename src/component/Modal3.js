import Modal from "react-modal";
import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Modal3({
  issOpen,
  toggleModal3,
  selectCardIdUpdate,
  close,
  updated,
  setUpdated
}) {
  // const [isOpen, setIsOpen] = useState(false);
  const [many, setMany] = useState("");

  console.log("selectcard id  34 ", selectCardIdUpdate);

  useEffect(() => {
    console.log("Calleed useEffects 34");
    Axios.get(`http://localhost:5000/api/v1/getcardsID/${selectCardIdUpdate}`)
      .then((res) => setMany(res.data.data))
      .catch((err) => console.log(err));
      setUpdated(toggleModal3);
  }, [selectCardIdUpdate]);

  //   Axios.get(`http://localhost:5000/api/v1/getcardsID/${ selectCardId}`)
  //   // .then((res) =>{} (res.data.data),
  //   // console.log(res.data.data))
  //   .then((res) => {
  //     console.log(res.data.data); // Log the 'data' property of the response
  //     return res.data.data; // Return the 'data' property if needed
  //   })
  //   .catch((err) => console.log(err));
  // ;
  // console.log("checkeerrrr", state);

  const handlesubmit = (e) => {
    e.preventDefault();
    // setUpdater(toggleModal3)
    // console.log("the name is");
    // console.log(,update)
    // console.log()

    // const Name = e.target.Name.value;
    // // console.log(">>>>", Name);
    // const Role = e.target.inlineFormCustomSelect.value;
    // // console.log("Company Name  :" + Name, "\n", "ROLE  :" + Role);
    // // console.log("ggggg", Role);
    // const About = e.target.exampleFormControlTextarea1.value;

    // const requestData = {
    //   name: Name,
    //   Role: Role,
    //   About: About,
    // };
    // // setUpdating(requestData)
    // // console.log("kkkkkkk", requestData);
    // console.log(selectCardId,"selectcardid")

    // Axios.put(`http://localhost:5000/api/v1/updateCards/${selectCardId}`, requestData)
    //   .then((response) => {
    //     // Handle the response here if needed
    //     console.log("Response:", response.data);
    //     toggleModal3();
    //     setCreatingapi(response.data);
    //     // toggleModal3();
    //   })
    //   .catch((error) => {
    //     // Handle errors here
    //     console.error("Error:", error);
    //   });

    // console.log(requestData);
    // console.log("creatapi which checkkkk",creatingapi())

    // console.log("select id ", selectCardId)
  };

  return (
    <Modal
      isOpen={issOpen}
      onRequestClose={close}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={500}
    >
      {/* <div>My modal dialog.</div> */}
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Job Add
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={toggleModal3}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={handlesubmit}>
            <div class="modal-body">
              <div className="row p-2">
                {/* <div className="col-6"> */}
                <label className="input-label">Name</label>
                <input
                  className=" form-control"
                  name="Name"
                  placeholder="Name"
                ></input>
              </div>
              <div class="form-row align-items-center">
                <div class="col-auto my-1">
                  <label class="mr-sm-2" for="inlineFormCustomSelect">
                    Roles
                  </label>
                  <select
                    class="custom-select mr-sm-2"
                    id="inlineFormCustomSelect"
                  >
                    <option selected>Choose...</option>
                    <option value="Mern Stack">Mern Stack</option>
                    <option value="Bpo">Bpo</option>
                    <option value="Software">Software</option>
                    <option value="Software Analytics">
                      Software Analytics
                    </option>
                    <option value="Web Designer ">Web Designer </option>
                    <option value="President of sale ">
                      President of Sale{" "}
                    </option>
                    <option value="Product Manager ">Product Manager </option>
                  </select>

                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">About</label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="2"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={toggleModal3}
                >
                  Close
                </button>
                <button type="submit" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
    // </div>
  );
}
