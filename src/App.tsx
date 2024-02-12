import React from "react";
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";

export default function App () {
  return (
    <>
      <Router>
        <div>
          <Routes >
            <Route path="/" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes >
        </div>
      </Router >
    </>
  );
}

