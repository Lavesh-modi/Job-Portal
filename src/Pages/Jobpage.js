import React, { useState, Link, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CiEdit } from "react-icons/ci";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";
import Axios from "axios";
import {
  faLocationCrosshairs,
  faPenNib,
  faWallet,
  faSuitcaseRolling,
} from "@fortawesome/free-solid-svg-icons";
import Data from "../component/Jobpagedata.json";
import Nodal from "../component/Nodal";
import Modal2 from "../component/Modal2";
import Modal3 from "../component/Modal3";
// import Footer from "../component/Footer";

export default function Jobpage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectCardId, setSelectCardId] = useState();
  const [update, setUpdate] = useState("isOpen");
  const [creatingapi, setCreatingapi] = useState("");
  const [selectCardIdUpdate, setSelectCardIdUpdate] = useState();
  const [issOpen, setIssOpen] = useState(false);
  // const [updated, setUpdated] = useState("isOpen");

  const [updateapi, setUpdateapi] = useState();
  const [updatedapi, setUpdatedapi] = useState();

  function toggleModal2(buttonid) {
    setSelectCardId(buttonid);
    setIsOpen(!isOpen);
  }

  // function openButton(buttonid) {
  //   setSelectCardIdUpdate(buttonid);
  //   setIssOpen(true);
  // }

  // function close() {
  //   setIssOpen(false);
  // }

  console.log(creatingapi, "?????????????");
  Data = Data.slice(0, 10);

  const [bdata, setBdata] = useState([]);

  console.log("targer creatingapi", creatingapi);

  useEffect(() => {
    console.log("Calleed useEffects for all cards");
    Axios.get("http://localhost:5000/api/v1/getcards")
      .then((res) => setBdata(res.data.data))
      .catch((err) => console.log(err));
    console.log("all cards ");
    console.log("updateapi", updateapi);
    console.log("updater", creatingapi);
  }, [updateapi, creatingapi, updatedapi]);
  console.log(bdata, "bdata");

  // console.log(creatingapi,"checking creatapi")
  // console.log(res.bdata);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [PostsPerPage, setPostPage] = useState(8);
  const [renderData, setRenderData] = useState(Data);
  // const lastPostIndex = currentPage * PostsPerPage;
  // const firstPostIndex = lastPostIndex - PostsPerPage;

  function openButton(buttonid) {
    setSelectCardIdUpdate(buttonid);
    setIssOpen(true);
  }

  function close() {
    setIssOpen(false);
  }

  const myFunction = (a, b) => {
    const re = Data.slice(a, b);
    return re; // slice is used for the starting and end were we can seperate it we can we directly cut and use
  };

  const pageChange = (page) => {
    const first = (page - 1) * 10;
    const second = first + 10;
    const res = myFunction(first, second);
    setRenderData(res);
  }; // pagiantion

  const navigate = useNavigate();
  const CompanyPage = (name) => {
    console.log(name);
    // const navigate = useNavigate();
    navigate(`/Company/${name}`);
  }; //navigation purpose

  return (
    <div>
      {/* <Navbar></Navbar> */}

      <div className="nobg">
        <Navbar></Navbar>
        {/* <div className="row"> */}

        {/* <img src="https://img.freepik.com/premium-vector/business-people-using-face-mask-searching-work-illustration-design_24877-64136.jpg"  className="img1" ></img> */}
        {/* <h1 className=" text"> JOB PAGE</h1>
         */}
        <div className="typename">
          <Typewriter
            options={{
              strings: ["Job  Page", "Welcome You"],
              autoStart: true,
              loop: true,
            }}
            
          />
          {/* <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Job  page")
                // .pauseFor(60)
                .deleteAll()
                .typeString("Welcomes You")
                .start();
            }} */}
          
        </div>

        <Nodal creatingapi={creatingapi} setCreatingapi={setCreatingapi} />
      </div>
      <br></br>
      <div className="container">
        <div className="row">
          {bdata.map((obj) => {
            return (
              console.log(obj, "checking the obj "),
              (
                <div className="col-md-6 col-lg-6  col-xl-4 ">
                  <div className="card bg-dark text-white mb-4 ">
                    <button
                      onClick={() => toggleModal2(obj._id)}
                      class="btn-close btn-close-white cross  "
                      // aria-label="Close"
                      style={{
                        padding: "5px",
                        border: "2px solid rgb(98, 56, 56)",
                        borderRadius: "2px",
                        marginTop: "2px",
                        marginLeft: "3px",
                      }}
                    ></button>

                    {isOpen && (
                      <Modal2
                        isOpen={isOpen}
                        selectCardId={selectCardId}
                        toggleModal2={toggleModal2}
                        update={update}
                        setUpdate={setUpdate}
                        updateapi={updateapi}
                        setUpdateapi={setUpdateapi}
                      ></Modal2>
                    )}

                    <div className="card-body">
                      <div className="card-teximgg">
                        <div className="card-imgg">
                          <img
                            src="https://media.istockphoto.com/id/610003972/vector/vector-businessman-black-silhouette-isolated.jpg?s=612x612&w=0&k=20&c=Iu6j0zFZBkswfq8VLVW8XmTLLxTLM63bfvI6uXdkacM="
                            className="logo"
                            alt="Logo "
                          ></img>
                        </div>

                        <div className="texted">
                          <div className="role">{obj.Role}</div>

                          <div className="card-title "> {obj.name}</div>

                          <div className="iconstyle">
                            <div>
                              <FontAwesomeIcon icon={faSuitcaseRolling} />
                              <span>{"  5+year"}</span>
                            </div>
                            <div>
                              <FontAwesomeIcon icon={faLocationCrosshairs} />
                              <span>
                                {obj.icon2}
                                {" Mumbai"}
                              </span>
                            </div>
                            <div>
                              <FontAwesomeIcon icon={faWallet} />
                              <span>
                                {obj.icon3}
                                {" As per..."}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="buttonpara">
                        <div className="lastdate">Apply Before the 27</div>
                        <button
                          type="submit"
                          className="btn btn-success"
                          onClick={() => CompanyPage(obj._id)}

                          // call back function
                        >
                          Apply
                        </button>
                      </div>

                      {/* button work */}
                      {/* <button
                        onClick={() => openButton(obj._id)}
                        class="btn btn-light"
                      >
                        <CiEdit />
                      </button> */}

                      {issOpen && (
                        <Modal3
                          openButton={openButton}
                          issOpen={issOpen}
                          selectCardIdUpdate={selectCardIdUpdate}
                          close={close}
                          updatedapi={updatedapi}
                          setUpdatedapi={setUpdatedapi}
                        ></Modal3>
                      )}
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>

      {/* /navigation */}
      {bdata > 10 && (
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li class="page-item" onClick={() => pageChange(1)}>
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item" onClick={() => pageChange(2)}>
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" onClick={() => pageChange(3)}>
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
          {/* <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div className="row p-2">
        <div className="col-6">
          <label className="input-label">Name</label>
          <input className=" form-control" placeholder="Name"  ></input>
          </div>
          <div className="col-6">
          <label className="input-label">Name</label>
          <input className=" form-control" placeholder="Name"  ></input>
          </div>
        </div>
        <div class="form-row align-items-center">
    <div class="col-auto my-1">
      <label class="mr-sm-2" for="inlineFormCustomSelect">Preference</label>
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
    </div>
  </div>
</div> */}
        </nav>
      )}
    </div>
    // </div>
  );
}
