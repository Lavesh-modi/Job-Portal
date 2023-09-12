// import React from "react";

// function Modal() {
//   return (
//     <div>
//       <button
//         type="button"
//         class="btn btn-primary"
//         data-toggle="modal"
//         data-target="#exampleModal"
//       >
//         Launch demo modal
//       </button>

//       <div
//         class="modal fade"
//         id="exampleModal"
//         tabindex="-1"
//         role="dialog"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div class="modal-dialog" role="document">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h5 class="modal-title" id="exampleModalLabel">
//                 Modal title
//               </h5>
//               <button
//                 type="button"
//                 class="close"
//                 data-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div class="modal-body">
//               <div className="row p-2">
//                 <div className="col-6">
//                   <label className="input-label">Name</label>
//                   <input className=" form-control" placeholder="Name"></input>
//                 </div>
//                 <div className="col-6">
//                   <label className="input-label">Name</label>
//                   <input className=" form-control" placeholder="Name"></input>
//                 </div>
//               </div>
//               <div class="form-row align-items-center">
//                 <div class="col-auto my-1">
//                   <label class="mr-sm-2" for="inlineFormCustomSelect">
//                     Preference
//                   </label>
//                   <select
//                     class="custom-select mr-sm-2"
//                     id="inlineFormCustomSelect"
//                   >
//                     <option selected>Choose...</option>
//                     <option value="1">One</option>
//                     <option value="2">Two</option>
//                     <option value="3">Three</option>
//                   </select>
//                 </div>
//               </div>
//               <div class="modal-footer">
//                 <button
//                   type="button"
//                   class="btn btn-secondary"
//                   data-dismiss="modal"
//                 >
//                   Close
//                 </button>
//                 <button type="button" class="btn btn-primary">
//                   Save changes
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Modal;
// }
import React, { useState } from "react";
import Modal from "react-modal";

import Axios from "axios";
// import Input from "./Input.json";
// import fs from 'fs';

// import { Input } from "react-router-dom";
// import Input from "../component/Input.json";

export default function Nodal({ creatingapi, setCreatingapi }) {
  // const [post , setPost] = useState({
  //   name:"",
  //   Role:"",
  //   About:""
  // });

  // useEffect(() => {
  //   Axios.post("http://localhost:5000/api/v1/createCards")
  //     .then((res) => setBdata(res.data.data ))
  //     .catch((err) => console.log(err));
  // }, []);
  // const [stData,setstData] = useState(Name,Role)
  const [isOpen, setIsOpen] = useState(false);
  // const [updater,setUpdater] = useState("!isOpen")

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  // const[updating,setUpdating] = useState("toggleModal")
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
        console.log("Response: for createCards", response.data);
        toggleModal();
        setCreatingapi(response.data)
        // console.log(setCreatingapi(response.data));
        
    // console.log(" setCreatingapi into api ", creatingapi )
        // toggleModal();
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });

    console.log(requestData);

    // setUpdating(requestData)

    // localStorage.setItem("Company Name :", JSON.stringify(Name))
    // localStorage.setItem("Role :", JSON.stringify(Role))
    // const localStorageContent = localStorage.getItem("Company Name :", JSON.stringify(Name),"Role :", JSON.stringify(Role))
    //   let data ;
    //   if (localStorageContent === null){
    //     data = [];

    //   } else{
    //     data = JSON.parse(localStorageContent)
    //   }
    //    data.push(Name)
    //    data.push(Role)

    //   localStorage.setItem("Company Name :", JSON.stringify(Name))
    // localStorage.setItem("Role :", JSON.stringify(Role))

    let localStorageContent = localStorage.getItem("companyData");
    let data;
    if (localStorageContent === null) {
      data = [];
    } else {
      data = JSON.parse(localStorageContent);
    }

    // Add new data to the array
    data.push({ name: Name, Role: Role });

    // Save the updated data to local storage
    localStorage.setItem("companyData", JSON.stringify(data));

    // const formObj1 = {
    //   CompanyName: Name,
    //   Role: Role,
    // };
    // let stData = (Name,Role)

    // console.log("Checdata", checkData);
    // const res = new FormData()
    // checkData.append(formObj1);

    // console.log("after", checkData);.
    // const jsonStr = JSON.stringify(formObj1);
    // const blob = new Blob([jsonStr], { type: "application/json" });
    // const url = URL.createObjectURL(blob);
    // const link = document.createElement("a");
    // link.href = url;
    // link.download = "Input.json";
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    // fs.writeFile("./Input.json", JSON.stringify(formObj1), (err) => {
    //   if (err) console.log("Error writing file:", err);
    // });

    // localStorage.setItem("Company Name :", JSON.stringify(Name))
    // localStorage.setItem("Role :", JSON.stringify(Role))
    // const handleSaveToPC = (Name,Input) => {
    // const fileData = JSON.stringify(formObj1);
    // const blob = new Blob([fileData], { type: "text/plain" });
    // const url = URL.createObjectURL(blob);
    // const link = document.createElement("a");
    // link.download = `${"check"}.json`;
    // link.href = url;
    // link.click();
  };

  return (
    <div className="App">
      <button onClick={toggleModal} class="btn btn-success">
        Add card
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
                    placeholder="Company name"
                  ></input>
             
                </div>


                <div className="row p-1">
                 
                 <label className="input-label">Email</label>
                 <input
                   className=" form-control"
                   name="EmailC"
                   placeholder="Company@mail.com"
                 ></input>
                 </div>
                 <br></br>
            
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
                    <br></br>

                    <label >Location :-</label>
                    <br></br>
                    <label>On-Site </label>
                    <input
                    name="Location"
                    type="checkbox"
                    id="isVisible"
                    >

                    </input>
                    <br></br>
                     <label> Remote </label>
                    <input
                    name="Location"
                    type="checkbox"
                    id="isVisible"
                    >

                    </input>
                    <br></br>
                     <label>Hybrid </label>
                    <input
                    name="Location"
                    type="checkbox"
                    id="isVisible"
                    >

                    </input>
                    <br></br>

                    <input type="file" id="myFile" name="myFile"/>
  {/* <input type="submit"/> */}
                    
                   
                </div>

                    {/* <div class="input-group input-group-lg">
  <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
</div>*/}
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
        {/* <button onClick={toggleModal} className="btn btn-success" >Close modal</button> */}
      </Modal>
    </div>
  );
}
