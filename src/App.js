// import logo from "./logo.svg";
import "./App.css";
import Axios  from "axios";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import { Routes as Switch, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Jobpage from "./Pages/Jobpage";
import Company from "./Pages/Company";
import SearchFun from "./component/searchFun";
import ProtectedRoutes from "./component/ProtectedRoutes";
import Modal2 from "./component/Modal2";
import Navbar from "./Pages/Navbar";
// import ProtectedRoutes from "./component/ProtectedRoutes";
// import Navbar from "./component/navbar";

function App() {
  return (
    <>
{/* <Navbar>

  
</Navbar> */}
    {/* <Jobpage></Jobpage> */}
    {/* <SearchFun />
    <Switch>
    <Route exact path="/" element={<Login />} />
    
    <Route path="/Company/:comp" element={<Company />} />
    </Switch> */}

      {/* <Company /> */}

     <Switch>
        <Route exact path="/" element={<Login />} />
       

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Jobpage" element={<Jobpage />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/Company/:comp" element={<Company />} />

         
      </Switch>     

      {/* <Modal2/> */}



      {/* <Switch>
   <Route exact path="/" element={<Login />} />
 
  <Route path="/dashboard" element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
  <Route path="/Jobpage" element={<ProtectedRoutes><Jobpage /></ProtectedRoutes>} />
  <Route path="/Company" element={<ProtectedRoutes><Company /></ProtectedRoutes>} />
  <Route path="/Company/:comp" element={<ProtectedRoutes><Company /></ProtectedRoutes>} />

  <Route path="/login" element={<ProtectedRoutes><Dashboard /></ProtectedRoutes> }/>
    */}
{/* // </Switch> */}
    </>
  );
}

export default App;
