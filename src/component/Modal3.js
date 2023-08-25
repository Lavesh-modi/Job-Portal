import Modal from "react-modal";
import React, { useState } from "react";
import Axios from "axios";

export default function Modal3({ creatingapi, setCreatingapi }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    // setUpdater(toggleModal)
    // console.log("the name is");

    const Name = e.target.Name.value;
    // console.log(">>>>", Name);
    const Role = e.target.inlineFormCustomSelect.value;
    // console.log("Company Name  :" + Name, "\n", "ROLE  :" + Role);
    // console.log("ggggg", Role);
    const About = e.target.exampleFormControlTextarea1.value;

    const requestData = {
      name: Name,
      Role: Role,
      About: About,
    };
    // setUpdating(requestData)
    console.log("kkkkkkk", requestData);

    Axios.post("http://localhost:5000/api/v1/createCards", requestData)
      .then((response) => {
        // Handle the response here if needed
        console.log("Response:", response.data);
        toggleModal();
        setCreatingapi(response.data);
        // toggleModal();
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });

    console.log(requestData);
  };

  return (
    <div className="App">
      <button onClick={toggleModal} class="btn btn-primary">
        Update
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
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
                onClick={toggleModal}
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
                    onClick={toggleModal}
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
    </div>
  );
}
