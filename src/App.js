// import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import { Routes as Switch, Route, Link, Routes } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Jobpage from "./Pages/Jobpage";
import Company from "./Pages/Company";
import SearchFun from "./component/searchFun";
import ProtectedRoutes from "./component/ProtectedRoutes";
import Modal2 from "./component/Modal2";
import Navbar from "./Pages/Navbar";
import Pratice from "./Pages/Pratice";
// import ProtectedRoutes from "./component/ProtectedRoutes";
// import Navbar from "./component/navbar";
import Filler from "./component/Filler";
import Registration from "./Pages/Registration";

function App() {
  return (
    <>
      {/* <Registration></Registration> */}

      <Routes>
        {/*       
      {/*2 <Route  path="/" element={<Login />} /> */}
        <Route exact path="/" element={<Login />} />
        <Route exact path="/registration" element={<Registration/>} />

        <Route path="/" element={<ProtectedRoutes />}>
          
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/Company" element={<Company />} />
          <Route path="/Jobpage" element={<Jobpage />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Company/:comp" element={<Company />} />
        </Route>
      </Routes>

      {/* <Pratice></Pratice> */}
      {/* <Navbar>

  
</Navbar> */}
      {/* <Jobpage></Jobpage> */}
      {/* <SearchFun />
    <Switch>
    <Route exact path="/" element={<Login />} />
    
    <Route path="/Company/:comp" element={<Company />} />
    </Switch> */}

      {/* <Company /> */}

      {/* <Switch>
        <Route exact path="/" element={<Login />} />
       

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Jobpage" element={<Jobpage />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/Company/:comp" element={<Company />} />

         
      </Switch>  */}

      {/* <Routes> */}
      {/*             
      {/* 2 <Route  path="/" element={<Login />} /> */}
      {/* <Route exact path="/" element={<Login />} />

        <Route path="/" element={<ProtectedRoutes />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/Company" element={<Company />} />
          <Route path="/Jobpage" element={<Jobpage />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Company/:comp" element={<Company />} />
        </Route> 2 */}
      {/* <Route
          path="/Jobpage"
          element={
            <ProtectedRoutes>
              <Jobpage />
            </ProtectedRoutes>
          }
        /> */}
      {/* <Route
          path="/Company"
          element={
            <ProtectedRoutes>
              <Company />
            </ProtectedRoutes>
          }
        /> */}
      {/* <Route
          path="/Company/:comp"
          element={
            <ProtectedRoutes>
              <Company />
            </ProtectedRoutes>
          }
        /> */}

      {/* <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/Jobpage" element={<Jobpage />} />
       <Route path="/Company" element={<Company />} />
       <Route path="/Company/:comp" element={<Company />}/>
       <Route path = "**"  element= {<h3>Not found 404 </h3>}/> */}
      {/* </Routes>   */}

      {/* <Modal2/> */}

      {/* <Switch>
   <Route exact path="/" element={<Login />} />
 
  <Route path="/dashboard" element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
  <Route path="/Jobpage" element={<ProtectedRoutes><Jobpage /></ProtectedRoutes>} />
  <Route path="/Company" element={<ProtectedRoutes><Company /></ProtectedRoutes>} />
  <Route path="/Company/:comp" element={<ProtectedRoutes><Company /></ProtectedRoutes>} />

  <Route path="/login" element={<ProtectedRoutes><Dashboard /></ProtectedRoutes> }/>
    
 </Switch>  */}
    </>
  );
}

export default App;
