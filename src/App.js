// import logo from "./logo.svg";
import "./App.css";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
// import { BrowserRouter as Routes, Switch, Route } from "react-router-dom";
import {
  // BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
} from "react-router-dom";
import Search from "./component/Search";
import Footer from "./component/Footer";
import Card from "./component/Card";


function App() {
  return (
    <>
      
        <Switch>
          <Route exact path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/about" component={About} /> */}
        </Switch>
    
    </>
  );
}

export default App;
