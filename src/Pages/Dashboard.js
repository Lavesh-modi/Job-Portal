import React from "react";
import { useState, useEffect } from "react";
import { BiUser } from "react-icons/bi";
import Axios from "axios";
import Typewriter from "typewriter-effect";

import { Cookies, useCookies } from "react-cookie";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Data from "../component/Jobpagedata.json";
// import { useHistory } from 'react-router-dom';
import Card from "../component/Card";
import Footer from "../component/Footer";
import useIdle from "../component/useIdle";
// import SearchFun from "./component/searchFun";

export default function Dashboard() {
  const [filterList, setFilterList] = useState([]);
  const [data, setData] = useState([]);

  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  // useEffect(()=>{
  //   console.log("useffect start");

  // })

  // useEffect(()=>{
  //   console.log("useffect start");

  // })

  useEffect(() => {
    const localStorageData = localStorage.getItem("companyData");
    if (localStorageData) {
      setData(JSON.parse(localStorageData));
    } else {
      setData(Data);

      // Data.then((jsonData) => {
      //   setData(jsonData);
      // });
    }
  }, []);
  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    console.log(query, "query");
    if (query) {
      // Create copy of item list
      let updatedList = [...data];

      updatedList = updatedList.filter((item) => {
        return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
      // Trigger render with updated values
      setFilterList(updatedList);
    } else {
      setFilterList([]);
    }
  };

  // var popover = new bootstrap.Popover(document.querySelector('#myButton'), options)

  const navigate = useNavigate();
  function Onlogout() {
    // localStorage.clear("email");
    // localStorage.clear("password");
    // sessionStorage.clear();
    console.log("User got logged out");
    removeCookie("token");
    // cookies.remove("token");
    // Axios.get("http://localhost:5000/api/v1/deleteCookies")

    navigate("/");
  }

  const { isIdle } = useIdle({ onIdle: Onlogout, idleTime: 0.25 });
  return (
    <div className="bg-img  texter">
      <nav className="navbar navbar-expand-lg bg-transparent bg-light.bg-gradient">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            SkillCruise
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              // style=  {{marginRight: spacing + 'em'}}"--bs-scroll-height: 100px;"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/Jobpage"
                >
                  Job
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Company">
                  Companies
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Resume writing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Find Jobs
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Get recruiter's attention
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active">Link</a>
              </li>
            </ul>
            <div>
              {isIdle ? (
                <h1>You were Logged out</h1>
              ) : (
                <h1>You are Still active</h1>
              )}
            </div>

            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
             <button type="button" class="btn btn-info">Register</button>
            </form> */}
            <button type="submit" onClick={Onlogout} class="btn btn-info">
              Logout
            </button>
            {/* <button type="button" class="btn btn-warning">
              Account
            </button> */}

            <button
              type="button"
              class="btn btn-secondary"
              data-bs-container="body"
              data-bs-toggle="popover"
              data-bs-placement="right"
              data-bs-content="Right popover"
            >
              <BiUser />
            </button>
          </div>
        </div>
      </nav>

      {/* <img
        src="https://img.freepik.com/free-vector/business-people-teamwork-suit-clothes_40876-2435.jpg?w=996&t=st=1689764290~exp=1689764890~hmac=c24964dcd6801bcaa69793573651d0e4356cfeea1bad059ed5f0f5035e5540ad"
        class="img-fluid"
        alt="Responsive image"
      /> */}
      {/* <button type="button" className="btn btn-primary">
        <input type="text" class="input" placeholder="Job title, skills" />
        Search
      </button> */}
      {/* <SearchFun /> */}

      {/* <div class="d-flex align-items-center justify-content-center vh-100 flex-column gap-4">
        <form class="d-flex">
          <input
            class="form-control me-1 search-bar "
            type="search"
            placeholder="Search your job "
            onChange={filterBySearch}
            aria-label="Search"
            size="85"
              <div id="item-list">
        <ol>
          {filterList.map((item, index) => (
            <a href={`/"/Company/:comp"/${item.id}`}>
              <li key={index}>{item.name} </li>
            </a>
          ))}
        </ol>
      </div>

            

          />
          <button
            class="btn btn-primary"
            type="submit"
            // onChange={filterBySearch}
            
          >
            Search
          </button>
        </form>
      </div> */}

      {/* 
      <div className="d-flex align-items-center justify-content-center vh-100 flex-column gap-4">
      <form className="d-flex">
        <input
          className="form-control me-1 search-bar"
          type="search"
          placeholder="Search your job"
          onChange={filterBySearch}
          aria-label="Search"
          size="85"
        />
        <button
          className="btn btn-primary"
          type="submit"
        >
          Search
        </button>
      </form>

      <div id="item-list">
        <ol>
          {filterList.map((item, index) => (
            <a key={index} href={`/Company/${item.id}`}>
              <li>{item.name}</li>
            </a>
          ))}
        </ol>
      </div>
    </div> */}


      <div className="typewriter-search">
       <div className="textdash">
        <h3 className="h3-testdash">
          Inspiring{" "}
          <Typewriter
            options={{
              strings: ["Dashboard", "Welcome You"],
              autoStart: true,
              loop: true,
            }}
          />{" "}
          Jobs for the future~!
        </h3>
      </div>

      {/* Normal text only  */}
      <div id="item-list">
        <div className="search-header">
          <div className="search-text">Search:</div>
          <input id="search-box" onChange={filterBySearch} />
          <div id="item-list2">
            <ol className="m-0">
              {filterList.map(
                (item, index) => (
                  {
                    /* <a href={`/"/Company/:comp"/${item.id}`}> */
                  },
                  (
                    <a href={`/Company/${item.name}`}>
                      <li key={index}>{item.name} </li>
                    </a>
                  )
                )
              )}
            </ol>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
